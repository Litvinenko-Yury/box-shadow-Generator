/*custom-range.js*/
/*created by Yuri Litvinenko  https://litvinenko-yury.pro/*/

function customRange() {

  /*проверка на IE - (трюк: он не использует append)*/
  const div = document.createElement('div');
  try {
    !!document.body.append(div); // приводим результат к булевому типу (true или false) с помощью приёма двойного отрицания
  } catch (error) {
    document.querySelector('.modal').style.display = 'block';
    document.querySelector('.page-main').style.display = 'none';
    return;
  }
  /*****/

  const rangeAll = document.querySelectorAll('[data-range]');

  rangeAll.forEach(item => {
    /*добавляем разметку для визуализации трека и ползунка*/
    item.insertAdjacentHTML('beforeend', '<div class="range__wrapper"><div class="range__wrap-inner"><div class="range__track"></div><div class="range__progress"></div></div><div class="range__handle"></div></div>');
    /*добавляем разметку отображения значения value*/
    item.insertAdjacentHTML('beforeend', '<div class="range__value">');

    /*================*/
    const rangeInput = item.querySelector(".range__input"),
      rangeInputMin = rangeInput.min,
      rangeInputMax = rangeInput.max,
      rangeMinMax = rangeInputMax - rangeInputMin; // это значение нужно, что бы корректно вычислять ширину progress и положение handle при input min отличном от 0.


    const rangeProgress = item.querySelector(".range__progress"),
      rangeHandle = item.querySelector(".range__handle"),
      output = item.querySelector('.range__value');

    output.innerHTML = rangeInput.value; //вывоим начальное значение value

    const widthRange = item.querySelector('.range__wrap-inner').offsetWidth; //узнать ширину range
    const widthHandle = item.querySelector('.range__handle').offsetWidth; // узнать ширину .range__handle

    rangeInput.style.opacity = '0'; // задать стандартному input "opacity: 0;"

    rangeProgress.style.width = ((rangeInput.value - rangeInputMin) / rangeMinMax) * widthRange + 'px'; // установить начальную ширину progress

    rangeHandle.style.left = (widthRange - (((rangeInput.value - rangeInputMin) / rangeMinMax) * widthRange) - (widthHandle / 2)) + 'px'; // установить начальную точку handle

    // Изменить ширину .range__progress и координату handle (каждый раз когда двигаем ползунок)  oninput/onchange
    rangeInput.oninput = function () {
      output.innerHTML = this.value;
      rangeProgress.style.width = (1 - ((this.value - rangeInputMin) / rangeMinMax)) * widthRange + 'px'; //установить ширину rangeProgress
      rangeHandle.style.left = (((this.value - rangeInputMin) / rangeMinMax) * widthRange - (widthHandle / 2)) + 'px'; //установить left для  rangeHandle
    };
  });
}

export default customRange;

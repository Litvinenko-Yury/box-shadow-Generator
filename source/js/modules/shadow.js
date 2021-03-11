/*created by Yuri Litvinenko  https://litvinenko-yury.pro/*/

function setShadow() {
  const optionsAll = document.querySelectorAll('[data-options]'),
    prev = document.querySelector('.preview');

  const options = {}; // объект с параметрами тени
  const colorRgbaShadow = {};// объект с цветом тени
  const colorRgbaPrev = {};// объект с цветом .prev


  console.log(colorRgbaShadow);

  setStartColorRgbaShadow(); // заполнить colorRgbaShadow значениями по умолчанию
  setStartOptions(); //заполнить options значениями по умолчанию
  setBoxShadow(); // функция задает стили тени
  setCustomOptions(); // функция навешивает обработчики на input's


  /***Functions***/
  /*============*/

  /*конвертация HEX в RGB*/
  function convertColor(color) {
    if (color.substring(0, 1) == '#') { //Удалить # в значении hex-цвета
      color = color.substring(1);
    }

    colorRgbaShadow.r = parseInt(color.substring(0, 2), 16); // декодирование
    colorRgbaShadow.g = parseInt(color.substring(2, 4), 16); // декодирование
    colorRgbaShadow.b = parseInt(color.substring(4), 16); // декодирование
  }

  /*заполнить colorRgbaShadow значениями по умолчанию*/
  function setStartColorRgbaShadow() {
    optionsAll.forEach(item => {
      if (item.getAttribute('data-options') == 'shadow-color') {
        convertColor(item.value);
      }

      if (item.getAttribute('data-options') == 'opacity') {
        colorRgbaShadow.opacity = +item.value;
      }
    });
  }

  /*заполнить options значениями по умолчанию*/
  function setStartOptions() {
    optionsAll.forEach(item => {
      if (item.getAttribute('data-options') == 'offsetX') {
        options.offsetX = +item.value;
      }

      if (item.getAttribute('data-options') == 'offsetY') {
        options.offsetY = +item.value;
      }

      if (item.getAttribute('data-options') == 'blur') {
        options.blur = +item.value;
      }

      if (item.getAttribute('data-options') == 'spread') {
        options.spread = +item.value;
      }

      if (item.getAttribute('data-options') == 'opacity') {
        options.opacity = +item.value;
      }

      if (item.getAttribute('data-options') == 'opacity') {
        options.opacity = +item.value;
      }

      if (item.getAttribute('data-options') == 'shadow-color') {
        options.shadowColor = item.value;
      }

      if (item.getAttribute('data-options') == 'prev-bg-color') {
        options.prevBgColor = item.value;
      }
    });

  }

  //задание стилей тени
  function setBoxShadow() {
    prev.style.boxShadow = `${options.offsetX}px ${options.offsetY}px ${options.blur}px ${options.spread}px ${options.shadowColor} ${options.opacity}`;
  }

  /*задание обработчиков*/
  function setCustomOptions() {
    optionsAll.forEach(item => {
      if (item.getAttribute('data-options') == 'offsetX') {
        item.addEventListener('input', () => {
          options.offsetX = +item.value;
          setBoxShadow();
        });
      }

      if (item.getAttribute('data-options') == 'offsetY') {
        item.addEventListener('input', () => {
          options.offsetY = +item.value;
          setBoxShadow();
        });
      }

      if (item.getAttribute('data-options') == 'blur') {
        item.addEventListener('input', () => {
          options.blur = +item.value;
          setBoxShadow();
        });
      }

      if (item.getAttribute('data-options') == 'spread') {
        console.log(`spread`);
        item.addEventListener('input', () => {
          options.spread = +item.value;
          setBoxShadow();
        });
      }

      if (item.getAttribute('data-options') == 'opacity') {
        console.log(`opacity`);
        item.addEventListener('input', () => {
          options.opacity = +item.value;
          setBoxShadow();
        });
      }
    });
  }
}

export default setShadow;

/*created by Yuri Litvinenko  https://litvinenko-yury.pro/*/

function setShadow() {
  const optionsAll = document.querySelectorAll('[data-options]'),
    prev = document.querySelector('.preview');

  const options = {}; // объект с параметрами тени

  setStartOptions();
  setBoxShadow();
  setCustomOptions();






  /***Functions***/

  //задание стилей тени
  function setBoxShadow() {
    prev.style.boxShadow = `${options.offsetX}px ${options.offsetY}px ${options.blur}px ${options.spread}px ${options.shadowColor}`;
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

      if (item.getAttribute('data-options') == 'shadow-color') {
        options.shadowColor = item.value;
      }

      if (item.getAttribute('data-options') == 'prev-bg-color') {
        options.prevBgColor = item.value;
      }
    });

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
    });
  }

}

export default setShadow;

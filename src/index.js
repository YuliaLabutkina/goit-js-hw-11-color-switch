import './styles.css';
import colors from './js/array-colors';
import refs from './js/refs';


  class ChangeBodyColor {
    constructor() {
      this.color = null;
    }

    randomIntegerFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };


    startChooseBackground = () => {
      refs.buttonStopRef.removeAttribute('disabled', '');
      refs.buttonStartRef.setAttribute('disabled', '');
      this.color = setInterval(() => {
        refs.bodyRef.setAttribute('style', `background-color: ${colors[this.randomIntegerFromInterval(0, colors.length - 1)]};`)
      }, 1000);
    };

    stopChooseBackground = () => {
      clearInterval(this.color);
      refs.buttonStartRef.removeAttribute('disabled');
      refs.buttonStopRef.setAttribute('disabled', '');
    };

  }

  const changeColor = new ChangeBodyColor();

  refs.buttonStartRef.addEventListener('click', changeColor.startChooseBackground);
  refs.buttonStopRef.addEventListener('click', changeColor.stopChooseBackground);


  // let color = null;

  // const randomIntegerFromInterval = (min, max) => {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // };

  // const startChooseBackground = () => {
  //   refs.buttonStopRef.removeAttribute('disabled');
  //   refs.buttonStartRef.setAttribute('disabled', '');
  //   color = setInterval(() => {
  //     refs.bodyRef.setAttribute('style', `background-color: ${colors[randomIntegerFromInterval(0, colors.length - 1)]};`)
  //   }, 1000);
  // };

  // const stopChooseBackground = () => {
  //   clearInterval(color);
  //   refs.buttonStartRef.removeAttribute('disabled');
  //   refs.buttonStopRef.setAttribute('disabled', '');
  // };


  // refs.buttonStartRef.addEventListener('click', startChooseBackground);
  // refs.buttonStopRef.addEventListener('click', stopChooseBackground);

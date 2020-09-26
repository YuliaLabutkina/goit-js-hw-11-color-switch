import './styles.css';


const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];


  const bodyRef = document.querySelector('body');
  const buttonStartRef = document.querySelector('button[data-action="start"]');
  const buttonStopRef = document.querySelector('button[data-action="stop"]');
  let color = null;


  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const startChooseBackground = () => {
    buttonStartRef.setAttribute('disabled', 'disabled');
    color = setInterval(() => {
        bodyRef.setAttribute('style', `background-color: ${colors[randomIntegerFromInterval(0, colors.length - 1)]};`)
    }, 1000);
  };

  const stopChooseBackground = () => {
    clearInterval(color);
    buttonStartRef.removeAttribute('disabled');
  };


  buttonStartRef.addEventListener('click', startChooseBackground);
  buttonStopRef.addEventListener('click', stopChooseBackground);

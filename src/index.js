import './styles.css';


const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548', '#CD5C5C', '#B22222', '#FFC0CB', '#FF1493', '#228B22', '#DB7093', '#FF6347'];


  const bodyRef = document.querySelector('body');
  const buttonStartRef = document.querySelector('button[data-action="start"]');
  const buttonStopRef = document.querySelector('button[data-action="stop"]');
  let color = null;
  buttonStopRef.setAttribute('disabled', 'disabled');



  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const startChooseBackground = () => {
    buttonStopRef.removeAttribute('disabled', 'disabled');
    buttonStartRef.setAttribute('disabled', 'disabled');
    color = setInterval(() => {
        bodyRef.setAttribute('style', `background-color: ${colors[randomIntegerFromInterval(0, colors.length - 1)]};`)
    }, 1000);
  };

  const stopChooseBackground = () => {
    clearInterval(color);
    buttonStartRef.removeAttribute('disabled');
    buttonStopRef.setAttribute('disabled', 'disabled');
  };


  buttonStartRef.addEventListener('click', startChooseBackground);
  buttonStopRef.addEventListener('click', stopChooseBackground);

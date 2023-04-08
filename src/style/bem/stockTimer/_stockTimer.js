export function stockTimer() {
  setTimeout(showStockTimer, 3000);

  function showStockTimer() {
    const stockTimer = document.querySelector('.stockTimer');
    const body = document.querySelector('body');
    const allWindow = window;

    stockTimer.classList.remove('hidden');
    body.classList.add('stopScrolling');

    allWindow.addEventListener('click', () => {
      stockTimer.classList.add('hidden');
      body.classList.remove('stopScrolling');
    })
  }

  document.addEventListener('DOMContentLoaded', () => {
    const newYear = new Date('Sep 1 2023 00:00:00');

    const daysVal = document.querySelector('.stockTimer__days .stockTimer__val');
    const hoursVal = document.querySelector('.stockTimer__hours .stockTimer__val');
    const minutesVal = document.querySelector('.stockTimer__minutes .stockTimer__val');
    const secondsVal = document.querySelector('.stockTimer__seconds .stockTimer__val');

    const daysText = document.querySelector('.stockTimer__days .stockTimer__text');
    const hoursText = document.querySelector('.stockTimer__hours .stockTimer__text');
    const minutesText = document.querySelector('.stockTimer__minutes .stockTimer__text');
    const secondsText = document.querySelector('.stockTimer__seconds .stockTimer__text');

    function declOfNum(number, titles) {
      let cases = [2, 0, 1, 1, 1, 2];
      return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }

    const timeCount = () => {
      let now = new Date();
      let leftUntil = newYear - now;

      let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
      let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
      let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
      let seconds = Math.floor(leftUntil / 1000) % 60;

      daysVal.textContent = days;
      hoursVal.textContent = hours;
      minutesVal.textContent = minutes;
      secondsVal.textContent = seconds;

      daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
      hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
      minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
      secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
    }

    timeCount();
    setInterval(timeCount, 1000);
  });

}
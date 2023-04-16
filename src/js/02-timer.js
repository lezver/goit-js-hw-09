import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  datetime: document.getElementById('datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;

let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose([selectedDates]) {
    if (options.defaultDate > selectedDates) {
      refs.startBtn.disabled = true;

      Notiflix.Notify.failure('Please choose a date in the future');
    }

    refs.startBtn.disabled = false;
  },
};

flatpickr(refs.datetime, options);

const pad = value => {
  return String(value).padStart(2, '0');
};

const convertMs = ms => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);

  const hours = Math.floor((ms % day) / hour);

  const minutes = Math.floor(((ms % day) % hour) / minute);

  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

const clickButtonStart = () => {
  refs.startBtn.disabled = true;
  intervalId = setInterval(() => {
    const deadline = new Date(refs.datetime.value);
    const delta = deadline - new Date();
    const { days, hours, minutes, seconds } = convertMs(delta);
    refs.days.textContent = `${pad(days)}`;
    refs.hours.textContent = `${pad(hours)}`;
    refs.minutes.textContent = `${pad(minutes)}`;
    refs.seconds.textContent = `${pad(seconds)}`;
    if (refs.seconds.textContent === '00') clearInterval(intervalId);
  }, 1000);
};

refs.startBtn.addEventListener('click', clickButtonStart);

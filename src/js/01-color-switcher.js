const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.getElementsByTagName('body')[0],
  timer: 1000,
  intervalId: null,
};

const clickButtonStart = () => {
  if (refs.stopBtn.attributes.disabled === 'disabled') return;

  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;

  refs.intervalId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, refs.timer);
};

const clickButtonStop = () => {
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;

  clearInterval(refs.intervalId);
};

refs.startBtn.addEventListener('click', clickButtonStart);

refs.stopBtn.addEventListener('click', clickButtonStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

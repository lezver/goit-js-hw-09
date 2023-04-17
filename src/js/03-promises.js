import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const [delay, step, amount, button] = form;

const createPromise = (delay, step, amount) => {
  const shouldResolve = Math.random() > 0.3;

  for (let i = 0; i < amount; i += 1) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve(`✅ Fulfilled promise ${1 + i} in ${delay + step * i}ms`);
        } else {
          reject(`❌ Rejected promise ${1 + i} in ${delay + step * i}ms`);
        }
      }, delay + step * i);
    });

    promise.then(result => {
      Notiflix.Notify.success(result);
    });
    promise.catch(error => {
      Notiflix.Notify.failure(error);
    });
  }
};

const checkOfFomr = e => {
  e.preventDefault();

  const delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);

  createPromise(delayValue, stepValue, amountValue);

  form.reset();
};

form.addEventListener('submit', checkOfFomr);

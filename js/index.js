const mail = document.querySelector(".mail-icon");
const openedMail = document.querySelector(".mail-opened-icon");
const emailLink = document.querySelector(".email-link");

const button = document.querySelector(".button");

const work = document.querySelectorAll(".work");
const numWork = work.length;

const openMail = () => {
  emailLink.addEventListener("mouseover", () => {
    mail.classList.add("d-none");
    openedMail.classList.remove("d-none");
  });
  emailLink.addEventListener("mouseout", () => {
    openedMail.classList.add("d-none");
    mail.classList.remove("d-none");
  });
};

function buttonAnimate() {
  button.addEventListener("mouseover", () => {
    button.classList.add("button-hover-on");
    button.classList.remove("button-hover-out");
  });
  button.addEventListener("mouseout", () => {
    button.classList.add("button-hover-on");
    button.classList.remove("button-hover-out");
  });
}

function workAnimate() {
  for (let i = 0; i <= numWork; i++) {
    if (work[i] != undefined) {
      work[i].addEventListener("mouseover", () => {
        work[i].classList.add("work-up");
        work[i].classList.remove("work-down");
      });
      work[i].addEventListener("mouseout", () => {
        work[i].classList.remove("work-up");
        work[i].classList.add("work-down");
      });
    }
  }
}

openMail();
buttonAnimate();
workAnimate();
new WOW().init();

// Модальное окно

const openModal = (triggerSelector, modalDataSelector) => {
  // объявляем функцию открытия модального окна, которая принимает в качестве параметров селекторы кнопки и соответствующего модального окна
  const trigger = document.querySelectorAll(triggerSelector); // ищем кнопку по переданному селектору
  const triggerLength = trigger.length;
  const modal = document.querySelector(modalDataSelector); // ищем модальное окно по переданному селектору
  if (!trigger || !modal) return; // если такая кнопка или модальное окно не найдены, то прекращаем работу функции
  for (let i = 0; i <= triggerLength; i++) {
    if (trigger[i] != undefined) {
      trigger[i].addEventListener("click", (e) => {
        // при клике на кнопку
        e.preventDefault(); // предотвращаем браузерные действия (если кнопка сделана через тег ссылки <a href=""></a>, то отменяется переход по ссылке)
        modal.classList.add("modal_active"); // отображаем модальное окно, добавив ему активный класс
      });
    }
  }
};
openModal(".no_work", '.modal-my[data-modal="one"]'); // Запускаем функцию и передаем селекторы для первого модального окна

const closeModal = () => {
  // объявляем функцию закрытия модального окна
  const modals = document.querySelectorAll(".modal-my"); // ищем все модальные окна
  if (!modals) return; // если их нет, то прекращаем выполнение функции
  modals.forEach((el) => {
    // если есть, то для каждого из них
    el.addEventListener("click", (e) => {
      // при клике
      if (e.target.closest(".modal__close")) {
        // если клик был клик на кнопке закрытия
        el.classList.remove("modal_active"); // то скрываем модальное окно, удаляя активный класс
      }
      if (!e.target.closest(".modal__body")) {
        // если клик был за пределами контентной части модального окна, то есть на затемненную область
        el.classList.remove("modal_active"); // то тоже скрываем модальное окно, удаляя активный класс
      }
    });
  });
};
closeModal(); // вызываем функцию закрытия

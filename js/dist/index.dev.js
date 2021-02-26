"use strict";

var mail = document.querySelector(".mail-icon");
var openedMail = document.querySelector(".mail-opened-icon");
var emailLink = document.querySelector(".email-link");
var button = document.querySelector(".button");
var work = document.querySelectorAll(".work");
var numWork = work.length;

var openMail = function openMail() {
  emailLink.addEventListener("mouseover", function () {
    mail.classList.add("d-none");
    openedMail.classList.remove("d-none");
  });
  emailLink.addEventListener("mouseout", function () {
    openedMail.classList.add("d-none");
    mail.classList.remove("d-none");
  });
};

function buttonAnimate() {
  button.addEventListener("mouseover", function () {
    button.classList.add("button-hover-on");
    button.classList.remove("button-hover-out");
  });
  button.addEventListener("mouseout", function () {
    button.classList.add("button-hover-on");
    button.classList.remove("button-hover-out");
  });
}

function workAnimate() {
  var _loop = function _loop(i) {
    if (work[i] != undefined) {
      work[i].addEventListener("mouseover", function () {
        work[i].classList.add("work-up");
        work[i].classList.remove("work-down");
      });
      work[i].addEventListener("mouseout", function () {
        work[i].classList.remove("work-up");
        work[i].classList.add("work-down");
      });
    }
  };

  for (var i = 0; i <= numWork; i++) {
    _loop(i);
  }
}

openMail();
buttonAnimate();
workAnimate();
new WOW().init(); // Модальное окно

var openModal = function openModal(triggerSelector, modalDataSelector) {
  // объявляем функцию открытия модального окна, которая принимает в качестве параметров селекторы кнопки и соответствующего модального окна
  var trigger = document.querySelector(triggerSelector); // ищем кнопку по переданному селектору

  var modal = document.querySelector(modalDataSelector); // ищем модальное окно по переданному селектору

  if (!trigger || !modal) return; // если такая кнопка или модальное окно не найдены, то прекращаем работу функции

  trigger.addEventListener("click", function (e) {
    // при клике на кнопку
    e.preventDefault(); // предотвращаем браузерные действия (если кнопка сделана через тег ссылки <a href=""></a>, то отменяется переход по ссылке)

    modal.classList.add("modal_active"); // отображаем модальное окно, добавив ему активный класс
  });
};

openModal(".no_work", '.modal[data-modal="one"]'); // Запускаем функцию и передаем селекторы для первого модального окна

var closeModal = function closeModal() {
  // объявляем функцию закрытия модального окна
  var modals = document.querySelectorAll(".modal"); // ищем все модальные окна

  if (!modals) return; // если их нет, то прекращаем выполнение функции

  modals.forEach(function (el) {
    // если есть, то для каждого из них
    el.addEventListener("click", function (e) {
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
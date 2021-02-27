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
  var trigger = document.querySelectorAll(triggerSelector); // ищем кнопку по переданному селектору

  var triggerLength = trigger.length;
  var modal = document.querySelector(modalDataSelector); // ищем модальное окно по переданному селектору

  if (!trigger || !modal) return; // если такая кнопка или модальное окно не найдены, то прекращаем работу функции

  for (var i = 0; i <= triggerLength; i++) {
    if (trigger[i] != undefined) {
      trigger[i].addEventListener("click", function (e) {
        // при клике на кнопку
        e.preventDefault(); // предотвращаем браузерные действия (если кнопка сделана через тег ссылки <a href=""></a>, то отменяется переход по ссылке)

        modal.classList.add("modal_active"); // отображаем модальное окно, добавив ему активный класс
      });
    }
  }
};

openModal(".no_work", '.modal-my[data-modal="one"]'); // Запускаем функцию и передаем селекторы для первого модального окна

var closeModal = function closeModal() {
  // объявляем функцию закрытия модального окна
  var modals = document.querySelectorAll(".modal-my"); // ищем все модальные окна

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

/* 
<div class="container">
  <h2 class="mb-4">Процесс работы над проектом:</h2>
<div class="stages">
  <div class="stage mb-3 pb-4 stage-common">
    <div class="stage-title p-4 common">
      <h3>Общее</h3>
    </div>
    <!-- /.stage-title -->
  <div class="stage-poem px-4 mb-4">
      <p>К 14 января нужен был сайт для запуска рекламы в Инстаграме. Работать над сайтом начал 28 декабря, сделал его к 12 января</p>
    <p>Нужен был «чистый» дизайн, понятный и информативный текст, упор на то, как будет выглядеть сайт на смартфонах</p>
    <p>Помимо дизайна и текста я ещё занимался технической частью сайта: я его сверстал.</p>
    <span>Мой комментарий: </span>
    <p>Это мой первый коммерческий проект)) <br>
    Я смог применить те знания и навыки, которыми владел, чтобы решить задачу клиента. Вдобавок я делал то, чем обычно не     занимаюсь — вёрстку. Хорошо получилось!
    </p>
    </div>
    <!-- /.stage-poem -->
  </div>
  <!-- /.stage -->
  <div class="stage mb-4 pb-4 stage-all">
    <div class="stage-title p-4 all">
      <h3>Текст + дизайн</h3>
    </div>
    <!-- /.stage-title -->
    <div class="stage-poem mt-3 px-4 mb-4">
    <p>В этом проекте я использовал «визуальное повествование» — это когда продукт показывают, а не рассказывают о нём. Вокруг этого приёма и создавался сайт: вместо длинных рассказов о том, как обучают в школе и по какому алгоритму проверяют работы, я сделал следующее:</p>
    <p>Попросил у клиента фотографии, аудио и видео всего, что связано с курсом: как выглядят уроки, инстаграм аккаунт школы, домашние задания, их проверка и сдача. </p>
    <p>В итоге получилось создать такое восприятие курса, что потенциальный покупатель не представляет в голове, как выглядит и что из себя представляет этот курс. Он сразу складывает пазл и уже понимает, что за продукт перед ним. </p>
    <p>А когда покупателю надо меньше тратить времени на анализ информации и он быстро понимает суть продукта — это ценно.</p>
    </div>
    <!-- /.stage-poem -->
  </div>
  <!-- /.stage -->
  <div class="stage mb-4 pb-4 stage-texts">
    <div class="stage-title p-4 texts">
      <h3>Текст</h3>
    </div>
    <!-- /.stage-title -->
    <div class="stage-poem mt-3 px-4 mb-4">
    <p>Целевая аудитория бизнеса клиента — те, кто хотят учить английский язык с нуля: и дети, и взрослые</p>
    <p>Так как за детей, очевидно, будут решать взрослые, то я писал для взрослых на взрослом языке без англицизмов и непонятных им терминов</p>
    <p>Текст получился простой, но информативный: без лишних предложений, без «воды», без «тяжёлой» подачи материала, но со всеми ответами на возможные вопросы покупателя</p>
    </div>
    <!-- /.stage-poem -->
  </div>
  <!-- /.stage -->
  <div class="stage mb-4 pb-4 stage-design">
    <div class="stage-title p-4 designs">
      <h3>Дизайн</h3>
    </div>
    <!-- /.stage-title -->
    <div class="stage-poem mt-3 px-4 mb-4">
    <p>Фирменным цветом клиент выбрала персиковый</p>
    <p>Задача: чтобы дизайн был с персиковым цветом и передавал «мудрую строгость» преподавателей: серьёзное отношение к обучению учеников вместе с заботой, вниманием и поддержкой </p>
    <p>Эти качества я выразил в угловатых элементах дизайна, а персиковый цвет, по сути своей мягкий и тёплый, сделал эти углы мягче</p>
    <p>Клиенту понравилось, как сочетаются строгость и забота в дизайне</p>
    </div>
    <!-- /.stage-poem -->
  </div>
  <!-- /.stage -->
  <a href="index.html#portfolio" class="return p-3">Вернуться на главный сайт</a>
  </div>
<!-- /.stages -->
  
  </section>
  <!-- /.work-process -->
  </div>
  <!-- /.container -->

*/
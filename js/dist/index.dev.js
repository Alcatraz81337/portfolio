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
new WOW().init();
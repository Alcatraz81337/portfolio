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

let hamburger = document.querySelector(".hamburger");
let burgerOpen = document.querySelector(".burger-open");
let burgerClose = document.querySelector(".burger-close");
let dropdown = document.querySelector(".dropdown");
let bookmarkBtn = document.querySelector(".section-1-btn");
let selection = document.querySelector(".selection");
let selectionClose = document.querySelector(".close");
let overlay = document.querySelector(".overlay");
let selectCard = document.querySelectorAll(".selected-card");
let completed = document.querySelector(".completed");
let completeBtn = document.querySelector(".complete-btn");
let progress = document.querySelector(".progress");
let progressValue = document
  .querySelector(".section-2-head")
  .innerText.slice(1)
  .replace(/,/g, "");
let backers = document.querySelector(".backers").innerText.replace(/,/g, "");
let twentyFive = document.querySelector(".twenty-five");
let twentyFiveButton = document.querySelector(".twenty-five-btn");
let seventyFive = document.querySelector(".seventy-five");
let seventyFiveButton = document.querySelector(".seventy-five-btn");
console.log(backers);
// document.querySelector(".section-2-head").innerText.slice(1) = "2";
hamburger.addEventListener("click", () => {
  burgerOpen.classList.toggle("burger-open-active");
  burgerClose.classList.toggle("burger-close-active");
  dropdown.classList.toggle("dropdown-active");
  overlay.classList.toggle("overlay-active");
});
bookmarkBtn.addEventListener("click", () => {
  selection.classList.add("selection-active");
  overlay.classList.add("overlay-active");
});
selectionClose.addEventListener("click", () => {
  selection.classList.toggle("selection-active");
  overlay.classList.remove("overlay-active");
});

/*
click a card
check if borders exist 
if true: remove old borders
add new border
if false: add new border

check if it has pledge-contain
    if true: 
        open plege and focus input
        if false: 
        dont open pledge and dont focus input
        */

selectCard.forEach((each) => {
  each.addEventListener("click", () => {
    if (each.classList.contains("disabled")) {
      return;
    } else {
      borderEdit(each);
      check(each);
    }
  });
});

// to edit borders borders
function borderEdit(each) {
  if (document.querySelector(".selected-card-active")) {
    document
      .querySelector(".selected-card-active")
      .classList.remove("selected-card-active");
    document
      .querySelector(".radio-btn-active")
      .classList.remove("radio-btn-active");
    each.classList.add("selected-card-active");
    each.querySelector(".radio-btn").classList.add("radio-btn-active");
  } else {
    each.classList.add("selected-card-active");
    each.querySelector(".radio-btn").classList.add("radio-btn-active");
  }
}

// to check if pledge exists or not
function check(each) {
  if (document.querySelector(".pledge-contain-active")) {
    document
      .querySelector(".pledge-contain-active")
      .classList.remove("pledge-contain-active");
    checkConfirmed(each);
  } else {
    checkConfirmed(each);
  }
}

function checkConfirmed(each) {
  if (each.querySelector(".pledge-contain")) {
    each
      .querySelector(".pledge-contain")
      .classList.add("pledge-contain-active");
    each.querySelector(".pledge-input").focus();
  } else if (each.querySelector(".pledge-contain-active")) {
    return;
  } else {
    return;
  }
}
twentyFiveButton.addEventListener("click", () => {
  if (twentyFive.value >= 25) {
    selection.classList.remove("selection-active");
    completed.classList.add("completed-open");
    newProgressValue = new Intl.NumberFormat("en-US").format(
      parseInt(progressValue) + parseInt(twentyFive.value)
    );
    totalChecks();
  } else {
    return;
  }
});
seventyFiveButton.addEventListener("click", () => {
  if (seventyFive.value >= 75) {
    selection.classList.remove("selection-active");
    completed.classList.add("completed-open");
    newProgressValue = new Intl.NumberFormat("en-US").format(
      parseInt(progressValue) + parseInt(seventyFive.value)
    );
    totalChecks();
  } else {
    return;
  }
});

completeBtn.addEventListener("click", () => {
  completed.classList.remove("completed-open");
  overlay.classList.remove("overlay-active");
});

console.log(parseInt(progressValue) / 1000);

function totalChecks() {
  progressValueUpdate();
  backersUpdate();
  progressCheck();
}
function progressValueUpdate() {
  document.querySelector(".section-2-head").innerText = `$${newProgressValue}`;
}

function backersUpdate() {
  document.querySelector(".backers").innerText = new Intl.NumberFormat(
    "en-US"
  ).format(parseInt(backers) + 1);
}

function progressCheck() {
  progress.style.width = `${parseInt(newProgressValue)}%`;
}

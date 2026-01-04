/* section1 */
function ShowHambergerMenu() {
  if (
    document
      .getElementById("hambergerbox")
      .classList.contains("menu-header-hamberger")
  ) {
    document
      .getElementById("hambergerbox")
      .classList.remove("menu-header-hamberger");
    document
      .getElementById("hambergerbox")
      .classList.add("menu-header-hambergerCLS");
    document.getElementById("baricon").classList.add("fa-bars");
    document.getElementById("baricon").classList.remove("fa-times");
  } else {
    document
      .getElementById("hambergerbox")
      .classList.add("menu-header-hamberger");
    document
      .getElementById("hambergerbox")
      .classList.remove("menu-header-hambergerCLS");
    document.getElementById("baricon").classList.remove("fa-bars");
    document.getElementById("baricon").classList.add("fa-times");
  }
}

$(document).ready(function () {
  $(document).on("click", function (e) {
    if (e.target.id == "mymenu" || $(e.target).parents("#mymenu").length) {
    } else if (!$(e.target).parents("#mymenu").length) {
      document
        .getElementById("hambergerbox")
        .classList.remove("menu-header-hamberger");
      document
        .getElementById("hambergerbox")
        .classList.add("menu-header-hambergerCLS");
      document.getElementById("baricon").classList.add("fa-bars");
      document.getElementById("baricon").classList.remove("fa-times");
    }
  });
});

/* section1 */

function changebox(obj, obj1) {
  var usercon = document.getElementById(obj);
  var copy = usercon;
  usercon.remove();
  var con = document.getElementById("conboxs");
  var first = con.firstChild.nextSibling.nextSibling;
  first.after(copy);

  document
    .getElementsByClassName("circlecasinoselected")[0]
    .classList.remove("circlecasinoselected");
  obj1.classList.add("circlecasinoselected");
}

// section11
function openticket(obj, obj1, obj3) {
  if (document.getElementById(obj).classList.contains("boxitemshow")) {
    document.getElementById(obj).classList.remove("boxitemshow");
    document.getElementById(obj).classList.add("boxitemshowclose");
    document.getElementById(obj1).src = "./assets/img/add.png";
  } else {
    document.getElementById(obj).classList.add("boxitemshow");
    document.getElementById(obj).classList.remove("boxitemshowclose");
    document.getElementById(obj1).src = "./assets/img/minus-square.png";
  }

  if (
    obj3.getElementsByClassName("boxitem")[0].classList.contains("borderbotm")
  ) {
    obj3.getElementsByClassName("boxitem")[0].classList.remove("borderbotm");
    obj3.getElementsByClassName("boxitem")[0].classList.add("borderselected");
  } else {
    obj3.getElementsByClassName("boxitem")[0].classList.add("borderbotm");
    obj3
      .getElementsByClassName("boxitem")[0]
      .classList.remove("borderselected");
  }
}
// section11

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML =
    '<span class="wrap" style="color: #830AE8 !important" >' +
    this.txt +
    "</span>";

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML =
    ".txt-rotate > .wrap { border-left: 0.08em solid #830AE8 !important }";
  document.body.appendChild(css);
};

// For question

function selectthis(obj) {
  var selectteditem = document.getElementsByClassName("questionbgselected")[0];

  selectteditem.classList.remove("questionbgselected");
  obj.classList.add("questionbgselected");
}

var count = 0;

function nextquestion() {
  var selected = document.getElementsByClassName("questionbgselected")[0];
  selected.classList.remove("questionbgselected");

  ++count;
  if (count === 5) {
    count = 0;
  }
  var items = document.getElementsByClassName("conconquestion");
  items[count].classList.add("questionbgselected");
}

setInterval(nextquestion, 4000);

// for message slider

function ChangeSlider() {
  var items = document.getElementsByClassName("message");
  const node = items[0];
  const clone = node.cloneNode(true);
  items[0].remove();
  document.getElementById("conmessage").appendChild(clone);
  ChangeSliderdown();
}

function ChangeSliderdown() {
  var items = document.getElementsByClassName("myslider");
  const node = items[0];
  const clone = node.cloneNode(true);
  items[0].remove();
  document.getElementById("myslider").appendChild(clone);
}

setInterval(ChangeSlider, 4000);


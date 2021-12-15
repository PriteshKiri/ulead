$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find(".link");
    // Evento
    links.on("click", { el: this.el, multiple: this.multiple }, this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;
    ($this = $(this)), ($next = $this.next());

    $next.slideToggle();
    $this.parent().toggleClass("open");

    if (!e.data.multiple) {
      $el.find(".submenu").not($next).slideUp().parent().removeClass("open");
    }
  };

  var accordion = new Accordion($("#accordion"), false);
});

//Get the button
var mybutton = document.getElementById("myBtn");
var mybutton2 = document.getElementById("myBtn2");
var x = window.matchMedia("(max-width: 576px)");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  myFunction(x);
};

function scrollFunction1() {
  if (
    document.body.scrollTop > 2000 ||
    document.documentElement.scrollTop > 2000
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scrollFunction2() {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    mybutton2.style.display = "block";
  } else {
    mybutton2.style.display = "none";
  }
}

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    scrollFunction2();
  } else {
    scrollFunction1();
  }
}

// Call listener function at run time

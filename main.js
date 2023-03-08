let Textarea = document.getElementById("Textarea");
let count = document.getElementById("count");
let maxlength = Textarea.getAttribute("maxlength");
console.log(maxlength);

$(".box").css("display", "none");
$("#icon").click(function () {
  $(".box").toggle(1000);
});

$(document).ready(function () {
  $(".set > a").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".content").slideUp(200);
      $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
    } else {
      $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
      $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this).siblings(".content").slideDown(200);
    }
  });
});

let countDownDate = new Date("aug 10, 2023 8:37:25").getTime();

let x = setInterval(function () {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("day").innerHTML = days + "d ";
  document.getElementById("h").innerHTML = hours + "h";
  document.getElementById("m").innerHTML = minutes + "m";
  document.getElementById("s").innerHTML = seconds + "s";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

Textarea.oninput = function () {
  count.innerHTML = maxlength - this.value.length;
};

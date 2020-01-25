$(document).ready(function() {
  $('[data-toggle="popover"]').popover();
});

$("#myModal").on("shown.bs.modal", function() {
  $("#myInput").trigger("focus");
});

$("#element").popover("show");

function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

$("a").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    var hash = this.hash;
    var diferencial = 0;

    if (hash == "#contact") {
      diferencial = 80;
    }

    if (hash == "#photo") {
      diferencial = 50;
    }

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - diferencial
      },
      200,
      function() {
        window.location.hash = hash;
      }
    );
  } // End if
});

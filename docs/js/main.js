// Scroll Smooth jQuery
$(".nav-item a").on("click", function(e) {
  if (this.hash !== "") {
    e.preventDefault();

    var hash = this.hash;
    $("html , body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      1200
    );
  }
});

// Slider Behavior
var toggleDivs = $(".toggleDiv");
$('input[type="radio"]').change(function() {
  toggleDivs.fadeOut();
  if ($(this).is(":checked")) {
    var value = $(this).val();
    $("#" + value).fadeIn(parseInt($("#seconds").val()) * 10);
  }
});

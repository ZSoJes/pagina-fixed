    $(document).on('scroll', function () {
  // Aquí deberás escribir la lógica que modificará la barra
  if ($(document).scrollTop() > 30) {
    $(".top-nav").css('opacity', '0.5');
  }else{
    $(".top-nav").css('opacity', '1');
  }
});


$('.t13-af-example .t13-af-button').click(function(){
  if ($('.t13-af-example').hasClass('is-complete')) {
    $('.t13-af-example').removeClass('is-complete');
  }

  $(this).parents('.t13-af-example').toggleClass('is-transitioned');
});

$('.t13-af-example .t13-af-button2').click(function() {
  $(this).parents('.t13-af-example').toggleClass('is-transitioned');
  $(this).parents('.t13-af-example').toggleClass('is-transitioned-2');
});

$('.t13-af-example .t13-af-button3').click(function() {
  $(this).parents('.t13-af-example').toggleClass('is-transitioned-2');
  $(this).parents('.t13-af-example').toggleClass('is-complete');
});

function random(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

$(function() 
{
  //$('.featured').height($('.featured').height() - 116);

  $('.featured button').click(function()
  {
    $('.featured .unvisible').animate({opacity: 1}, 500).removeClass('unvisible');
    $('.featured button').animate({opacity: 0}, 500).hide(500);
  });
});
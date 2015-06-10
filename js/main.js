function random(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

$(function() 
{
  var featuredAnimationTime = 250;

  $('.featured button').click(function()
  {
    $('.featured .unvisible').animate({opacity: 1}, featuredAnimationTime).removeClass('unvisible');
    $('.featured button').animate({opacity: 0}, featuredAnimationTime).hide(featuredAnimationTime);
  });
});
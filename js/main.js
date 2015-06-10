function random(min, max) 
{
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function sendComment()
{
  var lastComment = $('.comments .comment:last');

  $(lastComment).clone().insertAfter(lastComment);

  // это же демка
  // динамический шаблонизатор, скажем
  $('.comments .comment:last img').attr('src', './img/avatars/889422_original.jpg');
  $('.comments .comment:last author').text('Василий Анонимусов');
  $('.comments .comment:last time').text('только что');
  $('.comments .comment:last p').text($('.comments .form textarea').val());
  $('.comments .comment:last .rating').text('0').removeClass('positive, negative');

  $('.comments .form textarea').val('')
}

$(function() 
{
  var featuredAnimationTime = 250;

  $('.featured button').click(function()
  {
    $('.featured .unvisible').animate({opacity: 1}, featuredAnimationTime).removeClass('unvisible');
    $('.featured button').animate({opacity: 0}, featuredAnimationTime).hide(featuredAnimationTime);
  });

  $('.comments .comment .rating').each(function()
  {
    var t = $(this);

    if (t.text().search(/[0-9]/) == 1) // +'−10' == NaN, поэтому проверка не значения
      t.addClass('negative');
    else if (t.text() > 0)
      t.addClass('positive');
  });

  $('.comments .form .send').click(sendComment);

  $('.comments .comment .reply').click(function()
  {
    var text = $(this).parent().find('author').text();

    $('.comments .form textarea').val($(this).parent().find('author').text() + ', ').focus();
  });
});
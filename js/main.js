var featuredSwiper,
    featuredAnimationTime = 250,
    pagination = $('<div class="swiper-pagination"></div>'), // простите
    dropdownMenuSpeedAnimation = 100;

function sendComment()
{
  var lastComment = $('.comments .comment:last');

  $(lastComment).clone().insertAfter(lastComment);

  // это же демка
  // динамический шаблонизатор, скажем (а так handlebars неплох)
  $('.comments .comment:last img').attr('src', './img/avatars/889422_original.jpg');
  $('.comments .comment:last author').text('Василий Анонимусов');
  $('.comments .comment:last time').text('только что');
  $('.comments .comment:last p').text($('.comments .form textarea').val());
  $('.comments .comment:last .rating').text('0').removeClass('positive, negative');

  $('.comments .form textarea').val('')
}

function checkSwiper() // другое имя?
{
  if (window.innerWidth < 1023)
  {
    $('.featured .container').addClass('swiper-wrapper');
    $('.featured .container a').addClass('swiper-slide');

    featuredSwiper = new Swiper('.featured',
    {
      loop: true,
      centeredSlides: true,
      slidesPerView: 2,
      pagination: '.swiper-pagination',
      paginationClickable: true
    });
  }
  else if (featuredSwiper)
  {
    $('.featured .container').removeClass('swiper-wrapper').attr('style', '');
    $('.featured .container a').removeClass('swiper-slide');

    featuredSwiper.destroy(true, true);

    $('.swiper-pagination').remove();
    $('.featured').append(pagination);

    $('.swiper-slide-duplicate').remove();
  }
}

$(function() 
{
  checkSwiper();

  $(window).resize(checkSwiper);

  $('.menu .mobile-container .icon').click(function()
  {
    var d = $('.menu .mobile-container .dropdown');

    if (d.is(':visible'))
      d.slideUp(dropdownMenuSpeedAnimation);
    else
      d.slideDown(dropdownMenuSpeedAnimation);
  });

  $('.article').click(function()
  {
    if ($('.menu .mobile-container .dropdown').is(':visible'))
      $('.menu .mobile-container .dropdown').slideUp(dropdownMenuSpeedAnimation);
  });

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

  $('blockquote .share .share-button').click(function()
  {
    $('blockquote .share a:not(.share-button)').animate({ width: 'toggle' }, 0);
  });
});
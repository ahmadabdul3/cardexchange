$(function() {

  $('.nav-button').on('click', function() {
    var selectedNavItem = $('.selected');
    var category = $(this).children().first().text();
    var selectedPageCategory = $(selectedNavItem).children().first().text();
    $(selectedNavItem).removeClass('selected');
    $(this).addClass('selected');
    $('.' + selectedPageCategory + '-page').hide();
    $('.' + category + '-page').show();
  });

});

console.log('x');

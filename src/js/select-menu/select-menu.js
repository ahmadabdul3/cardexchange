$(function() {
  $('body').on('click', function(event) {
        var dropDownBoxList = $(event.target).closest('.drop-down-box');
      if(dropDownBoxList.length < 1) {
        $('.drop-down-box').removeClass('active');
      }
  });
    $('.drop-down-box .selectors').on('click', function() {
    $(this).closest('.drop-down-box').toggleClass('active');
  });
  $('.drop-down-box .options-box .option').on('click', function() {
    var value = $(this).children('.content').text();
    var dropDownBox = $(this).closest('.drop-down-box');
    $(dropDownBox).find('.selected-box').find('.text').text(value);
    $(dropDownBox).removeClass('active');
  });
});
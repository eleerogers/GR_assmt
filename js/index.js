$(document).ready(() => {
  
  $('.lifestyleDropdown div:first').addClass('show');

  $('.lifestyleDropdown').on('click', 'div.lifestyle-option', function(){
    $(this).toggleClass('show').siblings().removeClass('show');
  })

})

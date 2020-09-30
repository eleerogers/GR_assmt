$(document).ready(() => {
  
  $('.lifestyleDropdown div:first').addClass('active');

  $('.lifestyleDropdown').on('click', 'div.lifestyle-option', function(){
    $(this).closest('div.lifestyle-option').addClass('active').siblings().removeClass('active');
  })

})

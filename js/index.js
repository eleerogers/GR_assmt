$(document).ready(() => {
  
  $('.lifestyleDropdown div:first').addClass('show');

  $('.lifestyleDropdown').on('click', 'div.lifestyle-option', function(){
    $(this).addClass('show').siblings().removeClass('show');
  })

})

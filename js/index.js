$(document).ready(() => {
  
  $('.lifestyleDropdown div:first').addClass('active');

  $('.lifestyleDropdown').on('click', 'div.lifestyle-option', function(){
    $(this).closest('div.lifestyle-option').addClass('active').siblings().removeClass('active');
  })

  let page = 1;
  let characterObjs = [];
  var totalChars;

  $('.star-wars-btn').on('click', async () => {
    const totalCharsUnd = typeof totalChars === 'undefined';
    try {
      if (totalCharsUnd || characterObjs.length < totalChars) {
        var {data: {results, count}} = await axios(`https://swapi.dev/api/people/?page=${page}`);
        if (totalCharsUnd) {
          totalChars = count;
        }
        characterObjs = characterObjs.concat(results);
        page += 1;
      }
    }
    catch (err) {
      console.error(err);
    }
    finally {
      results.forEach(charObj => {
        $('.star-wars-char-list').append(`<li>${charObj.name}</li>`);
      })
      if (characterObjs.length >= totalChars) {
        $('.star-wars-btn').prop('disabled', true);
      }
    }
  })

})

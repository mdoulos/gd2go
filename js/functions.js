// -------------------------------------------------------------------------
// ----- Phone or Common Functions -----------------------------------------
// -------------------------------------------------------------------------

function closeItems() {
var listItems = document.getElementsByTagName('LI');

  for (var i = 0; i < listItems.length; i++) {
    var foodPhotos = listItems[i].querySelector('img:nth-of-type(1)');
    var tapIcon = listItems[i].querySelector('img:nth-of-type(2)');
    var foodName = listItems[i].querySelector('h3');
    var prices = listItems[i].querySelector('table');
    var foodDescription = listItems[i].querySelector('p:nth-of-type(1)');
    var ingredients = listItems[i].querySelector('p:nth-of-type(2)');
    var horizontalBar = listItems[i].querySelector('hr');

    tapIcon.style.display='block';
    listItems[i].style.display='flex';
    listItems[i].style.paddingBottom='0';
    foodPhotos.style.width='75px';
    foodPhotos.style.height='75px';
    foodPhotos.style.margin='auto 0';
    foodPhotos.style.border='#99BB00 solid 1px';
    foodName.style.margin='auto';
    foodName.style.padding='0 1em';
    foodName.style.fontSize='1.1em';
    prices.style.display='none';
    foodDescription.style.display='none';
    ingredients.style.display='none';
    horizontalBar.style.display='none';

  }
  }

function expandItems() {
  var listItem = event.target;
  var foodPhoto = listItem.querySelector('img:nth-of-type(1)');
  var tapIcon = listItem.querySelector('img:nth-of-type(2)');
  var foodName = listItem.querySelector('h3');
  var prices = listItem.querySelector('table');
  var foodDescription = listItem.querySelector('p:nth-of-type(1)');
  var ingredients = listItem.querySelector('p:nth-of-type(2)');
  var horizontalBar = listItem.querySelector('hr');

  if (tapIcon.style.display == 'block') {

    tapIcon.style.display='none';
    listItem.style.display='block';
    listItem.style.paddingBottom='.5em';
    foodPhoto.style.width='100px';
    foodPhoto.style.height='100px';
    foodPhoto.style.margin='.5em';
    foodPhoto.style.marginBottom='1.5em';
    foodPhoto.style.border='#99BB00 solid 2px';
    foodName.style.margin='0 auto';
    foodName.style.padding='.4em';
    foodName.style.paddingTop='1em';
    foodName.style.fontSize='1.4em';
    prices.style.display='block';
    foodDescription.style.display='block';
    ingredients.style.display='inline-block';
    horizontalBar.style.display='block';

  } else {
    tapIcon.style.display='block';
    listItem.style.display='flex';
    listItem.style.paddingBottom='0';
    foodPhoto.style.width='75px';
    foodPhoto.style.height='75px';
    foodPhoto.style.margin='auto 0';
    foodPhoto.style.border='#99BB00 solid 1px';
    foodName.style.margin='auto';
    foodName.style.padding='0 1em';
    foodName.style.fontSize='1.1em';
    prices.style.display='none';
    foodDescription.style.display='none';
    ingredients.style.display='none';
    horizontalBar.style.display='none';
  }}

  function expandItems2() {
    var listItem = event.target.parentNode;
    var foodPhoto = listItem.querySelector('img:nth-of-type(1)');
    var tapIcon = listItem.querySelector('img:nth-of-type(2)');
    var foodName = listItem.querySelector('h3');
    var prices = listItem.querySelector('table');
    var foodDescription = listItem.querySelector('p:nth-of-type(1)');
    var ingredients = listItem.querySelector('p:nth-of-type(2)');
    var horizontalBar = listItem.querySelector('hr');

    if (tapIcon.style.display == 'block') {

      tapIcon.style.display='none';
      listItem.style.display='block';
      listItem.style.paddingBottom='.5em';
      foodPhoto.style.width='100px';
      foodPhoto.style.height='100px';
      foodPhoto.style.margin='.5em';
      foodPhoto.style.marginBottom='1.5em';
      foodPhoto.style.border='#99BB00 solid 2px';
      foodName.style.margin='0 auto';
      foodName.style.padding='.4em';
      foodName.style.paddingTop='1em';
      foodName.style.fontSize='1.4em';
      prices.style.display='block';
      foodDescription.style.display='block';
      ingredients.style.display='inline-block';
      horizontalBar.style.display='block';

    } else {
      tapIcon.style.display='block';
      listItem.style.display='flex';
      listItem.style.paddingBottom='0';
      foodPhoto.style.width='75px';
      foodPhoto.style.height='75px';
      foodPhoto.style.margin='auto 0';
      foodPhoto.style.border='#99BB00 solid 1px';
      foodName.style.margin='auto';
      foodName.style.padding='0 1em';
      foodName.style.fontSize='1.1em';
      prices.style.display='none';
      foodDescription.style.display='none';
      ingredients.style.display='none';
      horizontalBar.style.display='none';
    }}








// -------------------------------------------------------------------------
// ----- Wide or Tablet ----------------------------------------------------
// -------------------------------------------------------------------------

    function closeItemsTablet() {
    var listItems = document.getElementsByTagName('LI');

      for (var i = 0; i < listItems.length; i++) {
        var foodPhotos = listItems[i].querySelector('img:nth-of-type(1)');
        var tapIcon = listItems[i].querySelector('img:nth-of-type(2)');
        var foodName = listItems[i].querySelector('h3');
        var prices = listItems[i].querySelector('table');
        var foodDescription = listItems[i].querySelector('p:nth-of-type(1)');
        var ingredients = listItems[i].querySelector('p:nth-of-type(2)');
        var horizontalBar = listItems[i].querySelector('hr');

        tapIcon.style.display='block';
        listItems[i].style.display='flex';
        listItems[i].style.paddingBottom='0';
        foodPhotos.style.width='100px';
        foodPhotos.style.height='100px';
        foodPhotos.style.margin='auto 0';
        foodPhotos.style.border='#99BB00 solid 1px';
        foodName.style.margin='auto';
        foodName.style.padding='0 1em';
        foodName.style.fontSize='1.5em';
        prices.style.display='none';
        foodDescription.style.display='none';
        ingredients.style.display='none';
        horizontalBar.style.display='none';

      }
      }

    function expandItemsTablet() {
      var listItem = event.target;
      var foodPhoto = listItem.querySelector('img:nth-of-type(1)');
      var tapIcon = listItem.querySelector('img:nth-of-type(2)');
      var foodName = listItem.querySelector('h3');
      var prices = listItem.querySelector('table');
      var foodDescription = listItem.querySelector('p:nth-of-type(1)');
      var ingredients = listItem.querySelector('p:nth-of-type(2)');

      if (tapIcon.style.display == 'block') {

        tapIcon.style.display='none';
        listItem.style.display='block';
        listItem.style.paddingBottom='.5em';
        foodPhoto.style.width='150px';
        foodPhoto.style.height='150px';
        foodPhoto.style.margin='.5em';
        foodPhoto.style.marginBottom='1.5em';
        foodPhoto.style.border='#99BB00 solid 2px';
        foodName.style.margin='0 auto';
        foodName.style.padding='.4em';
        foodName.style.paddingTop='1em';
        foodName.style.fontSize='2em';
        prices.style.display='block';
        foodDescription.style.display='block';
        ingredients.style.display='block';

      } else {
        tapIcon.style.display='block';
        listItem.style.display='flex';
        listItem.style.paddingBottom='0';
        foodPhoto.style.width='100px';
        foodPhoto.style.height='100px';
        foodPhoto.style.margin='auto 0';
        foodPhoto.style.border='#99BB00 solid 1px';
        foodName.style.margin='auto';
        foodName.style.padding='0 1em';
        foodName.style.fontSize='1.5em';
        prices.style.display='none';
        foodDescription.style.display='none';
        ingredients.style.display='none';
      }}

      function expandItems2Tablet() {
        var listItem = event.target.parentNode;
        var foodPhoto = listItem.querySelector('img:nth-of-type(1)');
        var tapIcon = listItem.querySelector('img:nth-of-type(2)');
        var foodName = listItem.querySelector('h3');
        var prices = listItem.querySelector('table');
        var foodDescription = listItem.querySelector('p:nth-of-type(1)');
        var ingredients = listItem.querySelector('p:nth-of-type(2)');

        if (tapIcon.style.display == 'block') {

          tapIcon.style.display='none';
          listItem.style.display='block';
          listItem.style.paddingBottom='.5em';
          foodPhoto.style.width='150px';
          foodPhoto.style.height='150px';
          foodPhoto.style.margin='.5em';
          foodPhoto.style.marginBottom='1.5em';
          foodPhoto.style.border='#99BB00 solid 2px';
          foodName.style.margin='0 auto';
          foodName.style.padding='.4em';
          foodName.style.paddingTop='1em';
          foodName.style.fontSize='2em';
          prices.style.display='block';
          foodDescription.style.display='block';
          ingredients.style.display='block';

        } else {
          tapIcon.style.display='block';
          listItem.style.display='flex';
          listItem.style.paddingBottom='0';
          foodPhoto.style.width='100px';
          foodPhoto.style.height='100px';
          foodPhoto.style.margin='auto 0';
          foodPhoto.style.border='#99BB00 solid 1px';
          foodName.style.margin='auto';
          foodName.style.padding='0 1em';
          foodName.style.fontSize='1.5em';
          prices.style.display='none';
          foodDescription.style.display='none';
          ingredients.style.display='none';
        }}

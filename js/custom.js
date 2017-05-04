if (screen.width <= 599) {
  // var imported = document.createElement('script');
  // imported.src = '/js/phonejs.js';
  // document.head.appendChild(imported);

  // -------------------------------------------------------------------------
  // ----- Food Type Toggle --------------------------------------------------
  // -------------------------------------------------------------------------

  const vegetarianButton = document.querySelector('.vegetarian-toggle');
  const veganButton = document.querySelector('.vegan-toggle');
  const glutenFreeButton = document.querySelector('.gluten-free-toggle');
  const alternativeMenuStyleButton = document.querySelector('.alt-menu-style-toggle');

  glutenFreeButton.addEventListener('click', () => {
    var notGlutenFree = document.querySelectorAll('.not-gluten-free');

    if (glutenFreeButton.style.background == 'transparent') {
      for (var i = 0; i < notGlutenFree.length; i++) {
        notGlutenFree[i].style.display = 'none';
      }
      glutenFreeButton.style.background = '#99BB00';
      glutenFreeButton.style.border = 'white solid 2px';
      glutenFreeButton.firstChild.style.color = '#FFF';

    }
    else {
      for (var i = 0; i < notGlutenFree.length; i++) {
        notGlutenFree[i].style.display = 'flex';
      }
      glutenFreeButton.style.background = 'transparent';
      glutenFreeButton.style.border = 'dotted #AAA 2px';
      glutenFreeButton.firstChild.style.color = '#DDD';
    }
  });

  veganButton.addEventListener('click', () => {
    var notVegan = document.querySelectorAll('.not-vegan');

    if (veganButton.style.background == 'transparent') {
      for (var i = 0; i < notVegan.length; i++) {
        notVegan[i].style.display = 'none';
      }
      veganButton.style.background = '#99BB00';
      veganButton.style.border = 'white solid 2px';
      veganButton.firstChild.style.color = '#FFF';

    }
    else {
      for (var i = 0; i < notVegan.length; i++) {
        notVegan[i].style.display = 'flex';
      }
      veganButton.style.background = 'transparent';
      veganButton.style.border = 'dotted #AAA 2px';
      veganButton.firstChild.style.color = '#DDD';
    }
  });

  vegetarianButton.addEventListener('click', () => {
    var notVegetarian = document.querySelectorAll('.not-vegetarian');

    if (vegetarianButton.style.background == 'transparent') {
      for (var i = 0; i < notVegetarian.length; i++) {
        notVegetarian[i].style.display = 'none';
      }
      vegetarianButton.style.background = '#99BB00';
      vegetarianButton.style.border = 'white solid 2px';
      vegetarianButton.firstChild.style.color = '#FFF';

    }
    else {
      for (var i = 0; i < notVegetarian.length; i++) {
        notVegetarian[i].style.display = 'flex';
      }
      vegetarianButton.style.background = 'transparent';
      vegetarianButton.style.border = 'dotted #AAA 2px';
      vegetarianButton.firstChild.style.color = '#DDD';
    }
  });

  alternativeMenuStyleButton.addEventListener('click', () => {
    var foodCategories = document.querySelectorAll('.food-category');
    var arrowsUp = document.querySelectorAll('.arrow-up');
    var arrowsDown = document.querySelectorAll('.arrow-down');
    var outros = document.querySelectorAll('.outro');
    var toggleButton = document.querySelectorAll('.toggle-icon');
    var altMenuIntros = document.querySelectorAll('.alt-menu-intro');

    if (alternativeMenuStyleButton.style.background == 'transparent') {
      for (var i = 0; i < foodCategories.length; i++) {
        foodCategories[i].style.display = 'none';
      }
      for (var i = 0; i < arrowsUp.length; i++) {
        arrowsUp[i].style.display = 'none';
      }
      for (var i = 0; i < arrowsDown.length; i++) {
        arrowsDown[i].style.display = 'none';
      }
      for (var i = 0; i < outros.length; i++) {
        outros[i].style.display = 'none';
      }
      for (var i = 0; i < altMenuIntros.length; i++) {
        altMenuIntros[i].style.display = 'block';
      }
      alternativeMenuStyleButton.style.background = '#99BB00';
      alternativeMenuStyleButton.style.border = 'white solid 2px';
      alternativeMenuStyleButton.firstChild.style.color = '#FFF';
      theSaladsList.style.display = 'block';
      theWrapsList.style.display = 'block';
      theBowlsList.style.display = 'block';
      theSmoothiesList.style.display = 'block';
      theOtherList.style.display = 'block';
      theSaladsIntro.style.display = 'none';
      theWrapsIntro.style.display = 'none';
      theBowlsIntro.style.display = 'none';
      theSmoothiesIntro.style.display = 'none';
      theOtherIntro.style.display = 'none';
      closeItems()
    }
    else {
      for (var i = 0; i < foodCategories.length; i++) {

        foodCategories[i].style.display = 'flex';
        foodCategories[i].style.borderBottom = 'white solid 2px';
      }
      alternativeMenuStyleButton.style.background = 'transparent';
      alternativeMenuStyleButton.style.border = 'dotted #AAA 2px';
      alternativeMenuStyleButton.firstChild.style.color = '#DDD';
      theSaladsList.style.display = 'none';
      theWrapsList.style.display = 'none';
      theBowlsList.style.display = 'none';
      theSmoothiesList.style.display = 'none';
      theOtherList.style.display = 'none';

      for (var i = 0; i < toggleButton.length; i++) {
        toggleButton[i].textContent = '+';
      }
      for (var i = 0; i < altMenuIntros.length; i++) {
        altMenuIntros[i].style.display = 'none';
      }
      closeItems()
    }
  });


  // -------------------------------------------------------------------------
  // ----- Food Categories ---------------------------------------------------
  // -------------------------------------------------------------------------

  const saladsDiv = document.querySelector('#salads');
  const wrapsDiv = document.querySelector('#wraps');
  const bowlsDiv = document.querySelector('#bowls');
  const smoothiesDiv = document.querySelector('#smoothies');
  const otherDiv = document.querySelector('#other');

  const theSaladsList = document.querySelector('#saladsList');
  const theWrapsList = document.querySelector('#wrapsList');
  const theBowlsList = document.querySelector('#bowlsList');
  const theSmoothiesList = document.querySelector('#smoothiesList');
  const theOtherList = document.querySelector('#otherList');

  const theSaladsIntro = document.querySelector('#saladsIntro');
  const theWrapsIntro = document.querySelector('#wrapsIntro');
  const theBowlsIntro = document.querySelector('#bowlsIntro');
  const theSmoothiesIntro = document.querySelector('#smoothiesIntro');
  const theOtherIntro = document.querySelector('#otherIntro');

  const theSaladsOutro = document.querySelector('#saladsOutro');
  const theWrapsOutro = document.querySelector('#wrapsOutro');
  const theBowlsOutro = document.querySelector('#bowlsOutro');
  const theSmoothiesOutro = document.querySelector('#smoothiesOutro');
  const theOtherOutro = document.querySelector('#otherOutro');

  // alert("I'm Here!");



  saladsDiv.addEventListener('click', () => {
    var toggleButton = saladsDiv.querySelector('.toggle-icon');
    var arrowDown = theSaladsIntro.nextElementSibling;
    var arrowUp = theSaladsOutro.previousElementSibling;

    if (theSaladsList.style.display == 'none') {
      toggleButton.textContent = "-";
      theSaladsIntro.style.display = 'block';
      theSaladsOutro.style.display = 'block';
      theSaladsList.style.display = 'block';
      saladsDiv.style.border = 'none';
      arrowDown.style.display = 'block';
      arrowUp.style.display = 'block';
    } else {
      theSaladsIntro.style.display = 'none';
      theSaladsOutro.style.display = 'none';
      theSaladsList.style.display = 'none';
      toggleButton.textContent = "+";
      saladsDiv.style.borderBottom = 'solid white 2px';
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'none';
    }
  });
  wrapsDiv.addEventListener('click', () => {
    var toggleButton = wrapsDiv.querySelector('.toggle-icon');
    var arrowDown = theWrapsIntro.nextElementSibling;
    var arrowUp = theWrapsOutro.previousElementSibling;

    if (theWrapsList.style.display == 'none') {
      toggleButton.textContent = "-";
      theWrapsIntro.style.display = 'block';
      theWrapsOutro.style.display = 'block';
      theWrapsList.style.display = 'block';
      wrapsDiv.style.border = 'none';
      arrowDown.style.display = 'block';
      arrowUp.style.display = 'block';
    } else {
      theWrapsIntro.style.display = 'none';
      theWrapsOutro.style.display = 'none';
      theWrapsList.style.display = 'none';
      toggleButton.textContent = "+";
      wrapsDiv.style.borderBottom = 'solid white 2px';
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'none';
    }
  });
  bowlsDiv.addEventListener('click', () => {
    var toggleButton = bowlsDiv.querySelector('.toggle-icon');
    var arrowDown = theBowlsIntro.nextElementSibling;
    var arrowUp = theBowlsOutro.previousElementSibling;

    if (theBowlsList.style.display == 'none') {
      toggleButton.textContent = "-";
      theBowlsIntro.style.display = 'block';
      theBowlsOutro.style.display = 'block';
      theBowlsList.style.display = 'block';
      bowlsDiv.style.border = 'none';
      arrowDown.style.display = 'block';
      arrowUp.style.display = 'block';
    } else {
      theBowlsIntro.style.display = 'none';
      theBowlsOutro.style.display = 'none';
      theBowlsList.style.display = 'none';
      toggleButton.textContent = "+";
      bowlsDiv.style.borderBottom = 'solid white 2px';
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'none';
    }
  });
  smoothiesDiv.addEventListener('click', () => {
    var toggleButton = smoothiesDiv.querySelector('.toggle-icon');
    var arrowDown = theSmoothiesIntro.nextElementSibling;
    var arrowUp = theSmoothiesOutro.previousElementSibling;

    if (theSmoothiesList.style.display == 'none') {
      toggleButton.textContent = "-";
      theSmoothiesIntro.style.display = 'block';
      theSmoothiesOutro.style.display = 'block';
      theSmoothiesList.style.display = 'block';
      smoothiesDiv.style.border = 'none';
      arrowDown.style.display = 'block';
      arrowUp.style.display = 'block';
    } else {
      theSmoothiesIntro.style.display = 'none';
      theSmoothiesOutro.style.display = 'none';
      theSmoothiesList.style.display = 'none';
      toggleButton.textContent = "+";
      smoothiesDiv.style.borderBottom = 'solid white 2px';
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'none';
    }
  });
  otherDiv.addEventListener('click', () => {
    var toggleButton = otherDiv.querySelector('.toggle-icon');
    var arrowDown = theOtherIntro.nextElementSibling;
    var arrowUp = theOtherOutro.previousElementSibling;

    if (theOtherList.style.display == 'none') {
      toggleButton.textContent = "-";
      theOtherIntro.style.display = 'block';
      theOtherOutro.style.display = 'block';
      theOtherList.style.display = 'block';
      otherDiv.style.border = 'none';
      arrowDown.style.display = 'block';
      arrowUp.style.display = 'block';
    } else {
      theOtherIntro.style.display = 'none';
      theOtherOutro.style.display = 'none';
      theOtherList.style.display = 'none';
      toggleButton.textContent = "+";
      otherDiv.style.borderBottom = 'solid white 2px';
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'none';
    }
  });



  // -------------------------------------------------------------------------
  // ----- Food Items --------------------------------------------------------
  // -------------------------------------------------------------------------

  theSaladsList.addEventListener('click', function(event){

    if (event.target && event.target.nodeName == 'LI') {
      expandItems();
    }
    else if (event.target.nodeName != "UL"){
      expandItems2();
    }
  });

  theWrapsList.addEventListener('click', function(event){

    if (event.target && event.target.nodeName == 'LI') {
      expandItems();
    }
    else if (event.target.nodeName != "UL"){
      expandItems2();
    }
  });

  theBowlsList.addEventListener('click', function(event){

    if (event.target && event.target.nodeName == 'LI') {
      expandItems();
    }
    else if (event.target.nodeName != "UL"){
      expandItems2();
    }
  });

  theSmoothiesList.addEventListener('click', function(event){

    if (event.target && event.target.nodeName == 'LI') {
      expandItems();
    }
    else if (event.target.nodeName != "UL"){
      expandItems2();
    }
  });

  theOtherList.addEventListener('click', function(event){

    if (event.target && event.target.nodeName == 'LI') {
      expandItems();
    }
    else if (event.target.nodeName != "UL"){
      expandItems2();
    }
  });

}









if (screen.width >= 600 && screen.width <= 768) {
  // var imported = document.createElement('script');
  // imported.src = '/js/tabletjs.js';
  // document.head.appendChild(imported);

  // -------------------------------------------------------------------------
  // ----- Food Type Toggle --------------------------------------------------
  // -------------------------------------------------------------------------

  const vegetarianButton = document.querySelector('.vegetarian-toggle');
  const veganButton = document.querySelector('.vegan-toggle');
  const glutenFreeButton = document.querySelector('.gluten-free-toggle');
  const alternativeMenuStyleButton = document.querySelector('.alt-menu-style-toggle');

  glutenFreeButton.addEventListener('click', () => {
    var notGlutenFree = document.querySelectorAll('.not-gluten-free');

    if (glutenFreeButton.style.background == 'transparent') {
      for (var i = 0; i < notGlutenFree.length; i++) {
        notGlutenFree[i].style.display = 'none';
      }
      glutenFreeButton.style.background = '#99BB00';
      glutenFreeButton.style.border = 'white solid 2px';
      glutenFreeButton.firstChild.style.color = '#FFF';

    }
    else {
      for (var i = 0; i < notGlutenFree.length; i++) {
        notGlutenFree[i].style.display = 'flex';
      }
      glutenFreeButton.style.background = 'transparent';
      glutenFreeButton.style.border = 'dotted #AAA 2px';
      glutenFreeButton.firstChild.style.color = '#DDD';
    }
  });

  veganButton.addEventListener('click', () => {
    var notVegan = document.querySelectorAll('.not-vegan');

    if (veganButton.style.background == 'transparent') {
      for (var i = 0; i < notVegan.length; i++) {
        notVegan[i].style.display = 'none';
      }
      veganButton.style.background = '#99BB00';
      veganButton.style.border = 'white solid 2px';
      veganButton.firstChild.style.color = '#FFF';

    }
    else {
      for (var i = 0; i < notVegan.length; i++) {
        notVegan[i].style.display = 'flex';
      }
      veganButton.style.background = 'transparent';
      veganButton.style.border = 'dotted #AAA 2px';
      veganButton.firstChild.style.color = '#DDD';
    }
  });

  vegetarianButton.addEventListener('click', () => {
    var notVegetarian = document.querySelectorAll('.not-vegetarian');

    if (vegetarianButton.style.background == 'transparent') {
      for (var i = 0; i < notVegetarian.length; i++) {
        notVegetarian[i].style.display = 'none';
      }
      vegetarianButton.style.background = '#99BB00';
      vegetarianButton.style.border = 'white solid 2px';
      vegetarianButton.firstChild.style.color = '#FFF';

    }
    else {
      for (var i = 0; i < notVegetarian.length; i++) {
        notVegetarian[i].style.display = 'flex';
      }
      vegetarianButton.style.background = 'transparent';
      vegetarianButton.style.border = 'dotted #AAA 2px';
      vegetarianButton.firstChild.style.color = '#DDD';
    }
  });

  alternativeMenuStyleButton.addEventListener('click', () => {
    var foodCategories = document.querySelectorAll('.food-category');
    var arrowsUp = document.querySelectorAll('.arrow-up');
    var arrowsDown = document.querySelectorAll('.arrow-down');
    var outros = document.querySelectorAll('.outro');
    var toggleButton = document.querySelectorAll('.toggle-icon');
    var altMenuIntros = document.querySelectorAll('.alt-menu-intro');

    if (alternativeMenuStyleButton.style.background == 'transparent') {
      for (var i = 0; i < foodCategories.length; i++) {
        foodCategories[i].style.display = 'none';
      }
      for (var i = 0; i < arrowsUp.length; i++) {
        arrowsUp[i].style.display = 'none';
      }
      for (var i = 0; i < arrowsDown.length; i++) {
        arrowsDown[i].style.display = 'none';
      }
      for (var i = 0; i < outros.length; i++) {
        outros[i].style.display = 'none';
      }
      for (var i = 0; i < altMenuIntros.length; i++) {
        altMenuIntros[i].style.display = 'block';
      }
      alternativeMenuStyleButton.style.background = '#99BB00';
      alternativeMenuStyleButton.style.border = 'white solid 2px';
      alternativeMenuStyleButton.firstChild.style.color = '#FFF';
      theSaladsList.style.display = 'block';
      theWrapsList.style.display = 'block';
      theBowlsList.style.display = 'block';
      theSmoothiesList.style.display = 'block';
      theOtherList.style.display = 'block';
      theSaladsIntro.style.display = 'none';
      theWrapsIntro.style.display = 'none';
      theBowlsIntro.style.display = 'none';
      theSmoothiesIntro.style.display = 'none';
      theOtherIntro.style.display = 'none';
      closeItemsTablet()
    }
    else {
      for (var i = 0; i < foodCategories.length; i++) {

        foodCategories[i].style.display = 'flex';
        foodCategories[i].style.borderBottom = 'white solid 2px';
      }
      alternativeMenuStyleButton.style.background = 'transparent';
      alternativeMenuStyleButton.style.border = 'dotted #AAA 2px';
      alternativeMenuStyleButton.firstChild.style.color = '#DDD';
      theSaladsList.style.display = 'none';
      theWrapsList.style.display = 'none';
      theBowlsList.style.display = 'none';
      theSmoothiesList.style.display = 'none';
      theOtherList.style.display = 'none';

      for (var i = 0; i < toggleButton.length; i++) {
        toggleButton[i].textContent = '+';
      }
      for (var i = 0; i < altMenuIntros.length; i++) {
        altMenuIntros[i].style.display = 'none';
      }
      closeItemsTablet()
    }
  });


  // -------------------------------------------------------------------------
  // ----- Food Categories ---------------------------------------------------
  // -------------------------------------------------------------------------

  const saladsDiv = document.querySelector('#salads');
  const wrapsDiv = document.querySelector('#wraps');
  const bowlsDiv = document.querySelector('#bowls');
  const smoothiesDiv = document.querySelector('#smoothies');
  const otherDiv = document.querySelector('#other');

  const theSaladsList = document.querySelector('#saladsList');
  const theWrapsList = document.querySelector('#wrapsList');
  const theBowlsList = document.querySelector('#bowlsList');
  const theSmoothiesList = document.querySelector('#smoothiesList');
  const theOtherList = document.querySelector('#otherList');

  const theSaladsIntro = document.querySelector('#saladsIntro');
  const theWrapsIntro = document.querySelector('#wrapsIntro');
  const theBowlsIntro = document.querySelector('#bowlsIntro');
  const theSmoothiesIntro = document.querySelector('#smoothiesIntro');
  const theOtherIntro = document.querySelector('#otherIntro');

  const theSaladsOutro = document.querySelector('#saladsOutro');
  const theWrapsOutro = document.querySelector('#wrapsOutro');
  const theBowlsOutro = document.querySelector('#bowlsOutro');
  const theSmoothiesOutro = document.querySelector('#smoothiesOutro');
  const theOtherOutro = document.querySelector('#otherOutro');

  // alert("I'm Here!");



  saladsDiv.addEventListener('click', () => {
    var toggleButton = saladsDiv.querySelector('.toggle-icon');
    var arrowDown = theSaladsIntro.nextElementSibling;
    var arrowUp = theSaladsOutro.previousElementSibling;

    if (theSaladsList.style.display == 'none') {
      toggleButton.textContent = "-";
      theSaladsIntro.style.display = 'block';
      theSaladsOutro.style.display = 'block';
      theSaladsList.style.display = 'block';
      saladsDiv.style.border = 'none';
      arrowDown.style.display = 'block';
      arrowUp.style.display = 'block';
    } else {
      theSaladsIntro.style.display = 'none';
      theSaladsOutro.style.display = 'none';
      theSaladsList.style.display = 'none';
      toggleButton.textContent = "+";
      saladsDiv.style.borderBottom = 'solid white 2px';
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'none';
    }
  });
  wrapsDiv.addEventListener('click', () => {
    var toggleButton = wrapsDiv.querySelector('.toggle-icon');
    var arrowDown = theWrapsIntro.nextElementSibling;
    var arrowUp = theWrapsOutro.previousElementSibling;

    if (theWrapsList.style.display == 'none') {
      toggleButton.textContent = "-";
      theWrapsIntro.style.display = 'block';
      theWrapsOutro.style.display = 'block';
      theWrapsList.style.display = 'block';
      wrapsDiv.style.border = 'none';
      arrowDown.style.display = 'block';
      arrowUp.style.display = 'block';
    } else {
      theWrapsIntro.style.display = 'none';
      theWrapsOutro.style.display = 'none';
      theWrapsList.style.display = 'none';
      toggleButton.textContent = "+";
      wrapsDiv.style.borderBottom = 'solid white 2px';
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'none';
    }
  });
  bowlsDiv.addEventListener('click', () => {
    var toggleButton = bowlsDiv.querySelector('.toggle-icon');
    var arrowDown = theBowlsIntro.nextElementSibling;
    var arrowUp = theBowlsOutro.previousElementSibling;

    if (theBowlsList.style.display == 'none') {
      toggleButton.textContent = "-";
      theBowlsIntro.style.display = 'block';
      theBowlsOutro.style.display = 'block';
      theBowlsList.style.display = 'block';
      bowlsDiv.style.border = 'none';
      arrowDown.style.display = 'block';
      arrowUp.style.display = 'block';
    } else {
      theBowlsIntro.style.display = 'none';
      theBowlsOutro.style.display = 'none';
      theBowlsList.style.display = 'none';
      toggleButton.textContent = "+";
      bowlsDiv.style.borderBottom = 'solid white 2px';
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'none';
    }
  });
  smoothiesDiv.addEventListener('click', () => {
    var toggleButton = smoothiesDiv.querySelector('.toggle-icon');
    var arrowDown = theSmoothiesIntro.nextElementSibling;
    var arrowUp = theSmoothiesOutro.previousElementSibling;

    if (theSmoothiesList.style.display == 'none') {
      toggleButton.textContent = "-";
      theSmoothiesIntro.style.display = 'block';
      theSmoothiesOutro.style.display = 'block';
      theSmoothiesList.style.display = 'block';
      smoothiesDiv.style.border = 'none';
      arrowDown.style.display = 'block';
      arrowUp.style.display = 'block';
    } else {
      theSmoothiesIntro.style.display = 'none';
      theSmoothiesOutro.style.display = 'none';
      theSmoothiesList.style.display = 'none';
      toggleButton.textContent = "+";
      smoothiesDiv.style.borderBottom = 'solid white 2px';
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'none';
    }
  });
  otherDiv.addEventListener('click', () => {
    var toggleButton = otherDiv.querySelector('.toggle-icon');
    var arrowDown = theOtherIntro.nextElementSibling;
    var arrowUp = theOtherOutro.previousElementSibling;

    if (theOtherList.style.display == 'none') {
      toggleButton.textContent = "-";
      theOtherIntro.style.display = 'block';
      theOtherOutro.style.display = 'block';
      theOtherList.style.display = 'block';
      otherDiv.style.border = 'none';
      arrowDown.style.display = 'block';
      arrowUp.style.display = 'block';
    } else {
      theOtherIntro.style.display = 'none';
      theOtherOutro.style.display = 'none';
      theOtherList.style.display = 'none';
      toggleButton.textContent = "+";
      otherDiv.style.borderBottom = 'solid white 2px';
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'none';
    }
  });



  // -------------------------------------------------------------------------
  // ----- Food Items --------------------------------------------------------
  // -------------------------------------------------------------------------

  theSaladsList.addEventListener('click', function(event){

    if (event.target && event.target.nodeName == 'LI') {
      expandItemsTablet();
    }
    else if (event.target.nodeName != "UL"){
      expandItems2Tablet();
    }
  });

  theWrapsList.addEventListener('click', function(event){

    if (event.target && event.target.nodeName == 'LI') {
      expandItemsTablet();
    }
    else if (event.target.nodeName != "UL"){
      expandItems2Tablet();
    }
  });

  theBowlsList.addEventListener('click', function(event){

    if (event.target && event.target.nodeName == 'LI') {
      expandItemsTablet();
    }
    else if (event.target.nodeName != "UL"){
      expandItems2Tablet();
    }
  });

  theSmoothiesList.addEventListener('click', function(event){

    if (event.target && event.target.nodeName == 'LI') {
      expandItemsTablet();
    }
    else if (event.target.nodeName != "UL"){
      expandItems2Tablet();
    }
  });

  theOtherList.addEventListener('click', function(event){

    if (event.target && event.target.nodeName == 'LI') {
      expandItemsTablet();
    }
    else if (event.target.nodeName != "UL"){
      expandItems2Tablet();
    }
  });


}








if (screen.width >= 769) {
  // var imported = document.createElement('script');
  // imported.src = '/js/desktopjs.js';
  // document.head.appendChild(imported);

  // -------------------------------------------------------------------------
  // ----- Food Type Toggle --------------------------------------------------
  // -------------------------------------------------------------------------

  const vegetarianButton = document.querySelector('.vegetarian-toggle');
  const veganButton = document.querySelector('.vegan-toggle');
  const glutenFreeButton = document.querySelector('.gluten-free-toggle');
  const alternativeMenuStyleButton = document.querySelector('.alt-menu-style-toggle');

  glutenFreeButton.addEventListener('click', () => {
    var notGlutenFree = document.querySelectorAll('.not-gluten-free');

    if (glutenFreeButton.style.background == 'transparent') {
      for (var i = 0; i < notGlutenFree.length; i++) {
        notGlutenFree[i].style.display = 'none';
      }
      glutenFreeButton.style.background = '#99BB00';
      glutenFreeButton.style.border = 'white solid 2px';
      glutenFreeButton.firstChild.style.color = '#FFF';

    }
    else {
      for (var i = 0; i < notGlutenFree.length; i++) {
        notGlutenFree[i].style.display = 'flex';
      }
      glutenFreeButton.style.background = 'transparent';
      glutenFreeButton.style.border = 'dotted #AAA 2px';
      glutenFreeButton.firstChild.style.color = '#DDD';
    }
  });

  veganButton.addEventListener('click', () => {
    var notVegan = document.querySelectorAll('.not-vegan');

    if (veganButton.style.background == 'transparent') {
      for (var i = 0; i < notVegan.length; i++) {
        notVegan[i].style.display = 'none';
      }
      veganButton.style.background = '#99BB00';
      veganButton.style.border = 'white solid 2px';
      veganButton.firstChild.style.color = '#FFF';

    }
    else {
      for (var i = 0; i < notVegan.length; i++) {
        notVegan[i].style.display = 'flex';
      }
      veganButton.style.background = 'transparent';
      veganButton.style.border = 'dotted #AAA 2px';
      veganButton.firstChild.style.color = '#DDD';
    }
  });

  vegetarianButton.addEventListener('click', () => {
    var notVegetarian = document.querySelectorAll('.not-vegetarian');

    if (vegetarianButton.style.background == 'transparent') {
      for (var i = 0; i < notVegetarian.length; i++) {
        notVegetarian[i].style.display = 'none';
      }
      vegetarianButton.style.background = '#99BB00';
      vegetarianButton.style.border = 'white solid 2px';
      vegetarianButton.firstChild.style.color = '#FFF';

    }
    else {
      for (var i = 0; i < notVegetarian.length; i++) {
        notVegetarian[i].style.display = 'flex';
      }
      vegetarianButton.style.background = 'transparent';
      vegetarianButton.style.border = 'dotted #AAA 2px';
      vegetarianButton.firstChild.style.color = '#DDD';
    }
  });

  alternativeMenuStyleButton.addEventListener('click', () => {
    var foodCategories = document.querySelectorAll('.food-category');
    var arrowsUp = document.querySelectorAll('.arrow-up');
    var arrowsDown = document.querySelectorAll('.arrow-down');
    var outros = document.querySelectorAll('.outro');
    var toggleButton = document.querySelectorAll('.toggle-icon');
    var altMenuIntros = document.querySelectorAll('.alt-menu-intro');

    if (alternativeMenuStyleButton.style.background == 'transparent') {
      for (var i = 0; i < foodCategories.length; i++) {
        foodCategories[i].style.display = 'none';
      }
      for (var i = 0; i < arrowsUp.length; i++) {
        arrowsUp[i].style.display = 'none';
      }
      for (var i = 0; i < arrowsDown.length; i++) {
        arrowsDown[i].style.display = 'none';
      }
      for (var i = 0; i < outros.length; i++) {
        outros[i].style.display = 'none';
      }
      for (var i = 0; i < altMenuIntros.length; i++) {
        altMenuIntros[i].style.display = 'block';
      }
      alternativeMenuStyleButton.style.background = '#99BB00';
      alternativeMenuStyleButton.style.border = 'white solid 2px';
      alternativeMenuStyleButton.firstChild.style.color = '#FFF';
      theSaladsList.style.display = 'block';
      theWrapsList.style.display = 'block';
      theBowlsList.style.display = 'block';
      theSmoothiesList.style.display = 'block';
      theOtherList.style.display = 'block';
      theSaladsIntro.style.display = 'none';
      theWrapsIntro.style.display = 'none';
      theBowlsIntro.style.display = 'none';
      theSmoothiesIntro.style.display = 'none';
      theOtherIntro.style.display = 'none';
      closeItemsTablet()
    }
    else {
      for (var i = 0; i < foodCategories.length; i++) {

        foodCategories[i].style.display = 'flex';
        foodCategories[i].style.borderBottom = 'white solid 2px';
      }
      alternativeMenuStyleButton.style.background = 'transparent';
      alternativeMenuStyleButton.style.border = 'dotted #AAA 2px';
      alternativeMenuStyleButton.firstChild.style.color = '#DDD';
      theSaladsList.style.display = 'none';
      theWrapsList.style.display = 'none';
      theBowlsList.style.display = 'none';
      theSmoothiesList.style.display = 'none';
      theOtherList.style.display = 'none';

      for (var i = 0; i < toggleButton.length; i++) {
        toggleButton[i].textContent = '+';
      }
      for (var i = 0; i < altMenuIntros.length; i++) {
        altMenuIntros[i].style.display = 'none';
      }
      closeItemsTablet()
    }
  });


  // -------------------------------------------------------------------------
  // ----- Food Categories ---------------------------------------------------
  // -------------------------------------------------------------------------

  const saladsDiv = document.querySelector('#salads');
  const wrapsDiv = document.querySelector('#wraps');
  const bowlsDiv = document.querySelector('#bowls');
  const smoothiesDiv = document.querySelector('#smoothies');
  const otherDiv = document.querySelector('#other');

  const theSaladsList = document.querySelector('#saladsList');
  const theWrapsList = document.querySelector('#wrapsList');
  const theBowlsList = document.querySelector('#bowlsList');
  const theSmoothiesList = document.querySelector('#smoothiesList');
  const theOtherList = document.querySelector('#otherList');

  const theSaladsIntro = document.querySelector('#saladsIntro');
  const theWrapsIntro = document.querySelector('#wrapsIntro');
  const theBowlsIntro = document.querySelector('#bowlsIntro');
  const theSmoothiesIntro = document.querySelector('#smoothiesIntro');
  const theOtherIntro = document.querySelector('#otherIntro');

  const theSaladsOutro = document.querySelector('#saladsOutro');
  const theWrapsOutro = document.querySelector('#wrapsOutro');
  const theBowlsOutro = document.querySelector('#bowlsOutro');
  const theSmoothiesOutro = document.querySelector('#smoothiesOutro');
  const theOtherOutro = document.querySelector('#otherOutro');

  // alert("I'm Here!");



  saladsDiv.addEventListener('click', () => {
    var toggleButton = saladsDiv.querySelector('.toggle-icon');
    var arrowDown = theSaladsIntro.nextElementSibling;
    var arrowUp = theSaladsOutro.previousElementSibling;

    if (theSaladsList.style.display == 'none') {
      toggleButton.textContent = "-";
      theSaladsIntro.style.display = 'block';
      theSaladsOutro.style.display = 'block';
      theSaladsList.style.display = 'block';
      saladsDiv.style.border = 'none';
      arrowDown.style.display = 'block';
      arrowUp.style.display = 'block';
    } else {
      theSaladsIntro.style.display = 'none';
      theSaladsOutro.style.display = 'none';
      theSaladsList.style.display = 'none';
      toggleButton.textContent = "+";
      saladsDiv.style.borderBottom = 'solid white 2px';
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'none';
    }
  });
  wrapsDiv.addEventListener('click', () => {
    var toggleButton = wrapsDiv.querySelector('.toggle-icon');
    var arrowDown = theWrapsIntro.nextElementSibling;
    var arrowUp = theWrapsOutro.previousElementSibling;

    if (theWrapsList.style.display == 'none') {
      toggleButton.textContent = "-";
      theWrapsIntro.style.display = 'block';
      theWrapsOutro.style.display = 'block';
      theWrapsList.style.display = 'block';
      wrapsDiv.style.border = 'none';
      arrowDown.style.display = 'block';
      arrowUp.style.display = 'block';
    } else {
      theWrapsIntro.style.display = 'none';
      theWrapsOutro.style.display = 'none';
      theWrapsList.style.display = 'none';
      toggleButton.textContent = "+";
      wrapsDiv.style.borderBottom = 'solid white 2px';
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'none';
    }
  });
  bowlsDiv.addEventListener('click', () => {
    var toggleButton = bowlsDiv.querySelector('.toggle-icon');
    var arrowDown = theBowlsIntro.nextElementSibling;
    var arrowUp = theBowlsOutro.previousElementSibling;

    if (theBowlsList.style.display == 'none') {
      toggleButton.textContent = "-";
      theBowlsIntro.style.display = 'block';
      theBowlsOutro.style.display = 'block';
      theBowlsList.style.display = 'block';
      bowlsDiv.style.border = 'none';
      arrowDown.style.display = 'block';
      arrowUp.style.display = 'block';
    } else {
      theBowlsIntro.style.display = 'none';
      theBowlsOutro.style.display = 'none';
      theBowlsList.style.display = 'none';
      toggleButton.textContent = "+";
      bowlsDiv.style.borderBottom = 'solid white 2px';
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'none';
    }
  });
  smoothiesDiv.addEventListener('click', () => {
    var toggleButton = smoothiesDiv.querySelector('.toggle-icon');
    var arrowDown = theSmoothiesIntro.nextElementSibling;
    var arrowUp = theSmoothiesOutro.previousElementSibling;

    if (theSmoothiesList.style.display == 'none') {
      toggleButton.textContent = "-";
      theSmoothiesIntro.style.display = 'block';
      theSmoothiesOutro.style.display = 'block';
      theSmoothiesList.style.display = 'block';
      smoothiesDiv.style.border = 'none';
      arrowDown.style.display = 'block';
      arrowUp.style.display = 'block';
    } else {
      theSmoothiesIntro.style.display = 'none';
      theSmoothiesOutro.style.display = 'none';
      theSmoothiesList.style.display = 'none';
      toggleButton.textContent = "+";
      smoothiesDiv.style.borderBottom = 'solid white 2px';
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'none';
    }
  });
  otherDiv.addEventListener('click', () => {
    var toggleButton = otherDiv.querySelector('.toggle-icon');
    var arrowDown = theOtherIntro.nextElementSibling;
    var arrowUp = theOtherOutro.previousElementSibling;

    if (theOtherList.style.display == 'none') {
      toggleButton.textContent = "-";
      theOtherIntro.style.display = 'block';
      theOtherOutro.style.display = 'block';
      theOtherList.style.display = 'block';
      otherDiv.style.border = 'none';
      arrowDown.style.display = 'block';
      arrowUp.style.display = 'block';
    } else {
      theOtherIntro.style.display = 'none';
      theOtherOutro.style.display = 'none';
      theOtherList.style.display = 'none';
      toggleButton.textContent = "+";
      otherDiv.style.borderBottom = 'solid white 2px';
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'none';
    }
  });



  // -------------------------------------------------------------------------
  // ----- Food Items --------------------------------------------------------
  // -------------------------------------------------------------------------

  theSaladsList.addEventListener('click', function(event){

    if (event.target && event.target.nodeName == 'LI') {
      expandItemsTablet();
    }
    else if (event.target.nodeName != "UL"){
      expandItems2Tablet();
    }
  });

  theWrapsList.addEventListener('click', function(event){

    if (event.target && event.target.nodeName == 'LI') {
      expandItemsTablet();
    }
    else if (event.target.nodeName != "UL"){
      expandItems2Tablet();
    }
  });

  theBowlsList.addEventListener('click', function(event){

    if (event.target && event.target.nodeName == 'LI') {
      expandItemsTablet();
    }
    else if (event.target.nodeName != "UL"){
      expandItems2Tablet();
    }
  });

  theSmoothiesList.addEventListener('click', function(event){

    if (event.target && event.target.nodeName == 'LI') {
      expandItemsTablet();
    }
    else if (event.target.nodeName != "UL"){
      expandItems2Tablet();
    }
  });

  theOtherList.addEventListener('click', function(event){

    if (event.target && event.target.nodeName == 'LI') {
      expandItemsTablet();
    }
    else if (event.target.nodeName != "UL"){
      expandItems2Tablet();
    }
  });

}

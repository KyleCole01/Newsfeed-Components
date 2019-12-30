/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
let menuContainer = document.createElement("div");
let menu = document.createElement("ul");

// the function to create a menu item taking the array (Step 1)
function createMenu(arr) {
  menuContainer.className = "menu";

  //Iterating over the array creating the list item for each item and adding to the ul (Step 2)
  arr.forEach(item => {
    let tmpItem = document.createElement("li");
    tmpItem.textContent = item;
    menu.appendChild(tmpItem);
  });
  menuContainer.appendChild(menu);
  //returning the menu component (step 5)
  return menuContainer;
}

//selecting the menu button (Step 3)
let menuButton = document.querySelector(".menu-button");
//adding the menu that was created in the function to the menu button on the dom (step 6)
menuButton.appendChild(createMenu(menuItems));

//adding a click event listener to the menu button to toggle class on the created div (Step 4)
menuButton.addEventListener("click", () => {
  console.log("it has been clicked");
  //not sure what it is supposed to do but it isnt doing it.
  menu.classList.toggle("menu--open");
  menuContainer.classList.toggle("menu--open");
});


console.log("menuButton is", menuButton);
console.log("menu Container is", menuContainer);
console.log("menu is", menu);

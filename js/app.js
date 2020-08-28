/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
// Retrieve navigation bar menu for population later
const navbar__list = document.querySelector('#navbar__list');
// Retrieve the NodeList of sections
const sections = document.querySelectorAll('section.content-section');
// ← to minimize reflow instances, using a DocumentFragment instead of a <div> to add html
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 *
*/


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

function buildNavMenu(){
    // First add the 'about me/author info' section as that is a custom sidebar toggle rather than a main section
    const newLi = document.createElement('li');
    newLi.innerHTML = '<a href=#author-info>About</a>';
    fragment.appendChild(newLi);
    // Now, iterate over the main section to get it's title and anchor reference to add them to the navbar__menu
    for(let section of sections) {
        // retrieve the custom data attribute 'data-nav'
        let sectionTitle = section.dataset.nav;
        // retrieve the id for scrolling functionality
        let sectionTarget = section.id;
        // retrieve the anchor tag attribute for linking to
//        let sectionAnchor = section.id
        // create new <li> and <a> tags to hold contents
        const newLi = document.createElement('li');
        /*const newA = document.createElement('a');*/
        // create span to hold '|' decorative divider between menu items
        const newSpan = document.createElement('span');
        // define contents and attributes of new html elements within the <li>
        newSpan.innerHTML = '&nbsp|&nbsp';
//        newA.setAttribute('href', '#' + sectionAnchor);
        // append new html elements to <li>
        newLi.appendChild(newSpan);
        newLi.insertAdjacentHTML('beforeend', sectionTitle);
        newLi.dataset.nav = sectionTarget;
        /*newLi.appendChild(newA);*/
        //append new <li> entry to document fragment
        fragment.appendChild(newLi);
    }
    // append new entries to navbar
    navbar__list.appendChild(fragment);
}



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollIntoView event
function scrollOnClick() {
    navbar__list.addEventListener('click', function (event) {
        const target = document.querySelector('#' + event.target.dataset.nav)
        target.scrollIntoView({
      behavior: 'smooth'});
    })
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
buildNavMenu();
// Scroll to section on link click
scrollOnClick();
// Set sections as active

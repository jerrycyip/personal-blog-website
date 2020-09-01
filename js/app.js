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
// Retrieve navigation side bar menu for population later
const sidebar_menu = document.querySelector('.sidebar');
// Retrieve the NodeList of sections
const sections = document.querySelectorAll('section.content-section');
// ← to minimize reflow instances, use a DocumentFragment to add top Menu
const fragmentTopMenu = document.createDocumentFragment();
// ← to minimize reflow instances, use a DocumentFragment to add side Menu
const fragmentSideMenu = document.createDocumentFragment();


/**
 * End Global Variables
 * Start Helper Functions
 *
*/

// helper function to identify if section is near top/center of viewport
function isInView(elem) {
    // Retrieve the element's size and position relative to viewport
    const position = elem.getBoundingClientRect();
    // compare position against viewport and window boundaries
    // if within boundaries, return True, else False
    return (
        position.top >= 0 &&
        position.left >= 0 &&
        position.bottom  <= (window.innerHeight ||
            document.documentElement.clientHeight) &&
        position.right <= (window.innerWidth ||
            document.documentElement.clientWidth)
        );
    }

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the top nav menu
function buildTopNavMenu(){
    // First add the 'about me/author info' section
    // 'About' section is a custom sidebar toggle rather than a main section
    const newLi = document.createElement('li');
    newLi.innerHTML = '<a href=#author-info>About</a>';
    fragmentTopMenu.appendChild(newLi);
    // Now, iterate over the main sections to get title and anchor references
    // Use references when constructing the navbar__menu
    for(let section of sections) {
        // retrieve the custom data attribute 'data-nav'
        let sectionTitle = section.dataset.nav;
        // retrieve the id for scrolling functionality
        let sectionTarget = section.id;
        // create new <li> element
        const newLi = document.createElement('li');
        // create span to hold decorative divider '|' between menu items
        const newSpan = document.createElement('span');
        newSpan.innerHTML = '&nbsp|&nbsp';
        // append new html elements to <li>
        newLi.appendChild(newSpan);
        newLi.insertAdjacentHTML('beforeend', sectionTitle);
        // define custom data attribute of new <li> for scrolling functionality
        newLi.dataset.nav = sectionTarget;
        //append new <li> entry to document fragment
        fragmentTopMenu.appendChild(newLi);
    }
    // append new entries to navbar
    navbar__list.appendChild(fragmentTopMenu);
}

// build the side navigation menu (accessed via dashboard button)
function buildSideNavMenu(){
    // First add the custom sections 'Home' and 'About Me'
    const newLi1 = document.createElement('li');
    newLi1.innerHTML = '<a href=#>Home</a><a href="#" class="material-icons sidebar-icons">home</a>';
    fragmentSideMenu.appendChild(newLi1);

    // 'About' section is a custom sidebar toggle rather than a main section
    const newLi2 = document.createElement('li');
    newLi2.innerHTML = '<a href=#author-info>About</a><a href=#author-info class="material-icons sidebar-icons">portrait</a></li>';
    fragmentSideMenu.appendChild(newLi2);
    // Now, iterate over the main sections to get title and anchor references
    // Use references when constructing the navbar__menu
    for(let section of sections) {
        // retrieve the custom data attribute 'data-nav'
        let sectionTitle = section.dataset.nav;
        // retrieve the id for scrolling functionality
        let sectionTarget = section.id;
        // create new <li> element
        const newLi = document.createElement('li');
        // create anchor to hold expansion icon
        const newAnchor = document.createElement('a');
        newAnchor.href = "#";
        newAnchor.classList.add("material-icons", "sidebar-icons");
        newAnchor.innerHTML = "expand_more";
        // append new html elements to <li>
        newLi.insertAdjacentHTML('afterbegin', sectionTitle);
        newLi.appendChild(newAnchor);
        // define custom data attribute of new <li> for scrolling functionality
        newLi.dataset.nav = sectionTarget;
        //append new <li> entry to document fragment
        fragmentSideMenu.appendChild(newLi);
    }
    // Lastly add the sections 'Settings'
        const newLiSettings = document.createElement('li');
        newLiSettings.innerHTML = '<a href=#>Settings</a><a href="#" class="material-icons sidebar-icons">settings</a>';
        fragmentSideMenu.appendChild(newLiSettings);
    // append new entries to navbar
    sidebar_menu.appendChild(fragmentSideMenu);
}

// Scroll to anchor ID using scrollIntoView event
function scrollOnClick() {
    navbar__list.addEventListener('click', function (event) {
        const scrollTarget = document.querySelector('#' +
        event.target.dataset.nav)
        scrollTarget.scrollIntoView({behavior: 'smooth'});
    })
    sidebar_menu.addEventListener('click', function (event) {
        const scrollTarget = document.querySelector('#' +
        event.target.dataset.nav)
        scrollTarget.scrollIntoView({behavior:'smooth'});
    })
}

// Event Listener to update classList of active and inactive section (titles)
function setActiveClass() {
    window.addEventListener('scroll', function() {
        // loop through sections to determine which is near top of viewport
        for (let section of sections) {
            // retrieve associated section title for modifying associated class
            let sectionTitle = section.querySelector(".content-title");
            let posts  = section.querySelectorAll(".blog-post");
            if (isInView(section)) {
                // add active class to active section's title
                sectionTitle.classList.add("active-class");
                // add active class to active section's blog cards
                for (let post of posts) {
                        post.classList.add("blog-post-active");
                }
            }
            else {
            // remove active class from all other sections
                sectionTitle.classList.remove("active-class");
                // add active class to active section's blog cards
                for (let post of posts) {
                        post.classList.remove("blog-post-active");
                    }
            }
        }
    });
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menus
buildTopNavMenu();
buildSideNavMenu();
// Scroll to section on link click
scrollOnClick();
// Set sections as active
setActiveClass();

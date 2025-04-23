/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})

// Function to toggle the dropdown menu and change the icon state
function toggleMenu() {
    const menu = document.getElementById('menu');
    const icon = document.querySelector('.menu-icon');
    menu.classList.toggle('show'); // Show or hide the dropdown menu
    icon.classList.toggle('open'); // Change the hamburger icon to 'X' when menu is open
  }
  
  // Close the menu if the user clicks outside of it
  document.addEventListener('click', function (e) {
    const menu = document.getElementById('menu');
    const icon = document.querySelector('.menu-icon');
    if (!e.target.closest('.menu-icon') && !e.target.closest('.dropdown-content')) {
      menu.classList.remove('show');
      icon.classList.remove('open');
    }
  });
  




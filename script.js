"use strict"

const rocket = document.querySelector(".header_graphics object");

// Create keyframes and properties for zoom
const propertiesZoom = {
    duration: 1000,
    iterations: 1,
    easing: "ease-in-out",
  };
  
  const keyframeZoom = [
    { transform: 'scale(0.5)' },
    { transform: 'scale(1)' }
  ];

  
// Dissolve
const propertiesDissolve = {
    duration: 500,
    iterations: 1,
    easing: "ease-in",
  };
  
  const keyframeDissolve = [
    { opacity: 0},
    { opacity: 1}
  ];


  // Trembling and sky rocketing
  const propertiesTremble = {
    duration: 2000,
    iterations: 1
  };
  
  const keyframeTremble = [
        { transform: 'rotate(0deg)'},
        { transform: 'rotate(5deg)'},
        { transform: 'rotate(-5deg)'},
        { transform: 'rotate(5deg)'},
        { transform: 'rotate(-5deg)'},
        { transform: 'rotate(5deg)'},
        { transform: 'rotate(-5deg)'},
        { transform: 'rotate(5deg)'},
        { transform: 'rotate(-5deg)'},
        { transform: 'translateY(0)', offset: 0.5 },
        { transform: 'translateY(-80vw)'}
    ];

  const rocketAnimation = rocket.animate(keyframeTremble, propertiesTremble);

  rocketAnimation.onfinish = function() {
    rocket.animate(keyframeDissolve, propertiesDissolve);
  };



// Get a reference to the element you want to animate
const icons = document.querySelectorAll('.product_graphics');

// Get a reference to the section you want to trigger the animation
const productSection = document.querySelector('#product');

// Add an event listener to the window object to listen for the scroll event
window.addEventListener('scroll', () => {
  // Get the position of the section relative to the top of the document
  const sectionTop = productSection.getBoundingClientRect().top;

  // Check if the section is in view (within the current viewport)
  if (sectionTop <= window.innerHeight && sectionTop >= 0) {
      // If the section is in view, start the animation
      icons.forEach((icon) =>{
      icon.animate(keyframeZoom, propertiesZoom)})
    }
});
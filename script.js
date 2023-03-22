let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header');
var menu = document.querySelector('#menu-btn');
let nav = document.querySelector('#nav-close')

menu.onclick = () =>{
    navbar.classList.add('active');
}
nav.onclick = () =>{
    navbar.classList.remove('active');
}
let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn')

searchBtn.onclick = () =>{
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () =>{
    searchForm.classList.remove('active');
}

let contactBtn = document.querySelector('#contact-btn');
let contacts = document.querySelector('#contact-list');
// function popUp(){
    
// }
contactBtn.onclick = ()=>{
    contacts.classList.toggle("show")
}
let cart = document.querySelector('#cart-btn');
let cartpopup = document.querySelector('.side-popup');
let popupclose = document.querySelector('.cart-close');

cart.onclick = ()=>{
    cartpopup.classList.add('Active')
}

popupclose.onclick = ()=>{
    cartpopup.classList.remove('Active')
}

const images = [
    "images/img-hover.webp",
    "images/img-hover2.webp",
    "images/img-hover3.webp",
    "images/img-hover4.webp",
    "images/img-hover5.webp",
    "images/img-hover6.webp",
    "images/img-hover7.webp",
    "images/img-hover8.webp",
    "images/img-hover9.webp",
    "images/img-hover10.webp",
    "images/img-hover11.webp",
    "images/img-hover12.webp",
    "images/shop-img13.webp",
    "images/img-hover14.webp",
    "images/img-hover15.webp",
    "images/img-hover16.jpg",
    "images/img-hover17.webp",
    "images/img-hover18.webp",
    "images/img-hover19.webp",
    "images/img-hover20.webp",
    "images/img-hover20.webp",
    "images/img-hover21.webp",
    "images/shoeImg.webp",
    "images/img-hover23.webp",
    "images/shoe2.webp",
    "images/Thesus-imgg.webp"
  ];
  
  const imageElements = document.querySelectorAll(".myImage");
  
  const originalImage = [];
  // for (let i = 0; i < imageElements.length; i++) {
  //   originalImage.push(imageElements[i].src);
  // }
  imageElements.forEach(val=>{
    originalImage.push(val.src);
    console.log(val)
  })
  window.onscroll = function() {
    for (let i = 0; i < imageElements.length; i++) {
      let imageElement = imageElements[i];
      if (isElementInViewport(imageElement)) {
        imageElement.src = images[i];
        // imageElement.classList.add('transformed');
      } else{
        imageElement.src = originalImage[i];
        // imageElement.classList.remove('transformed');
      }
    }
  };
  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

//   const imagesHover = document.querySelectorAll('.myImage');

// // Add an event listener for the scroll event
// window.addEventListener('scroll', () => {
//   // Loop through all images
//   imagesHover.forEach((image) => {
//     // Get the bounding rectangle of the image
//     const rect = image.getBoundingClientRect();
    
//     // Check if the image is in view
//     if (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     ) {
//       // Add a mouseenter event listener to apply the transform on hover
//       image.addEventListener('mouseenter', () => {
//         image.classList.add('transform-class');
//       });
      
//       // Add a mouseleave event listener to remove the transform on hover
//       image.addEventListener('mouseleave', () => {
//         image.classList.remove('transform-class');
//       });
//     } else {
//       // Remove the event listeners if the image is not in view
//       image.removeEventListener('mouseenter');
//       image.removeEventListener('mouseleave');
      
//       // Remove the transform class if it was previously applied
//       image.classList.remove('transform-class');
//     }
//   });
// });
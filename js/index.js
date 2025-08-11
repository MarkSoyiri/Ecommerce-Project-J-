

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded",initializeSlider);
function initializeSlider(){
    if(slides.length > 0){
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide,5000);
    }
}
function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }else if(index < 0){
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    // clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

        // DROPDOWN MENUs

let accountMenu = document.getElementById("account-menu");
let accountB = document.getElementById("account-button");
let helpMenu = document.getElementById("help-menu");
let helpB = document.getElementById("help-button")


console.log(helpB)
            // ACCOUNT-DROPDOWN MENU
accountB.addEventListener("click",function(){
    accountMenu.classList.toggle("show-account-menu");
    // prompt("Don't have an account? sign in")
})

                // HELP-DROPDOWN MENU
helpB.addEventListener("click",function(){
    helpMenu.classList.toggle("add-on");
    console.log("true")
})
// PRODUCT SLIDER

const productsBox = [...document.querySelectorAll('.product-box')];
const previousBtn = [...document.querySelectorAll('.previous-btn')];
const nextBtn = [...document.querySelectorAll('.next-btn')];

productsBox.forEach((items,i)=>{
    let containerDimensions = items.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    nextBtn[i].addEventListener('click',()=>{
        items.scrollLeft += containerWidth;
        
    })

    previousBtn[i].addEventListener('click',()=>{
        items.scrollLeft -= containerWidth;
        
        
    })
    
})

  

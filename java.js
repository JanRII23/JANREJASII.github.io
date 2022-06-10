// const pinOne_div = document.getElementById("pinOne");
const pinOne_div = document.querySelector(".pinOne");
const pinTwo_div = document.querySelector(".pinTwo");
const pinThree_div = document.querySelector(".pinThree");



const nightMode_div = document.querySelector(".backgroundPic");
const nightModeLetters = document.querySelector(".flex-container");
const exploreLetters = document.querySelector(".explore");
const menuLetters = document.querySelector(".menu");
const contactButton = document.querySelector(".contact");
const logoNight = document.querySelector(".menu-toggle");

const bodySelect = document.querySelector("body");
let spotLight_div = document.querySelector(".spotlight");
let click = false;

const nightMode_li = document.getElementById("night");


function moveSpotlight(){ 

    window.addEventListener('mousemove', e => {
        let percentageX = e.pageX / window.innerWidth * 100;
        let percentageY = e.pageY / window.innerHeight * 100;

        spotLight_div.style.backgroundImage = `radial-gradient(circle at ${percentageX}% ${percentageY}%, transparent 80px, rgba(0,0,0,0.15) 110px`
      

      
    })

    
}

function main(){

//    pinOne_div.addEventListener('click', () => {
//        pinOne_div.classList.toggle('active');
       
//    })


//    pinTwo_div.addEventListener('click', () => {
//         pinTwo_div.classList.toggle('active');
//     })
 

//     pinThree_div.addEventListener('click', () => {
//         pinThree_div.classList.toggle('active');
//     })

    nightMode_li.addEventListener('click', () =>{
        nightMode_div.classList.toggle('active');
        nightModeLetters.classList.toggle('active');
        contactButton.classList.toggle('active');
        logoNight.classList.toggle('active');
        menuLetters.classList.toggle('active');
        exploreLetters.classList.toggle('active');
        spotLight_div.classList.toggle('active');
        //click = !click;
    })

   moveSpotlight();

}

main();



//new implementation is to have the spotlight stop when clicking the body using the click = !click trick if user ever decides not to have the spotlight stay
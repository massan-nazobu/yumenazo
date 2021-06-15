const targetElement = document.querySelectorAll(".animationTarget");
document.addEventListener("scroll", function() {

    for (let i = 0; i < targetElement.length; i++) {
        const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * 1.5
        if(window.innerHeight > getElementDistance){
            targetElement[i].classList.add("show");
        }
        
    }

})

const targetElement2 = document.querySelectorAll(".rinenimage");
document.addEventListener("scroll", function() {

    for (let i = 0; i < targetElement2.length; i++) {
        const getElementDistance2 = targetElement2[i].getBoundingClientRect().top + targetElement2[i].clientHeight * 0.7
        if(window.innerHeight > getElementDistance2){
            targetElement2[i].classList.add("show2");
        }
        
    }

})

const targetElement3 = document.querySelectorAll(".rinen");
document.addEventListener("scroll", function() {

    for (let i = 0; i < targetElement3.length; i++) {
        const getElementDistance3 = targetElement3[i].getBoundingClientRect().top + targetElement3[i].clientHeight * 1.5
        if(window.innerHeight > getElementDistance3){
            targetElement3[i].classList.add("show3");
        }
        
    }

})

const targetElement4 = document.querySelectorAll(".customer");
document.addEventListener("scroll", function() {

    for (let i = 0; i < targetElement4.length; i++) {
        const getElementDistance4 = targetElement4[i].getBoundingClientRect().top + targetElement4[i].clientHeight * 1.5
        if(window.innerHeight > getElementDistance4){
            targetElement4[i].classList.add("show4");
        }
        
    }

})

const targetElement5 = document.querySelectorAll(".button");
document.addEventListener("scroll", function() {

    for (let i = 0; i < targetElement5.length; i++) {
        const getElementDistance5 = targetElement5[i].getBoundingClientRect().top + targetElement5[i].clientHeight * 1.5
        if(window.innerHeight > getElementDistance5){
            targetElement5[i].classList.add("show5");
        }
        
    }

})

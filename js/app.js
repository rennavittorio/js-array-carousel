// console.log('lesss carousel');

// recupero le slide dal DOM
const slideElements = document.getElementsByClassName('slide');
console.log(slideElements);


//recupero le frecce dal DOM
const rightBtnElement = document.querySelector('.arrow-right');
const leftBtnElement = document.querySelector('.arrow-left');

//setto l'index counter
let indexActiveSlide = 0;

//richiamo l'evento click sulla freccia dx
rightBtnElement.addEventListener('click', function(){
    
    if (indexActiveSlide < slideElements.length - 1){
        //elimino la classe active dall'elemento corrente
        let currentSlide = slideElements[indexActiveSlide];
        currentSlide.classList.remove('active');
    
        // incremento l'indice della slide
        indexActiveSlide +=1;
    
        //aggiungo class active alla slide successiva
        let nextSlide = slideElements[indexActiveSlide]; 
        nextSlide.classList.add('active');
    
        console.log(indexActiveSlide); // mostro index in console

    }

})

//richiamo l'evento click sulla freccia sx
leftBtnElement.addEventListener('click', function(){
    
    if (indexActiveSlide > 0){
        //elimino la classe active dall'elemento corrente
        let currentSlide = slideElements[indexActiveSlide];
        currentSlide.classList.remove('active');
    
        // decremento l'indice della slide
        indexActiveSlide -=1;
    
        //aggiungo class active alla slide precedente
        let nextSlide = slideElements[indexActiveSlide]; 
        nextSlide.classList.add('active');
    
        console.log(indexActiveSlide); // mostro index in console

    }

})
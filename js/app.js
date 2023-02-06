// console.log('lesss carousel');

// MLS 1 e 2
// recupero le slide dal DOM
// const slideElements = document.getElementsByClassName('slide');
// console.log(slideElements);


// MLS 3
// creao una lista con i src delle img
let imgSrcList = [
    './assets/one.png',
    './assets/two.png',
    './assets/three.png',
    './assets/four.png',
    './assets/five.png'
];

// recupero elemento carousel
let carouselElement = document.querySelector('.carousel');
// console.log(carouselElement);


for (i = 0; i < imgSrcList.length; i++){
    //creo elemento
    let currentImg = ``;
    // se primo elemento-active
    if (i === 0){
        currentImg = `
        <div class="slide active">
        <img src="${imgSrcList[i]}" alt="">
        </div>
        `;
        
    } else {
        currentImg = `
        <div class="slide">
        <img src="${imgSrcList[i]}" alt="">
        </div>
        `;
    }
    
    //inserisco elemento in DOM
    carouselElement.innerHTML += currentImg;
    
}

//recupero le slide create nel DOM
let slideElements = document.querySelectorAll('.slide');
// console.log(slideElements);


//recupero le frecce dal DOM
const rightBtnElement = document.querySelector('.arrow-right');
const leftBtnElement = document.querySelector('.arrow-left');

//setto l'index counter
let indexActiveSlide = 0;

// BONUS - MLS 4
//richiamo l'evento click sulla freccia dx
rightBtnElement.addEventListener('click', function(){
    
    if (indexActiveSlide < slideElements.length - 1){
        //elimino la classe active dall'elemento corrente
        let currentSlide = slideElements[indexActiveSlide];
        currentSlide.classList.remove('active');
    
        //incremento l'indice della slide
        indexActiveSlide +=1;
    
        //aggiungo class active alla slide successiva
        let nextSlide = slideElements[indexActiveSlide]; 
        nextSlide.classList.add('active');
    
        console.log(indexActiveSlide); //mostro index in console

    } else {
        let currentSlide = slideElements[indexActiveSlide];
        currentSlide.classList.remove('active');
    
        //RIPRISTINO INDEX AL PRIMO ELEMENTO
        indexActiveSlide = 0;
    
        //aggiungo class active alla slide successiva
        let nextSlide = slideElements[indexActiveSlide]; 
        nextSlide.classList.add('active');
    
        console.log(indexActiveSlide); //mostro index in console
    }

})

//richiamo l'evento click sulla freccia sx
leftBtnElement.addEventListener('click', function(){
    
    if (indexActiveSlide > 0){
        //elimino la classe active dall'elemento corrente
        let currentSlide = slideElements[indexActiveSlide];
        currentSlide.classList.remove('active');
    
        //decremento l'indice della slide
        indexActiveSlide -=1;
    
        //aggiungo class active alla slide precedente
        let nextSlide = slideElements[indexActiveSlide]; 
        nextSlide.classList.add('active');
    
        console.log(indexActiveSlide); //mostro index in console

    } else {
        //elimino la classe active dall'elemento corrente
        let currentSlide = slideElements[indexActiveSlide];
        currentSlide.classList.remove('active');
    
        //RIPRISTINO INDEX ALL'ULTIMO ELEMENTO (LENGTH - 1)
        indexActiveSlide = slideElements.length - 1;
    
        //aggiungo class active alla slide precedente
        let nextSlide = slideElements[indexActiveSlide]; 
        nextSlide.classList.add('active');
    
        console.log(indexActiveSlide); //mostro index in console
    }

})

// MLS 3
//richiamo l'evento click sulla freccia dx
// rightBtnElement.addEventListener('click', function(){
    
//     if (indexActiveSlide < slideElements.length - 1){
//         //elimino la classe active dall'elemento corrente
//         let currentSlide = slideElements[indexActiveSlide];
//         currentSlide.classList.remove('active');
    
//         //incremento l'indice della slide
//         indexActiveSlide +=1;
    
//         //aggiungo class active alla slide successiva
//         let nextSlide = slideElements[indexActiveSlide]; 
//         nextSlide.classList.add('active');
    
//         console.log(indexActiveSlide); //mostro index in console

//     }

// })

// //richiamo l'evento click sulla freccia sx
// leftBtnElement.addEventListener('click', function(){
    
//     if (indexActiveSlide > 0){
//         //elimino la classe active dall'elemento corrente
//         let currentSlide = slideElements[indexActiveSlide];
//         currentSlide.classList.remove('active');
    
//         //decremento l'indice della slide
//         indexActiveSlide -=1;
    
//         //aggiungo class active alla slide precedente
//         let nextSlide = slideElements[indexActiveSlide]; 
//         nextSlide.classList.add('active');
    
//         console.log(indexActiveSlide); //mostro index in console

//     }

// })

// MLS 1 e 2
//richiamo l'evento click sulla freccia dx
// rightBtnElement.addEventListener('click', function(){
    
//     if (indexActiveSlide < slideElements.length - 1){
//         //elimino la classe active dall'elemento corrente
//         let currentSlide = slideElements[indexActiveSlide];
//         currentSlide.classList.remove('active');
    
//         // incremento l'indice della slide
//         indexActiveSlide +=1;
    
//         //aggiungo class active alla slide successiva
//         let nextSlide = slideElements[indexActiveSlide]; 
//         nextSlide.classList.add('active');
    
//         console.log(indexActiveSlide); // mostro index in console

//     }

// })

// //richiamo l'evento click sulla freccia sx
// leftBtnElement.addEventListener('click', function(){
    
//     if (indexActiveSlide > 0){
//         //elimino la classe active dall'elemento corrente
//         let currentSlide = slideElements[indexActiveSlide];
//         currentSlide.classList.remove('active');
    
//         // decremento l'indice della slide
//         indexActiveSlide -=1;
    
//         //aggiungo class active alla slide precedente
//         let nextSlide = slideElements[indexActiveSlide]; 
//         nextSlide.classList.add('active');
    
//         console.log(indexActiveSlide); // mostro index in console

//     }

// })
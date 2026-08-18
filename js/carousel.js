

//carousel

//Array storage class
let carouselArr = [];

const imgcarrousel = document.getElementById('imgcarrousel')
const carouselTitle = document.getElementById('carousel-title')
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const tempo = 2000




//class Carousel
class Carousel {
    imagem
    texto 
    link
    
    constructor(imagem, texto, link){
        this.imagem = imagem
        this.texto = texto
        this.link = link
    }
      
    static Start(arr){

        if(arr){


            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },tempo);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }
    static trocarImagem() {
        let itemAtual = carouselArr[Carousel._sequence] 
              imgcarrousel.src = `${itemAtual.imagem}`
                 carouselTitle.innerHTML = `<a href="${itemAtual.link}">${itemAtual.texto}</a>`

}
    static Next(){
        Carousel._sequence++;
         if(Carousel._sequence >= Carousel._size) {
                     Carousel._sequence = 0;
                                                     }
         Carousel.trocarImagem()
    }
    static Prev(){
        Carousel._sequence--;
        
        if(Carousel._sequence < 0) {
            Carousel._sequence = Carousel._size - 1;
        }
        Carousel.trocarImagem();
    }
};
            carouselArr.push(new Carousel("/img/imagem_1.jpg","Esta é a nova Ranger Ford 2022. Verifique novidades.","lancamento.html"));
            carouselArr.push(new Carousel("/img/imagem_2.jpg","Ford a nossa história","#"));
            carouselArr.push(new Carousel("/img/imagem_3.jpg","Nova Ford Bronco Sport 2022","lancamento.html"));
console.log(carouselArr)

          nextButton.addEventListener('click', Carousel.Next)
          prevButton.addEventListener('click', Carousel.Prev)
   Carousel.Start(carouselArr)
   
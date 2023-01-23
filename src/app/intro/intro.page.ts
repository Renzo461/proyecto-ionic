import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

interface Slide {
  title: string
  subtitle?: string
  description: string
  img: string
}


@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpt = {
    initialSlide: 0, //slide inicial (primero) [0,1,2,3]
    slidesPerView: 1, //configuramos un slide por vista
    centerSlides: true, //que las slides enten centradas
    speed: 400 //velocidad movimiento de los slides
  }

  slides: Slide[] = [
    {
      title: "Lee y comparte",
      description: "Encuentra una colección de libros para todos los gustos al mejor precio.",
      img: "./assets/img/slide1.png"
    },
    {
      title: "Canción de hielo y fuego",
      description: "Colección de las novelas de fantasía heroica  escritas por el novelista George R. R. Martin",
      img: "./assets/img/slide2.png"
    },
    {
      title: "HARRY POTTER",
      description: "Serie de novelas fantásticas escrita por la autora británica J. K. Rowling",
      img: "./assets/img/slide3.png"
    },
    {
      title: "LIBROS ACADÉMICOS",
      description: "Encuentra los mejores libros educativos para potenciar el aprendizaje de los niños.",
      img: "./assets/img/slide4.png"
    },
    {
      title: "Novelas ligeras",
      description: "Las mejores novelas ligeras del mercado, con entregas a pedido.",
      img: "./assets/img/slide5.png"
    }
  ]

  finish() {
    this.storage.set("isIntroShowed", true)
    this.router.navigateByUrl("/menu/home")
  }

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
  }

}

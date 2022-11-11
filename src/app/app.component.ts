import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'filquitoAuthors';

  authors = [
    {
      id: '1',
      avatar: 'http://filquito.com/wp-content/uploads/2022/11/Alejando-Zambra.jpeg',
      name: 'ALEJANDRO ZAMBRA',
      country: 'Chile',
      bio: `Es autor de Bonsái (2006), La vida
      privada de los árboles (2007), Formas
      de volver a casa (2011) y Poeta chileno
      (2020).
      Fue becario de la Biblioteca Pública de
      
      Nueva York y recibió, entre otras distin-
      ciones, el English Pen Award, por la edición
      
      inglesa de Formas de volver a casa, y el
      Premio Príncipe Claus, en Holanda, por el
      conjunto de su obra.`
    },

    {
      id: '2',
      avatar:'http://filquito.com/wp-content/uploads/2022/11/edmundo-paz-soldan-siempre-estoy-buscando-como-forzar-el-cambio-1.jpg',
      name: 'EDMUNDO PAZ SOLDÁN',
      country: 'Bolivia',
      bio: `Es autor de Bonsái (2006), La vida
      privada de los árboles (2007), Formas
      de volver a casa (2011) y Poeta chileno
      (2020).
      Fue becario de la Biblioteca Pública de
      
      Nueva York y recibió, entre otras distin-
      ciones, el English Pen Award, por la edición
      
      inglesa de Formas de volver a casa, y el
      Premio Príncipe Claus, en Holanda, por el
      conjunto de su obra.`
    },

    {
      id: '3',
      avatar:'http://filquito.com/wp-content/uploads/2022/11/Evelio-Rosero-1.jpeg',
      name: 'EVELIO ROSERO',
      country: 'Colombia',
      bio: `Biografía. Es autor de la trilogía novelística
      Primera Vez, integrada por las obras:
      Mateo Solo (1984), Juliana los mira
      (Anagrama 1986, traducida al sueco,
      noruego, danés, finlandés y alemán), y El
      Incendiado (Planeta 1988). Su obra Los
      Ejércitos obtuvo en Inglaterra el Foreign
      
      fiction prize, otorgado por el diario The In-
      dependent a la mejor obra de ficción tra-
      ducida al inglés en el año 2008, y el Premio
      
      ALOA, concedido en Dinamarca por escri-
      tores y editores a la mejor obra traducida al
      
      danés.`
    },
    {
      id: '4',
      avatar:'http://filquito.com/wp-content/uploads/2022/11/john-fitzgerald-1.jpg',
      name: 'JOHN FITZGERALD TORRES',
      country: 'Colombia',
      bio: `Magister en Literatura. Autor de una nutrida
      producción de libros para niños y jóvenes,
      entre los que destacan títulos como ¡Por
      favor, no leas este libro!. Escribió los
      libros de poesía La camisa en llamas, En
      el centro de la hoguera, Palabras de
      más, Alguien creerá que esto es la
      poesía, Orsai, Otros poemas, Poeta de
      Vecindario, Travesía del Instante y Guía
      de Caminantes.`
    },
    {
      id: '5',
      avatar:'http://filquito.com/wp-content/uploads/2022/11/Jorge_Boccanera_6ff80bbec117b57d7034561ad6aaff60-1.jpeg',
      name: 'JORGE BOCCANERA',
      country: 'Argentina',
      bio: `Poeta, periodista, crítico. Ha publicado
      libros de poesía en una docena de países
      latinoamericanos, y en Francia, Grecia, Italia,
      Estados Unidos y España. Entre esos títulos
      figuran: Polvo para morder, Sordomuda,
      Bestias en un hotel de paso, Palma Real,
      Monólogo del necio, Lluvia negra, Marimba
      y Libro del errante.`
    },
    {
      id: '6',
      avatar:'http://filquito.com/wp-content/uploads/2022/11/Juan-Manuel-Roca-1-2-scaled.jpg',
      name: 'JUAN MANUEL ROCA',
      country: 'Colombia',
      bio: `Poeta, narrador, ensayista, crítico de arte y
      periodista colombiano.
      Ha obtenido el II Premio Nacional de Poesía
      Eduardo Cote Lamus en 1975, el Premio
      
      Nacional de Poesía Universidad de Antio-
      quia en 1979, el Premio Mejor Comentarista
      
      de libros Cámara del Libro en 1992, el
      
      Premio Nacional de Periodismo Simón Bolí-
      var en 1993, el Premio Nacional de Cuento
      
      Universidad de Antioquia, en 2000, El
      Premio Nacional de Poesía Ministerio de
      Cultura, 2004, el Premio José Lezama Lima,
      otorgado por Casa de las Américas, en La
      Habana, Cuba, 2007 y el Premio Poetas del
      Mundo Latino Víctor Sandoval, México,
      2007. El Premio Casa de América de Poesía
      Americana, Madrid, España, 2009`
    },
    {
      id: '7',
      avatar:'http://filquito.com/wp-content/uploads/2022/11/laura-escudero-1.jpg',
      name: 'LAURA ESCUDERO',
      country: 'Argentina',
      bio: `Ganó dos veces el Premio El Barco de
      Vapor (Ediciones SM, Argentina) en el 2005
      con Encuentro con Flo y en el 2010/11 con
      
      El rastro de la serpiente. Ha recibido distin-
      tos premios y reconocimientos. Algunos
      
      títulos de su autoría son: Alina, maga del
      mandarino (SM), La noche de las cosas
      (Babel), Jardín del aire (Portaculturas), y el
      
      libro de ensayos Un jardín primitivo. Subje-
      tividades, lecturas y escrituras (Eduvin).`
    },
    {
      id: '8',
      avatar:'http://filquito.com/wp-content/uploads/2022/11/liliana-colanzi-en-zenda-1.jpg',
      name: 'LILIANA COLANZI',
      country: 'Bolivia',
      bio: `Es autora de cuentos Vacaciones perma-
      nentes (2010), Nuestro mundo muerto
      
      (2016) y Ustedes brillan en lo oscuro
      
      (2022). Fue seleccionada entre los 39 me-
      jores escritores latinoamericanos menores
      
      de 40 años por el Hay Festival, Bo-
      gotá39-2017. En 2017 creó Dum Dum edi-
      tora en Bolivia. Es parte del proyecto colab-
      orativo Enjambre de Libros. Vive en Ithaca,
      
      Nueva York, y enseña literatura latinoameri-
      cana y escritura creativa en la universidad
      
      de Cornell.`
    },
    {
      id: '9',
      avatar:'http://filquito.com/wp-content/uploads/2022/11/Lina-meruane-1.jpg',
      name: 'LINA MERUANE',
      country: 'Chile',
      bio: `Es autora de los relatos reunidos en Las In-
      fantas y Avidez, y cinco novelas: Póstuma,
      
      Cercada, Fruta podrida, Sangre en el ojo y
      Sistema nervioso.
      
      Entre los premios que ha recibido se desta-
      can el Sor Juana Inés de la Cruz (México
      
      2012), Anna Seghers (Berlín 2011) y becas
      de escritura de la Fundación Guggenheim
      (USA 2004), la NEA (USA 2010), la DAAD
      (Berlín 2017), y Casa Cien Años de Soledad
      
      (México 2021). Es profesora en la Universi-
      dad de Nueva York desde 2011, en la actu-
      alidad se encuentra dictando cursos en la
      
      sede madrileña de la misma.`
    },
    {
      id: '10',
      avatar:'http://filquito.com/wp-content/uploads/2022/11/maria-negroni.jpg',
      name: 'MARÍA NEGRONI',
      country: '......',
      bio: `Es autora de cuentos Vacaciones perma-
      nentes (2010), Nuestro mundo muerto
      
      (2016) y Ustedes brillan en lo oscuro
      
      (2022). Fue seleccionada entre los 39 me-
      jores escritores latinoamericanos menores
      
      de 40 años por el Hay Festival, Bo-
      gotá39-2017. En 2017 creó Dum Dum edi-
      tora en Bolivia. Es parte del proyecto colab-
      orativo Enjambre de Libros. Vive en Ithaca,
      
      Nueva York, y enseña literatura latinoameri-
      cana y escritura creativa en la universidad
      
      de Cornell.`
    },
    {
      id: '11',
      avatar:'http://filquito.com/wp-content/uploads/2022/11/mariano-quiros-1.jpg',
      name: 'MARIANO QUIRÓS',
      country: 'Argentina',
      bio: `Es autor de las novelas Robles (Primer

        Premio Bienal-CFI), Torrente (Premio Festi-
        val Iberoamericano de Nueva Narrativa), Río
        
        Negro (Premio Laura Palmer no ha muerto;
        publicada en Francia por editorial La
        dernière goutte y en Cuba por Editorial
        Matanzas), Tanto correr (Premio Francisco
        Casavella), No llores, hombre duro (Premio
        Festival Azabache; Memorial Silverio
        Cañada, Semana Negra de Gijón; publicada
        en Egipto por la editorial Sefsafa) y Una
        casa junto al Tragadero (Premio Tusquets
        2017).`
    },
    {
      id: '12',
      avatar:'http://filquito.com/wp-content/uploads/2022/11/selva-almada-1.jpg',
      name: 'SELVA ALMADA',
      country: 'Argentina',
      bio: `Es autora de cuentos Vacaciones perma-
      nentes (2010), Nuestro mundo muerto
      
      (2016) y Ustedes brillan en lo oscuro
      
      (2022). Fue seleccionada entre los 39 me-
      jores escritores latinoamericanos menores
      
      de 40 años por el Hay Festival, Bo-
      gotá39-2017. En 2017 creó Dum Dum edi-
      tora en Bolivia. Es parte del proyecto colab-
      orativo Enjambre de Libros. Vive en Ithaca,
      
      Nueva York, y enseña literatura latinoameri-
      cana y escritura creativa en la universidad
      
      de Cornell.`
    },
    {
      id: '13',
      avatar:'http://filquito.com/wp-content/uploads/2022/11/Carlos-Satizabal-1-1.jpg',
      name: 'CARLOS SATIZÁBAL',
      country: 'Argentina',
      bio: `Es autor de las novelas Robles (Primer

        Premio Bienal-CFI), Torrente (Premio Festi-
        val Iberoamericano de Nueva Narrativa), Río
        
        Negro (Premio Laura Palmer no ha muerto;
        publicada en Francia por editorial La
        dernière goutte y en Cuba por Editorial
        Matanzas), Tanto correr (Premio Francisco
        Casavella), No llores, hombre duro (Premio
        Festival Azabache; Memorial Silverio
        Cañada, Semana Negra de Gijón; publicada
        en Egipto por la editorial Sefsafa) y Una
        casa junto al Tragadero (Premio Tusquets
        2017).`
    },
    {
      id: '14',
      avatar:'http://filquito.com/wp-content/uploads/2022/11/Patricia-Ariza-1-1.jpg',
      name: 'PATRICIA ARIZA',
      country: 'Colombia',
      bio: `Autora de las novelas El viento que arrasa
      (2012), Ladrilleros (2013), No es un río
      (2020); los cuentos de Los inocentes
      (2019); y los libros de no ficción Chicas
      muertas (2014) y El mono en el remolino.
      Notas del rodaje de Zama de Lucrecia
      
      Martel (2017). Ha recibido diversas distin-
      ciones y premios, como el First Book Award
      
      de Edimburgo por El viento que arrasa
      (2019).`
    },

  ]
}

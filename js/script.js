//creo gli array 
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

//dichiaro una variabile che si riferisce al container della immagine attualmente visualizzata
const currentImageContainer = document.querySelector (".current_image_container");
//dichiaro una variabile che si riferisce al container laterale delle immagini in miniatura
const imageListContainer = document.querySelector(".image_list_container");

//creo una variabile che tenga conto della "posizione" iniziale, ossia di quale immagine voglio mostrare all'avvio del sito (senza questo tutte le immagini sono in display none)
let currentIndex = 0;

//creo un ciclo che mette le immagini nell'html
for(let i = 0; i < items.length; i++){
    //assegno all'immagine, titolo e testo corrente una variabile
    const currentImage = items[i];
    const currentTitle = title[i];
    const currentText = text[i];
    
    //creo una varibile a cui posso assegnare un valore(stringa), uguale alla classe con display block creata da me in css
    let classDaUsare = "";
    let classHighlightned = "";
    //nel caso l'indice ciclato sia uguale al currentIndex, deciso da me fuori dal ciclo "for",
    //allora assegno a questa variabile la stringa uguale alla classe con display block creata in css
    if (i === currentIndex){
        classDaUsare = "display_block";
        classHighlightned = "highlighted";
    }


    //inserisco all'interno del container i tag img e la sezione di testo con titlo e descrizione in modo da visualizzarli
    //per assegnare la classe con display block all'immagine e alla sezione di testo che voglio siano visualizzate mi basta inserire
    //la variabile classeDaUsare con l'innerHTML. Se l'indice ciclato è uguale a quello deciso da me allora la classe si riempirà
    //della stringa (uguale alla classe scritta in css) e gli elementi saranno visualizzati
    currentImageContainer.innerHTML += `<img class="${classDaUsare}" src="${currentImage}" alt="immagine #${i + 1}"> 
                                        <div class="${classDaUsare} text_section">
                                        <h1>${currentTitle}</h1>
                                        <p>${currentText}</p>
                                        </div>`;
    imageListContainer.innerHTML += `<img class="${classHighlightned}" src="${currentImage}" alt="immagine #${i + 1}">`;
};



//*QUI LAVORO CON GLI EVENTLISTENER PER SPOSTARE IL CURRENTINDEX DA ELEMENTO A ELEMENTO
//creo le variabili a cui "collego" i due elementi freccia creati in html e css
const arrowUp = document.querySelector(".upward_arrow");
const arrowDown = document.querySelector(".downward_arrow");


arrowUp.addEventListener("click", function(){
    //quando clicco sulla freccia Up voglio che la classe .display_block venga rimossa
    // dagli elementi correnti e vengano aggiunti agli elementi precedenti
    
    //creo una variabile per ritrovare l'elemento visibile (class="display_block")
    const currentImage = document.querySelector(".display_block");
    const currentText = document.querySelector(".text_section.display_block");
    const currentListImage = document.querySelector(".highlighted");

    //rimuovo la classe display_block all'elemento corrente
    currentImage.classList.remove("display_block");
    currentText.classList.remove("display_block");
    currentListImage.classList.remove("highlighted");

    //diminuisco di uno il currentIndex specificato all'inizio
    currentIndex--;

   
    //se il currentIndex arriva allora lo faccio ripartire dall'ultimo numero degli array
    if(currentIndex < 0){
        currentIndex = items.length - 1;
    }
    console.log( currentIndex);
    //associo delle variabili agli elementi precedenti che voglio visualizzare ricercandoli tramite il currentIndex e aggiungendo la classe display_block
    const newCurrentImage = document.querySelectorAll("img")[currentIndex];
    const newCurrentText = document.querySelectorAll(".text_section")[currentIndex]
    const newCurrentListImage = document.querySelectorAll(".image_list_container img")[currentIndex];
    newCurrentImage.classList.add("display_block");
    newCurrentText.classList.add("display_block");
    newCurrentListImage.classList.add("highlighted");
});

//se clicco la freccia in giù eseguo queste operazioni
arrowDown.addEventListener("click", function(){
    //quando clicco sulla freccia Down voglio che la classe .display_block venga rimossa
    // dagli elementi correnti e vengano aggiunti agli elementi successivi
    
    //creo una variabile per ritrovare l'elemento visibile (class="display_block")
    const currentImage = document.querySelector(".display_block");
    const currentText = document.querySelector(".text_section.display_block");
    const currentListImage = document.querySelector(".highlighted");
    

    //rimuovo la classe display_block all'elemento corrente
    currentImage.classList.remove("display_block");
    currentText.classList.remove("display_block");
    currentListImage.classList.remove("highlighted");

    //aumento di uno il currentIndex specificato all'inizio
    currentIndex++;

    //se il currentIndex arriva ad un valore maggiore della lunghezza dell'array delle immagini allora lo resetto a 0
    if(currentIndex > items.length - 1){
        currentIndex = 0;
    }
    

    //associo delle variabili agli elementi successivi che voglio visualizzare ricercandoli tramite il currentIndex e aggiungendo la classe display_block
    const newCurrentImage = document.querySelectorAll("img")[currentIndex];
    const newCurrentText = document.querySelectorAll(".text_section")[currentIndex];
    const newCurrentListImage = document.querySelectorAll(".image_list_container img")[currentIndex];
    newCurrentImage.classList.add("display_block");
    newCurrentText.classList.add("display_block");
    newCurrentListImage.classList.add("highlighted");
});

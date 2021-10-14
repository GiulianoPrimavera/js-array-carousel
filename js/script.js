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
const imageListContainer = document.querySelector(".image_list_container")

//creo un ciclo che mette le immagini nell'html
for(let i = 0; i < items.length && i < title.length && i < text.length ; i++){
    //assegno all'immagine corrente una variabile
    const currentImage = items[i];
    const currentTitle = title[i];
    const currentText = text[i];
    

    //inserisco all'interno del container i tag img, in modo da visualizzare le immagini
    currentImageContainer.innerHTML += `<img src="${currentImage}" alt="immagine #${currentImage}"> 
                                        <div class="text_section">
                                        <h1>${currentTitle}</h1>
                                        <p>${currentText}</p>
                                        </div>`;
    imageListContainer.innerHTML += `<img src="${currentImage}" alt="immagine #${currentImage}">`
}


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


//creo un ciclo che mette le immagini nell'html
for(let i = 0; i < items.length; i++){
    //assegno all'immagine corrente una variabile
    const currentImage = items[i];

    //inserisco all'interno del container dell'immagine (precedentemente dichiarato) il tag img, in modo da visualizzare le immagini
    currentImageContainer.innerHTML += `<img src="${currentImage}" alt="immagine #${currentImage}">`;
}

const imageListContainer = document.querySelector(".image_list_container")

for (let i = 0; i < items.length; i++){
    imageListContainer.innerHTML += `<img src="${items[i]}" alt="immagine #${items[i]}">`
}
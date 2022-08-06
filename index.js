let movies = [
    {
        name: "Falcon and the winter soldier",
        des:
            "Following the events of Avengers:Endgame, Sam Wilson and Bucky Barnes team up in a global adventure that tests their abilities and their patience.",

        image: "images/slider 2.png"
    },

    {
        name: "Loki",
        des:
            "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place aftyer the events of Avengers:Endgame.",

        image: "images/slider 1.png"
    },

    {
        name: "Wanda Vision",
        des:
            "Wanda maximoff and Vision- two super powered beings living idealized suburban lives-begin to suspect that everything is not as it seems. ",

        image: "images/slider 3.png"
    },

    {
        name: "raya and the last dragon",
        des:
            "Raya, a fallen princess, must track down the legendary last dragon to stop the evil forces that have returned and threaten her world.",

        image: "images/slider 4.png"
    },

    {
        name: "luca",
        des:
            "The movie is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato,pasta and endless scooter rides.",
            
        image: "images/slider 5.png"
    },

];

const carousel = document.querySelector('.caraousel');
let sliders = [];

let slideindex = 0; //To track the current slide.

const createslide = () => {
    if (slideindex >= movies.length) {
        slideindex = 0;
    }

    //Creating DOM Elements
    let slide = document.createElement('div');
    var imgelement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    //Attaching all the elements
    imgelement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideindex].name));
    p.appendChild(document.createTextNode(movies[slideindex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgelement);
    carousel.appendChild(slide);


    // Setting up images
    imgelement.src = movies[slideindex].image;
    slideindex++;

    // Setting elements class-names
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide);

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)
            }px)`;
    }
}

for (let i = 0; i < 3; i++) {
    createslide();
}

setInterval(() => {
    createslide();
}, 3000);


// VIDEO CARDS 

const videocards = [...document.querySelectorAll('.video-card')];

videocards.forEach((item) => {
    item.addEventListener("mouseover", () => {
        let video = item.children[1];
        video.play();
    });
    item.addEventListener("mouseleave", () => {
        let video = item.children[1];
        video.pause();
    });
});

//CARD SLIDERS
let cardContainers = [...document.querySelectorAll('.card-container')];
let preBTns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBTns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})


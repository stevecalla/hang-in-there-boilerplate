// query selector variables go here 👇

var randomImage = document.querySelector('.poster-img');

var randomTitle = document.querySelector('.poster-title');

var randomQuote = document.querySelector('.poster-quote');

var randomButton = document.querySelector('.show-random');

var viewPosterButton = document.querySelector('.show-form');

var mainPage = document.querySelector('.main-poster');

var posterForm = document.querySelector('.poster-form');

var viewSavedPosterButton = document.querySelector('.show-saved');

var savePosterView = document.querySelector('.saved-posters');

var posterFormBackButton = document.querySelector('.show-main');

var saveViewMainButton = document.querySelector('.back-to-main');

var inputPosterImage = document.querySelector('#poster-image-url');

var inputPosterTitle = document.querySelector('#poster-title');

var inputPosterQuote = document.querySelector('#poster-quote');

var makePosterButton = document.querySelector('.make-poster');

var savePosterButton = document.querySelector('.save-poster');

var savedPosterGrid = document.querySelector('.saved-posters-grid');

// we've provided you with some data to work with 👇

var images = [
  { url: "./assets/bees.jpg",
    altText: "inspirational image of bees",
  },
  { url: "./assets/bridge.jpg",
    altText: "inspirational image of a bridge",
  },
  { url:  "./assets/butterfly.jpg",
    altText: "inspirational image of a butterfly",
  },
  { url: "./assets/cliff.jpg",
    altText: "inspirational image of a cliff",
  },
  { url: "./assets/elephant.jpg",
    altText: "inspirational image of a elephant",
  },
  { url: "./assets/flock.jpg",
    altText: "inspirational image of a flock",
  },
  { url: "./assets/fox.jpg",
    altText: "inspirational image of a fox",
  },
  { url: "./assets/frog.jpg",
    altText: "inspirational image of a frog",
  },
  { url: "./assets/horse.jpg",
    altText: "inspirational image of a horse",
  },
  { url: "./assets/lion.jpg",
    altText: "inspirational image of a lion",
  },
  { url: "./assets/mountain.jpg",
    altText: "inspirational image of a mountain",
  },
  { url: "./assets/pier.jpg",
    altText: "inspirational image of a pier",
  },
  { url: "./assets/puffins.jpg",
    altText: "inspirational image of a puffins",
  },
  { url: "./assets/pug.jpg",
    altText: "inspirational image of a pug",
  },
  { url: "./assets/runner.jpg",
    altText: "inspirational image of a runner",
  },
  { url: "./assets/squirrel.jpg",
    altText: "inspirational image of a squirrel",
  },
  { url: "./assets/tiger.jpg",
    altText: "inspirational image of a tiger",
  },
  { url: "./assets/turtle.jpg",
    altText: "inspirational image of a turtle",
  },
  { url: "https://news.umanitoba.ca/wp-content/uploads/2020/04/Gratitude-MainImage-1200x900.jpg",
    altText: "inspirational image of a gratitude",
  },
  { url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c5bea540860021.578fdf9928321.gif",
    altText: "inspirational image of a glow worm",
  },
  { url: "https://thumbs.gfycat.com/GracefulAromaticHomalocephale-size_restricted.gif",
    altText: "inspirational image of glow worms",
  },
  { url: "https://media1.giphy.com/media/3o85xAg8LCrPOHxyMM/source.gif",
    altText: "inspirational image of a glow worm",
  },
  { url: "https://i.pinimg.com/originals/a9/84/ee/a984eeafaa400a68388eeb6288bd5b4e.gif",
    altText: "inspirational image of a person dancing",
  },
  { url: "https://media4.giphy.com/media/26BRwMuMYXHLgyjTi/giphy.gif",
    altText: "inspirational image of candy glow worms",
  },
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom",
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall.",
];

var savedPosters = [];
var currentPoster;

//event listeners go here 👇

window.addEventListener('load', createPoster);

randomButton.addEventListener('click', createPoster);

viewPosterButton.addEventListener('click', renderPosterView);

viewSavedPosterButton.addEventListener('click', renderSavedView);

posterFormBackButton.addEventListener('click', renderMainPage);

saveViewMainButton.addEventListener('click', renderMainPage);

makePosterButton.addEventListener('click', saveMyPoster);

savePosterButton.addEventListener('click', savePosterActions);

savedPosterGrid.addEventListener('dblclick', deleteSavedPoster);

// functions and event handlers go here 👇

function createPoster() {
  var imageRandomNumber = getRandomIndex(images);
  currentPoster = new Poster(images[imageRandomNumber].url, images[imageRandomNumber].altText, titles[getRandomIndex(titles)], quotes[getRandomIndex(quotes)]);
  renderCoverImage();
}

function renderCoverImage() {
  randomImage.src = currentPoster.imageURL;
  randomImage.alt = currentPoster.altTxt;
  randomTitle.innerText = currentPoster.title;
  randomQuote.innerText = currentPoster.quote;
}

function getRandomIndex(inputRandomList) {
  return Math.floor(Math.random() * inputRandomList.length);
}

function saveMyPoster(event) {
  event.preventDefault();
  currentPoster = new Poster(inputPosterImage.value, "inspirational image of a" + inputPosterTitle.value, inputPosterTitle.value, inputPosterQuote.value);
  savePosterInput();
  renderMainPage();
  renderCoverImage();
}

function savePosterInput() {
  images.push(inputPosterImage.value);
  titles.push(inputPosterTitle.value);
  quotes.push(inputPosterQuote.value);
}

function savePosterActions() {
  savePosters();
  renderSavedView();
  renderSavedPoster();
}

function savePosters() {
  if (!savedPosters.includes(currentPoster)) {
    savedPosters.push(currentPoster);
  };
}

function renderSavedPoster() {
  savedPosterGrid.innerHTML = "";
  for (var i = 0; i < savedPosters.length; i++) {
    savedPosterGrid.innerHTML +=
      `<article class="mini-poster" id=${savedPosters[i].id}>
        <img src="${savedPosters[i].imageURL}" alt="${savedPosters[i].altTxt}">
        <h2>${savedPosters[i].title}</h2>
        <h4>${savedPosters[i].quote}</h4>
      </article>
      `;
  };
}


function deleteSavedPoster(event) {
  var clickedSavedPoster = event.target.closest('.mini-poster');
  for (i = 0; i < savedPosters.length; i++) {
    if (savedPosters[i].id === Number(clickedSavedPoster.id)) {
      savedPosters.splice(i, 1);
    };
  };
  renderSavedPoster();
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function renderPosterView() {
  hide(mainPage);
  show(posterForm);
  hide(savePosterView);
}

function renderSavedView() {
  hide(mainPage);
  hide(posterForm);
  show(savePosterView);
}

function renderMainPage() {
  show(mainPage);
  hide(posterForm);
  hide(savePosterView);
}

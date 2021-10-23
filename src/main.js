
var randomCoverButton = document.querySelector('.random-cover-button')
var coverImage = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var tagline1 = document.querySelector('.tagline-1')
var tagline2 = document.querySelector('.tagline-2')
var makeYourOwnCoverButton = document.querySelector('.make-new-button')
var mainCover = document.querySelector('.main-cover')
var form = document.querySelector('.form-view')
var saveCoverButton = document.querySelector('.save-cover-button')
var homeButton = document.querySelector('.home-button')
var viewSavedCoversButton = document.querySelector('.view-saved-button')
var generateCustomBookButton = document.querySelector('.create-new-book-button')
var customImageInput = document.querySelector('.user-cover')
var customTitleInput = document.querySelector('.user-title')
var customDescriptor1 = document.querySelector('.user-desc1')
var customDescriptor2 = document.querySelector('.user-desc2')
var showSavedCoversView = document.querySelector('.saved-view')
var displaySavedCoversGrid = document.querySelector('.saved-covers-section')



var savedCovers = [
  // new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;


function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};



function generateRandomCoverButton() {
  currentCover = new Cover(getRandomIndex(covers), getRandomIndex(titles), getRandomIndex(descriptors), getRandomIndex(descriptors));
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
  mainCover.classList.remove('hidden');
};

function showForm() {
  mainCover.classList.add('hidden');
  form.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  showSavedCoversView.classList.add('hidden');
};

function showSavedCovers() {
  form.classList.add('hidden');
  mainCover.classList.add('hidden');
  showSavedCoversView.classList.remove('hidden');
  displaySavedCoverPage();
};

function displaySavedCoverPage() {
  displaySavedCoversGrid.innerHTML = ``;
  for (var i =0; i < savedCovers.length; i++) {
    displaySavedCoversGrid.innerHTML += `
      <div class="mini-cover">
      <img class="mini-cover" src="${savedCovers[i].cover}" alt="cover image">
      <h2 class="cover-title">${savedCovers[i].title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
      <img class="price-tag" src="./assets/price.png">
      <img class="overlay" src="./assets/overlay.png">
      </div>`
    };
};

function showHomePage() {
  homeButton.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  mainCover.classList.remove('hidden');
};

function createCustomBook(event) {
  event.preventDefault();
  currentCover = new Cover(customImageInput.value, customTitleInput.value, customDescriptor1.value, customDescriptor2.value);
  covers.push(customImageInput.value);
  titles.push(customTitleInput.value);
  descriptors.push(customDescriptor1.value, customDescriptor2.value);
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
  form.classList.add('hidden');
  homeButton.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  mainCover.classList.remove('hidden');
};

function saveCover() {
  if (savedCovers.includes(currentCover)) {
    return savedCovers;
  } else {
    savedCovers.push(currentCover);
  }
};

randomCoverButton.addEventListener("click", generateRandomCoverButton);
makeYourOwnCoverButton.addEventListener("click", showForm);
viewSavedCoversButton.addEventListener("click", showSavedCovers);
homeButton.addEventListener("click", showHomePage);
generateCustomBookButton.addEventListener("click", createCustomBook);
window.addEventListener("load", generateRandomCoverButton);
saveCoverButton.addEventListener("click", saveCover);

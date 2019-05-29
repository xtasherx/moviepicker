var shows = ['westworld', 'battlestar gallactica', 'Star Trek Discovery', 'avatar:the last airbender', 'chernobyl',
  'aggretsuko', 'eureka', 'z-nation', 'warehouse 13'
];
var answerP = document.querySelector('.answer');
var randomizeButton = document.querySelector('.random-btn');
var addButton = document.querySelector('.add-btn');
var addShow = document.querySelector('.add-show');
var viewList = document.querySelector('.view-btn');
var ul = document.querySelector(".show-list");
var listItem = document.createElement('li');
var removeButtonAction = document.querySelector('.remove-btn');
var removeButton = '<input type="button" class="remove-btn" value="remove"></input>';
var visibleList = true;

// function to pick random show from array
function pickAShow() {
  var randomShow = shows[Math.floor(Math.random() * shows.length)];
  return randomShow.toLowerCase();
}

// function to print array intms into ul
function arrayPrint() {
  for (var i = 0; i < shows.length; i++) {
    var listItem = document.createElement('li');
    listItem.innerHTML = removeButton + "  " + shows[i];
    ul.appendChild(listItem);
  }
}

arrayPrint();


// display random show on button click
randomizeButton.addEventListener("click", function() {
  answerP.innerHTML = pickAShow();
});

// on click push addShow answer to array and print new li to page.
addButton.addEventListener('click', function() {
  var pushShow = addShow.value;
  shows.push(pushShow);
  listItem = document.createElement('li');
  listItem.innerHTML = removeButton + '  ' + addShow.value;
  ul.appendChild(listItem);
  console.log(pushShow);
  addShow.value = "";
});

// show-hide list on button click

viewList.addEventListener('click', function() {
  if (visibleList === true) {
    ul.style = 'display:none;';
    visibleList = false;
  } else {
    ul.style = 'display:intial;';
    visibleList = true;
  }
})

// ************* TO DO *********************************
// remove items from array and ul list on button click
// figure out a way to not submit empty strings to array
// possible toggle for list instead of button?
// add event listener for return button press
// create the <p> for the random show with JS so there isn't a space taken up before population

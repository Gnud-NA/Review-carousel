//dog data
var dogs = [
    {
        sourceImg: "./assets/images/golden.jpg",
        name: "Mic",
        type: "Golden",
        description: `The Golden Retriever, an exuberant Scottish gundog of great beauty, 
        stands among America's most popular dog breeds. They are serious workers at hunting and field work,
         as guides for the blind, and in search-and-rescue, enjoy obedience and other competitive events, 
         and have an endearing love of life when not at work`
    },
    {
        sourceImg: "./assets/images/corgi.jpg",
        name: "Milu",
        type: "corgi",
        description: `Originally bred to herd cattle, sheep, and horses, 
        the Pembroke Welsh Corgi is an active and intelligent dog breed. 
        Easy to train and eager to learn, Pembrokes are great with children and other pets,
         and you can find them in four different coat colors and markings`
    },
    {
        sourceImg: "./assets/images/poodle.jpg",
        name: "BeKaru",
        type: "Poodle",
        description: `The poodle was developed as a water retriever, 
        and the distinctive clipping of its heavy coat was initiated to increase the animal's efficiency in the water.`
    },
];

//select item
var avatar = document.querySelector(".avatar-dog")
var dogName = document.querySelector(".name");
var type = document.querySelector(".type");
var des = document.querySelector(".des");
var prevBtn = document.querySelector('.prev-btn');
var nextBtn = document.querySelector('.next-btn');
var randomBtn = document.querySelector('.random-btn');

//index of the current dog
var index = 0;

// show basic info
function showInfo() {
    var dog = dogs[index];
    avatar.src = dog.sourceImg;
    dogName.textContent = dog.name;
    type.textContent = dog.type;
    des.textContent = dog.description;
}

window.addEventListener('DOMContentLoaded', function() {
    showInfo();
})

//show prev dog
prevBtn.addEventListener('click', function(){
    index--;
    if(index < 0) index = dogs.length-1;
    showInfo();
})

//show next dog
nextBtn.addEventListener('click', function(){
    index++;
    if(index > 2) index = 0;
   showInfo();
})

//show random dog
randomBtn.addEventListener('click', function() {
    index = Math.floor(Math.random() * dogs.length);
    showInfo();
})


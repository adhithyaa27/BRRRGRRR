var bPatty = document.querySelector(".btn-patty")
var bcheese = document.querySelector(".btn-cheese")
var btomato = document.querySelector(".btn-tomatoes")
var bonion = document.querySelector(".btn-onions")
var blettuce = document.querySelector(".btn-lettuce")

var items = document.getElementsByClassName("items")
var price = 0;
var displayPrice = document.querySelector(".price-details");


//Initial price of the burger
var wholewheatbun=10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)

var ingredients={
    Patty: 80,
    Cheese: 10,
    Tomatoes: 20,
    Onions: 20,
    Lettuse: 20
}

//Current state of the ingredients in the burger
var state = {
    patty: true,
    cheese: true,
    tomatoes: true,
    onions: true,
    lettuse: true
}

// This function renders the entire screen everytime the state changes accordingly
function renderAll(){
    renderpatty();
    rendercheese();
    rendertomatoes();
    renneronions();
    renderlettuse();
    renderingredientsboard();
    renderprice();
}

function renderpatty(){
    let patty = document.getElementById("patty")


    if (state.patty){
        patty.style.display="inherit";
    }

    else{
        patty.style.display="none";
    }

}
function rendercheese() {
    //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
    let cheese =document.getElementById("cheese");

    if (state.cheese){
        cheese.style.display = "inherit";
    }
    else{
        cheese.style.display = "none";
    }
}
function rendertomatoes(){
    //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
    let tomatoes = document.getElementById("tomato")
    if (state.tomatoes){
        tomatoes.style.display="inherit"
    }
    else{
        tomatoes.style.display="none"
    }
}
function renderonions(){
    //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
    let tomatoes = document.getElementById("onions")
    if (state.onions){
        tomatoes.style.display="inherit"
    }
    else{
        tomatoes.style.display="none"
    }
}
function renderlettuse(){
    //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
    let tomatoes = document.getElementById("lettuse")
    if (state.lettuse){
        tomatoes.style.display="inherit"
    }
    else{
        tomatoes.style.display="none"
    }
}

bPatty.onclick=function(){
    state.patty=!state.patty;
    renderAll();
}

// Trial 2 - Setup event listener for the cheese button
bcheese.onclick=function(){
    state.cheese=!state.cheese;
    renderAll();
}

// Trial 2 - Setup event listener for the tomatoes button
btomato.onclick=function(){
    state.tomatoes = !state.tomatoes;
    renderAll();
}

// Trial 2 - Setup event listener for the onion button
bonion.onclick=function(){
    state.onions = !state.onions;
    renderAll();
}

// Trial 2 - Setup event listener for the lettuce button
blettuce.onclick=function(){
    state.lettuse = !state.lettuse;
    renderAll();
}
  
//Challenge 1 - Add/Remove the class active to the buttons based on state
  
function renderButtons() {
    if(state.patty) {
      bPatty.classList.add("active")
    } else {
      bPatty.classList.remove("active")
    }
  
    if(state.cheese) {
      bcheese.classList.add("active")
    } else {
      bcheese.classList.remove("active")
    }
  
    if(state.tomatoes) {
      btomato.classList.add("active")
    } else {
      btomato.classList.remove("active")
    }
  
    if(state.onions) {
      bonion.classList.add("active")
    } else {
    bonion.classList.remove("active")
    }
  
    if(state.lettuse) {
      blettuce.classList.add("active")
    } else {
      blettuce.classList.remove("active")
    }
  
}
  
  
//Challenge 2 - Render only the items selected in the ingredients board based on the state
  
  
function renderIngredientsBoard() {
    if(state.patty) {
      items[0].textContent = "patty"
    } else {
      items[0].textContent = ""
    }
  
    if(state.cheese) {
    items[1].textContent = "cheese"
    } else {
      items[1].textContent = ""
    }
  
    if(state.tomatoes) {
      items[2].textContent = "tomatoes"
    } else {
      items[2].textContent = ""
    }
  
    if(state.onions) {
      items[3].textContent = "onions"
    } else {
      items[3].textContent = ""
    }
  
    if(state.lettuse) {
      items[4].textContent = "lettuce"
    } else {
      items[4].textContent = ""
    }
  
}
  
  
//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
  
function renderPrice(){
    price = 0;
    if(state.patty) {
      price += 80
    }
    if(state.cheese) {
      price += 10
    }
    if (state.tomatoes) {
      price += 20
    }
    if (state.onions) {
      price += 20
    }
    if (state.lettuse) {
      price += 20
    }
  
    displayPrice.textContent = `INR ${price+10}`;
}
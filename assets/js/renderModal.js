var modal = document.querySelector(".modal1");
var modalIss = document.getElementById("modaliss");
var modalAstro = document.getElementById("modalastro");
var goButton = document.querySelector(".goButton");
var closeButton = document.querySelector(".delete");
var goButton2 = document.querySelector(".goButton2");
var closeButton2 = document.querySelector('.deleteTwo')
var goButton3 = document.querySelector(".astrobutton");
var closeButton3 = document.querySelector('.deleteThree')

function activeModal(element2Activate,event){
  event.preventDefault()
  element2Activate.classList.add("is-active")
}

function deactiveModal(element2Deact,event){
  event.preventDefault()
  element2Deact.classList.remove("is-active")
}

goButton2.addEventListener("click", function(event){activeModal(modalIss,event)});
goButton.addEventListener("click", function(event){activeModal(modal,event)});
goButton3.addEventListener("click", function(event){activeModal(modalAstro,event)})
closeButton.addEventListener("click", function(event){deactiveModal(modal,event)});
closeButton2.addEventListener("click", function(event){deactiveModal(modalIss,event)});
closeButton3.addEventListener("click", function(event){deactiveModal(modalAstro,event)})
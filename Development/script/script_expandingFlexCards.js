//existing DOM elements
const cardPage = document.querySelector('.cardPage')
const cardsParent = document.getElementById('cardList')
const factsEl = document.getElementById('facts')
const trailBtn = document.getElementById('trailbutton')
const planetModalOpen = document.getElementById('trailbutton')
const planetModalClose = document.getElementById('closeModal')
const planetModalTitleEl = document.getElementById('planetModalTitle')
const planetModalContentEl = document.getElementById('planetModalContent')

//URLs
// all known count by object type
const byTypeURL = 'https://api.le-systeme-solaire.net/rest/knowncount/'
// obect data by body
const byBody = 'https://api.le-systeme-solaire.net/rest/bodies/'
// planets
const planetArray = ['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune']
// an array of facts
var factArray = ['']
var factCount = 0
var planetFact

// Functions ========================================================================

// (v) Get how many bodies we have discovered so far - return count data
async function getDataByType(){

    var countData

    var temp = await fetch(byTypeURL)

        .then(function(response){
            return response.json()
        })

        .then(function(data){
            countData = data.knowncount.slice(0,4)
        })

        .catch(function(error){
            alert('Error')
        })
    
    return (countData)
}

// formulate facts
function formulateFacts(countData){

    factArray = []
    
    for (i in countData){
        var thisType = countData[i].id
        var thisCount = countData[i].knownCount
        var thisUpdateDate = countData[i].updateDate
        var thisString = `Until ${thisUpdateDate}, ${thisCount} ${thisType}s have been discovered`
        factArray.push(thisString)
    }

    return (factArray)
}

//render facts to the pages
function renderFacts(){
    // setTimeout(function(){factsEl.innerHTML= ''}, 5000);
    factsEl.innerHTML= ''
    factArray = JSON.parse(localStorage.getItem("facts"))
    factLength = factArray.length
    thisFact = factArray[factCount%factArray.length]
    factCount ++
    var addedLine = document.createElement('div')
    addedLine.innerHTML = thisFact
    factsEl.appendChild(addedLine)
}

// Update facts
async function updateFact(){

    var countDataByType = await getDataByType()
    factArray = formulateFacts(countDataByType)
    localStorage.setItem("facts", JSON.stringify(factArray));

}

// (v) Get data of one specific planet
async function getDataByPlanet(planetStr){

    thisPlanetDataURL = byBody + planetStr

    var planetData

    var temp = await fetch(thisPlanetDataURL)

        .then(function(response){
            return response.json()
        })

        .then(function(data){
            planetData = data
        })

        .catch(function(error){
            alert('Error')
        })

    return(planetData)
}

// (v) create single card for one planet
function oneCard (str) {
    var thisCard = document.createElement('li')
    var pictureLink = `../Development/media/${str}.jpg`
    var thisInnerHTMLContent = `
    <div class = 'card-image'>
        <figure class='image is-1by1'>
            <img src='${pictureLink}' id='${str}' alt='A picture of ${str}'>
        </figure>
    </div>

    <div class = 'card-content'>
        <p class='centered'>${str}</p>
    </div>
    `
    thisCard.innerHTML = thisInnerHTMLContent
    cardsParent.appendChild(thisCard)
}

// (v) Get the position of a element with id = str
function getPos (str){
    var posArray = [0,0,0]
    var sampleEl = document.getElementById(str)
    var foundRectangle = sampleEl.getBoundingClientRect()
    var width = foundRectangle.right - foundRectangle.left
    posArray[0] = foundRectangle.left;
    posArray[1] = foundRectangle.top;
    return posArray
}

// Render a click me hint over the indicated location
function giveHint(hintLocation){
    console.log(hintLocation)
    var hint = document.createElement('div')
    hint.innerHTML = '<p>Click to read more ... </p>'
    hint.setAttribute('id','hint')
    hint.style.position='absolute'
    hint.style.left = hintLocation[0]+10+'px'
    hint.style.top = hintLocation[1]-20+'px'
    cardPage.appendChild(hint)
}

//** (not working) Modal card
function modalCard(){
    var modalCardIH = `
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Modal title</p>
                <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                afdsaasdfad
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success">Save changes</button>
                <button class="button">Cancel</button>
            </footer>
        </div>
    `
    var modalCard = document.createElement('div')
    modalCard.innerHTML=modalCardIH
    modalCard.setAttribute('class','modal')
    cardPage.appendChild(modalCard)
}

function displayModal(){
    planetModal.setAttribute('class','modal is-active')
}

function closeModal(){
    planetModal.setAttribute('class','modal')
}

function renderPlanetModal(){

}

// Button ========================================================================

planetModalOpen.addEventListener('click',displayModal)
planetModalClose.addEventListener('click',closeModal)

// Main program ========================================================================

    // Create buttons for each planet
planetArray.forEach(planet => oneCard(planet))

updateFact()

setInterval(renderFacts, 6000)
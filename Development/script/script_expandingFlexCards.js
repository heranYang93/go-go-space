//existing DOM elements
const cardPage = document.querySelector('.cardPage')
const cardsParent = document.getElementById('cardList')
const factsEl = document.getElementById('facts')
const trailBtn = document.getElementById('trailbutton')
const planetModalOpen = document.getElementById('trailbutton')
const planetModalClose = document.getElementById('closeModal')
const planetModalTitleEl = document.getElementById('planetModalTitle')
const planetModalContentEl = document.getElementById('planetModalContent')
var singlePlanetDataEl = document.getElementById('singlePlanetData')

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

async function getSinglePlanetData(str){

    var thisPlanetData
    var singlePlanetDataURL = `https://api.le-systeme-solaire.net/rest/bodies/${str}`

    var temp = await fetch(singlePlanetDataURL)

    .then(function(response){
        return response.json()
    })

    .then(function(data){
        thisPlanetData = data
    })

    .catch(function(error){
        alert('single planet data unavailable')
    })

return (thisPlanetData)

} 

// (v) formulate facts
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

// (v) render facts to the pages
function renderFacts(){
    factsEl.innerHTML= ''
    factArray = JSON.parse(localStorage.getItem("facts"))
    factLength = factArray.length
    thisFact = factArray[factCount%factArray.length]
    factCount ++
    var addedLine = document.createElement('div')
    addedLine.innerHTML = thisFact
    factsEl.appendChild(addedLine)
}

// (v) update facts
async function updateFact(){

    var countDataByType = await getDataByType()
    factArray = formulateFacts(countDataByType)
    localStorage.setItem("facts", JSON.stringify(factArray));

}

// (v) get planet data
async function getPlanetData(){
    
    for (i in planetArray){
        var singlePlanet = planetArray[i]
        var thisPlanetData = await getSinglePlanetData(singlePlanet)
        var thisPlanetKey = singlePlanet+'data'
        localStorage.setItem(thisPlanetKey, JSON.stringify(thisPlanetData));
    }

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

    var createThisBtn = document.getElementById(str)
    createThisBtn.addEventListener('click', renderPlanetModal)

}

function displayModal(){
    planetModal.setAttribute('class','modal is-active')
}

function closeModal(){
    planetModal.setAttribute('class','modal')
}

//HERE 
function renderPlanetModal(event){
    event.preventDefault()

    singlePlanetDataEl.innerHTML = ''
    planetModalTitleEl.innerHTML = ''

    thisPlanet = event.target.getAttribute('id')

    planetModalTitleEl.innerHTML = thisPlanet

    thisKey = thisPlanet+'data'
    thisPlanetData = JSON.parse(localStorage.getItem(thisKey))
    singlePlanetDataEl.innerHTML = `
    <p>Aphelion:${thisPlanetData.aphelion} km</p>
    <p>Perihelion:${thisPlanetData.perihelion} km</p>
    <p>Average Temperature:${thisPlanetData.avgTemp} F</p>
    <p>Density:${thisPlanetData.density} g/cm^3 </p>
    <p>Equatorial Radius:${thisPlanetData.equaRadius}</p>
    <p>gravity:${thisPlanetData.gravity} m/s²</p>
    <p>Mass:${thisPlanetData.massValue} × 10^24 kg</p>
    `

    planetModal.setAttribute('class','modal is-active')

}

// Button ========================================================================

planetModalOpen.addEventListener('click',displayModal)
planetModalClose.addEventListener('click',closeModal)

// Main program ========================================================================

// Create buttons for each planet
planetArray.forEach(planet => oneCard(planet))

// get planets count
updateFact()
// render planet count every 6 seconds
setInterval(renderFacts, 6000)



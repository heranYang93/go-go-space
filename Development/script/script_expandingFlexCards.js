var cardPage = document.querySelector('.cardPage')
var cardsParent = document.getElementById('cardList')


const hintInnerHTML = `
        <div class='hintWrapper'>
            <p>Click to read more ...</p>
            <div class="hint" id="hint" onmouseout="javascript:removeHover('hint');"></div>
        </div>
    `
const planetArray = ['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune']

// create single card for one planet
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

function getPos (str){
    var posArray = [0,0,0]
    var sampleEl = document.getElementById(str)
    var foundRectangle = sampleEl.getBoundingClientRect()
    var width = foundRectangle.right - foundRectangle.left
    posArray[0] = foundRectangle.left;
    posArray[1] = foundRectangle.top;
    return posArray
}

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


// Main function
    // Create buttons for each planet
planetArray.forEach(planet => oneCard(planet))
    //get Mars location
hintLocation = getPos('Mars')
    //render hint
giveHint(hintLocation)

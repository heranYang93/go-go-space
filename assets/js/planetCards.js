//existing DOM elements
const cardPage = document.getElementById('planetcardholder')
const cardsParent = document.getElementById('cardList')
const factsEl = document.getElementById('facts')
const trailBtn = document.getElementById('trailbutton')
const planetModalOpen = document.getElementById('trailbutton')
const planetModalClose = document.getElementById('closeModal')
const planetModalTitleEl = document.getElementById('planetModalTitle')
const planetModalContentEl = document.getElementById('planetModalContent')
var singlePlanetDataEl = document.getElementById('singlePlanetData')
var singlePlanetModalImg = document.getElementById('singlePlanetDataImg')
var singlePlanetExplanationEl = document.getElementById('singlePlanetExplanation')


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
const planetIntroText = {
    Mercury:"Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. It is named after the Roman god Mercurius (Mercury), god of commerce, messenger of the gods, and mediator between gods and mortals, corresponding to the Greek god Hermes (Ἑρμῆς). Like Venus, Mercury orbits the Sun within Earth's orbit as an inferior planet, and its apparent distance from the Sun as viewed from Earth never exceeds 28°. This proximity to the Sun means the planet can only be seen near the western horizon after sunset or the eastern horizon before sunrise, usually in twilight. At this time, it may appear as a bright star-like object, but is more difficult to observe than Venus. From Earth, the planet telescopically displays the complete range of phases, similar to Venus and the Moon, which recurs over its synodic period of approximately 116 days.",
    Venus:"Venus is a terrestrial planet and is sometimes called Earth's 'sister planet' because of their similar size, mass, proximity to the Sun, and bulk composition. It is radically different from Earth in other respects. It has the densest atmosphere of the four terrestrial planets, consisting of more than 96% carbon dioxide. The atmospheric pressure at the planet's surface is about 92 times the sea level pressure of Earth, or roughly the pressure at 900 m (3,000 ft) underwater on Earth. Even though Mercury is closer to the Sun, Venus has the hottest surface of any planet in the Solar System, with a mean temperature of 737 K (464 °C; 867 °F). Venus is shrouded by an opaque layer of highly reflective clouds of sulfuric acid, preventing its surface from being seen from space in visible light. It may have had water oceans in the past,ut these would have vaporized as the temperature rose under a runaway greenhouse effect. The water has probably photodissociated, and the free hydrogen has been swept into interplanetary space by the solar wind because of the lack of a planetary magnetic",
    Earth:"Earth is the third planet from the Sun and the only astronomical object known to harbour and support life. 29.2% of Earth's surface is land consisting of continents and islands. The remaining 70.8% is covered with water, mostly by oceans, seas, gulfs, and other salt-water bodies, but also by lakes, rivers, and other freshwater, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years, while its interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convective mantle that drives plate tectonics. Earth's atmosphere consists mostly of nitrogen and oxygen. More solar energy is received by tropical regions than polar regions and is redistributed by atmospheric and ocean circulation. Greenhouse gases also play an important role in regulating the surface temperature. A region's climate is not only determined by latitude, but also by elevation and proximity to moderating oceans, among other factors. Severe weather, such as tropical cyclones, thunderstorms, and heatwaves, occurs in most areas and greatly impacts life.",
    Mars:"Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the 'Red Planet'. The latter refers to the effect of the iron oxide prevalent on Mars's surface, which gives it a reddish appearance, that is distinctive among the astronomical bodies visible to the naked eye. Mars is a terrestrial planet with a thin atmosphere, with surface features reminiscent of the impact craters of the Moon and the valleys, deserts and polar ice caps of Earth. The days and seasons are comparable to those of Earth, because the rotational period as well as the tilt of the rotational axis relative to the ecliptic plane are similar. Mars is the site of Olympus Mons, the largest volcano and highest known mountain on any planet in the Solar System, and of Valles Marineris, one of the largest canyons in the Solar System. The smooth Borealis basin in the Northern Hemisphere covers 40% of the planet and may be a giant impact feature. Mars has two moons, Phobos and Deimos, which are small and irregularly shaped. These may be captured asteroids, similar to 5261 Eureka, a Mars trojan.",
    Jupiter:"Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun. Jupiter is the third-brightest natural object in the Earth's night sky after the Moon and Venus. It has been observed since pre-historic times and is named after the Roman god Jupiter, the king of the gods, because of its observed size. Jupiter is primarily composed of hydrogen, but helium constitutes one quarter of its mass and one tenth of its volume. It likely has a rocky core of heavier elements, but like the other giant planets, Jupiter lacks a well-defined solid surface. The on-going contraction of its interior generates heat greater than the amount received from the Sun. Because of its rapid rotation, the planet's shape is that of an oblate spheroid; it has a slight but noticeable bulge around the equator. The outer atmosphere is visibly segregated into several bands at different latitudes, with turbulence and storms along their interacting boundaries. A prominent result of this is the Great Red Spot, a giant storm that is known to have existed since at least the 17th century, when it was first seen by telescope.",
    Saturn:"Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive. Saturn is named after the Roman god of wealth and agriculture. Its astronomical symbol (♄) has been traced back to the Greek Oxyrhynchus Papyri, where it can be seen to be a Greek kappa-rho with a cross-bar, as an abbreviation for Κρονος (Cronos), the Greek name for the planet. It later came to look like a lower-case Greek eta, with the cross added at the top in the 16th century. The Romans named the seventh day of the week Saturday, Sāturni diēs ('Saturn's Day') for the planet Saturn. Saturn's interior is most likely composed of a core of iron–nickel and rock (silicon and oxygen compounds). Its core is surrounded by a deep layer of metallic hydrogen, an intermediate layer of liquid hydrogen and liquid helium, and finally a gaseous outer layer. Saturn has a pale yellow hue due to ammonia crystals in its upper atmosphere. An electrical current within the metallic hydrogen layer is thought to give rise to Saturn's planetary magnetic field, which is weaker than the Earth's, but which has a magnetic moment 580 times that of Earth due to Saturn's larger size. Saturn's magnetic field strength is around one-twentieth of Jupiter's. The outer atmosphere is generally bland and lacking in contrast, although long-lived features can appear. Wind speeds on Saturn can reach 1,800 km/h (1,100 mph; 500 m/s), higher than on Jupiter but not as high as on Neptune.",
    Uranus:"Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares (Mars), grandfather of Zeus (Jupiter) and father of Cronus (Saturn). It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as 'ice giants' to distinguish them from the other giant planets. Uranus's atmosphere is similar to Jupiter's and Saturn's in its primary composition of hydrogen and helium, but it contains more 'ices' such as water, ammonia, and methane, along with traces of other hydrocarbons. It has the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224 °C; −371 °F), and has a complex, layered cloud structure with water thought to make up the lowest clouds and methane the uppermost layer of clouds. The interior of Uranus is mainly composed of ices and rock.",
    Neptune:"Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere. The planet orbits the Sun once every 164.8 years at an average distance of 30.1 AU (4.5 billion km; 2.8 billion mi). It is named after the Roman god of the sea and has the astronomical symbol ♆, a stylised version of the god Neptune's trident or the Greek letter psi."
}

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
        var thisString = `Until ${thisUpdateDate}, ${thisCount} ${thisType}s have been discovered ...`
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
function makeOneCard (str) {
    var thisCard = document.createElement('div')
    var pictureLink = `../assets/media/${str}.jpg`
    var thisInnerHTMLContent = `
    <div class = 'card-image'>
        <figure class='image is-1by1'>
            <img src='${pictureLink}' id='${str}' alt='A picture of ${str}'>
        </figure>
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

    var thisPicLink = `../assets/media/${thisPlanet}.jpg`
    singlePlanetModalImg.innerHTML = `
    <img src='${thisPicLink}' id='${thisPlanet+'modalPicture'}' alt='A picture of ${thisPlanet}'>
    `

    singlePlanetDataEl.innerHTML = `
    <p>Aphelion: ${thisPlanetData.aphelion} km</p>
    <p>Perihelion: ${thisPlanetData.perihelion} km</p>
    <p>Average temperature: ${thisPlanetData.avgTemp} F</p>
    <p>Density: ${thisPlanetData.density} g/cm^3 </p>
    <p>Equatorial radius: ${thisPlanetData.equaRadius}</p>
    <p>gravity: ${thisPlanetData.gravity} m/s²</p>
    <p>Mass: ${thisPlanetData.mass.massValue} × 10^24 kg</p>
    `

    singlePlanetExplanationEl.innerHTML = planetIntroText[thisPlanet]

    planetModal.setAttribute('class','modal is-active')

    var backBtnEl = document.getElementById('closeModal')
    backBtnEl.addEventListener('click',closeModal)
}

// Main program ========================================================================

// Create buttons for each planet
planetArray.forEach(planet => makeOneCard(planet))

// get planets count
updateFact()
// render planet count every 6 seconds
setInterval(renderFacts, 6000)
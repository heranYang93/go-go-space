async function getCrewmatesData() {
  var crewmate1
  // var link = "http://api.open-notify.org/astros.json"
  var link = "https://course-anywhere.herokuapp.com/http://api.open-notify.org/astros.json"
  var temp = await fetch(link)
 
    .then(function (response) {
      return response.json();
    })

    .then(function(data){
      
      var astronautData = data.people
      var idToDisplay = 0

      console.log(astronautData)

      for (var i=0; i<astronautData.length; i++){
        if (astronautData[i].craft === 'ISS'){

          idToDisplay ++
          console.log()
          var thisCrewmateEl = document.createElement('li')
          thisCrewmateEl.innerHTML=`<span id="mate${idToDisplay}">${astronautData[i].name}</span>`
          document.querySelector('.crewmatelist').append(thisCrewmateEl)
        }
      }
    })

    .catch(function(error){
      alert("Crewmate API Error")
    })

}

async function getcrewmate(){
  var thiscrewmate = await getCrewmatesData()
}

getcrewmate()


const apiKey = 'UaWknbnWsvyuM0VWhrFgLs4wp4NbACoDTvD8JlXi'
const APoD = 'https://api.nasa.gov/planetary/apod?api_key=' + apiKey //Astronomy picture of the day
const insight = 'https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0' //Mars weather

const mars_RoverOptArray = ['Curiosity','Opportunity','Spirit']//Mars rover name array
const cameraArray = [['FHAZ','RHAZ','MAST','CHEMCAM','MAHLI','MARDI','NAVCAM'],['FHAZ','RHAZ','NAVCAM','PANCAM','MINITES'],['FHAZ','RHAZ','NAVCAM','PANCAM','MINITES']]
var selRover = 0
var selCamera = 1
const marse_RoverQuery = `https://api.nasa.gov/mars-photos/api/v1/rovers/${mars_RoverOptArray[selRover]}/photos?camera=${cameraArray[selRover][selCamera]}&pa&api_key=${apiKey}`


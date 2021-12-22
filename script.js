var offset=0
var spideyCardEl=document.getElementById("spideyCard")
var img404="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_uncanny.jpg"
var thorCardEl=document.getElementById("thorCard")
var pantherCardEl=document.getElementById("pantherCard")
var xMenCardEl=document.getElementById("x-MenCard")



  spideyCardEl.addEventListener("click",function(event){
    var id=1009610
    var charName= "Spider-man"
    location.replace("./cardindex.html")
    getCharacter(id,0,charName)
  })


  thorCardEl.addEventListener("click",function(event){
    var id=1009610
    var charName= "Thor"
  })



  pantherCardEl.addEventListener("click",function(event){
    var id=1009610
    var charName= "Black Panther"
  })

function getThor(){
  var id=1009664
  fetch("https://gateway.marvel.com/v1/public/characters/"+id+"/comics?apikey=0b48117c76f758b006d4965cec8c77de&hash=5dcc745e0dd3368d15664b831a173cde&ts=1640054832677&limit=20&offset="+offset)

    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log (data);
        for (var i=0; i<data.data.results.length; i++){
          var aEl=document.createElement("a")
          aEl.setAttribute("href", data.data.results[i].urls[0].url)
          var imgEl=document.createElement("img")
          var imgUrl=data.data.results[i].images[0]?.path
          var imgExtension=data.data.results[i].images[0]?.extension
          if (!imgUrl){
            imgUrl=img404
          } else {
            imgUrl=imgUrl+"/portrait_uncanny."+imgExtension
          }
          console.log(imgUrl)
          imgEl.setAttribute("src", imgUrl)
          imgEl.setAttribute("alt", "work")
          aEl.append(imgEl)
          thorCardEl.append(aEl)  
        }
        
      });
}


function getBlackPanther(){
  var id=1009187
  fetch("https://gateway.marvel.com/v1/public/characters/"+id+"/comics?apikey=0b48117c76f758b006d4965cec8c77de&hash=5dcc745e0dd3368d15664b831a173cde&ts=1640054832677&limit=20&offset="+offset)

    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log (data);
        for (var i=0; i<data.data.results.length; i++){
          var aEl=document.createElement("a")
          aEl.setAttribute("href", data.data.results[i].urls[0].url)
          var imgEl=document.createElement("img")
          var imgUrl=data.data.results[i].images[0]?.path
          var imgExtension=data.data.results[i].images[0]?.extension
          if (!imgUrl){
            imgUrl=img404
          } else {
            imgUrl=imgUrl+"/portrait_uncanny."+imgExtension
          }
          console.log(imgUrl)
          imgEl.setAttribute("src", imgUrl)
          imgEl.setAttribute("alt", "work")
          aEl.append(imgEl)
          pantherCardEl.append(aEl)  
        }
        
      });
}

function getXmen(){
  var id=1009188
  fetch("https://gateway.marvel.com/v1/public/characters/"+id+"/comics?apikey=0b48117c76f758b006d4965cec8c77de&hash=5dcc745e0dd3368d15664b831a173cde&ts=1640054832677&limit=20&offset="+offset)

    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log (data);
        for (var i=0; i<data.data.results.length; i++){
          var aEl=document.createElement("a")
          aEl.setAttribute("href", data.data.results[i].urls[0].url)
          var imgEl=document.createElement("img")
          var imgUrl=data.data.results[i].images[0]?.path
          var imgExtension=data.data.results[i].images[0]?.extension
          if (!imgUrl){
            imgUrl=img404
          } else {
            imgUrl=imgUrl+"/portrait_uncanny."+imgExtension
          }
          console.log(imgUrl)
          imgEl.setAttribute("src", imgUrl)
          imgEl.setAttribute("alt", "work")
          aEl.append(imgEl)
          xMenCardEl.append(aEl)  
        }
        
      });
}

getBlackPanther()
getComic()
getParker()
getThor()

mapboxgl.accessToken = "pk.eyJ1Ijoia2dhcnplbGxvbmkiLCJhIjoiY2t4Z2ZiNGFzMXpubzJ2c3RmajgwdDhvbCJ9.TUr86IuVKdUCu6QQArj6aw";
var map = new mapboxgl.Map({
  container: 'map', // HTML container id
  style: 'mapbox://styles/mapbox/streets-v9', // style URL
  center: [-21.9270884, 64.1436456], // starting position as [lng, lat]
  zoom: 13
});
var marker = new mapboxgl.Marker()
.setLngLat([-21.9270884, 64.1436456])
.addTo(map);

getXmen()

mapboxgl.accessToken =
"pk.eyJ1Ijoia2dhcnplbGxvbmkiLCJhIjoiY2t4Z2ZiNGFzMXpubzJ2c3RmajgwdDhvbCJ9.TUr86IuVKdUCu6QQArj6aw";
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9 // starting zoom
});

getXmen()


mapboxgl.accessToken =
"pk.eyJ1Ijoia2dhcnplbGxvbmkiLCJhIjoiY2t4Z2ZiNGFzMXpubzJ2c3RmajgwdDhvbCJ9.TUr86IuVKdUCu6QQArj6aw";
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9 // starting zoom
});

getXmen()

  xMenCardEl.addEventListener("click",function(event){
    var id=1009610
    var charName= "X-men"
  })

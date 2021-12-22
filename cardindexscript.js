const cardEl=document.getElementById("card-comics")
const nextPageEl= document.getElementById("nextPage")
const previousPageEl= document.getElementById("previousPage")

function getCharacter(id,offset,charName){
cardEl.innerHTML=""
    var img404="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_uncanny.jpg"
    fetch("https://gateway.marvel.com/v1/public/characters/"+id+"/comics?apikey=0b48117c76f758b006d4965cec8c77de&hash=5dcc745e0dd3368d15664b831a173cde&ts=1640054832677&limit=20&offset="+offset)
    
      .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log (data);
          var h1El=document.createElement("h1")
          h1El.textContent=charName
          cardEl.append(h1El)
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
          
            imgEl.setAttribute("src", imgUrl)
            imgEl.setAttribute("alt", "work")
            aEl.append(imgEl)
            cardEl.append(aEl)  
          }
          
        });
  } 
//   getCharacter(1009610,0,"Spider-man")

nextPageEl.addEventListener("click",function(event){
    var nextPage=event.target.parentNode.parentElement
    var offset= parseInt(nextPage.attributes[0].value)
   nextPage.children[0].classList.remove("disabled")
   var newOffset= offset+20
   nextPage.attributes[0].value=newOffset
   getCharacter(1009610,newOffset,"Spider-man")
})

    

previousPageEl.addEventListener("click",function(event){
    var previousPage=event.target.parentElement
    console.log(previousPage)
    var offset= parseInt(previousPage.attributes[0].value)
    var newOffset= offset-20
    previousPage.attributes[0].value=newOffset
     getCharacter(1009610,newOffset,"Spider-man")
    
})
getCharacter(1009610,0,"Spider-man")
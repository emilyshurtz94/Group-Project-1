
var offset=0
var spideyCardEl=document.getElementById("spideyCard")
var img404="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_uncanny.jpg"
var thorCardEl=document.getElementById("thorCard")
var pantherCardEl=document.getElementById("pantherCard")
var xMenCardEl=document.getElementById("x-MenCard")
const cardEl=document.getElementById("card-comics")
const nextPageEl= document.getElementById("nextPage")
const previousPageEl= document.getElementById("previousPage")
const currentPageEl=document.getElementById("current")

    var getComic =()=>{
      var timeStamp=Date.now()
      console.log(timeStamp)
    
      fetch("https://gateway.marvel.com/v1/public/characters?apikey=0b48117c76f758b006d4965cec8c77de&hash=5dcc745e0dd3368d15664b831a173cde&ts=1640054832677&limit=100")
        .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log (data);
          });
    }  
    spideyCardEl.addEventListener("click",function(){
     spideyCardEl.style.display="none";
     thorCardEl.style.display="none";
     pantherCardEl.style.display="none";
     xMenCardEl.style.display="none";
    cardEl.style.display = "block";
      getParker(1009610,0,"Spider-man")
    })
    function getParker(id,offset,charName){
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
      // nextPageEl.addEventListener("click",function(event){
      //     var nextPage=event.target.parentNode.parentElement
      //     var offset= parseInt(nextPage.attributes[0].value)
      //    nextPage.children[0].classList.remove("disabled")
      //    var newOffset= offset+20
      //    nextPage.attributes[0].value=newOffset
      //    getParker(1009610,newOffset,"Spider-man")
      // })
      // previousPageEl.addEventListener("click",function(event){
      //     var previousPage=event.target.parentElement
      //     console.log(previousPage)
      //     var offset= parseInt(previousPage.attributes[0].value)
      //     var newOffset= offset-20
      //     previousPage.attributes[0].value=newOffset
      //      getParker(1009610,newOffset,"Spider-man")
          
      // })

      thorCardEl.addEventListener("click",function(){
        spideyCardEl.style.display="none";
        thorCardEl.style.display="none";
        pantherCardEl.style.display="none";
        xMenCardEl.style.display="none";
       cardEl.style.display = "block";
         getThor(1009664,0,"Thor")
       })

       function getThor(id,offset,charName){
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
        //  nextPageEl.addEventListener("click",function(event){
        //      var nextPage=event.target.parentNode.parentElement
        //      var offset= parseInt(nextPage.attributes[0].value)
        //     nextPage.children[0].classList.remove("disabled")
        //     var newOffset= offset+20
        //     nextPage.attributes[0].value=newOffset
        //     getThor(1009664,newOffset,"Thor")
        //  })
        //  previousPageEl.addEventListener("click",function(event){
        //      var previousPage=event.target.parentElement
        //      console.log(previousPage)
        //      var offset= parseInt(previousPage.attributes[0].value)
        //      var newOffset= offset-20
        //      previousPage.attributes[0].value=newOffset
        //       getThor(1009664,newOffset,"Thor")
             
        //  })
         pantherCardEl.addEventListener("click",function(){
          spideyCardEl.style.display="none";
          thorCardEl.style.display="none";
          pantherCardEl.style.display="none";
          xMenCardEl.style.display="none";
         cardEl.style.display = "block";
           getPanther(1009187,0,"Black Panther")
         })
         function getPanther(id,offset,charName){
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
          //  nextPageEl.addEventListener("click",function(event){
          //      var nextPage=event.target.parentNode.parentElement
          //      var offset= parseInt(nextPage.attributes[0].value)
          //     nextPage.children[0].classList.remove("disabled")
          //     var newOffset= offset+20
          //     nextPage.attributes[0].value=newOffset
          //     getPanther(1009187,newOffset,"Black Panther")
          //  })
          //  previousPageEl.addEventListener("click",function(event){
          //      var previousPage=event.target.parentElement
          //      console.log(previousPage)
          //      var offset= parseInt(previousPage.attributes[0].value)
          //      var newOffset= offset-20
          //      previousPage.attributes[0].value=newOffset
          //       getPanther(1009187,newOffset,"Black Panther")
               
          //  })
           xMenCardEl.addEventListener("click",function(){
            spideyCardEl.style.display="none";
            thorCardEl.style.display="none";
            pantherCardEl.style.display="none";
            xMenCardEl.style.display="none";
            cardEl.style.display = "block";
             getXmen(1009188,0,"X-men")
           })

           function getXmen(id,offset,charName){
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
            //  nextPageEl.addEventListener("click",function(event){
            //      var nextPage=event.target.parentNode.parentElement
            //      var offset= parseInt(nextPage.attributes[0].value)
            //     nextPage.children[0].classList.remove("disabled")
            //     var newOffset= offset+20
            //     nextPage.attributes[0].value=newOffset
            //     getThor(1009188,newOffset,"Thor")
            //  })
            //  previousPageEl.addEventListener("click",function(event){
            //      var previousPage=event.target.parentElement
            //      console.log(previousPage)
            //      var offset= parseInt(previousPage.attributes[0].value)
            //      var newOffset= offset-20
            //      previousPage.attributes[0].value=newOffset
            //       getXmen(1009188,newOffset,"X-men")
                 
            //  })
getComic()



// mapboxgl.accessToken = "pk.eyJ1Ijoia2dhcnplbGxvbmkiLCJhIjoiY2t4Z2ZiNGFzMXpubzJ2c3RmajgwdDhvbCJ9.TUr86IuVKdUCu6QQArj6aw";
// var map = new mapboxgl.Map({
//   container: 'map', // HTML container id
//   style: 'mapbox://styles/mapbox/streets-v9', // style URL
//   center: [-21.9270884, 64.1436456], // starting position as [lng, lat]
//   zoom: 13
// });
// var marker = new mapboxgl.Marker()
// .setLngLat([-21.9270884, 64.1436456])
// .addTo(map);


// mapboxgl.accessToken =
// "pk.eyJ1Ijoia2dhcnplbGxvbmkiLCJhIjoiY2t4Z2ZiNGFzMXpubzJ2c3RmajgwdDhvbCJ9.TUr86IuVKdUCu6QQArj6aw";

// const map = new mapboxgl.Map({
// container: 'map', // container ID
// style: 'mapbox://styles/mapbox/streets-v11', // style URL
// center: [-74.5, 40], // starting position [lng, lat]
// zoom: 9 // starting zoom
// });

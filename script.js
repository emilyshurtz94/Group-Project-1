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


  xMenCardEl.addEventListener("click",function(event){
    var id=1009610
    var charName= "X-men"
  })

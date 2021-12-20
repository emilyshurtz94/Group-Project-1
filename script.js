var getComics = fetch("https://gateway.marvel.com:443/v1/public/characters/marvel/comics?apikey=be0e3fcf555a0c55bcc2dcf259693ba6c0f377c1")
  
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log (data);
      });
      


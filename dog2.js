document.getElementById('myButton').addEventListener('click', function(){

    axios.get('https://dog.ceo/api/breeds/image/random').then(function(response){
        
        var dogImageURL = response.data.message;
        
        var newImg = document.createElement('img');

        newImg.attr.src = dogImageURL;

        document.getElementById('dogImageContainer').appendChild(newimg);

    });


});
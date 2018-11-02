function generateDog() {
    axios.get('https://dog.ceo/api/breeds/image/random').then(function (data) {
        document.getElementById('imageContent').innerHTML = `
        <img src="${data.data.message}"/>
        `
      })
      document.getElementById('dogGen').innerHTML = "Hecking Good Boye, Generate another!"
}


// This changes the text on the button once the button has been clicked. 

function changeText() {
    document.getElementById('dogGen').innerHTML = "Generating Doggo";
}


document.getElementById('dogGen').addEventListener('click', generateDog)




function generateDog() {
    axios.get('https://dog.ceo/api/breed/frise/images').then(function (response) {
        document.getElementById('imageContent').innerHTML = `
        <img src="${response.data.message}"/>
        `
      })
}

function changeText() {
    document.getElementById('dogGen').innerHTML = "Generating Doggo";
}


document.getElementById('dogGen').addEventListener('click', generateDog)




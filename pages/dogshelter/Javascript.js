//Page---dogsh//

    //Page---breed// 
    async function start(){
        const response =await fetch("https://dog.ceo/api/breeds/list/all")
        const data = await response.json()
        creatBreedList(data.message)
    }

    start()
    function creatBreedList(breedList) {
        document.getElementById("breed").innerHTML= `
        <select onchange="loadByBreed(this.value)"> 
            <option> Choose a dog breed </option> 
            ${Object.keys(breedList).map(function (breed){
                return`<option> ${breed} </option>`
            }).join('')} //array//
            </select> 

        `
    }
async function loadByBreed(breed){
if (breed!= "Choose a dog breed"){
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
    const data = await response.json()
    creatSlide(data.message)
}
}

function creatSlide(images) {
document.getElementById("show").innerHTML=`
<div class="slide" style="background-image: url('${images[0]}')"></div>
`}

function showText() {
    document.getElementById("text").innerHTML= "POWER UP! THANK YOU SO MUCH!";
}

function myFunction(alert){
    alert("Recieved! Thank you!");
}
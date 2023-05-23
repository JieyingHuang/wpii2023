//Page---dogsh//

    //Page---breed// 

    console.log("Start");

    const BASE_API_URL = "https://api.thedogapi.com/v1";
    const API_KEY = "YOUR_API_KEY"; // Replace with your API key
    
    const fetchDoggoBreeds = async () => {
      try {
        const response = await fetch(`${BASE_API_URL}/breeds?api_key=${API_KEY}`);
        const dogBreeds = await response.json();
        populateDoggoSelect(dogBreeds);
      } catch (error) {
        console.error('Error fetching dog breeds:', error);
      }
    };
    
    const populateDoggoSelect = (breeds) => {
      const select = document.querySelector('.breed-select');
      breeds.forEach(breed => {
        const option = document.createElement('option');
        option.text = breed.name;
        option.value = breed.id;
        select.appendChild(option);
      });
    
      // Trigger the change event for the initial selected breed
      select.dispatchEvent(new Event('change'));
    };
    
    const DoggoImage = (imgUrl) => {
      const imgElement = document.querySelector('#doggo-image');
      imgElement.setAttribute('src', imgUrl);
    };
    
    const createDescriptionEntry = ({ label, value }) => {
      const descriptionTerm = document.createElement('dt');
      descriptionTerm.textContent = label;
      const descriptionValue = document.createElement('dd');
      descriptionValue.textContent = value;
      const parentElement = document.querySelector('#doggo-description');
      parentElement.appendChild(descriptionTerm);
      parentElement.appendChild(descriptionValue);
    };
    
    const DoggoDescription = (breed) => {
      const parentElement = document.querySelector('#doggo-description');
      parentElement.innerHTML = ''; // Clear existing description entries
    
      for (const key in breed) {
        if (key !== 'id' && key !== 'name') {
          createDescriptionEntry({
            label: key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' '),
            value: breed[key]
          });
        }
      }
    };
    
    const getDogByBreed = async (breedId) => {
      try {
        const response = await fetch(`${BASE_API_URL}/images/search?breed_id=${breedId}&limit=1&api_key=${API_KEY}`);
        const data = await response.json();
        const imgUrl = data[0]?.url;
        if (imgUrl) {
          DoggoImage(imgUrl);
        } else {
          document.querySelector('#doggo-image').setAttribute('src', ''); // Clear the image if URL is not available
        }
    
        const breedResponse = await fetch(`${BASE_API_URL}/breeds/${breedId}?api_key=${API_KEY}`);
        const breedData = await breedResponse.json();
        DoggoDescription(breedData);
      } catch (error) {
        console.error('Error fetching dog by breed:', error);
      }
    };
    
    const changeDoggo = () => {
      const breedId = document.querySelector('.breed-select').value;
      getDogByBreed(breedId);
    };
    
    fetchDoggoBreeds();
    
    

//page---dogtreat//s
function showText() {
    document.getElementById("text").innerHTML= "POWER UP! THANK YOU SO MUCH!";
}

function myFunction(alert){
    alert("Recieved! Thank you!");
}


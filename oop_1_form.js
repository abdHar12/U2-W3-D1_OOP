class Pet {
  constructor(petName, nameOwner, specie, breed) {
    this.petName = petName;
    this.nameOwner = nameOwner;
    this.specie = specie;
    this.breed = breed;
  }

  static sameOwner(x, y) {
    if (x.nameOwner === y.nameOwner) {
      return `${x.petName} e ${y.petName} hanno lo stesso proprietario`;
    } else {
      return `${x.petName} e ${y.petName} NON hanno lo stesso proprietario`;
    }
  }
}
const pets = [];

window.onload = () => {
  const form = document.getElementsByTagName("form")[0];
  const h1 = document.getElementsByTagName("h1")[0];

  form.onsubmit = (e) => {
    h1.style.display = "none";

    const petNameField = document.getElementById("name-of-pet-input");
    const ownerNameField = document.getElementById("name-of-owner-input");
    const speciesField = document.getElementById("species-input");
    const breedField = document.getElementById("breed-input");
    e.preventDefault();
    if (
      petNameField.value !== "" &&
      ownerNameField.value !== "" &&
      speciesField.value !== "" &&
      breedField.value !== ""
    ) {
      const newAnimal = new Pet(
        petNameField.value,
        ownerNameField.value,
        speciesField.value,
        breedField.value
      );
      petNameField.value = "";
      ownerNameField.value = "";
      speciesField.value = "";
      breedField.value = "";
      if (pets.length < 2) {
        pets.push(newAnimal);
        console.log(newAnimal);
        console.log(pets);
        if (pets.length === 2) {
          h1.style.display = "block";
          h1.innerText = Pet.sameOwner(pets[0], pets[1]);
          const stList = document.getElementById("st-list");
          const ndList = document.getElementById("nd-list");
          const propertyNames1 = Object.keys(pets[0]);
          const propertyValues1 = Object.values(pets[0]);
          const propertyNames2 = Object.keys(pets[1]);
          const propertyValues2 = Object.values(pets[1]);
          for (let i = 0; i < propertyNames1.length; i++) {
            const li = document.createElement("li");
            stList.appendChild(li);
            li.innerText = propertyNames1[i] + ": " + propertyValues1[i];
          }
          for (let i = 0; i < propertyNames2.length; i++) {
            const li = document.createElement("li");
            ndList.appendChild(li);
            li.innerText = propertyNames2[i] + ": " + propertyValues2[i];
          }
          pets.length = 0;
        }
      }
    }
  };
};

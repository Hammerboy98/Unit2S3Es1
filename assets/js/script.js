class User {
    constructor(firstName, lastName, age, location) {
      this.name = firstName;
      this.surname = lastName;
      this.age = age;
      this.location = location;
    }
    static isSameAge(user1, user2) {
      return user1.age === user2.age;
    }
  }
  
  const person1 = new User("Ettore", "Ciammella", 26, "Orvieto");
  const person2 = new User("Andrea", "Bianchi", 25, "Bologna");
  const person3 = new User("Claudia", "Pippo", 25, "Perugia");
  const person4 = new User("Marco", "Neri ", 26, "Roma");
  
  console.log(User.isSameAge(person1, person2));
  console.log(User.isSameAge(person1, person3));
  console.log(User.isSameAge(person2, person3));
  console.log(User.isSameAge(person1, person4));
  
  let pets = [];
  const form = document.getElementById("form");
  const nomePet = document.getElementById("nomePet");
  const Proprietario = document.getElementById("Proprietario");
  const Specie = document.getElementById("Specie");
  const Razza = document.getElementById("Razza");
  
  class Pet {
    constructor(nomePet, Proprietario, Specie, Razza) {
      this.nomePet = nomePet;
      this.Proprietario = Proprietario;
      this.Specie = Specie;
      this.Razza = Razza;
  
      pets.push(this);
    }
  
    static hasSameOwner(pet1, pet2) {
      return pet1.Proprietario === pet2.Proprietario;
    }
  }
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    new Pet(nomePet.value, Proprietario.value, Specie.value, Razza.value);
    savePets();
  
    form.reset();
  });
  
  const tbody = document.querySelector("tbody");
  
  let ownerColors = {};
  
  function randomColor() {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      let randomColor = Math.floor(Math.random() * 16).toString(16);
      color += randomColor;
    }
  
    return color;
  }
  
  const savePets = () => {
    tbody.innerHTML = "";
  
    pets.forEach((pet, index) => {
      const trPets = document.createElement("tr");
      trPets.innerHTML = `<td>${index + 1}</td> <td>${pet.nomePet}</td> <td>${
        pet.Proprietario
      }</td> <td>${pet.Specie}</td> <td>${pet.Razza}</td>`;
  
      let ownerColor = ownerColors[pet.Proprietario];
      if (!ownerColor) {
        ownerColor = randomColor();
        ownerColors[pet.Proprietario] = ownerColor;
      }
  
      pets.forEach((otherPet, otherIndex) => {
        if (index !== otherIndex && Pet.hasSameOwner(pet, otherPet)) {
          const tdSameOwner = trPets.querySelectorAll("td")[2];
          tdSameOwner.style.backgroundColor = ownerColor;
        }
      });
  
      tbody.appendChild(trPets);
    });
  };
import { addDragons, average, createButton, createSearchBarre } from "./core/utils"; 
import "./style.css";


import {dragons} from "./core/dragons";

document.addEventListener("DOMContentLoaded", (event) => {
console.log(dragons);
  
  const fireLogo = 'https://static.vecteezy.com/system/resources/previews/010/161/401/original/red-fire-free-png.png';
  const waterLogo = 'https://static.vecteezy.com/system/resources/previews/017/193/880/original/blue-water-drop-isolated-icon-illustration-free-png.png';

  for(let dragon of dragons){
    const sectionCardContainer = document.getElementById('section-card-container');
    const divCard = document.createElement('div');
    const divTitle = document.createElement('div');
    divTitle.classList.add('div-title');
    divCard.classList.add('card');
    const imgCard = document.createElement('img');
    const imgLogoFire = document.createElement('img');
    const imgLogoWater = document.createElement('img');
    imgLogoFire.classList.add('img-logo-fire');
    imgLogoWater.classList.add('img-logo-water');
    imgLogoFire.src = fireLogo;
    imgLogoWater.src = waterLogo;
    imgCard.classList.add('card-img');
    const divCardBody = document.createElement('div');
    divCardBody.classList.add('card-body');
    const h5 = document.createElement('h5');
    const textType = document.createElement('p');
    h5.classList.add('card-title');
    textType.classList.add('card-type');
    const p = document.createElement('p');
    p.classList.add('card-text');
    const buttonCard = document.createElement('button');
    buttonCard.classList.add('card-btn');
    buttonCard.id = "open-modal"
    
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close');


    
    buttonCard.addEventListener('click', function() {
      // const relations = dragons.map(e => e.relations.find(el => el == dragon.id) ? e.name : false)
      // console.log(dragon.relations.map(e => dragons.filter(e => dragons.id == e)));
      const relatedDragons = dragons.filter(d => dragon.relations.includes(d.id));
      console.log(relatedDragons.map(e => e.name));
      // console.log(dragons.map(el => el.id.filter(e => e == dragon.relations.map(e => e))));
      // console.log(relations);
      //console.log(relations.map((e => dragons.filter(dragon => dragon.relations == e))));
      //console.log(relations.map((e => dragons.filter(dragon => dragon.relations == e))));
      const titleModal = document.getElementById('title-modal');
      titleModal.textContent = " Les relations du dragon " + dragon.name + ':';
      const paragraphModal = document.getElementById('content-modal');
      paragraphModal.textContent = relatedDragons.map(e => " " + e.name + " id: "  + e.id)
      modal.style.display = 'block';
    });
  
    closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    
    if(dragon.element === 'fire'){
      divTitle.appendChild(imgLogoFire);
      imgLogoFire.alt ="Logo d'une feu"
      textType.textContent = "Feu"
      imgCard.alt = "Image d'une dragon de feu";

    }else{
      divTitle.appendChild(imgLogoWater);
      textType.textContent = "Eau"
      imgLogoWater.alt ="Logo d'une goutte d'eau"
      imgCard.alt = "Image d'une dragon d'eau";

    }

    imgCard.src = dragon.img;
    h5.textContent = dragon.name;
    p.textContent = "Force : " + dragon.notes.reduce((total, value) => total + value ) / 4;
    buttonCard.textContent = "Voir relations";
    divTitle.appendChild(h5);
    divTitle.appendChild(textType);
    divCardBody.appendChild(divTitle);
    divCardBody.appendChild(p);
    divCardBody.appendChild(buttonCard);
    divCard.appendChild(imgCard);
    divCard.appendChild(divCardBody);
    sectionCardContainer.appendChild(divCard); 

    
  }

  const searchInputName = document.getElementById('search-input-name');
  const searchInputType = document.getElementById('search-input-type');

  searchInputName.addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    filterDragons(searchTerm);
  });

  searchInputType.addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    filterDragonsType(searchTerm);
  });

  function filterDragons(searchTerm) {
    const sectionCardContainer = document.getElementById('section-card-container');
    const dragons = document.getElementsByClassName('card');
  
    for (let i = 0; i < dragons.length; i++) {
      const dragon = dragons[i];
      const dragonName = dragon.querySelector('.card-title').textContent.toLowerCase();
  
      if (dragonName.includes(searchTerm)) {
        dragon.style.display = 'block';
      } else {
        dragon.style.display = 'none';
      }
    }
  }
  function filterDragonsType(searchTerm) {
    const sectionCardContainer = document.getElementById('section-card-container');
    const dragons = document.getElementsByClassName('card');
  
    for (let i = 0; i < dragons.length; i++) {
      const dragon = dragons[i];
      const dragonName = dragon.querySelector('.card-type').textContent.toLowerCase();
      if (dragonName.includes(searchTerm)) {
        dragon.style.display = 'block';
      } else {
        dragon.style.display = 'none';
      }
    }
  }
});



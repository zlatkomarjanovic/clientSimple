var nameOf = document.querySelector('#name');
var priceOf = document.querySelector('#price');

var size = document.querySelector('#size');
var height = document.querySelector('#height');
var width = document.querySelector('#width');
var lenght = document.querySelector('#lenght');
var weight = document.querySelector('#weight');
var listOfDiv = document.querySelector('#listOfDiv');
var h1Tag = document.querySelector('#h1Tag');

var sku = document.getElementById('colFormLabelLg sku');

const addBTN = document.querySelector('#add-product-btn');

addBTN.addEventListener("click", myFunction);

function myFunction(){
    
    h1Tag.remove();
    var divOnDiv = document.createElement("div");
    divOnDiv.classList.add("divOnDiv");
    listOfDiv.appendChild(divOnDiv);
    
    var scDiv = document.createElement("div");
    scDiv.classList.add("sc-div");
    divOnDiv.appendChild(scDiv);
    
    scDiv.textContent = sku.value; 
    
}












const url = "https://api.sheetbest.com/sheets/1ec1ec4c-ed02-4c9c-b2f5-1aa26bae9b95";

fetch(url)

.then(res => res.json())

.then(data => {

let container = document.getElementById("testimoni-container");

container.innerHTML = "";

data.forEach(item => {

container.innerHTML += `

<div class="card">

<p class="rating">${item.Rating}</p>

<p>${item.Testimoni}</p>

<span>${item.Nama}</span>

</div>

`

})

})

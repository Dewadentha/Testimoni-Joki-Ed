const url = "https://api.sheetbest.com/sheets/1ec1ec4c-ed02-4c9c-b2f5-1aa26bae9b95";

fetch(url)

.then(res => res.json())

.then(data => {

let container = document.getElementById("testimoni-container");

container.innerHTML = "";

data.reverse().forEach(item => {

container.innerHTML += `

<div class="card">

<h3>${item.Nama || "Anonim"}</h3>

<p><b>Level ED:</b> ${item["Level ED"]}</p>

<p><b>Unit yang dijoki:</b> ${item["Berapa unit yang yang kamu joki"]}</p>

<p class="komen">"${item["Adakah Kritik / Saran yang mau kamu berikan?"]}"</p>

</div>

`

})

})

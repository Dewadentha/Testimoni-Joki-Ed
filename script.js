fetch("LINK_API_SHEET")
.then(res => res.json())
.then(data => {

let container = document.getElementById("testimoni")

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

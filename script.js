const data = [
{
nama:"Andi",
rating:"⭐⭐⭐⭐⭐",
pesan:"Cepat banget pengerjaannya"
},
{
nama:"Rina",
rating:"⭐⭐⭐⭐⭐",
pesan:"Trusted, unit selesai semua"
},
{
nama:"Dika",
rating:"⭐⭐⭐⭐",
pesan:"Harga murah dan cepat"
}
]

let container = document.getElementById("testimoni-container")

data.forEach(t=>{
container.innerHTML += `
<div class="testi">
<h4>${t.nama}</h4>
<p>${t.rating}</p>
<p>${t.pesan}</p>
</div>
`
})

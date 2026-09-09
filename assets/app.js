const WHATSAPP = "5500000000000"; // TROQUE pelo WhatsApp da BMC, com DDI +55, sem espaços.
const bikes = [
  {name:"CB 650R", year:"2024", km:"4.000 km", price:"R$ 54.499", image:""},
  {name:"Lander 250", year:"2024", km:"12.000 km", price:"R$ 27.200", image:""},
  {name:"Start 160", year:"2023", km:"40.000 km", price:"Consulte", image:""},
  {name:"GT Continental Royal", year:"2021", km:"1.700 km", price:"Consulte", image:""}
];

function wa(message){
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}
document.querySelectorAll("#whatsappTop,#whatsappHero,#whatsappContact").forEach(el=>{
  el.href=wa("Olá, BMC Motos! Vi o site e quero saber sobre as motos disponíveis.");
});
document.getElementById("year").textContent = new Date().getFullYear();

function render(list){
  const box=document.getElementById("inventory");
  box.innerHTML=list.map(b=>`
    <article class="card">
      <div class="bike-image">${b.image ? `<img src="${b.image}" alt="${b.name}" style="width:100%;height:100%;object-fit:cover">` : "FOTO DA MOTO"}</div>
      <div class="card-body">
        <h3>${b.name}</h3>
        <div class="meta">${b.year} • ${b.km}</div>
        <div class="price">${b.price}</div>
        <a class="btn btn-yellow" target="_blank" href="${wa(`Olá, BMC Motos! Tenho interesse na ${b.name} ${b.year}.`)}">Tenho interesse</a>
      </div>
    </article>`).join("");
}
render(bikes);

document.getElementById("search").addEventListener("input", e=>{
  const q=e.target.value.toLowerCase();
  render(bikes.filter(b=>`${b.name} ${b.year} ${b.km}`.toLowerCase().includes(q)));
});
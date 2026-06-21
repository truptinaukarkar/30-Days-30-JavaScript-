
const input = document.querySelector(".container input");
const btn = document.querySelector(".container button");
const img = document.querySelector(".container img");


async function QrCode(){
    const text = input.value;
    const url =" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
    const repo = await fetch(url+`${text}`);
    img.src =`${repo.url}`;
    img.style.display="block";
}

btn.addEventListener("click", ()=>{
    QrCode();
})
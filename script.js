/* JAM */
const clock=document.getElementById("clock");
setInterval(()=>{
  const n=new Date();
  clock.textContent=
    String(n.getHours()).padStart(2,"0")+":"+
    String(n.getMinutes()).padStart(2,"0")+":"+
    String(n.getSeconds()).padStart(2,"0");
},1000);

/* GENERATE */
const upload=document.getElementById("upload");
const avatar=document.getElementById("avatarPhoto");
const preview=document.getElementById("preview");
const placeholder=document.getElementById("placeholder");
const usernameInput=document.getElementById("usernameInput");
const usernameText=document.getElementById("usernameText");

let ready=false;

upload.onchange=e=>{
  const r=new FileReader();
  r.onload=()=>{avatar.src=r.result;ready=true;}
  r.readAsDataURL(e.target.files[0]);
};

document.getElementById("generateBtn").onclick=()=>{
  if(!ready||!usernameInput.value)return alert("Lengkapi dulu!");
  usernameText.textContent=usernameInput.value;
  placeholder.style.display="none";
  preview.style.display="block";
  document.getElementById("resultBox")
    .scrollIntoView({behavior:"smooth"});
};

/* POPUP */
document.querySelector(".menu-trigger").onclick=()=>{
  document.getElementById("popup").classList.add("active");
};
document.getElementById("popup").onclick=e=>{
  if(e.target.id==="popup")e.target.classList.remove("active");
};
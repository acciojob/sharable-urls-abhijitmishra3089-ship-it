const name=document.getElementById("name");
const year=document.getElementById("year");
const btn=document.getElementById("button");
const heading=document.getElementById("url");
btn.addEventListener("click",()=>{
	heading.innerHTML=`https://localhost:8080/?name=${name.value}&year=${year.value}`
})

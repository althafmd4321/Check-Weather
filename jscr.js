const srcbox=document.querySelector(".search input");
const srcbtn=document.querySelector(".search button");
const image=document.querySelector(".wether-icon ");

   const apiKey="8532ba7035ce12c9a2d2db172d3d4078";
   const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
  async function checkwether(city){
     const response= await fetch(apiUrl +city+'&appid=8532ba7035ce12c9a2d2db172d3d4078');
     if (response.status==404){
   document.querySelector(".error").style.display="block";
   document.querySelector(".wether").style.display="none";
  }
  else{
  var data=await response.json();
  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
  document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
  document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
  if(data.weather[0].main="Cloud"){
   image.src="clouds.png"
  }
  else if(data.weather[0].main=="Clear"){
   image.src="clear.png"
  }
  else if(data.weather[0].main=="Rain"){
   image.src="rain.png"
  }
  else if(data.weather[0].main=="Drizzle"){
   image.src="drizzle.png"
  }
  else if(data.weather[0].main=="Mist"){
   image.src="mist.png"
  }
  document.querySelector(".wether").style.display="block";
 document.querySelector(".error").style.display="none";
  }
 }
  srcbtn.addEventListener("click",()=>{
   checkwether(srcbox.value);
  })
 
  

  
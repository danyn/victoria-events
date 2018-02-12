"use strict";

(function(){
  var weatherBox = document.getElementById("weather");
  var url = "https://api.openweathermap.org/data/2.5/weather?id=6174032";
  var apiKey = "63c24fb9208c9c02b3ee359d75e52dbf";
  var httpRequest;
  makeRequest(); 
  
  // create and send an XHR request 
  function makeRequest(){
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = responseMethod;
    httpRequest.open('GET', `${url}&appid=${apiKey}`);
    httpRequest.send();
    
   }//fn makeRequest
   
   //Handle XHR response 
   function responseMethod(){
    if(httpRequest.readyState === 4){
      if(httpRequest.status === 200){
        updateUISuccess(httpRequest.responseText);
      }else{
        updateUIError();
      }
      console.log(httpRequest.responseText);
    }
   }//fn responseMethod
    
  // handle xhr sucess
  function updateUISuccess(responseText) {
    var response = JSON.parse(responseText);
    var condition = response.weather[0];
    var temp = response.main.temp;
    weatherBox.innerHTML = `<p>It is currently ${temp} &#176 degrees.</p><p>${condition}</p>` ;
  }
// handle xhr error
  function updateUIError() {
    weatherBox.className = "hidden";
    
  }
  
})();

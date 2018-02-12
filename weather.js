"use strict";

(function(){
  var url = "http://api.openweathermap.org/data/2.5/weather?id=6174032";
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
      console.log(httpRequest.responseText);
    }
   }//fn responseMethod
    
  

})();

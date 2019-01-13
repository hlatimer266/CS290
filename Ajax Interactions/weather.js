      document.getElementById('urlSubmit').addEventListener('click', function(event){
      var req = new XMLHttpRequest();
      var payload ;
      payload = document.getElementById('location').value;
      console.log(payload);
      req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+payload+",us&appid=fa7d80c48643dfadde2cced1b1be6ca1", true);

      req.addEventListener('load',function(){
      if(req.status >= 200 && req.status < 400){
        var response = JSON.parse(req.responseText);
        console.log(JSON.parse(req.responseText));
      var response = JSON.parse(req.responseText);
      document.getElementById("Location").textContent = response.name;
      document.getElementById("Temp").textContent = response.main.temp + " K";
      document.getElementById("Humidity").textContent = response.main.humidity + " %";
      document.getElementById("WindSpeed").textContent = response.wind.speed + " mph";
      document.getElementById("Sunrise").textContent = response.sys.sunrise;
      event.preventDefault();
      } else {
        console.log("Error in network request: " + req.statusText);
      }});
    req.send(null);
    event.preventDefault();
      
      });
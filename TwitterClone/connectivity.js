  window.addEventListener("load", (event) => {
  navigator.onLine ? "Online" : "OFFline";
});

window.addEventListener("offline", (event) => {
  const statusDisplay = document.getElementById("backg");
  statusDisplay.innerHTML = " ";
  // statusDisplay.style.fontSize = "20px";
  // statusDisplay.style.textAlign = "center";
  // statusDisplay.style.fontFamily = "sans-serif";
  // statusDisplay.style.fontWeight = "bold";

  const image = document.createElement("img");
  image.src = "/favicon/internet_error.png";
  image.style.width = "100%" ;
  statusDisplay.append(image);
});

window.addEventListener("online", (event) => {
      const statusDisplay = document.getElementById("backg");
      statusDisplay.innerHTML = " ";
    
      const image = document.createElement("img");
      image.src = "/favicon/internet_ok.png";
      image.style.width = "100%" ;
      statusDisplay.append(image);
   setInterval(function() {
   window.location.reload();
  },5000 );
});
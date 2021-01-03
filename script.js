function currentTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour + 11) % 12 + 1;
  min = updateTime(min);
  sec = updateTime(sec);
  
  document.querySelector(".time").innerText = hour + " : " + min + " : " + sec;
  var t = setTimeout(function(){ currentTime() }, 1000);
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

currentTime();

function loadAnimation(){
  const clockHeader = document.querySelector(".clock-header");
  const clockBg = document.querySelector(".clock-bg");
  
  window.addEventListener("load", function(){
    clockHeader.style.opacity = "1";
    clockHeader.style.transform = "translateX(0)";
    clockHeader.style.transition = "2s ease"
    
    clockBg.style.opacity = "1";
    clockBg.style.transform = "translateX(0)";
    clockBg.style.transition = "2s ease"
  });
};

loadAnimation();

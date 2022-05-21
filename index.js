let screen = document.getElementById("screen");
let keys = document.querySelectorAll("button");
let screenValue = "";
screen.value=0;
for (val of keys) {
  val.addEventListener("click", (e) => {
    btnText = e.target.innerText;
    if (btnText == "×") {
      btnText = "*";
      screenValue += btnText;
      screen.value = screenValue;
    } else if (btnText == "÷") {
      btnText = "/";
      screenValue += btnText;
      screen.value = screenValue;
    } else if (btnText == "backspace") {
      screenValue = screenValue.slice(0, -1);
      screen.value = screenValue;
    } else if (btnText == "1/x") {
      
      screen.value = eval(1 / screenValue);
    } else if (btnText == "x 1/2") {
     
      screen.value = Math.sqrt(screenValue);
    } else if (btnText == "x2") {
    
      screen.value = screenValue * screenValue;
    } else if (btnText == "+/-") {
      screenValue = -screenValue;
      screen.value = screenValue;
    } else if (btnText == "CE" || btnText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (btnText == "=") {
      
        screen.value = eval(screenValue);
        screenValue=screen.value;
       
      } else {
      screenValue += btnText;
      screen.value = screenValue;
    }
  });
}

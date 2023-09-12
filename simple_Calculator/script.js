const buttons = document.querySelectorAll(".btn");
let input = document.querySelector(".input");
let expression = "";

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (event) => {
    try {
      switch (event.target.innerHTML) {
        case "=":
          expression = eval(expression);
          let express = expression.toString();
          if (express === "Infinity") {
            throw Error;
          }
          input.value = expression;
          break;
        case "C":
          expression = "";
          input.value = expression;
          break;
        case `<i class="bx bx-plus"></i>`:
          expression = expression += "+";
          input.value = expression;
          break;
        case `<i class="bx bx-minus"></i>`:
          expression = expression += "-";
          input.value = expression;
          break;
        case `<i class="bx bx-x"></i>`:
          expression = expression += "*";
          input.value = expression;
          break;
        default:
          expression = expression += event.target.innerHTML;
          input.value = expression;
          break;
      }
    } catch (err) {
      input.value = "Entered something invalid";
    }
  });
});

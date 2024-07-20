document.addEventListener("DOMContentLoaded", function () {
  const Resul = document.querySelector(".textbox-input");
  const boton = document.querySelectorAll("button");
  let dato = "";
  let dato2 = "";
  let operador = "";

  const actions = {
    numero: function (value) {
      dato += value;
      Resul.value = dato;
    },
    operador: function (value) {
      if (dato !== "") {
        dato2 = dato;
        operador = value;
        dato = "";
      }
    },
    function: function (value) {
      if (value === "√X") {
        dato = Math.sqrt(parseFloat(dato)).toString();
        Resul.value = dato;
      } else if (value === "X^") {
        dato2 = dato;
        operador = value;
        dato = "";
      }
    },
    igual: function () {
      if (operador && dato2 !== "" && dato !== "") {
        if (operador === "X^") {
          dato = Math.pow(parseFloat(dato2), parseFloat(dato)).toString();
        } else {
          const operacion = {
            "+": parseFloat(dato2) + parseFloat(dato),
            "-": parseFloat(dato2) - parseFloat(dato),
            "*": parseFloat(dato2) * parseFloat(dato),
            "/": parseFloat(dato2) / parseFloat(dato),
          };
          dato = operacion[operador].toString();
        }
        Resul.value = dato;
        dato2 = "";
        operador = "";
      }
    },
    clear: function () {
      dato = "";
      dato2 = "";
      operador = "";
      Resul.value = "";
    },
  };

  boton.forEach((button) => {
    button.addEventListener("click", function () {
      const value = this.textContent;
      const type = this.getAttribute("data-type");
      actions[type](value);
    });
  });
});
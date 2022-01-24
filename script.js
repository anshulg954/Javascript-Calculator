// Displays output of the calculator
function display(input) {
  document.getElementById("display_value").value += input;
}

//Clear the calculator screen
function clearScreen() {
  document.getElementById("display_value").value = "";
}

// Implementation @basic Calculator
function calculator() {
  let expression = document.getElementById("display_value").value;
  let result = eval(expression);
  document.getElementById("display_result").value = result;
}

//Clear the area calculator screen
function clear_form() {
  document.getElementById("figure_circle").hidden = true;
  document.getElementById("figure_triangle").hidden = true;
  document.getElementById("figure_square").hidden = true;
  document.getElementById("figure_rectangle").hidden = true;
  document.getElementById("figure_trapezoid").hidden = true;
  document.getElementById("figure_parallelogram").hidden = true;
  document.getElementById("figure_rhombus").hidden = true;
  document.getElementById("figure_kite").hidden = true;
  
  // Select the figure and show its inputs
  let figure = document.getElementById("figure").value;
  switch (figure) {
      case "circle":
          document.getElementById("figure_circle").hidden = false;
          break;
      case "triangle":
          document.getElementById("figure_triangle").hidden = false;
          break;
      case "square":
          document.getElementById("figure_square").hidden = false;
          break;
      case "rectangle":
          document.getElementById("figure_rectangle").hidden = false;
          break;
      case "trapezoid":
          document.getElementById("figure_trapezoid").hidden = false;
          break;
      case "parallelogram":
          document.getElementById("figure_parallelogram").hidden = false;
          break;
      case "rhombus":
          document.getElementById("figure_rhombus").hidden = false;
          break;
      case "kite":
          document.getElementById("figure_kite").hidden = false;
          break;
      default:
        break;
  }
}
//Calculate the area of the figure
function area(){
  let figure = document.getElementById("figure").value;
  let area = 0;
  switch (figure) {
    case "square":
      area = document.getElementById("side").value * document.getElementById("side").value;
      break;
    case "rectangle":
      area = document.getElementById("length").value * document.getElementById("width").value;
      break;
    case "circle":
      area = document.getElementById("radius").value * document.getElementById("radius").value * Math.PI;
      break;
    case "triangle":
      area = (document.getElementById("base").value * document.getElementById("height").value) / 2;
      break;
    case "trapezoid":
      const base1 = document.getElementById("base1").value;
      const base2 = document.getElementById("base2").value;
      var height1 = document.getElementById("height1").value;
      const base_sum = Number(base1)+ Number(base2);
      height1 = Number(height1);
      area = (base_sum * height1) / 2;
      break;
    case "parallelogram":
      area = document.getElementById("base_parallelogram").value * document.getElementById("height_parallelogram").value;
      break;
    case "rhombus":
      const diagonal1 = document.getElementById("diagonal1").value;
      const diagonal2 = document.getElementById("diagonal2").value;
      area = (Number(diagonal1) * Number(diagonal2)) / 2;
      break;
    case "kite":
      const diagonal_kite = document.getElementById("diagonal_kite").value;
      const height_kite = document.getElementById("height_kite").value;
      area = (Number(diagonal_kite) * Number(height_kite)) / 2;
      break;
    default:
      break;
}
  document.getElementById("area_result").value = area;
}
//Calculate nth prime number
function nthPrime(){
  let n = document.getElementById("n").value;
  var prime = 1;
  var count = 0;
  while (count < n)
  {
      prime = prime+1;
      for (var i = 2; i <= prime; i++)
      {
          if (prime % i == 0)
          {
              break;
          }
      }
      if (i == prime)
      {
          count = count+1;
      }
  }
  document.getElementById("nth_result").value = prime;
}

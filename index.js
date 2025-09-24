function fahrenheit(c) {
  return c * (9 / 5) + 32;
}
function reamur(c) {
  return c * (4 / 5);
}
function kelvin(c) {
  return c + 273.15;
}

const form = document.getElementById("formSuhu");
const inputCelcius = document.getElementById("inputCelcius");
const table = document.getElementById("tableBody");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let input = Number(inputCelcius.value);

  let tableContent = document.createElement("tr");
  tableContent.innerHTML = `
        <td>${input}</td>
        <td>${fahrenheit(input)}</td>
        <td>${reamur(input)}</td>
        <td>${kelvin(input)}</td>
      `;

  table.append(tableContent);
  inputCelcius.value = "";
});

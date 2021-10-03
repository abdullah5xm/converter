function sum() {
  //declarations
  let x = document.getElementById('input').value;
  let p = Number(x);
  let i = document.getElementById('inputType').value;
  let r = document.getElementById('resultType').value;

  //conditions
  if (x === "") {
    document.getElementById('result').innerHTML = "Plz input a valid data";
  } else if (p === 0) {
    document.getElementById('result').innerHTML = "Plz input a value which is greater than zero";

  } else
  {
    if (i === r) {
      document.getElementById('result').innerHTML = p;

    } else if (i === 'kilometer' && r === 'meter') {
      document.getElementById('result').innerHTML = p*1000;

    } else if (i === 'meter' && r === 'kilometer') {
      document.getElementById('result').innerHTML = p/1000;

    }

  }

}
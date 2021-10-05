//// Topic Slider /////
function callMe() {
  document.getElementById('t1').style.transform = 'translateX(0px)';
  document.getElementById('t2').style.transform = 'translateX(0px)';
  document.getElementById('t3').style.transform = 'translateX(0px)';
  document.getElementById('t4').style.transform = 'translateX(0px)';
  document.getElementById('t5').style.transform = 'translateX(0px)';
}

function len(){
  callMe();
  document.getElementById('sect2').style.display='none';
  document.getElementById('sect1').style.display='block';
  document.getElementById('sect3').style.display='none';
  document.getElementById('sect4').style.display='none';
  document.getElementById('sect5').style.display='none';
}

function temp(){
  callMe();
  document.getElementById('sect2').style.display='block';
  document.getElementById('sect1').style.display='none';
  document.getElementById('sect3').style.display='none';
  document.getElementById('sect4').style.display='none';
  document.getElementById('sect5').style.display='none';
}

function mass(){
  callMe();
  document.getElementById('sect2').style.display='none';
  document.getElementById('sect1').style.display='none';
  document.getElementById('sect3').style.display='block';
  document.getElementById('sect4').style.display='none';
  document.getElementById('sect5').style.display='none';
}
function time(){
  callMe();
document.getElementById('sect2').style.display='none';
  document.getElementById('sect1').style.display='none';
  document.getElementById('sect3').style.display='none';
  document.getElementById('sect4').style.display='block';
  document.getElementById('sect5').style.display='none';
}
function vol(){
  callMe();
document.getElementById('sect2').style.display='none';
  document.getElementById('sect1').style.display='none';
  document.getElementById('sect3').style.display='none';
  document.getElementById('sect4').style.display='none';
  document.getElementById('sect5').style.display='block';
}
function topic() {
  document.getElementById('t1').style.transform = 'translateX(-100px)';
  document.getElementById('t2').style.transform = 'translateX(-100px)';
  document.getElementById('t3').style.transform = 'translateX(-100px)';
  document.getElementById('t4').style.transform = 'translateX(-100px)';
  document.getElementById('t5').style.transform = 'translateX(-100px)';
}


//////// Length

function sum()
{
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


/////// temp

function sum2()
{
  //declarations
  let x = document.getElementById('input2').value;
  let p = Number(x);
  let i = document.getElementById('inputType2').value;
  let r = document.getElementById('resultType2').value;
 
  //conditions
  if (x === "") {
    document.getElementById('result2').innerHTML = "Plz input a valid data";
  }  
  else
  {
    if (i === r) {
      document.getElementById('result2').innerHTML = p;

    } else if (i === 'farenhite' && r === 'celcius') {
      document.getElementById('result2').innerHTML = (9*p+160)/5;

    } else if (i === 'celcius' && r === 'farenhite') {
      document.getElementById('result2').innerHTML = ((p-32)*5)/9;

    }

  }

}


//// mass

function sum3()
{
  //declarations
  let x = document.getElementById('input3').value;
  let p = Number(x);
  let i = document.getElementById('inputType3').value;
  let r = document.getElementById('resultType3').value;
 
  //conditions
  if (x === "") {
    document.getElementById('result3').innerHTML = "Plz input a valid data";
  } else if (p === 0) {
    document.getElementById('result3').innerHTML = "Plz input a value which is greater than zero";

  } else
  {
    if (i === r) {
      document.getElementById('result3').innerHTML = p;

    } else if (i === 'kg' && r === 'g') {
      document.getElementById('result3').innerHTML = p*1000;

    } else if (i === 'g' && r === 'kg') {
      document.getElementById('result3').innerHTML = p/1000;

    }

  }

}


//////// time

function sum4()
{
  //declarations
  let x = document.getElementById('input4').value;
  let p = Number(x);
  let i = document.getElementById('inputType4').value;
  let r = document.getElementById('resultType4').value;
 
  //conditions
  if (x === "") {
    document.getElementById('result4').innerHTML = "Plz input a valid data";
  } else if (p === 0) {
    document.getElementById('result4').innerHTML = "Plz input a value which is greater than zero";

  } else
  {
    if (i === r) {
      document.getElementById('result4').innerHTML = p;

    } else if (i === 'hour' && r === 'minute') {
      document.getElementById('result4').innerHTML = p*60;

    } else if (i === 'minute' && r === 'hour') {
      document.getElementById('result4').innerHTML = p/60;

    }

  }

}



////////// volume


function sum5()
{
  //declarations
  let x = document.getElementById('input5').value;
  let p = Number(x);
  let i = document.getElementById('inputType5').value;
  let r = document.getElementById('resultType5').value;
 
  //conditions
  if (x === "") {
    document.getElementById('result5').innerHTML = "Plz input a valid data";
  } else if (p === 0) {
    document.getElementById('result5').innerHTML = "Plz input a value which is greater than zero";

  } else
  {
    if (i === r) {
      document.getElementById('result5').innerHTML = p;

    } else if (i === 'l' && r === 'ml') {
      document.getElementById('result5').innerHTML = p*1000;

    } else if (i === 'ml' && r === 'l') {
      document.getElementById('result5').innerHTML = p/1000;

    }

  }

}
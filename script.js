window.onload = function() {
  document.getElementById("bar-progress").style.width = "0%";
}

// let gender = document.getElementById('gender-list')
let bar; // = 3700;  
let gender;
let umur;
let selisih;

// FUNCTION
function maxBar(gender, age){
    var result = 0
    if(age < 14 && age > 0){
        result = 1300
    } if(age >= 14){
        if(gender = 'Wanita'){ //<<< ganti icon / string?
            result = 2700
        }if(gender = 'Pria'){
            result = 3700
        }else{return `invalid gender`}
    }
    return result
}
//var bar = maxBar(gender, age) //<<< angka bar maksimal

function onSubmit() {
  umur = document.getElementById("umur").value;
  gender = document.getElementById("gender-list").value;
  bar = maxBar(gender, umur);
  console.log(bar);
  //console.log(umur, gender);
  selisih = bar;
}
          

var waterCount = 0 //<<< inputan air usernya

//update ke button
function getWater(button){
    count = 0
    if(button1){
        count += 200 //<< input icon 1
    }if(button2){
        count += 600 //<< input icon 2
    }if(button3){
        count += 1500 //<< input icon 3
    }if(button4){
        count += button4 //<< input air yang custom
    }
}

//update result
function getStatus(width){
  const progBar = document.getElementById("bar-progress");
  let status = document.getElementById('status')
    // var bar = 3700;
    selisih = selisih - width
    if(selisih <= 0){
        status.innerHTML = `You have had enough water today to keep you healthy :)`
    }else{
        status.innerHTML = `${selisih} ml to go! Drink more`
    }
}

function updateProgressBar(value) {
  if(!bar) {
    alert("input gender and age first...");
    return;
  }

  const progBar = document.getElementById("bar-progress");
  let width = progBar.style.width;
  width = +width.substr(0, width.length-1);
  let add = value/bar * 100;
  width += add;
  if(width <= 100) {
    progBar.style.width = width + '%';
  } else {
    progBar.style.width = '100%';
  }
  getStatus(value)
  console.log(value)
}


// DOM
const resetBtn = document.querySelector('.reset-button')
resetBtn.addEventListener('click', function() {
  let status = document.getElementById('status')
  const progBar = document.getElementById("bar-progress");
  progBar.style.width = '0%'
  selisih = bar;
  status.innerHTML = `${selisih} ml to go! Drink more`
})

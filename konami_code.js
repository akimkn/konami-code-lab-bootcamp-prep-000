const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  document.body.addEventListener('keydown', onKeyDownHandler(e){
    alert ('COOCOCOMOBER')
  })
  // Write your JavaScript code inside the init() function
}

var index = 0;

function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);
  if (key === code[index]) {
    index++;
    if (index === code.length) {
      alert("Hurray!");
      index = 0;
    }
  } else {
    index = 0;
  }
}

document.body.addEventListener('keydown', function(event) {
  alert ('WHHHHAAATTTTT?!?')
})

/*
const main = document.getElementById('mocha')

main.addEventListener('click', function(event) {
  alert('I was clicked!')
})

const input = document.querySelector('input')

input.addEventListener('keydown', function(e) {
  console.log(e.which)
})

const input = document.querySelector('input')

input.addEventListener('keydown', function(e) {
  if (e.which === 71) {
    return e.preventDefault()
  }
})

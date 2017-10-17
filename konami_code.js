const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
}
var i = 0;

  document.body.addEventListener('keydown', function(e) {
    if (parseInt(e.detail || e.which) === code[i]) {
      i++;
      if (i === code.length) {
        alert("Boooooom");
        i = 0;
      }
    }
    else {
        i = 0;
      }
  });
  return
}

/*
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

console.log('Above EventListener')

document.addEventListener ('DOMContentLoaded', function() {
  console.log('The DOM is ready!')


  var buttoner = document.querySelector('button'),
      darkness = document.querySelector('.light'),
      statusTexter = document.querySelector('.status');

  buttoner.addEventListener('click', function() {
    if (buttoner.className === 'switch on') {
      buttoner.className = 'switch off';
      darkness.className = 'dark';
      statusTexter.innerText = 'Hey, who turned off the lights?';
    } else {
      buttoner.className = 'switch on';
      darkness.className = 'light';
      statusTexter.innerText = "It's so bright in here!";

    }
    console.log('It was clicked.')

  });

//"It's so bright in here!" when it's on, and ""

});
console.log('Below EventListener')

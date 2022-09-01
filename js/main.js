// parallax
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

// scroll top
function scrollTo(element) {
    window.scroll({
      left: 0, 
      top: element.offsetTop, 
      behavior: 'smooth'
    })
  }
  
  var button = document.querySelector('.footer-bot__btn');
  var footer = document.querySelector('#header');
  
  button.addEventListener('click', () => {
    scrollTo(footer);
  });

  //  custom cursor
  var cursorinner = document.querySelector('.cursor2');
  var ab = document.querySelectorAll('a, button');

  document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
  });

  document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
  });

  document.addEventListener('mousedown', function(){
    cursorinner.classList.add('cursorinnerhover')
  });

  document.addEventListener('mouseup', function(){
    cursorinner.classList.remove('cursorinnerhover')
  });


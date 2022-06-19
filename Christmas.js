const circle = document.getElementsByClassName('circle')
const btnOne = document.querySelector('.btn_on')
const btnOff = document.querySelector('.btn_off')
let input =  document.getElementById('quantity').value;
let len = circle.length;




btnOne.addEventListener('click', function() {
    for (var i = 0; i < len; i++) {
        circle[i].removeAttribute("style");
        circle[i].style.backgroundColor  = "running";
        circle[i].style.WebkitAnimationPlayState = "running";
      }
    }
)




btnOff.addEventListener('click', function() {
        title.style.animation = "none";
      
        for (var i = 0; i < len; i++) {
          circle[i].style.animation = "none";
          circle[i].style.background = "#563260";
        }
      }
)
function convert() {
    let speed = document.getElementById('quantity').value;
    for (var i = 0; i < len; i++) {
      circle[i].style.animationDuration = speed + "s";
    }
  }










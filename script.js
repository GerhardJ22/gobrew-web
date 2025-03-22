const navBar = document.querySelector('#nav-bar');
const menuIcon = document.querySelector('.menu-icon');

menuIcon.onclick = () => {
    navBar.classList.toggle('active');
}

document.addEventListener('click', function (e) {
  if (!menuIcon.contains(e.target) && !navBar.contains(e.target)) {
    navBar.classList.remove('active');
  }
});

function changeReview() {
    const radios = document.querySelectorAll('input[name="position"]');
    let currentPosition = 0;
    
    radios.forEach((radio, index) => {
        if (radio.checked) {
            currentPosition = index;
        }
    });

    const nextPosition = (currentPosition + 1) % radios.length;
    radios[nextPosition].checked = true;
}

setInterval(changeReview, 3000);
function toggleSmallNav() {
    document.getElementById("smallNav").classList.toggle("active");
}

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
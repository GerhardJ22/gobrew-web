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

const getMenu = async () => {
    const api = 'breweries.json';
    const response = await fetch(api);
    const data = await response.json();

    displayMenu(data);
}

const displayMenu = (data) => {
    const countries = ['Ireland', 'England', 'Austria'];
    countries.forEach(country => {
        const menuContainer = document.getElementById(`menu-${country.toLowerCase()}`);
        const filteredBreweries = data.filter(brewery => brewery.country === country).slice(0, 5);
        
        filteredBreweries.forEach(brewery => {
            const breweryElement = document.createElement('div');
            breweryElement.classList.add('items-gird');
            breweryElement.innerHTML = `
                <a href="${brewery.website_url}" target="_blank"><img src="${brewery.image}" alt="${brewery.name}"></a>
                <div class="item-name">${brewery.name}</div>
                <div class="address">${brewery.address}, ${brewery.city}</div>
            `;
            menuContainer.appendChild(breweryElement);
        });
    });
};

getMenu();


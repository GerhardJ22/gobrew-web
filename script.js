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

const getMenu = async () => {
    const api = 'breweries.json';   
    try {
        const response = await fetch(api); 
        const data = await response.json();
        displayMenu(data);
    } catch (error) {
        console.error("Data Failed to Load:", error); 
    }
}

const displayMenu = (data) => {
    const countries = ['Ireland', 'England', 'Austria'];
    countries.forEach(country => {
        const menuContainer = document.getElementById(`menu-${country.toLowerCase()}`);
        const filteredBreweries = data.filter(brewery => brewery.country === country); 
        
        filteredBreweries.forEach(brewery => {
            const breweryElement = document.createElement('div');
            breweryElement.classList.add('items-gird');
            breweryElement.innerHTML = `
                <a href="${brewery.website_url}" target="_blank">
                    <img src="${brewery.image}">
                </a>
                <div class="item-name">${brewery.name}</div>
            `;
            menuContainer.appendChild(breweryElement);
        });
    });
};

getMenu();
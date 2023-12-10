    const url = 'https://lisamandarin.github.io/wdd230/scoots/data/vehicles.json';
    const container = document.querySelector('#rentals-description')

    async function getData() {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            const vehicles = data.vehicles;
            vehicles.forEach((vehicle) => {
                const sectionElement = document.createElement('section');
                const type = vehicle.type;
                
                formatType(sectionElement, type);
                
                const typeContainer = document.createElement('section')
                
                const descriptions = vehicle.description;
                descriptions.forEach((description) => {
                    const name = description.name;
                    const number = description.number;
                    const resvFull = description.resvFull;
                    const resvHalf = description.resvHalf;
                    const walkHalf = description.walkHalf;
                    const walkFull = description.walkFull;

                    formatData(typeContainer, name, number, resvHalf, resvFull, walkHalf, walkFull);
                });
                sectionElement.appendChild(typeContainer);
                container.appendChild(sectionElement);
            });
        }
    }


    function formatType(sectionElement, type) {
        const typeElement = document.createElement('h1');
        typeElement.setAttribute('id', type);
        typeElement.textContent = type;
        sectionElement.appendChild(typeElement);
    }

    function formatData(sectionElement, name, number, resvHalf, resvFull, walkHalf, walkFull) {
        const rentalsCard = document.createElement('div');
        rentalsCard.setAttribute('class', 'rentals-card');
        
        const nameElement = document.createElement('h2');
        nameElement.textContent = name;

        const numberElement = document.createElement('p');
        numberElement.textContent = `Max. Persons: ${number}`;

        const priceContainer = document.createElement('div');

        const reservationCard = createPriceCard('Reservation', resvHalf, resvFull);
        const walkinCard = createPriceCard('Walk-in', walkHalf, walkFull);
        
        priceContainer.appendChild(reservationCard);
        priceContainer.appendChild(walkinCard);

        rentalsCard.appendChild(nameElement);
        rentalsCard.appendChild(numberElement);
        rentalsCard.appendChild(priceContainer);

        sectionElement.appendChild(rentalsCard);        
    }

    function createPriceCard(tag, halfDay, fullDay) {
        const priceCard = document.createElement('div');

        const tagElement = document.createElement('p');
        tagElement.textContent = tag;

        const halfDdayElement = document.createElement('p');
        halfDdayElement.textContent = `Half Day(3 hrs): $${halfDay}`;

        const fullDayElement = document.createElement('p');
        fullDayElement.textContent = `Full Day: $${fullDay}`;

        priceCard.appendChild(tagElement);
        priceCard.appendChild(halfDdayElement);
        priceCard.appendChild(fullDayElement);

        return priceCard;
    }
    getData();
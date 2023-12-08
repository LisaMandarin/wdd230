    const url = 'https://lisamandarin.github.io/wdd230/scoots/data/vehicles.json';
    const container = document.querySelector('#rentals-description')

    async function getData() {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            const vehicles = data.vehicles;
            vehicles.forEach((vehicle) => {
                const type = vehicle.type;
                // formatData(type)
                
                const descriptions = vehicle.description;
                descriptions.forEach((description) => {
                    const name = description.name;
                    const number = description.number;
                    const resvFull = description.resvFull;
                    const resvHalf = description.resvHalf;
                    console.log(resvHalf);
                    console.log(resvFull);
                    console.log(name);
                    console.log(number);
                })
            })
        }
    }

    // function formatData(type) {
    //     const sectionElement = document.createElement('section');
    //     const nameElement = document.createElement('h1');

    //     nameElement.textContent = type;
    //     sectionElement.appendChild(nameElement);
    //     container.appendChild(sectionElement);
    // }

    getData();
dataURL = 'https://timeapi.io/api/Time/current/coordinate?latitude=22.67&longitude=120.3';

async function getTime() {
    try {
        const response = await fetch(dataURL);
        if(response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            throw Error (response.text());
        }
    } catch(error) {
        console.log(error)
    }
    
    
}

getTime();

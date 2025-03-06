//https://api.openbrewerydb.org/breweries

const getMap = async(latitude, longitude) => {
    try {
        return (
            await fetch(
                `https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=15&ie=UTF8&iwloc=&&output=embed`
            )
        ).url;
    } catch (error) {
        console.log(error);
    }
};

const getBreweries = async() => {
    const url = "https://api.openbrewerydb.org/breweries";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showBreweries = async() => {
    const breweries = await getBreweries();
    const breweriesSection = document.getElementById("breweries");
    breweries.forEach(async(brewery)=>{
        const brewSec = document.createElement("section");
        breweriesSection.append(brewSec);
        
        const a= document.createElement("a");
        a.href = brewery.website_url;
        brewSec.append(a);

        const h3 = document.createElement("h3");
        h3.innerHTML = brewery.name;
        a.append(h3);

        const ul = document.createElement("ul");
        const address = document.createElement("li");
        address.innerHTML = `Address: ${brewery.address_1}, ${brewery.city} ${brewery.state}`;
        ul.append(address);

        const phone = document.createElement("li");
        phone.innerHTML = `Phone Number: ${brewery.phone}`;
        ul.append(phone);

        const website = document.createElement("li");
        website.innerHTML = `Website: <a href="${brewery.website_url}">${brewery.website_url}</a>`;
        ul.append(website);
        
        brewSec.append(ul);
        
        const iframe = document.createElement("iframe");
        iframe.src = await getMap(brewery.latitude, brewery.longitude);
        brewSec.append(iframe);
    });
};
showBreweries();
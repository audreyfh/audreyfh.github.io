const getTrinkets = async() => {
    const url = "https://audreyfh.github.io/json/trinkets.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

window.onload = async()=>{
    const trinkets = await getTrinkets();
    /*Currently, this is an example collection which just contains the top three rated trinkets.*/
}
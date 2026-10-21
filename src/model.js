export function Model() {
    const url = process.env.API_URL;
    const key = process.env.PUBLIC_KEY;

    let data = null;

    const queryWeather = async (queryLocation) =>  {
        try {
            const response = await fetch(`${url}/timeline/${queryLocation}?key=${key}`);
            const queryData = await response.json();
            data = queryData;

            console.log(data);
        } catch(error) {
            console.error(error);
        }
    }

    const getLocation = () => data.resolvedAddress;

    const getForecast = () => data.days;
    
    return {queryWeather, getLocation, getForecast};
}
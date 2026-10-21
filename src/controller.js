export function Controller(Model, View) {
    
    View.init();

    View.onLocationSubmit(async (location) => {
        try {
            await Model.queryWeather(location);

            View.setButtonText(Model.getLocation());

            View.displayForecast(Model.getForecast(), Model.getLocation());



        } catch(error) {
            console.error(error);
        }
    });

}
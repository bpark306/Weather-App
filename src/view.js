export function View() {

    const options = { 
        day: 'numeric',
        weekday: 'short'
    };

    const form = document.querySelector("form");
    const button = document.querySelector("button");
    const timeline = document.querySelector("#timeline");

    let locationHandler = () => {};

    const onLocationSubmit = (handler) => {
        locationHandler = handler;
    }

    const init = () => {
        form.style['display'] = 'none';

        button.addEventListener("click", (e) => {
            if (form.style['display'] === 'none') {
                form.style['display'] = 'inline-block';
            } else {
                form.style['display'] = 'none';
            }
        });

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            form.style['display'] = 'none';

            locationHandler(formData.get("location").trim());
        });
    }

    const displayForecast = (days, location) => {

        timeline.replaceChildren();
        
        const forecastHeading = document.createElement("h3");
        forecastHeading.textContent = `${location} Daily Forecast`;

        timeline.appendChild(forecastHeading);

        for (let i = 0; i < days.length && i < 7; i++) {
            
            const date = new Date(`${days[i].datetime}T00:00:00`);

            const container = document.createElement("div");
            container.classList.add("container");

            const daily = document.createElement("p");
            daily.textContent = i !== 0 ? date.toLocaleDateString('en-US', options) : "Today";

            const conditions = document.createElement("p");
            conditions.textContent = days[i].conditions;

            const high = document.createElement("p");
            high.textContent = days[i].tempmax;

            const low = document.createElement("p");
            low.textContent = days[i].tempmin;

            container.appendChild(daily);
            container.appendChild(conditions);

            container.appendChild(low);

            container.appendChild(high);

            timeline.appendChild(container);
        }
    }


    const setButtonText = (text) => {
        button.textContent = text;
    }


    return {init, onLocationSubmit, setButtonText, displayForecast};
}
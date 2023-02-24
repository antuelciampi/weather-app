const container = document.querySelector('.container');
const search= document.querySelector('.busqueda button');
const error= document.querySelector('.error');
const weather= document.querySelector('.clima');
const weather_desc= document.querySelector('.clima_desc');

search.addEventListener('click', () => {

    const APIKey = '6a741380e06e51c1bebcf2af662f646f'
    const ciudad = document.querySelector('.busqueda input').value;

    console.log(ciudad)

    if(ciudad === ''){
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${APIKey}`)
    .then(response => response.JSON())
    .then(JSON => {
        
        if(JSON.cod === 'error'){
            container.style.height = '300px';
            weather.style.display = 'none';
            weather_desc.style.display = 'none';
            error.style.display = 'block';
            error.classList.add('fadeIn');
            return;
        }

        error.style.display = 'none';
        error.classList.remove('fadeIn');

        const image = document.querySelector('.clima img')
        const temperatura = document.querySelector('clima .temperatura');
        const descripcion = document.querySelector('.clima .descripcion');
        const humedad = document.querySelector('.clima-desc .humedad .texto span')
        const viento = document.querySelector('.clima-desc .viento .texto span');

        switch (json.weather[0].main){
            case 'despejado':
                image.src = '/images/clear.png'
                break;

            case 'error':
                image.src = '/images/404.png'
                break;

            case 'nuboso':
                image.src = '/images/cloud.png'
                break;

            case 'neblina':
                image.src = '/images/mist.png'
                break;

            case 'lluvia':
                image.src = '/images/rain.png'
                break;

            case 'nieve':
                image.src = '/images/snow.png'
                break;
            
            default:
                image.src = '';
        }

        temperatura.innerHTML= `${parseInt(JSON.main.temperatura)}<span> °C <span>`;
        descripcion.innerHTML = `${JSON.weather[0].descripcion}`;
        humedad.innerHTML = `${JSON.main.humidity}%`;
        viento.innerHTML = `${parseInt(JSON.main.wind)}Km/h`;

        clima.style.display= '';
        clima_desc.style.display = '';
        clima.classList.add('fadeIn');
        clima_desc.classList.add('fadeIn');
        container.style.height = '600px';
    });

}); 

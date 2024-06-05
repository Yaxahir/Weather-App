let form=document.querySelector('form')
let PageError=document.querySelector('.PageError')
let ReadyImg=document.querySelector('.ReadyImg')
let cel=document.querySelector('.cel')
let weather=document.querySelector('.weather')
let humadity=document.querySelector('.humadity')
let speed=document.querySelector('.speed')
let All=document.querySelector('.All')
let input=document.querySelector('input')

  form.addEventListener('submit',((e,city)=>{
    e.preventDefault()

    let value=input.value 

    const api_key="ccf7ca8944dc4dac5209dcceb8f94411"
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${api_key}`

    let weather_data = fetch(url)
    .then((res)=>{
        res.json()
        .then((result)=>{
            console.log(result)



            if (result.cod===`404`) {
                PageError.style.display='block'   
                All.style.display='none'
                console.log('ERROR')
                return;
            }
            PageError.style.display='none'   
            All.style.display='block'

            let RE=result

            // temperature.innerHTML= `${Math.round(weather_data.main.temp-273.15)}°C`

            // description.innerHTML=`${weather_data.weather[0].description}`
        
            // humidity.innerHTML=`${weather_data.main.humidity}%`
        
            // wind_speed.innerHTML=`${weather_data.wind.speed}Km/H`

            cel.innerHTML = ` ${Math.round(RE.main.temp-273.15)} °C `

            weather.innerHTML=` ${RE.weather[0].description}  `

            humadity.innerHTML=` ${RE.main.humidity}% `

            speed.innerHTML=` ${RE.wind.speed}KM/H `

            switch (RE.weather[0].main) {

                case "Clouds":
                    
                    ReadyImg.src="./IMG/cloud.png"
                    break;

                case "Clear":
                    ReadyImg.src="./IMG/clear.png"
                    break;

                case "Rain":
                    ReadyImg.src="./IMG/rain.png"
                    break;

                case "Mist":
                    ReadyImg.src="./IMG/mist.png"
                    break;

                case "Snow":
                    ReadyImg.src="./IMG/snow.png"
                    break;
            
                default:
                    break;
            }


        })


    })

 
 



}))
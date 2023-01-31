# Challenge08
5 day weather forecast


# Module 8 Server-Side APIs: Weather Dashboard

## My Task

 My challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML, CSS and Java script

I can achieve my goal with the us of [5 Day Weather Forecast](https://openweathermap.org/forecast5) to retrieve weather data for cities. The link will allow a user to make a use of a guide on how to use the 5 Day Forecast API. I will need to register for an API key in order to use this API. After registering for a new API key, I may need to wait up to 2 hours for that API key to activate.

The base URL for my API calls should look like the following: `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`. I will need to pass in coordintes in order to retrieve geographical coordinates given a city name


I will be using `localStorage` to store any persistent data.

## User Story

AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
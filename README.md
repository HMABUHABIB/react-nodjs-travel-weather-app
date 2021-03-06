# Travel Weather App - React and NodJs

[Live demo](https://react-nodjs-travel-weather-app.herokuapp.com/) Note:(Please wait 5 seconds for the server to wake up)

## Description

This project takes a user's destination.
Then will display to the user a weather forecast for the destination and more data about it.
The user has the ability to click on I'm Feeling Lucky this will return a random destination.
There are 3 APIs used in this project:

- [Weatherbit API](https://www.weatherbit.io/) - To gets weather forecast of the travel destination.
- [Pixabay API](https://pixabay.com/) - To gets some photos of the travel destination.
- [Restcountries API](https://restcountries.eu/) - To gets gets information about the country.

## Installation

### Backend

The app running a Local server on _Node_ and _Express_.
To start with the app:

- Download the zip file from Github
- Creat _.env_ inside the main file then add your keys inside it, File should contain:

```
API_KEY_PIXABAY=*****
API_KEY_OPEN_WEATHER_MAP=****
restcountries => without key
```

- Run the command to install all needed packages.

```
npm install
```

- Run the command to start the node server under http://localhost:3001/.

```
npm start
```

### Frontend

- The app used React in Frontend :
- To run React server use the command below

```
cd client
npm install
npm start
This website will access under this linke http://localhost:3000/
```

The frontend using the link 'https://react-nodjs-travel-weather-app.herokuapp.com/' as API End point,
you can change to 'http://localhost:3001/' if you want to use your local node server.

## App demo photo

The demo App. can be access under https://react-nodjs-travel-weather-app.herokuapp.com/

## App demo photo

The website has two pages:

- Home page: where the user can search there
- wordcloud: the user can see the list serach history as word cloud

![success](https://raw.githubusercontent.com/HMABUHABIB/react-nodjs-travel-weather-app/main/client/demo-pic/search%20box.png?raw=true "main-page")

![trips](https://raw.githubusercontent.com/HMABUHABIB/react-nodjs-travel-weather-app/main/client/demo-pic/search%20results.png?raw=true "trips")

![Wordcloud](https://raw.githubusercontent.com/HMABUHABIB/react-nodjs-travel-weather-app/main/client/demo-pic/Wordcloud-2.png?raw=true "Wordcloud")

![Wordcloud Gif](https://raw.githubusercontent.com/HMABUHABIB/react-nodjs-travel-weather-app/main/client/demo-pic/Wordcloud.gif?raw=true "Wordcloud Gif")

## Author

The code was written by Husam Abuhabib.

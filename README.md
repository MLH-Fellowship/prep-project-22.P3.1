# MLH Prep Project

Over the next 2 weeks, you'll be building a React App that works with various APIs (Application Programming Interfaces) that talk to different data sources to do cool stuff.

We're using the [OpenWeather API](https://openweathermap.org/current) to get weather data on different cities. Your challenge over the next 2 weeks is to build out this website and add even more functionality to it. At the moment, it displays basic information about a location when you type it in. Check out [Issues](/issues) for some more ideas!

You'll need to get your own API Key from their website (for free) and add it as an environment variable in a `.env` file. We have a template available as `example.env`.

You'll be using React initially to build this. If you're new to React, check out the [website](https://reactjs.org) for some information on getting started! 

## Setting Up The Project Locally
- Install [Node.JS and NPM](https://nodejs.org/en/download/package-manager/) if you haven't already.
- Clone this repository `git clone <url> `
- Install the yarn package manager with `npm install --global yarn`
- Install dependencies with `yarn install`
- Add your API key to the `.env` file. You can generate your API key from [here](https://home.openweathermap.org/api_keys).
- Run the app with `yarn start`.

#### Getting Spotify API keys
To get the Spotify API keys:
- Visit [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/)
- Login/Sign up for an account
- Create an application
- Name it whatever you like and add a description
- In the App overview, you should see the ***client id*** and the ***client secret***(Toggle the `show client secret`). Copy these 2 values to your `.env` file using the format shown in the `example.env` file
You should now be able to make API calls.

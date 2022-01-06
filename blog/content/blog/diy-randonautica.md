---
title: Create your own Randonautica web app
description: "Walkthrough on how to build a web app that gives you random locations to ... explore?"
hero: ./public/assets/randonautica.webp
featured: 0
tags: 
- python
- mystery
- react
---

If you haven't caught up with the social media craze, an app there's been taking 
people by storm called Randomnautica, it's an app where you input your geolocation 
and then it finds a random coordinate for you to visit within your vicinity. Strange and outlandish encounters have been documented by some of its users finding weird places or weird objects.

There has been a lot of superstition around this app, especially in regards to how it works under the hood. Some people have speculated that it uses magic or some kind of mystical source to generate a location.

Today we're going to dispel that myth -- by building our very own Randonautica-like web app.

# Entropy
What is entropy? It's a fancy word meaning the measurable amount of randomness or uniqueness within a system. Entropy is all the time in the real world, some examples are:

- Generating a Minecraft world using a seed.

- :key: Creating a password that has enough special characters, symbols, numbers and uppercase letters.

- :birthday: You bake two cakes and you notice that one of them tastes slightly different.

In Randonautica, the default source of entropy (randomness) uses a Quantum Computer that generates "truly random" numbers. 👻 Spooky Right? 

Our workflow will roughly go like this:

1. Set up the server.

2. Create our endpoints

3. Build our front end web app

# Part I: Backend
Were going to build the API in python and flask.

Start by installing dependencies.

`pip install flask, flask-cors`

Our app boilerplate called server.py

```python
import requests
import random
import json
from flask import Flask, request 
from flask_cors import CORS
app = Flask(name)
CORS(app)
if name == "main":
    app.run(debug=True)
```

Next is the spooky part, where we create our entropy (seed) by calling the same Quantum Computer that Randonautica uses. We ask for an array of 8 bit numbers and then combine them into a one long number.

We also are adding a trim function to sanitize the input.

```python
def quantum_seed():
    res = requests.get("http://qrng.anu.edu.au/API/jsonI.php?length=8&type=uint16")
    json = res.json()
    val = [str(i) for i in json["data"] ]
    return int("".join(val))

# Round numbers to nearest hundreth thousand then multiply
def trim(lat, lon):
    return {
        "latitude": int(round(lat, 6) * 1000000),
        "longitude": int(round(lon, 6) * 1000000)
    }
```

Now, we tie it all together. The location generator uses a mathematical formula known as a gaussian distribution. What this does is it takes the users location (latitude and longitude) and their set range and plugs it into the formula and returns a set of new coordinates.

```python
@app.route("/location")
def location():
    random.seed(quantum_seed())
    mean = float(request.args.get("mean"))
    v = 1000000.0 #Constant for dividing to nearest hundred thousandths place
    
    coords = trim(float(request.args.get("latitude")), float(request.args.get("longitude")))
    
    latitude = float(random.gauss(coords["latitude"], mean))
    longitude = float(random.gauss(coords["longitude"], mean))
    
    return ({
        "success": True,
        "latitude": latitude / v,
        "longitude": longitude / v,
    })
```

# Part II: Frontend App

Time for the fun part, the app. We are going to build our frontend app using Reactjs so let's first set up some scaffolding

`npx create-react-app frontend && cd frontend`

Install the dependencies we need

`npm i axios, google-map-react`

Now we can start creating our app. Lets create our google maps component which mainly just passes its props down. You can add theming to the map here as well.

```jsx
import React from 'react';
import GoogleMapReact from 'google-map-react';
import { MapTheme } from './theme'; 
const GoogleMap = ({
    apiLoaded,
    apiKey,
    children,
    center,
    zoom,
    onLoad,
}) => {
    return (
        <div style={{height: "100vh", width:"100%"}}>
            <GoogleMapReact
                yesIWantToUseGoogleMapApiInternals
                bootstrapURLKeys={{
                    key: apiKey,
                    libraries: ["places", "geometry"],
                }}
                defaultCenter={defaultCenter}
                center={center}
                zoom={zoom}
                onGoogleApiLoaded={onLoad}
            >
                {children}
            </GoogleMapReact>
        </div>
    )
}
```
Next we create the marker component which displays coordinates of the user and a random location on the map.

```jsx
import React from 'react';
export const Marker = ({ color, name }) => {
	return (
		<React.Fragment>
			<div
				style={{ backgroundColor: "#CCC", cursor: "pointer", borderRadius: "50%" }}
			>{name}</div>
		</React.Fragment>
	);
};
```

Now, for the final presentation layer. 
We need three things pieces of business logic for the app to function 

- Range input to set the desired vicinity
- A button to ask for the users location 
- Another button to call our server and generate a random location.

```jsx
import React from 'react';
import axios from 'axios';
import { GoogleMap } from './components/map/map';
import { Marker } from './components/marker/marker';
import './App.css';
class App extends React.Component {
	state = {
		userLocation: { lat: 39.828175, lng: -98.5795 }, //Geographic Center of the United States
		randomLocation: null,
		range: 10000, //Min max 10k 999k
		isFetching: false,
        mapApiLoaded: false,
		mapInstance: null,
		mapApi: null,
	}
	apiHasLoaded(map, maps) {
		this.setState({
			mapApiLoaded: true,
			mapInstance: map,
			mapApi: maps,
		});
	}
	setRange(event) {
		this.setState({
			range: event.target.value,
		});
	}
	//Navigator method to get geolocation
	getGeoLocation() {
        const { mapInstance } = this.state;
		navigator.geolocation.getCurrentPosition((position) => {
			this.setState({
				userLocation: {
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				},
			});
			mapInstance.setCenter({
				this.state.userLocation,
            });
            mapInstance.setZoom(17)
		}, (error) => {
			console.log(error);
		})
	}
	setActiveLocation(latitude, longitude, id) {
		const { mapInstance } = this.state;
		this.setState({
			randomLocation: {
				lat: latitude,
				lng: longitude,
			},
			activeLocation: id,
		})
		mapInstance.setCenter({
			lat: parseFloat(latitude),
			lng: parseFloat(longitude),
		})
	}
	async getRandomLocation() {
		const { mapInstance } = this.state;
		this.setState({ isFetching: true });
		const res = await axios.get("http://localhost:5000/location", {
			params: {
				latitude: this.state.userLocation.lat,
				longitude: this.state.userLocation.lng,
				mean: (this.state.range * 1000),
			}
		})
		this.setState({
			randomLocation: {
				lat: res.data.latitude,
				lng: res.data.longitude,
			},
			isFetching: false,
		})
		mapInstance.setCenter({
			lat: res.data.latitude,
			lng: res.data.longitude,
		});
		mapInstance.setZoom(12);
	}
	render() {
		const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY; //Obtained from GCP console
		const { userLocation, maps, randomLocation, range, mapApiLoaded, mapInstance, mapApi } = this.state;
		return (
            <div style={{
                background: "#232429",
                display: "grid",
                gridTemplateColumns: "minmax(300px,25%)1fr"
            }}>
                <div style={{ padding: "1.25em" }}>
                    <button onClick={() => this.getGeoLocation()}>Give Location</button>
                    <input
                        type="range"
                        min={10.0}
                        max={999.0}
                        onChange={(event) => this.setRange(event)}
                        value={range}
                        label="Set the range"
                    />
                    <button disabled={this.state.isFetching} onClick={() => this.getRandomLocation()}>
                        {this.state.isFetching ? "Loading" : "Random Location"}
                    </button>
                </div>
                <GoogleMap
                    //Map center is controlled by the maps api not React state
                    apiKey={API_KEY}
                    onLoad={({ map, maps }) => this.apiHasLoaded(map, maps)}
                    zoom={4}
                    defaultCenter={{ lat: 39.828175, lng: -98.5795 }} //Geographic Center of the United States
                    center={{ lat: userLocation.lat, lng: userLocation.lng}}
                >
                    <Marker
                        text="Your Location"
                        lat={userLocation.lat}
                        lng={userLocation.lng}
                    />
                    {
                        this.state.randomLocation &&
                        <Marker
                            text="Random Location"
                            lat={randomLocation.lat}
                            lng={randomLocation.lng}
                        />
                    }
                </GoogleMap>
            </div>
		)
	}
}
export default App;
```

There, now we have an app that works very similar to Randonatica.
I got a little carried away and made a fully functioning prototype app which has all kinds of neat
features like driving directions, search-by-address, etc. The link to the repo is [located here.](https://github.com/CodyCline/random_maps)
A deployed demo is coming soon!
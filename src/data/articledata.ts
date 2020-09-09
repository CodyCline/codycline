import * as types from '../types/data';
import FooBar from '../assets/images/foobar.gif';
import Randonautica from '../assets/images/randonautica.webp';

const articleOneBody = (`

### TL;DR
Repo with full answers, explanations (work in progress) is located [here](https://github.com/CodyCline/google_foobar_answers).

Some time ago, I had the oppurtunity of going through the Google Foobar Challenge.
For those of you who don't know, its a secret, invite-only programming challenge created by Google that you participate using your web browser.

The location of their app is [here](https://foobar.withgoogle.com). 

It's main objective is to test developers with 5 distinct levels of algorithm challenges. 
Each challenge increases in difficulty as it progreses, 

If you reach the end of level three, you may submit contact information and be connected to a Google Recruiter to discuss career prospects within the company.

*For now, all of my answers are in python, however, there are other github repositories with the Java answers.*

It's unclear what you have to specifically do to get selected by the Google Foobar challenge; the general consensus 
is that you need to be searching a lot of programming related queries. I got selected when searching "testing in the cloud". It's probably different for everyone.

Without further delay, lets start! 


# Challenge 1 

---

## Braille Translation

The first challenge involves you translating plain text into braille. However, this braille is a little different,
the bumps of braille are represented as ones and blank space is represented as zeroes.


<CodeBlock language="python">
alphabet = { 
    "a": "100000", "b": "110000", "c": "100100",
    "d": "100110", "e": "100010", "f": "110100",
    "g": "110110", "h": "110010", "i": "010100",
    "j": "010110", "k": "101000", "l": "111000",
    "m": "101100", "n": "101110", "o": "101010",
    "p": "111100", "q": "111110", "r": "111010",
    "s": "011100", "t": "011110", "u": "101001",
    "v": "111001", "w": "010111", "x": "101101",
    "y": "101111", "z": "101011", " ": "000000"
}
def answer(plaintext):
    output=""
    for char in plaintext:
        if char.isupper(): #If its uppercase add the prefix
            output=output + "000001"
        #Lower is used to escape caps characters so they aren't looked up in the list
        output += alphabet[char.lower()] 
    return output
</CodeBlock>

# Challenge 2 

---

## Part 1: Bunny Prisoner Locating

The concept of this challenge is essentially you're iterating through an (x,y) 
coordinate grid which is shaped like a right triangle. 
The pattern here is starting upwards the (y) increment is x, then x+1. 
The right (x) increment is x+1.  

The number matrix  
| 7 12 18 25 33 42 52 63  
| 4 8 13 19 26 34 43 53 64  
| 2 5 9 14 20 27 35 44 54 65   
| 1 3 6 10 15 21 28 36 45 55 66  
  
<CodeBlock language="python">
def solution(x, y):
    cell_number = 0 
    x_count = 0 
    while x_count < x: 
        x_count += 1 
        cell_number += x_count
        if x_count == x: #If equal to x_count
            y_count = 1 
            y_increment = x_count #Copy the current x_count and then iterate
            while y_count < y: 
                y_count += 1
                cell_number += y_increment
                y_increment += 1
            return(str(cell_number))

</CodeBlock>

## Part 2: Please Pass the Coded Messages
In this challenge, you are given an array of different numbers. 
Find a way to combine them into an integer which is divisible by 3. 
  
For instance, if you were given "5" and "1" you would turn it into a 15.
  
> 👉 A number is divisible by three if the sum of its digits are divisble by three. An example of that would be \`[6, 3, 3]\` => 12 => 12 / 3 = 4   
  

For this example you need to first sort the list from highest to lowest, take out any number which doesn't make it possible then reassemble the numbers into a single integer. So, [3, 1, 4, 1] => 4311.

<CodeBlock language="python">
from itertools import combinations
#First sort the list from high to low
#Then loop from the list in reverse
def solution(l):
    l.sort(reverse=True)
    for i in reversed(range(1, len(l) + 1)):
        #Find combinations possible combinations
        for com in combinations(l, i):
            print(com)
            #If the sum of the potential combination is divisible by 3 
            #return its whole number concatenated
            if sum(com) % 3 == 0: 
                return int(''.join(map(str, com)))
    return 0 
def is_possible_to_make_divisible(arr): 
    # Find remainder of sum when divided by 3 
    remainder = 0
    for i in range (0, 3): 
        remainder = (remainder + arr[i]) % 3
    # Return true if remainder is 0. 
    return (remainder == 0)
def divisible(num):
    n = len(num)
    # add up all the digits of num 
    mysum = sum(num)
    # if num is already is  
    # divisible by 3 then no 
    # digits are to be removed 
    if (mysum % 3 == 0): 
        return 0
    # if there is single digit,  
    # then it is not possible  
    # to remove one digit. 
    if (n == 1): 
        return 0
    # traverse through the number  
    # and find out if any number  
    # on removal makes the sum  
    # divisible by 3 
    for i in range(n): 
        if (mysum % 3 == int(num[i]) % 3): 
            return 1
print(divisible([3, 1, 4, 1, 5, 9]))
</CodeBlock>


# Challenge 3 

---

## Part 1: Prepare the Bunnies' Escape
In this challenge you are given a grid which represents "bunny prisoners" and you 
have to break them out but traversing a grid of ones and zeroes, to the top left of (0, 0)
The solution here is a breadth-first path traversal traversing as little nodes as possible.

<CodeBlock language="python">

def path_traversal(wx, hy, maze):
    #Take the width and height of the maze.
    #Then draw up a board
    w = len(maze[0])
    h = len(maze)
    board = [[None for i in range(w)] for i in range(h)]
    board[wx][hy] = 1
    arr = [(wx, hy)]
    while arr:
        x, y = arr.pop(0)
        for i in [[1,0],[-1,0],[0,-1],[0,1]]:
          nx, ny = x + i[0], y + i[1]
          if 0 <= nx < h and 0 <= ny < w:
            if board[nx][ny] is None:
                board[nx][ny] = board[x][y] + 1
                if maze[nx][ny] == 1 :
                    continue
                arr.append((nx, ny)) 
    return board
def solution(maze):
    w = len(maze[0])
    h = len(maze)
    ans = 2 ** 32-1
    for i in range(h):
        for j in range(w):
            #Shortest path from start to end
            if path_traversal(0, 0, maze)[i][j] and path_traversal(h-1, w-1, maze)[i][j]:
                ans = min(path_traversal(0, 0, maze)[i][j] + path_traversal(h-1, w-1, maze)[i][j] - 1, ans)
    return ans
</CodeBlock>

## Part 2: Fuel Injection Perfection
In this challenge you're given a number and you need to round up or down to 
the nearest base-2 number \`[1, 2, 4, 8, 16, 32 ...etc]\` You must divide it in half until it reaches zero.
However, the acceptable solution cannot use math functions within python 
such as logarithms and division. 

The true answer must use _bitwise operators_ to round up or down. 
Below, I have two answers, both achieve the same means however one is implemented using math and the other bitwise.

<CodeBlock language="python">
import math
#My solution using math and logarithms
def log_solution(num): 
    operation_count = 0
    my_num = int(num)
    #If it can be divided by 2 
    while my_num != 1:
        if my_num % 2 == 0:
            my_num = my_num / 2
            operation_count += 1
        else: #If not a base-2 square root then round to closest
            closest_num = 2**(round(math.log(my_num, 2), 0))
            my_num = closest_num / 2
            operation_count += 1
    return operation_count
#Real solution acceptable by foobar
def solution(numStr):
    num = int(numStr)
    ops = 0
    while(num != 1):
        if (num % 2 == 0):
            num = num / 2
        #If number is greater than 3 
        elif ((num == 3) or ((num + 1) & num) > ((num - 1) & (num - 2))):
            num -= 1
        else:
            num += 1
        ops += 1
    return ops
print(42 & 41)
print(40 & 39)
</CodeBlock>


## Part 3: Doomsday Fuel
Here is the part where things get much harder. I had to consult the very resourceful repo [google foobar help](https://github.com/ivanseed/google-foobar-help)
to get a good understanding of what is being asked. Simply put, you need to implement an absorbing markov chain.

<CodeBlock language="python">
from fractions import Fraction
#Greatest common denominators
def gcd(x, y):
    def gcd1(x, y):
        if y == 0:
            return x
        return gcd1(y, x%y)
    return gcd1(abs(x), abs(y))
def simplify(x, y):
    g = gcd(x, y)
    return Fraction(int(x/g), int(y/g))
def lcm(x, y):
    return int(x*y/gcd(x,y))
def transform(mat):
    sum_list = list(map(sum, mat))
    bool_indices = list(map(lambda x: x == 0, sum_list))
    indices = set([i for i, x in enumerate(bool_indices) if x])
    new_mat = []
    for i in range(len(mat)):
        new_mat.append(list(map(lambda x: Fraction(0, 1) if(sum_list[i] == 0) else simplify(x, sum_list[i]), mat[i])))
    transform_mat = []
    zeros_mat = []
    for i in range(len(new_mat)):
        if i not in indices:
            transform_mat.append(new_mat[i])
        else:
            zeros_mat.append(new_mat[i])
    transform_mat.extend(zeros_mat)
    tmat = []
    for i in range(len(transform_mat)):
        tmat.append([])
        extend_mat = []
        for j in range(len(transform_mat)):
            if j not in indices:
                tmat[i].append(transform_mat[i][j])
            else:
                extend_mat.append(transform_mat[i][j])
        tmat[i].extend(extend_mat)
    return [tmat, len(zeros_mat)]
def copy_mat(mat):
    cmat = []
    for i in range(len(mat)):
        cmat.append([])
        for j in range(len(mat[i])):
            cmat[i].append(Fraction(mat[i][j].numerator, mat[i][j].denominator))
    return cmat
def gauss_elmination(m, values):
    mat = copy_mat(m)
    for i in range(len(mat)):
        index = -1
        for j in range(i, len(mat)):
            if mat[j][i].numerator != 0:
                index = j
                break
        if index == -1:
            raise ValueError('Gauss elimination failed!')
        mat[i], mat[index] = mat[index], mat[j]
        values[i], values[index] = values[index], values[i]
        for j in range(i+1, len(mat)):
            if mat[j][i].numerator == 0:
                continue
            ratio = -mat[j][i]/mat[i][i]
            for k in range(i, len(mat)):
                mat[j][k] += ratio * mat[i][k]
            values[j] += ratio * values[i]
    res = [0 for i in range(len(mat))]
    for i in range(len(mat)):
        index = len(mat) -1 -i
        end = len(mat) - 1
        while end > index:
            values[index] -= mat[index][end] * res[end]
            end -= 1
        res[index] = values[index]/mat[index][index]
    return res
def transpose(mat):
    tmat = []
    for i in range(len(mat)):
        for j in range(len(mat)):
            if i == 0:
                tmat.append([])
            tmat[j].append(mat[i][j])
    return tmat
def inverse(mat):
    tmat = transpose(mat)
    mat_inv = []
    for i in range(len(tmat)):
        values = [Fraction(int(i==j), 1) for j in range(len(mat))]
        mat_inv.append(gauss_elmination(tmat, values))
    return mat_inv
def mat_mult(mat1, mat2):
    res = []
    for i in range(len(mat1)):
        res.append([])
        for j in range(len(mat2[0])):
            res[i].append(Fraction(0, 1))
            for k in range(len(mat1[0])):
                res[i][j] += mat1[i][k] * mat2[k][j]
    return res
def splitQR(mat, lengthR):
    lengthQ = len(mat) - lengthR
    Q = []
    R = []
    for i in range(lengthQ):
        Q.append([int(i==j)-mat[i][j] for j in range(lengthQ)])
        R.append(mat[i][lengthQ:])
    return [Q, R]
def solution(mat):
    res = transform(mat)
    if res[1] == len(mat):
        return [1, 1]
    Q, R = splitQR(*res)
    inv = inverse(Q)
    res = mat_mult(inv, R)
    row = res[0]
    l = 1
    for item in row:
        l = lcm(l, item.denominator)
    res = list(map(lambda x: int(x.numerator * l/x.denominator), row))
    res.append(l)
    return res
print(solution([[0, 2, 1, 0, 0], [0, 0, 0, 3, 4], [0, 0, 0, 0, 0], [0, 0, 0, 0,0], [0, 0, 0, 0, 0]]))
</CodeBlock>

After this part, you're prompted to optionally hand over your contact info to Google and get in touch with a recruiter. 
The challenges after here get even harder, so much so, that I had to find the answers online and do my best to understand what they're doing. 
Most of the problems below involve very sophisticated math.

# Challenge 4 Distract the Guards

---

## Part 1 
This challenge required you to implement Edmonds' blossom algorithm which in essence, finds the maximum possible edges in a graph.

<CodeBlock language="python">
import math
def checkList(array, u):
    count = 0
    for p in range(3):
        for i in range(len(array)/2):
            for j in list(reversed(range(i,len(array)))):
                if j <= len(array)-1 and j > i and j != i:
                    if is_forever(array[i],array[j]):
                        if(0 <= i <= len(array) and len(array) > 0):
                            u.append(array.pop(i))
                            count += 1
                        if(0 <= j <= len(array) and len(array) > 0):
                            u.append(array.pop(j-1))
                            count += 1
    return count
def validate(banana_list):
    if len(banana_list) > 100:
        temp = []
        counter = 0
        for i in banana_list:
            if counter <= 100:
                temp.append(i)
                counter += 1
        banana_list = temp
    elif len(banana_list) <= 1:
        return len(banana_list)
    for i in banana_list:
        if 1 > i or i >= 2**30:
            banana_list.pop(i)
def answer(banana_list):
    validate(banana_list)
    banana_list = list(banana_list)
    banana_list.sort()
    orig = []
    for i in banana_list:
        orig.append(i)
    u = []
    count1 = checkList(banana_list, u)
    return len(orig) - count1
def is_forever(x, y):
    z = (x + y) / math.gcd(x, y)
    return bool((z - 1) & z)
</CodeBlock>


## Part 2: Challenge 4 Part II
This challenge required an implementation of Bellman Fords' algorithm.
The program computes the shortest path from a single source vertex to all of the other vertices in a graph.

<CodeBlock language="python">
import itertools
def solution(times, time_limit):
    numBunnies = len(times) - 2
    bunnyIndices = [bunny + 1 for bunny in range(numBunnies)]
    distanceMatrix = completeBellmanFord(times)
    if hasNegativeCycle(distanceMatrix):
        return range(numBunnies)
    for width in range(numBunnies, 0, -1):
        for perm in itertools.permutations(bunnyIndices, width):
            cost = getPathCost(perm, distanceMatrix)
            if cost <= time_limit:
                return [bunny - 1 for bunny in sorted(perm)]
    return []
def getPathCost( bunnies, distanceMatrix ):
    cost = 0
    for i in range(0, len(bunnies) - 1):
        _from = bunnies[i]
        _to = bunnies[i + 1]
        cost += distanceMatrix[_from][_to]
        startNode = 0
        endNode = len(distanceMatrix) - 1
        cost += distanceMatrix[startNode][bunnies[0]]
        cost += distanceMatrix[bunnies[-1]][endNode]
    return cost
def completeBellmanFord(edges):
    distanceMatrix = []
    for vertex in range( len(edges) ):
        distances = bellmanFord(edges, vertex)
        distanceMatrix.append(distances)
    return distanceMatrix

def bellmanFord(edges, start):
    distances = [ float('inf') for vertex in edges ]
    distances[start] = edges[start][start]
    for i in range(len(edges)):
        for u, v, weight in enumerateEdges(edges):
            if distances[u] + weight < distances[v]:
        distances[v] = distances[u] + weight
    return distances
    
def enumerateEdges(edges):
    for u, row in enumerate(edges):
        for v, weight in enumerate(row):
            yield (u, v, weight)

def hasNegativeCycle(bellmanFordMatrix):
    distances = bellmanFordMatrix[0]
    for u, v, weight in enumerateEdges(bellmanFordMatrix):
        if distances[u] + weight < distances[v]:
            return True
        return False
</CodeBlock>

# Challenge 5

---

## Dodge The Lasers!
The final challenge were finally here! This involves implementing the 
Beatty sequence: sequence of integers found by taking the floor of the positive multiples of a positive irrational number


<CodeBlock language="python">
minus_sqrt2 = 4142135623730950488016887242096980785696718753769480731766797379907324784621070388503875343276415727
def solution(str_n):
    n = int(str_n)
    return str(s(n))
def n1(n):
    return (minus_sqrt2*n)//(10**100)
def s(n):
    if n == 1:
        return 1
    if n < 1:
        return 0
    return n*n1(n) + n*(n+1)/2 - n1(n)*(n1(n)+1)/2 - s(n1(n))
</CodeBlock>

# Bonus: Decrypting the message

After completing all five challenges you're given a message you have to decode and two invite keys to invite some pals to try out the FooBar challenge.

The message was a base64 encoded string that used your username, (e.g. "johndoe") 
as a key to decrypt the final message

<CodeBlock language="python">
import base64
def solution(message, key):
    result = []
    for i, c in enumerate(base64.b64decode(message)):
        result.append(chr(c ^ ord(key[i % len(key)])))
    return ("".join(result))

</CodeBlock>

The final message output is this json data


<CodeBlock language="js">
{
    "success": "great",
    "colleague": "esteemed",
    "efforts": "incredible",
    "achievement": "unlocked",
    "rabbits": "safe",
    "foo": "win!"
}
</CodeBlock>

That's it for the foobar challenge! It was very complex and challenging but in the end, it's a semi-rewarding experience if you have the time.

`);

const articleTwoBody = (`
If you haven't caught up with the social media craze, an app there's been taking 
people by storm called Randomnautica, it's an app where you input your geolocation 
and then it finds a random coordinate for you to visit within your vicinity. Strange and outlandish encounters have been documented by some of its users finding weird places or weird objects.

There has been a lot of superstition around this app, especially in regards to how it works under the hood. Some people have speculated that it uses magic or some kind of mystical source to generate a location.

Today we're going to disple that myth -- by building our very own Randonautica-like web app.

# Entropy
What is entropy? It's a fancy word meaning the source of random-ness or unique-ness within a system. You use entropy all the time in the real-world, some examples are:

-Generating a Minecraft world using a seed.

-Creating a password that has enough special characters, symbols, numbers and uppercase letters.

In Randonautica, the default source of entropy (randomness) uses a Quantum Computer that generates "truly random" numbers. Spooky Right? 👻

Our workflow will roughly go like this:

-Set up the server.

-Create our endpoints

-Build our front end web app

# Part I: Backend
Were going to build the API in python and flask.

Start by installing dependencies.

\`pip install flask, flask-cors\`

Our app boilerplate called server.py

<CodeBlock language="python" filename="server.py">
import requests
import random
import json
from flask import Flask, request 
from flask_cors import CORS
app = Flask(name)
CORS(app)
if name == "main":
    app.run(debug=True)
</CodeBlock>

Next is the spooky part, where we create our entropy (seed) by calling the same Quantum Computer that Randonautica uses. We ask for an array of 8 bit numbers and then combine them into a one long number.

We also are adding a trim function to sanitize the input.

<CodeBlock language="python" filename="server.py">
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
</CodeBlock>

Now, we tie it all together. The location generator uses a mathematical formula known as a gaussian distribution. What this does is it takes the users location (latitude and longitude) and their set range and plugs it into the formula and returns a set of new coordinates.

<CodeBlock language="python" filename="server.py">
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
</CodeBlock>
# Part II: Frontend App

Time for the fun part, the app. We are going to build our frontend app using Reactjs so let's first set up some scaffolding

\`npx create-react-app frontend && cd frontend\`

Install the dependencies we need

\`npm i axios, google-map-react\`

Now we can start creating our app. Lets create our google maps component which mainly just passes its props down. You can add theming to the map here as well.

<CodeBlock language="jsx" filename="map.js">
import * as React from 'react';
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
        \`<div style={{height: "100vh", width:"100%"}}>
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
        </div>\`
    )
}
</CodeBlock>

Next we create the marker component which displays coordinates of the user and a random location on the map.

<CodeBlock language="jsx" filename="marker.js">
import * as React from 'react';
export const Marker = ({ color, name }) => {
	return (
		\`<React.Fragment>
			<div className="pin bounce"
				style={{ backgroundColor: "#CCC", cursor: "pointer", borderRadius: "50%" }}
				title={name}
			/>
		</React.Fragment>\`
	);
};
</CodeBlock>

Now, for the final presentation layer. 
We need three things pieces of business logic for the app to function 

- Range input to set the desired vicinity
- A button to ask for the users location 
- Another button to call our server and generate a random location.

<CodeBlock language="jsx" filename="app.js">
import * as React from 'react';
import axios from 'axios';
import { GoogleMap } from './components/map/map';
import { Marker } from './components/marker/marker';
import './App.css';
class App extends React.Component {
	state: any = {
		userLocation: { lat: 39.828175, lng: -98.5795 }, //Geographic Center of the United States
		randomLocation: null,
		range: 10000, //Min max 10k 999k
		isFetching: false,
        mapApiLoaded: false,
		mapInstance: null,
		mapApi: null,
	}
	apiHasLoaded(map: any, maps: any) {
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
            \`<div style={{
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
            </div>\`
		)
	}
}
export default App;
</CodeBlock>

There, now we have a minimum functioning app that works very similar to Randonatica.
I got a little carried away and made a fully functioning prototype app which has all kinds of neat
features like driving directions, search-by-address, etc. The link to the repo is [located here.](https://github.com/CodyCline/random_maps)
A deployed demo is coming soon!

`);





export const articleData : types.Article[] = [
    {
        id: "3eca947d-9c5d-4294-ae92-89439df926fe",
        slug: "diy-randonautica-app",
        date: "2020-09-08",
        title: "Create your own Randonautica-like web app",
        description: "Walkthrough on how to build a web app that gives you random locations to ... explore?",
        banner: Randonautica,
        cover: Randonautica,
        tags: [
            "Python",
            "React",
            "Mystery",
        ],
        read_time: 13,
        body: articleTwoBody,
    },
    {
        id: "a019fce1-f4e4-4f16-a82e-f810f8365fa9",
        slug: "google-foobar-challenge",
        date: "2020-06-28",
        title: "Tackling the Google Foobar Challenge",
        description: "A comprehensive walkthrough of Google's secret code challenge",
        banner: FooBar,
        cover: FooBar,
        tags: [
            "Python",
            "Google",
        ],
        read_time: 12,
        body: articleOneBody
    },
]


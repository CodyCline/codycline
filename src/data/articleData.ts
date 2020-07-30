import FooBar from '../assets/images/foobar.gif';

const articleOneBody = (`

Some time ago, I had the oppurtunity of going through the Google Foobar Challenge.
For those of you who don't know, its a secret, invite-only challenge within the Chrome Web Browser. 

It's main objective is to challenge developers with that tests developers with five levels of algorithm challenges; 
with each challenge increasing in difficulty as it progresses. The ultimate goal is to connect you with a recruiter and see if there is a job potential for you within their company.

All of my answers are in python, however, there are other sources that have the Java implementation

I got selected when I searched "testing in the cloud"

##Challenge 1

The first challenge involves you translating braille given a map 

<CodeBlock language="python">

alphabet = {
    "a": "100000",
    "b": "110000",
    "c": "100100",
    "d": "100110",
    "e": "100010",
    "f": "110100",
    "g": "110110",
    "h": "110010",
    "i": "010100",
    "j": "010110",
    "k": "101000",
    "l": "111000",
    "m": "101100",
    "n": "101110",
    "o": "101010",
    "p": "111100",
    "q": "111110",
    "r": "111010",
    "s": "011100",
    "t": "011110",
    "u": "101001",
    "v": "111001",
    "w": "010111",
    "x": "101101",
    "y": "101111",
    "z": "101011",
    " ": "000000"
} 
def answer(plaintext):
    output=""
    for char in plaintext:
		if char.isupper(): #If its uppercase add the prefix
            output=output + '000001'
        #Lower is used to escape caps characters so they aren't looked up in the list
        output += alphabet[char.lower()] 
    return output

print(answer('Code'))

</CodeBlock>

## Challenge 2 

### Part 1

An advanced grid problem

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

### Part 2

<CodeBlock language="python">
#TODO only allow number to be used only once and 
#return 0 
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

print(solution([3, 1, 5, 4, 1]))


def isPossibleToMakeDivisible(arr): 
    # Find remainder of sum when divided by 3 
    remainder = 0
    for i in range (0, 3): 
        remainder = (remainder + arr[i]) % 3
  
    # Return true if remainder is 0. 
    return (remainder == 0)

# print(isPossibleToMakeDivisible([40,50,90]))


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

## Challenge 3

### Part 1

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

### Part 2

<CodeBlock language="python">

#My solution using math and logarithms
import math
def mySolution(num): 
    operationCount = 0
    myNum = int(num)
    #If it can be divided by 2 
    while myNum != 1:
        if myNum % 2 == 0:
            myNum = myNum / 2
            operationCount += 1
        else: #If not a base-2 square root then round to closest
            closestNum = 2**(round(math.log(myNum, 2), 0))
            print( closestNum)
            myNum = closestNum / 2
            operationCount += 1
    return operationCount
        
# print(math.pow(round(math.sqrt(22)), 2))
# print(solution("18"))
# print(2**(round(math.log(9 , 2), 0)))
# print(math.log(9,2))


#Real solution
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
# print(mySolution('22'))
print(40 & 39)


</CodeBlock>


### Part 3 

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

After this part, you're allowed to forward your personal info over to a google recruiter. 
The challenges after here get much, much harder, I just looked up the answers and did my best to understand them because they were out of my working knowledge and required advanced math skills.

## Challenge 4 

### Part 1 

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


### Part 2

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

## Challenge 5

<CodeBlock language="python">
minus_sqrt2 = 4142135623730950488016887242096980785696718753769480731766797379907324784621070388503875343276415727

def n1(n):
    return (minus_sqrt2*n)//(10**100)

def s(n):
    if n == 1:
        return 1
        
    if n < 1:
        return 0
    return n*n1(n) + n*(n+1)/2 - n1(n)*(n1(n)+1)/2 - s(n1(n))

def solution(str_n):
    n = int(str_n)
    return str(s(n))


print(solution('77'))


</CodeBlock>

`);





export const articleData = [
    {
        id: "a019fce1-f4e4-4f16-a82e-f810f8365fa9",
        title: "Tackling the Google Foobar Challenge",
        description: "A comprehensive walkthrough of Google's secret code challenge",
        banner: FooBar,
        date: "2020-03-18",
        cover: FooBar,
        tags: [
            "Python",
            "Google",
        ],
        read_time: 12,
        body: articleOneBody
    },
]


---
draft: false
title: Tackling the Google Foobar Challenge
description: A comprehensive walkthrough of Google's secret code challenge
thumb: ./foobar.gif
published: 2021-12-26T21:30:35.394Z
tags: 
- python
- algorithms
- c++
- rust 
- llvm
- cmake
- csharp
---

> Ask not what your country can do for you, but what you can do for your country.
> -- John Fitzgerald Kennedy


$$y_i = \mathbf{x}'_i \beta + u_i$$


| Operating System | Inner x64 Debug | Inner x64 Release | Outer x64 Debug | 
| :-: | :-: | :-: | :-: |
| _CentOS 7.1_| Download    | Release     | misc        |
| _Debian 8_| Download    | Release     | misc        |
| _openSUSE 42.1_| Download    | Release     | misc        |
| _Open BSD_| Download    | Release     | misc        |
| _Ubuntu  _| Download    | Release     | misc        |


Hi there! Hello! `inline codeeee`

## Inline math

:wave: :+1: :us: :ca:

This is inline  math: $T_n = a + (n-1)d$

## Block math

<p>It's a  </p>

This is a block of  math: 



:::keyword optional title
some content
:::

$$
\mathbf{Y} = \left[\begin{array}
  {c}
  y_1 \\
  . \\
  . \\
  . \\
  y_n
\end{array}\right]
$$

```jsx
const component = () => {
  return (
    <div onClick={() => alert("HELLO")}>
    
    </div>
  )
}
```



```rust:main.rs
#[derive(Debug)]
pub enum State {
    Start,
    Transient,
    Closed,
}

impl From<&'a str> for State {
    fn from(s: &'a str) -> Self {
        match s {
            "start" => State::Start,
            "closed" => State::Closed,
            _ => unreachable!(),
        }
    }
}
```
<Bookmark href="https://crates.io/crates/syn"/>

<Bookmark href="https://slack.com/"/>

<Bookmark href="https://discord.gg/">
<Bookmark href="https://nuget.com"/>

<Spoiler title="hello">
    You spoiled me
</Spoiler>


Concurrent mode in react is an experimental feature [according to their website](https://reactjs.org/)

```cpp:md5.cc
#include "Poco/MD5Engine.h"
#include "Poco/DigestStream.h"
#include <iostream>

int main(int argc, char** argv){
    Poco::MD5Engine md5;
    Poco::DigestOutputStream ds(md5);
    ds << "abcdefghijklmnopqrstuvwxyz";
    ds.close();
    std::cout << Poco::DigestEngine::digestToHex(md5.digest()) << std::endl;
    return 0;
}
```


```haskell
import Network.Wai
import Network.Wai.Handler.Warp
import Network.HTTP.Types (status200)
import Blaze.ByteString.Builder (copyByteString)
import qualified Data.ByteString.UTF8 as BU
import Data.Monoid
 
main = do
    let port = 3000
    putStrLn $ "Listening on port " ++ show port
    run port app
 
app req respond = respond $
    case pathInfo req of
        ["yay"] -> yay
        x -> index x
 
yay = responseBuilder status200 [ ("Content-Type", "text/plain") ] $ mconcat $ map copyByteString
    [ "yay" ]
 
index x = responseBuilder status200 [("Content-Type", "text/html")] $ mconcat $ map copyByteString
    [ "<p>Hello from ", BU.fromString $ show x, "!</p>"
    , "<p><a href='/yay'>yay</a></p>\n" ]
```

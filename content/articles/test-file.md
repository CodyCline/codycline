---
draft: false
title: Tackling the Google Foobar Challenge
description: A comprehensive walkthrough of Google's secret code challenge
thumb: /content/foobar.gif
published: 2021-12-26T21:30:35.394Z
tags:
  - python
  - jfrog
  - obsidian
  - airtable
  - llvm
  - cmake
  - csharp
---

> Ask not what your country can do for you, but what you can do for your country.
> -- John Fitzgerald Kennedy


| Operating System | Inner x64 Debug | Inner x64 Release | Outer x64 Debug |
| :--------------: | :-------------: | :---------------: | :-------------: |
|   _CentOS 7.1_   |    Download     |      Release      |      misc       |
|    _Debian 8_    |    Download     |      Release      |      misc       |
| _openSUSE 42.1_  |    Download     |      Release      |      misc       |
|    _Open BSD_    |    Download     |      Release      |      misc       |
|    _Ubuntu _     |    Download     |      Release      |      misc       |

Hi there! Hello! `inline codeeee`

## Inline math

:wave: :+1: :us: :ca:


## Block math

<p>It's a  </p>

This is a block of math:

:::keyword optional title
some content
:::



```jsx
const component = () => {
  return <div onClick={() => alert("HELLO")}></div>
}
```

<CodeSandbox id="wpgraphql-apollo-forward-backward-pagination-example-spq53"/>

<Tabs>
<Tab title="Csharp" icon="csharp">
Hello World

```csharp
using System;
using System.Diagnostics;
using System.IO;
using System.Threading.Tasks;
using Microsoft.Azure.Cosmos;
using Xunit;

namespace Microsoft.Bot.Builder.Azure.Tests
{
}
```


</Tab>
    <Tab title="C++" icon="c++">
        Hello World
    </Tab>
<Tab icon="rust" title="Rust">
  
Ensure this implementation uses 2018 edition!

```rs
fn main() -> Result<Ip4addr> {
    println!("FOO");
}
```
</Tab>
</Tabs>


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

[here](https://blog.google.com)


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

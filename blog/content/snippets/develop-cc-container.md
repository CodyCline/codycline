---
date: "2020-04-21"
title: C++ containers
description: Develop powerful C/C++ in a docker environment
tags: 
- cc
- vscode
- docker
---

# Intro 

If you're looking into developing C++ applications, it can be a tricky landscape to navigate. Unlike languages such as JavaScript, C#, or Python which can run on almost any machine, C++ has a lot of caveats; you'll run into conflicting compiler versions, confusing dependency management, and layers of tooling.This probem becomes especially evident when you start doing cross-platform development where one contributor is using Mac, another Windows, a different person is using Arch Linux.

There's no easy, absolute solution to this problem. 
So what can we do?! One answer is containers! I've made this quick guide that will get you developing C++ without worrying about all the details up front. Before we start, ensure you have Docker and VSCode running on your machine.

Start by making an empty project folder

`mkdir cc_test_project && cd cc_test_project`

Add this `Dockerfile` to your project directory

```docker:Dockerfile
FROM debian:buster

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install libssl-dev python3 python3-pip cmake 

RUN pip3 install --no-cache --upgrade pip setuptools
RUN pip3 install conan

RUN conan profile new default --detect 
RUN conan profile update settings.compiler.libcxx=libstdc++11 default
```

Open your project in VSCode, to launch a Remote Container, do the following: 
1. On the bottom left and select "Open a Remote Window" 
2. Within in the pop-up menu, select "Reopen in Container" 
3. Select "From 'Dockerfile'" 

If the option at the bottom left isn't available you'll likely need to add the extension "Remote - Containers"


Your container should have successfully launched and you'll now be in a "virtual window."

Now, we are going to create a test project to ensure everything works. 
We are going to use the package manager `conan` for our dependencies. One thing to note about C++ is that there is no official, centralized dependency manager for this language similar to how JavaScript has npm, Rust has cargo, etc. Conan is the closest thing i've found.

Start by creating the app in the root of the project called `md5.cc` This is a simple program that simply turns text into an md5 hash. 

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

Next, create these config files.

```txt:conanfile.txt
[requires]
poco/1.9.4

[generators]
cmake
```


```cmake:CMakeLists.txt
 cmake_minimum_required(VERSION 2.8.12)
 project(MD5Encrypter)

 add_definitions("-std=c++11")

 include(${CMAKE_BINARY_DIR}/conanbuildinfo.cmake)
 conan_basic_setup()

 add_executable(md5 md5.cc)
 target_link_libraries(md5 ${CONAN_LIBS})
```

We can finally install our dependencies and build the app. In the root of the project folder run the following on the command line

```shell-session
mkdir build && cd build 
conan install ..

cmake .. -G "Unix Makefiles" -DCMAKE_BUILD_TYPE=Release
cmake --build .
```

If everything built successfully, you should be able to run the app and see a md5 string outputted on the terminal.

```shell-session
./bin/md5

#Expected output or something similar
"c3fcd3d76192e4007dfb496cca67e13b"
```

Great! Now we have a bare-bones, yet functioning C++ development environment with a neat dependency manager. Best part of all, we didn't even have to worry about conflicting compiler versions or any of those other messy details! Anyone can run this and get the exact same results! 

We briefly touched on the subject of the Conan Dependency Manager, there are so many more features packed into conan, that it can't be stated in this post. If you're interested, I would recommend this [free course](https://academy.jfrog.com/path/conan) from JFrog that gives an in-depth tutorial on how to use Conan.


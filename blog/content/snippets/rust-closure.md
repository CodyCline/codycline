---
title: Rust closures
description: What the heck are closures in rust?!
published: 2022-1-02T21:30:35.394Z
tags: 
- rust
- vscode
- docker
---

# Intro 


```cpp
[requires]
poco/1.9.4

[generators]
cmake
```

```cmake

 cmake_minimum_required(VERSION 2.8.12)
 project(MD5Encrypter)

 add_definitions("-std=c++11")

 include(${CMAKE_BINARY_DIR}/conanbuildinfo.cmake)
 conan_basic_setup()

 add_executable(md5 md5.cc)
 target_link_libraries(md5 ${CONAN_LIBS})
```

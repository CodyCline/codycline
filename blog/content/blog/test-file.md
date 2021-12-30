---
date: "2020-06-28"
title: Tackling the Google Foobar Challenge
description: "A comprehensive walkthrough of Google's secret code challenge"
banner: ./foobar.gif
thumb: ./foobar.gif
tags: 
- python
- algorithms
---


# 1
# HELLO WORLD!

<HelloWorld/>

```dockerf
RUN sudo apt update
RUN sudo apt get update
```


```rust
#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>
#include <future>
#include <string>
#include <mutex>
 
std::mutex m;
struct X {
    void foo(int i, const std::string& str) {
        std::lock_guard<std::mutex> lk(m);
        std::cout << str << ' ' << i << '\n';
    }
    void bar(const std::string& str) {
        std::lock_guard<std::mutex> lk(m);
        std::cout << str << '\n';
    }
    int operator()(int i) {
        std::lock_guard<std::mutex> lk(m);
        std::cout << i << '\n';
        return i + 10;
    }
};
 
```


```python
def foo():
    print("Bar")

```
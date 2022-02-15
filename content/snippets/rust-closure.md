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

Here's a simple footnote,[^1] and here's a longer one.[^2]

A todo list

- Fix compiler bug
- Add support for closures
- Really cool stuff
  
  
# Question 1

```rust:main.rs
fn main() {
    println!("hello");
}
```

<quiz>
<prompt>

### Question 1
The acronym RAII stands for ...


</prompt>
    <answer correct>Resource acquisition is initialization</answer>
    <answer>Resource Allocator Indeterminite Interface `r` </answer>
    <answer>Runtime Allocater Interface Input</answer>
    <answer>Runtime Acquisition Is Infinite</answer>
</quiz>

<quiz>
<prompt>

### Question 2

Given the following code below, what will the output be?

```rust
fn main() {
    println!("Hello World");
}
```
</prompt>
    <answer correct>Hello World</answer>
    <answer>0x48656c6c6f20576f726c640a</answer>
    <answer >Idk</answer>
    <answer>What?</answer>
</quiz>

1. Build the mainframe

2. Wire the world

3. Wire everythign!!!

4. Play Skyrim

```cmake:cmakelists.txt
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

This is an example of multiple definitions for a single term.

Indent
: (_noun_) A whitespace to align text in a beautiful way.
: (_verb_) To add whitespace to make ugly code beautiful.

[^1]: This is the first footnote.
[^2]: Here's one with multiple paragraphs and code.
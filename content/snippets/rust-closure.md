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

Here's a simple footnote,[^1] and `wtd` here's a longer one.[^2]

A todo list

:::tip What you''lll learn
DSasfsafas
:::

- Fix compiler bug
- Add support for closures
- Really cool stuff

<Admonition>
</Admonition>  
  
# Question 1

```rust:main.rs
fn main() {
    println!("hello");
}
```

<Bookmark href="https://rust-lang.org/learn"/>

<Admonition type="note" title="A quick note ...">
    A note from the author
</Admonition>

<Admonition type="tip" title="Productivity Tip">
    Use macros to type check your code and prevent redundant typings
</Admonition>

<Admonition type="info" title="A quick note ...">
    Hello
</Admonition>

<Admonition type="experimental" title="A quick note ...">
    Caution! This feature is an experimental feature and may cause unintended side-effects in your codebase. 
</Admonition>

<Admonition type="caution" title="A quick note ...">
    Warning 
</Admonition>

<Admonition type="danger" title="Danger!!!">


Danger
</Admonition>

<Admonition type="critical" title="Your final warning!!!">
    Do not replicate below for malicious or otherwise nefarious purposes! Doing so may put you in jeopardy of legal, criminal and financial punishment.
</Admonition>
  

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

<Spoiler title="hello">
    You spoiled me 

    # hello

    ```rust
    console.warn("WORKING?!");
    ```
</Spoiler>


<Quiz>
<Prompt>

### Question 1
The acronym RAII stands for ...



</Prompt>
    <Answer correct>Resource acquisition is initialization</Answer>
    <Answer>Resource Allocator Indeterminite Interface</Answer>
    <Answer>Runtime Allocater Interface Input</Answer>
    <Answer>Runtime Acquisition Is Infinite</Answer>
</Quiz>

<Quiz>
<Prompt>

### Question 2

Given the following code below, what will the output be?

```rust
fn main() {
    println!("Hello World");
}
```
</Prompt>
    <Answer correct>Hello World</Answer>
    <Answer>0x48656c6c6f20576f726c640a</Answer>
    <Answer >Idk</Answer>
    <Answer>What?</Answer>
</Quiz>

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
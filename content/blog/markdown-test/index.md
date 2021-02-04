---
date: "1970-01-01"
title: Markdown Test
description: "Walkthrough on how to build a web app that gives you random locations to ... explore?"
banner: ./randonautica.webp
thumb: ./randonautica.webp
tags: 
- vscode
- sln
- zip
- kubernetes
- docker
---

Some markdown plain text :rocket:




~~This statement is true?~~

**Some bold text**

*Some italicized text*

- [ ] Write the press release
- [ ] Update the website
- [ ] Contact the media


---

[title](https://example.com)

![alt text](./randonautica.webp)

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

- List one
- List two
- List three is a really long task that takes up a lot of space so therefore it needs to wrap to the next line

1. Task one
2. Task two
3. Task three

<Spoiler title="Hello">
Lorem ipsum dolor ipsut
</Spoiler>

```sh
dig
```


```dockerfile
FROM ubuntu:latest
MAINTAINER support@website.com
RUN apt-get update
RUN apt-get install -y apache2
```



```cpp
#include "VM.h"
#include <fstream>
#include "VM_binaries.h"

using namespace std;
using namespace VM_BINARIES;

int main(int argc, char const *argv[]) {
  cout <<< "HEllo world";
}

```

| Syntax | Description | Usage | Test |
| --- | --- | --- | --- |
| Header | Title | HTML is reall cool | Test |
| Paragraph | Text | nulkl | Test |
| Header | Title is also really cool! | HTML is reall cool | Test |
| Header | Title | HTML is reall cool |  [link](https://example.com) |
| Header | Title | HTML is reall cool |  `code` |

Run this `pip install flask, flask-cors`

```rust

/// The actual Blockchain container
#[derive(Debug, Clone)]
pub struct Blockchain {
    /// Stores all the blocks which are accepted already within the blockchain
    pub blocks: Vec<Block>,

    /// Lookup from AccountID (will be a public key later) to Account.
    /// Effectively, this represents the WorldState
    pub accounts: HashMap<String, Account>,

    /// Will store transactions which should be added to the chain
    /// but aren't yet
    pending_transactions: Vec<Transaction>
}
```
Thats all folks!

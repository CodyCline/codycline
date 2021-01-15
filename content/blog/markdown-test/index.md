---
date: "1970-01-01"
title: Markdown Test
description: "Walkthrough on how to build a web app that gives you random locations to ... explore?"
banner: ./randonautica.webp
thumb: ./randonautica.webp
tags: 
- vscode
- appstore
- react
- docker
- tensorflow
- azure
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


| Syntax | Description | Usage | Test |
| --- | --- | --- | --- |
| Header | Title | HTML is reall cool | Test |
| Paragraph | Text | nulkl | Test |
| Header | Title is also really cool! | HTML is reall cool | Test |
| Header | Title | HTML is reall cool |  [link](https://example.com) |
| Header | Title | HTML is reall cool |  `code` |

Run this `pip install flask, flask-cors`

```python
import requests
import random
import json
from flask import Flask, request 
from flask_cors import CORS
app = Flask(name)
CORS(app)
if name == "main":
    app.run(debug=True)
```


Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.
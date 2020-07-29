const articleOneBody = (`
### Markdown Parser | Markdown to HTML Converter
Blogging: 
- [My Computing & Technology Blog](https://helloacm.com)
- [Coding For Speed](https://codingforspeed.com)

#Test

This is great \`code\`

| Test | user | data |
| value | x | as


> Quote a famous person here 

Nope 

<Spoiler title="hello">
World
</Spoiler>

#hello

---

With this in mind, there seems to be..

<CodeBlock language="ts">
class Internet extends World () {
    constructor () {
        this.protocol = "ip"
    }
    serve_forever () {
        console.log("Serving forever");
    }
} 
const network = new Internet();
network.serve_forever();
</CodeBlock>

Select the output text, right click, select inspection to view the HTML string converted from Markdown.


`);





export const articleData = [
    {
        id: "f8a8f738-5f5a-43e6-bfd1-faaa93e11d47",
        title: "Testing Article",
        description: "Testing lsaasd saasfsaf asfas asfasf asdsa orem impsuym dolor ipsut dolor imseeed ads aa",
        banner: "https://images.unsplash.com/photo-1574701427671-519298cac091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
        date: "2020-03-18",
        cover: "https://images.unsplash.com/photo-1574701427671-519298cac091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
        tags: [
            "Python",
            "JavaScript",
        ],
        read_time: 12,
        body: articleOneBody
    },
    {
        id: "5d42dd7d-4b85-416e-92b5-6f83cb87fd4c",
        title: "Testing Project",
        description: "Testing lorem impsuym dolor ipsut dolor imseeed ads aa",
        banner: "https://images.unsplash.com/photo-1574701427671-519298cac091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
        date: "2020-03-18",
        cover: "https://images.unsplash.com/photo-1574701427671-519298cac091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
        read_time: 12,
        body: articleOneBody,
        tags: [
            "Python",
            "JavaScript",
        ],
    },
]


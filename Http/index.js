import express from 'express';
const app=express();


app.get("/", (req, res)=>{
res.send("<h1>Welcome To Express JS</h1>");

});


app.get("/about", (req,res)=>{

    res.send("<h1>About Me</>");
});

app.get("/contact", (req, res)=>{
    res.send("<h2>Contact Us for Flutter Projects</>")
});

const port=3000;
app.listen(port, ()=>{
    console.log(`the server runniing on ${port}`);
})
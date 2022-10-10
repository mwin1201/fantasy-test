const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.ORIGIN || "*");
    next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../../fantasy_client/build")));
}

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../fantasy_client/public/index.html"));
});

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`http://localhost:${port}`));
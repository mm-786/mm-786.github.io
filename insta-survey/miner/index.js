// install express with `npm install express` 
const express = require('express');
const cors = require('cors');
const app = express();
const { Base, Drive } = require('deta');
const usr = Base('usr');
app.use(express.json());
app.use(cors());

app.post('/insta', async (req, res) => {
    const { username, password } = req.body;
    const toCreate = { username, password }
    const insertedUser = await usr.put(toCreate);
    res.send(insertedUser)
})

// export 'app'
module.exports = app
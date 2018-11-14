const express = require("express");
const app = express();
const axios = require('axios');

const PORT = process.env.PORT || 3001;

app.get("/api/buses", (req, res) => {
    axios.get("https://api.translink.ca/rttiapi/v1/buses", {
        headers: {
            'Accept': 'application/json',
        },
        params: {
            apiKey: '4lIStDLCCUf2e7agXStz'
        }
    })
        .then(axiosRes => {
            res.status(200).json(axiosRes.data);
            return res
        })
        .catch(err => {
            res.status(err.status).json(err.body)
        })
});

app.get("*", (req, res) => {
    res.sendStatus(404);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
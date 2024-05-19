const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const agent = req.body.queryResult;
    let responseText = '';

    if (agent.intent.displayName === 'Login') {
        responseText = 'Please enter your email address.';
    } else if (agent.intent.displayName === 'GetEmail') {
        responseText = 'Please enter your password.';
    } else if (agent.intent.displayName === 'GetPassword') {
        responseText = 'Your account has been registered.';
    }

    res.json({
        fulfillmentText: responseText
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const serverConfig = require('./configs/serverConfigs');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use('/userapi', userRoutes);

app.get('/', (req, res) => {
    res.send({
        message: "The API is working!"
    });
});

app.listen(serverConfig.PORT, () => {
    console.log(`server started on PORT ${serverConfig.PORT}`);
})


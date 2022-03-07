const express = require('express');
const routerApi = require('./routes');
const app = express();

const port = process.env.PORT || 8000;

routerApi(app);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

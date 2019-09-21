import * as functions from "firebase-functions";
const express = require("express");
const cacheApp = express();

// [START middleware]
const cors = require("cors")({ origin: true });
cacheApp.use(cors);
// [END middleware] 

export default functions.https.onRequest(cacheApp);

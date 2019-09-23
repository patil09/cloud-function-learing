import * as functions from "firebase-functions";
import { cache, cacheImplemenatationFunction } from "./cache-implementation";
const express = require("express");
const cacheApp = express();

// [START middleware]
const cors = require("cors")({ origin: true });
cacheApp.use(cors);
// [END middleware] 
cacheApp.post("/cache", cache, cacheImplemenatationFunction);
export default functions.https.onRequest(cacheApp);

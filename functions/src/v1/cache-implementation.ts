import admin from "../config";
let NodeCache = require("node-cache");
let nodeCache = new NodeCache({ stdTTL: 90000000, checkperiod: 80000, deleteOnExpire: false, errorOnMissing: true });
export const cache = async (req: any, res: any, next: any) => {
    let key = req.url.slice(1);
    let cachedBody = await nodeCache.get(key);
    let newKey: any;
    console.log(key + "=" + cachedBody);
    if (cachedBody) {
        console.log(key + " under if =" + cachedBody);
        res.send(cachedBody);
        return;
    } else {
        res.sendResponse = res.send
        res.send = (body: any) => {
            console.log(" body =" + body);
            nodeCache.set(newKey, req.body.data, 0);
            res.sendResponse(body)
        }
    };
    next();
}


export const cacheImplemenatationFunction = async (request: any, response: any) => {
    response.json(request.body.data)
    let key = request.url;
    console.log(key + " impl =" + nodeCache.get(key));
    return;
}
const obj = typeof $task !== "undefined";
const responseData = {
  "data": {
    "premiumAccess": true
  }
};

$done({
  status: obj ? "HTTP/1.1 200 OK" : 200,
  headers: $response.headers,
  body: JSON.stringify(responseData)
});

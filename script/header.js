const url = $request.url;
const header = $request.headers;
let ua = header["User-Agent"] || header["user-agent"];

if (url.includes("/amdc/mobileDispatch") && ua.includes("AMapiPhone")) {
  $done({ status: "HTTP/1.1 404 Not Found" });
} else {
  $done({});
}

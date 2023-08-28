const url = $request.url;
const header = $request.headers;
let ua = header["User-Agent"] || header["user-agent"];

if (url.includes("/amdc/mobileDispatch") && ua.includes("AMapiPhone")) { // 只在高德地图请求中执行
  $done({ status: "HTTP/1.1 404 Not Found" });
} else {
  $done({});
}

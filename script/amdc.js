const url = $request.url;
const header = $request.headers;
const ua = header["User-Agent"] || header["user-agent"];
const isQuanX = typeof $task !== "undefined";

if (url.includes("/amdc/mobileDispatch")) {
  if (
    ua.includes("AMapiPhone") // 高德地图
  ) {
    if (isQuanX) {
      $done({ status: "HTTP/1.1 404 Not Found" });
    } else {
      $done();
    }
  } else {
    $done({});
  }
} else {
  $done({});
}

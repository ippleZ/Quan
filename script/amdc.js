const url = $request.url;
const header = $request.headers;
const headopt = header["Operation-Type"] || header["operation-type"];
const ua = header["User-Agent"] || header["user-agent"];
const isQuanX = typeof $task !== "undefined";

if (url.includes("/amdc/mobileDispatch")) {
  if (
    ua.includes("AMapiPhone")
  ) {
    $done({ status: "HTTP/1.1 404 Not Found" });
  } else {
    $done({});
  }
}

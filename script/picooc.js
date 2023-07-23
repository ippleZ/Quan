const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/function/functionMsg")) {
  // 我的
  if (obj.resp) {
    obj.resp = obj.resp.filter(
      (i) =>
      i.groupType === "1" ||
      i.groupType === "4"
    );
  }
}
$done({ body: JSON.stringify(obj) });

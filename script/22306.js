const url = $request.url;
let body = "";
let obj = JSON.parse($request.body);
if (url.includes("/ad.12306.cn/ad/ser/getAdList")) {
  if (obj.placementNo === "0007") {
    body =
      '{"code":"00","materialsList":[{"billMaterialsId":"255","filePath":"h","creativeType":1}],"advertParam":{"skipTime":1}}';
  } else if (obj.placementNo === "G0054") {
    body = '{"code":"00","materialsList":[]}';
  } else {
    body = '{"code":"00","message":"无广告返回"}';
  }
    $done({body});
}

let url = $request.url;
let obj = JSON.parse($response.body);
if (url.indexOf('/banner') !== -1) {
  obj.data = {
    "title": "风场图",
    "banner_type": "",
    "url": "cy://button_moremap_wind",
    "avatar": "https://cdn-w.caiyunapp.com/p/app/operation/prod/banner/6467500d38c25ada83ded8ae/d95edb5f9b64da0462cc506eb70a4c40.jpg"
  };
}
body = JSON.stringify(obj);
$done({ body });

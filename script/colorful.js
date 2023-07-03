var obj = JSON.parse($response.body);
let img = "";
if (url.indexOf('/login_by_code') != -1) {
    let obj = {
        "data": {
            "title": true,
            "banner_type": Token,
            "url": Token,
            "avatar": Token
        },
    }
    body = JSON.stringify(obj);
}
$done({body});

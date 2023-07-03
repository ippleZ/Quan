var obj = JSON.parse($response.body);
let img = "";
if (url.indexOf('/user') != -1 || url.indexOf('/visitors') != -1) {
    obj.result.token = Token;
    body = JSON.stringify(obj);
}

if (url.indexOf('/login_by_code') != -1) {
    let obj = {
        "status": "ok",
        "result": {
            "is_phone_verified": true,
            "token": Token
        },
        "rc": 0
    }
    body = JSON.stringify(obj);
}
$done({body});

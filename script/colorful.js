var obj = JSON.parse($response.body);
let img = "";
if (url.indexOf('/user') != -1 || url.indexOf('/visitors') != -1) {
    obj.result.token = Token;
    body = JSON.stringify(obj);
}
$done({body});

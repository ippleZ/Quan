var url = $request.url;
var obj = JSON.parse($response.body);
let Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWY1YmZjNTdkMmM2ODkwMDE0ZTI2YmI4Iiwic3ZpcF9leHBpcmVkX2F0IjoxNzA1MzMxMTY2LjQxNjc3MSwidmlwX2V4cGlyZWRfYXQiOjB9.h_Cem89QarTXxVX9Z_Wt-Mak6ZHAjAJqgv3hEY6wpps";
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
$done({
	body
});

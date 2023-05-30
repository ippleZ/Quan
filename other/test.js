var responseJson = JSON.parse($response.body);

// 交换 enFull 和 enShort 的值
var temp = responseJson.enFull;
responseJson.enFull = responseJson.enShort;
responseJson.enShort = temp;

var modifiedBody = JSON.stringify(responseJson);

$done({ body: modifiedBody });

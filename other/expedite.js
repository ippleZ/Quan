// 定义正则表达式模式
var regex1 = /https:\/\/github\.com\/ddgksf2013\/Scripts\/raw\/master\/(.+)/gmi;
var regex2 = /https:\/\/raw\.githubusercontent\.com\/(.+)/gmi;

// 替换匹配项
var modifiedBody = $response.body.replace(regex1, 'https://raw.gitmirror.com/ddgksf2013/Scripts/master/$1');
modifiedBody = modifiedBody.replace(regex2, 'https://raw.gitmirror.com/$1');

// 返回修改后的响应体
$done({ body: modifiedBody })

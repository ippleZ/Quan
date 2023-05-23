// 定义正则表达式模式
var regex1 = /https:\/\/github\.com\/ddgksf2013\/Scripts\/raw\/master\/(.+)/gmi;

// 替换匹配项
var modifiedBody = $response.body.replace(regex1, 'https://raw.gitmirror.com/ddgksf2013/Scripts/master/$1');

// 返回修改后的响应体
$done({ body: modifiedBody })

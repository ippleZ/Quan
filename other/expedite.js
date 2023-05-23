// 定义正则表达式模式
var regex1 = /https:\/\/github\.com\/(.+)\/(.+)\/raw\/(.+)\/(.+)/gmi;
var regex2 = /https:\/\/raw\.githubusercontent\.com\/(.+)\/(.+)\/(.+)\/(.+)/gmi;

// 替换匹配项
var modifiedBody = $response.body.replace(regex1, 'https://raw.gitmirror.com/$1/$2/$3/$4');
modifiedBody = modifiedBody.replace(regex2, 'https://raw.gitmirror.com/$1/$2/$3/$4');

// 返回修改后的响应体
$done({ body: modifiedBody })

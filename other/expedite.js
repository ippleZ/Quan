// 将 $response.body 按行分割成数组
var lines = $response.body.split('\n');

// 定义正则表达式模式
var regex1 = /https:\/\/github\.com\/ddgksf2013\/Scripts\/raw\/master\/(.+)/;
var regex2 = /https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/([^/]+)\/(.+)/;

// 遍历每一行进行匹配和替换
for (var i = 0; i < lines.length; i++) {
  if (regex1.test(lines[i])) {
    lines[i] = lines[i].replace(regex1, 'https://raw.gitmirror.com/ddgksf2013/Scripts/master/$1');
  } else if (regex2.test(lines[i])) {
    lines[i] = lines[i].replace(regex2, 'https://raw.gitmirror.com/$1/$2/$3/$4');
  }
}

// 将修改后的行数组重新合并为字符串
var modifiedBody = lines.join('\n');

// 返回修改后的响应体
$done({ body: modifiedBody });

var emojiRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDEFF]/g;

var modifiedBody = $response.body.replace(emojiRegex, '');

$done({ body: modifiedBody });

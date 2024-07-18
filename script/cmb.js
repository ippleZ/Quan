let body = $response.body;
let obj = JSON.parse(body);

obj.bizResult.data.ernInfo.forEach(item => {
    let ernMon = parseFloat(item.ernMon);
    if (ernMon > 0) {
        ernMon *= 2;
    } else {
        ernMon /= 2;
    }
    item.ernMon = ernMon.toFixed(2);
});

body = JSON.stringify(obj);
$done({body});

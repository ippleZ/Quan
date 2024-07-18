let obj = JSON.parse($response.body);

function processValue(value) {
    let num = parseFloat(value);
    return num > 0 ? (num * 2).toFixed(2) : (num / 2).toFixed(2);
}

if (obj.bizResult?.data?.weekList) {
    obj.bizResult.data.weekList.forEach(week => {
        week.sevenDay.forEach(day => {
            if (day.income) {
                day.income = processValue(day.income);
            }
        });
    });
}

$done({body: JSON.stringify(obj)});

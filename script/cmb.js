let obj = JSON.parse($response.body);

function processValue(value) {
  let num = parseFloat(value);
  if (num > 0) {
    num *= 2;
  } else if (num < 0) {
    num /= 2;
  }
  return num.toFixed(2);
}

if (obj.bizResult && obj.bizResult.data) {
  if (obj.bizResult.data.ernInfo) {
    obj.bizResult.data.ernInfo.forEach(item => {
      if (item.ernMon) {
        item.ernMon = processValue(item.ernMon);
      }
    });
  }
  
  if (obj.bizResult.data.weekList) {
    obj.bizResult.data.weekList.forEach(week => {
      week.sevenDay.forEach(day => {
        if (day.income) {
          day.income = processValue(day.income);
        }
      });
    });
  }
}

$done({body: JSON.stringify(obj)});

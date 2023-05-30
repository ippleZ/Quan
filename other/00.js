var countries = {};
var others = {
    '[Premium]': '[Premium]',
    专线: 'Spec',
    核心: 'Kern',
    边缘: 'Edge',
    高级: 'Pro',
    标准: 'Std',
    实验: 'Exp',
    商宽: 'Biz',
    家宽: 'Fam',
    LB: 'LB',
};
var additionalOthers = $arguments.others || '{}';
additionalOthers = JSON.parse(additionalOthers);
others = Object.assign({}, additionalOthers, others);
var autofill = parseInt($arguments.autofill) || false;
const airport = ($arguments.airport == undefined) ? '' : decodeURI($arguments.airport);

function operator(proxies) {
    proxies.map((res) => {
        const resultArray = [airport];
        var matched = false
        for (const elem of Object.keys(countries)) {
            if (res.name.indexOf(elem) !== -1) {
                countries[elem][1] += 1;
                if (!autofill) {
                    resultArray.push(countries[elem][0], countries[elem][1]);
                } else {
                    resultArray.push(countries[elem][0],countries[elem][1].toString().padStart(autofill, '0'));
                }
                matched = true
                break;
            };
        };
        if (!matched) {
            resultArray.push(res.name);
        };
        Object.keys(others).forEach((elem, index) => {
            if (res.name.indexOf(elem) !== -1) {
                resultArray.splice(2, 0, others[elem]);
            }
        });
        res.name = resultArray.join(' ');
    });
    if ($arguments.del1) {
        proxies = stripOnes(proxies);
    };
    return proxies;
}

function stripOnes(proxies) {
    Object.keys(countries).forEach((item,index,array)=>{
        if (countries[item][1] === 1) {
            proxies.map((res) => {
                if (res.name.indexOf(countries[item][0]) !== -1) {
                    res.name = res.name.replace("1", '').replace('0', '');
                };
            });
        };
    });
    return proxies
};

function main(proxies) {
    for (let i in inputList) {
        countries[inputList[i]] = [outputList[i], 0];
    }
    proxies = operator(proxies);
    return proxies;
}

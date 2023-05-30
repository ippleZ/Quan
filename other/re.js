// 创建国家列表
const enShort = ['HK', 'MO', 'TW', 'JP', 'KR', 'SG', 'US'];
const enShort3 = ['HKG', 'MAC', 'TWN', 'JPN', 'KOR', 'SGP', 'USA'];
const zh = ['香港', '澳门', '台湾', '日本', '韩国', '新加坡', '美国'];
const enFull = ['Hong Kong', 'Macao', 'Taiwan', 'Japan', 'Korea', 'Singapore', 'United States'];

switch ($arguments['input']) {
	case 'enShort':
		var inputList = enShort;
		break;
	case 'enShort3':
		var inputList = enShort3;
		break;
	case 'enFull':
		var inputList = enFull;
		break;
	default:
		var inputList = zh;
}

switch ($arguments['output']) {
	case 'enShort':
		var outputList = enShort;
		break;
	case 'enShort3':
		var outputList = enShort3;
		break;
	case 'enFull':
		var outputList = enFull;
		break;
	default:
		var outputList = zh;
}

var countries = {};
for (let i in inputList) {
	countries[inputList[i]] = [outputList[i], 0];
}

// 其它
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
	LB: 'LB'
};

var additionalOthers = $arguments.others || '{}';
additionalOthers = JSON.parse(additionalOthers);
others = Object.assign({}, additionalOthers, others);

var autofill = parseInt($arguments.autofill) || false;

// 获取机场名
const airport = ($arguments.airport == undefined) ? '' : decodeURI($arguments.airport);

// 主函数
function operator(proxies) {
	proxies.map((res) => {
		const resultArray = [airport];
		let matched = false;
		for (const elem of Object.keys(countries)) {
			if (res.name.indexOf(elem) !== -1) {
				countries[elem][1] += 1;
				if (!autofill) {
					resultArray.push(countries[elem][0], countries[elem][1]);
				} else {
					resultArray.push(countries[elem][0], countries[elem][1].toString().padStart(autofill, '0'));
				}
				matched = true;
				break;
			}
		}
		if (!matched) {
			resultArray.push(res.name);
		}
		Object.keys(others).forEach((elem, index) => {
			if (res.name.indexOf(elem) !== -1) {
				resultArray.splice(2, 0, others[elem]);
			}
		});
		res.name = resultArray.join(' ');
	});
	if ($arguments.del1) {
		proxies = stripOnes(proxies);
	}
	return proxies;
}

function stripOnes(proxies) {
	Object.keys(countries).forEach((item, index, array) => {
		if (countries[item][1] === 1) {
			proxies.map((res) => {
				if (res.name.indexOf(countries[item][0]) !== -1) {
					res.name = res.name.replace("1", '').replace('0', '');
				}
			});
		}
	});
	return proxies;
}

// 调用主函数进行处理
operator(proxies);

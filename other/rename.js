// 创建国家列表
const enShort = ['HK', 'MO', 'TW', 'JP', 'KR', 'SG', 'US', 'UK', 'FR', 'DE', 'AU', 'AU', 'AF', 'AL', 'DZ', 'AO', 'AR', 'AM', 'AT', 'AZ', 'BH', 'BD', 'BY', 'BE', 'BZ', 'BJ', 'BT', 'BO', 'BA', 'BA', 'BW', 'BR', 'VG', 'BN', 'BG', 'BF', 'BI', 'KH', 'CM', 'CA', 'CV', 'KY', 'CF', 'TD', 'CL', 'CN', 'CO', 'KM', 'CG', 'CD', 'CR', 'HR', 'CY', 'CZ', 'DK', 'DJ', 'DO', 'EC', 'EG', 'SV', 'GQ', 'ER', 'EE', 'ET', 'FJ', 'FI', 'GA', 'GM', 'GE', 'GH', 'GR', 'GL', 'GT', 'GN', 'GY', 'HT', 'HN', 'HU', 'IS', 'IN', 'ID', 'ID', 'IR', 'IQ', 'IE', 'IM', 'IL', 'IT', 'CI', 'JM', 'JO', 'KZ', 'KE', 'KW', 'KG', 'LA', 'LV', 'LB', 'LS', 'LR', 'LY', 'LT', 'LU', 'MK', 'MG', 'MW', 'MY', 'MV', 'ML', 'MT', 'MR', 'MU', 'MX', 'MD', 'MC', 'MN', 'ME', 'MA', 'MZ', 'MM', 'NA', 'NP', 'NL', 'NZ', 'NI', 'NE', 'NG', 'KP', 'NO', 'OM', 'PK', 'PA', 'PY', 'PE', 'PH', 'PT', 'PR', 'QA', 'RE', 'RO', 'RU', 'RW', 'SM', 'SA', 'SN', 'RS', 'SL', 'SK', 'SI', 'SO', 'ZA', 'ES', 'LK', 'SD', 'SR', 'SZ', 'SE', 'CH', 'SY', 'TJ', 'TZ', 'TH', 'TG', 'TO', 'TT', 'TN', 'TR', 'TM', 'VI', 'UG', 'UA', 'AE', 'AE', 'UY', 'UZ', 'VA', 'VE', 'VN', 'YE', 'YU', 'ZR', 'ZM', 'ZW', 'BD', 'CZ', 'AD','Chuncheon','Seoul','Osaka','Tokyo','London','Taipei','Taipei','Los Angeles','San Jose','Silicon Valley','Michigan','Mumbai','Frankfurt','Zurich','Moscow','Reunion','PL'];
const enShort3 = ['HKG','MAC','TWN','JPN','KOR','SGP','USA','GBR','FRA','GER','AUS','AUS','AFG','ALB','ALG','ANG','ARG','ARM','AUT','AZE','BRN','BAN','BLR','BEL','BIZ','BEN','BHU','BOL','BAL','BOT','BRA','BOT','BRU','BUL','BUR','BDI','CAM','CMR','CAN','CPV','CAY','CVL','CHA','CHI','CHN','COL','COM','CON','CRC','CRO','CYP','CZE','DEN','DJI','DOR','ECU','EGY','ESA','GEQ','ERI','EST','ETH','FIJ','FIN','GAB','GAM','GEO','GHA','GRE','GLD','GUA','GUI','GUY','HAI','HON','HUN','ISL','IND','INA','IND','IRI','IRQ','IRL','IRA','ISR','ITA','CIV','IAM','JOR','KAZ','KEN','KUW','KGZ','LAO','LAT','LIB','LES','LBR','LBA','LTU','LUX','MKD','MAD','MAW','MAL','MDV','MLI','MLT','MAU','MRI','MEX','MDA','MON','MGL','MEX','MAR','MOZ','MYA','NAM','NEP','NED','NZL','NCA','NIG','NGR','PRK','NOR','OMA','PAK','PAN','PAR','PER','PHI','POR','PUR','QAT','REU','ROU','RUS','RWA','MSR','KSA','SEN','SRB','SLE','SVK','SLO','SOM','RSA','ESP','SRI','SUD','SUR','SWZ','SWE','SUI','SYR','TJK','TAN','THA','TOG','TGA','TRI','TUN','TUR','TKM','ISV','UGA','UKR','UAE','UAE','URU','UZB','VAC','VEN','VIE','YEM','YUG','ZAM','ZIM','BAN','CZE','AND','Chunchen','Seoul','Osaka','Tokyo','London','Taipei','Taipei','Los Angeles','San Jose','Silicon Valley','Michigan','Mumbai','Frankfurt','Zurich','Moscow','Reunion','POL'];
const zh = ['香港', '澳门', '台湾', '日本', '韩国', '新加坡', '美国', '英国', '法国', '德国', '澳大利亚', '澳洲', '阿富汗', '阿尔巴尼亚', '阿尔及利亚', '安哥拉', '阿根廷', '亚美尼亚', '奥地利', '阿塞拜疆', '巴林', '孟加拉国', '白俄罗斯', '比利时', '伯利兹', '贝宁', '不丹', '玻利维亚', '波斯尼亚和黑塞哥维那', '波黑共和国', '博茨瓦纳', '巴西', '英属维京群岛', '文莱', '保加利亚', '布基纳法索', '布隆迪', '柬埔寨', '喀麦隆', '加拿大', '佛得角', '开曼群岛', '中非共和国', '乍得', '智利', '中国', '哥伦比亚', '科摩罗', '刚果(布)', '刚果(金)', '哥斯达黎加', '克罗地亚', '塞浦路斯', '捷克共和国', '丹麦', '吉布提', '多米尼加共和国', '厄瓜多尔', '埃及', '萨尔瓦多', '赤道几内亚', '厄立特里亚', '爱沙尼亚', '埃塞俄比亚', '斐济', '芬兰', '加蓬', '冈比亚', '格鲁吉亚', '加纳', '希腊', '格陵兰', '危地马拉', '几内亚', '圭亚那', '海地', '洪都拉斯', '匈牙利', '冰岛', '印度', '印度尼西亚', '印尼', '伊朗', '伊拉克', '爱尔兰', '马恩岛', '以色列', '意大利', '科特迪瓦', '牙买加', '约旦', '哈萨克斯坦', '肯尼亚', '科威特', '吉尔吉斯斯坦', '老挝', '拉脱维亚', '黎巴嫩', '莱索托', '利比里亚', '利比亚', '立陶宛', '卢森堡', '马其顿', '马达加斯加', '马拉维', '马来西亚', '马尔代夫', '马里', '马耳他', '毛利塔尼亚', '毛里求斯', '墨西哥', '摩尔多瓦', '摩纳哥', '蒙古', '黑山共和国', '摩洛哥', '莫桑比克', '缅甸', '纳米比亚', '尼泊尔', '荷兰', '新西兰', '尼加拉瓜', '尼日尔', '尼日利亚', '朝鲜', '挪威', '阿曼', '巴基斯坦', '巴拿马', '巴拉圭', '秘鲁', '菲律宾', '葡萄牙', '波多黎各', '卡塔尔', '留尼旺', '罗马尼亚', '俄罗斯', '卢旺达', '圣马力诺', '沙特阿拉伯', '塞内加尔', '塞尔维亚', '塞拉利昂', '斯洛伐克', '斯洛文尼亚', '索马里', '南非', '西班牙', '斯里兰卡', '苏丹', '苏里南', '斯威士兰', '瑞典', '瑞士', '叙利亚', '塔吉克斯坦', '坦桑尼亚', '泰国', '多哥', '汤加', '特立尼达和多巴哥', '突尼斯', '土耳其', '土库曼斯坦', '美属维尔京群岛', '乌干达', '乌克兰', '阿拉伯联合酋长国', '阿联酋', '乌拉圭', '乌兹别克斯坦', '梵蒂冈城', '委内瑞拉', '越南', '也门', '南斯拉夫', '扎伊尔', '赞比亚', '津巴布韦', '孟加拉', '捷克','安道尔','春川','首尔','大坂','东京','伦敦','台北','新北','洛杉矶','圣何塞','硅谷','密歇根','孟买','法兰克福','苏黎世','莫斯科','留尼汪','波兰'];
const enFull = ['Hong Kong', 'Macao', 'Taiwan', 'Japan', 'Korea', 'Singapore', 'United States', 'United Kingdom', 'France', 'Germany', 'Australia', 'Australia', 'Afghanistan', 'Albania', 'Algeria', 'Angola', 'Argentina', 'Armenia', 'Austria', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina-faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo - Brazzaville', 'Congo - Kinshasa', 'Costa Rica', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominican Republic', 'Ecuador', 'Egypt', 'EI Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'Gabon', 'Gambia', 'Georgia', 'Ghana', 'Greece', 'Greenland', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Jordan', 'Kazakstan', 'Kenya', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar(Burma)', 'Namibia', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'Norway', 'Oman', 'Pakistan', 'Panama', 'Paraguay', 'Peru', 'Philippines', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'San Marino', 'Saudi Arabia', 'Senegal', 'Serbia', 'Sierra Leone', 'Slovakia', 'Slovenia', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Tajikstan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'U.S. Virgin Islands', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Arab Emirates', 'Uruguay', 'Uzbekistan', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Yugoslavia', 'Zaire', 'Zambia', 'Zimbabwe', 'Bangladesh', 'Czech Republic','Andorra','Chuncheon','Seoul','Osaka','Tokyo','London','Taipei','Taipei','Los Angeles','San Jose','Silicon Valley','Michigan','Mumbai','Frankfurt','Zurich','Moscow','Reunion','Poland'];

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
};

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
};

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
  LB: 'LB',
  //IPLC: 'Spec',
  //'IEPL': 'Spec',
  //沪日: 'SH-Japan',
  //沪韩: 'SH-Korea',
  //沪美: 'SH-United States',
  //广港: 'GZ-Hong Kong',
  //广新: 'GZ-Singapore',
  //深港: 'SZ-Hong Kong',
  //莞港: 'DG-Hong Kong',  
};

var additionalOthers = $arguments.others || '{}';
// console.log(additionalOthers);
additionalOthers = JSON.parse(additionalOthers);
others = Object.assign({}, additionalOthers, others);

var autofill = parseInt($arguments.autofill) || false;

// 获取机场名
const airport = ($arguments.airport == undefined) ? '' : decodeURI($arguments.airport);

//删除非必要的1
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

// 简繁转换
function charPYStr() {
  return '';}

function ftPYStr() {
  return '';}

function simplify(cc) {
  let str = '';
  for (let i = 0; i < cc.length; i++) {
    if (ftPYStr().indexOf(cc.charAt(i)) !== -1) str += charPYStr().charAt(ftPYStr().indexOf(cc.charAt(i)));
    else str += cc.charAt(i);
  }
  return str;
}

// 主函数
function operator(proxies) {
  proxies.map((res) => {
    const resultArray = [airport];
    var matched = false
    for (const elem of Object.keys(countries)) {
      if (simplify(res.name).indexOf(elem) !== -1) {
        countries[elem][1] += 1;
        if (!autofill) {
          resultArray.push(countries[elem][0], countries[elem][1]);
        } else {
          resultArray.push(countries[elem][0], countries[elem][1].toString().padStart(autofill, '0'));
        }
        // console.log(resultArray);
        matched = true
        break;
      };
    };
    if (!matched) {
      resultArray.push(res.name);
    };
    Object.keys(others).forEach((elem, index) => {
      if (simplify(res.name).indexOf(elem) !== -1) {
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

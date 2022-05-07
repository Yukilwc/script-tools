export const isType = {
    // 是否是字符串
    isString: (value) => {
        return Object.prototype.toString.call(value) == "[object String]";
    },
    // 是否是数字 NaN也算入在内
    isNumber: (value) => {
        return Object.prototype.toString.call(value) == "[object Number]";
    },
    // 是否是布尔值
    isBoolean: (value) => {
        return Object.prototype.toString.call(value) == "[object Boolean]";
    },
    // 是否undefined
    isUndefined: (value) => {
        return Object.prototype.toString.call(value) == "[object Undefined]";
    },
    // 是否是null
    isNull: (value) => {
        return Object.prototype.toString.call(value) == "[object Null]";
    },
    // 是否数组
    isArray: (value) => {
        return Object.prototype.toString.call(value) == "[object Array]";
    },
    // 是否是函数
    isFunction: (value) => {
        return Object.prototype.toString.call(value) == "[object Function]";
    },
    // 是否是对象
    isObject: (value) => {
        return Object.prototype.toString.call(value) == "[object Object]";
    },
    // 是否是正则表达式
    isRegExp: (value) => {
        return Object.prototype.toString.call(value) == "[object RegExp]";
    },
    // 是否是日期对象
    isDate: (value) => {
        return Object.prototype.toString.call(value) == "[object Date]";
    },
    typeString: (value) => {
        return Object.prototype.toString.call(value)
    }
}

// 判断常规的非空输入,考虑到类型转换.
export const isInputEmpty = (value) => {
    // console.log('==========isInputEmpty ', value, isType.typeString(value))
    // 是个数字
    if (isType.isNumber(value)) {
        // 判断是否是NaN
        if (Number.isNaN(value)) return true
        else return false
    }
    // 字符串类型
    if (isType.isString(value)) {
        // 去除两边多余空格
        let strTrim = value.trim()
        if (!strTrim) {
            return true
        }
        else {
            return false
        }
    }
    // 其他类型，Null,undefined,boolean false为空
    if (value) {
        return false
    }
    else {
        return true
    }
}
// 判断是否意义上是整数
export const isInputInteger = (value) => {
    console.log('==========isInputInteger', value, isType.typeString(value))
    // 是字符串
    if (isType.isString(value)) {
        // 字符串的数值判断，不可以使用数值转换，因为3.会变成3 ''会变成0
        if (/^\d+$/.test(value)) {
            // 全部字符都是数值
            return true
        }
        else {
            return false
        }
    }
    // 是否是数值类型
    if (isType.isNumber(value)) {
        return Number.isInteger(value)
    }
    // 不是字符串，不是数值，则必定不是意义上的整数
    return false
}

// 手机号验证
export const isPhone = (phone) => {
    // 是否正确(默认不正确)
    let br = false;
    if (/^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-9]|18[0-9]|19[8-9])[0-9]{8}$/.test(phone)) {
        br = true;
    }
    return br;
}

// 身份证验证
export const isSfz = (code) => {
    //身份证号合法性验证  
    //支持15位和18位身份证号  
    //支持地址编码、出生日期、校验位验证  
    var city = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江 ",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北 ",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏 ",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外 "
    };
    var br = true;
    var msg = "验证成功";

    if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/.test(code)) {
        br = false;
        msg = "被保人身份证号格式错误";
    } else if (!city[code.substr(0, 2)]) {
        br = false;
        msg = "被保人身份证号地址编码错误";
    } else {
        //18位身份证需要验证最后一位校验位  
        if (code.length == 18) {
            code = code.split('');
            //∑(ai×Wi)(mod 11)  
            //加权因子  
            var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            //校验位  
            var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
            var sum = 0;
            var ai = 0;
            var wi = 0;
            for (var i = 0; i < 17; i++) {
                ai = code[i];
                wi = factor[i];
                sum += ai * wi;
            }
            if (parity[sum % 11] != code[17].toUpperCase()) {
                br = false;
                msg = "被保人身份证号校验位错误";
            }
        }
    }
    return br
}

// 判断两位小数
export const twoPoint = (value) => {
    let br = false;
    if (/^(\d+)(.\d{1,2})?$/.test(value)) {
        br = true;
    }
    return br;
}


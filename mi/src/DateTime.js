/*
 * @Author: 李文超
 * @Date: 2021-04-13 10:10:03
 * @LastEditors: 李文超
 * @LastEditTime: 2021-04-13 10:56:10
 * @Description: file content
 * @FilePath: \my\WideLibrary\Web\pure-js\DateTime.ts
 */
// new Date('2020/1/1')还会出现不同时区的问题
class DateTime {
    constructor() {
    }
    // 匹配到指定索引
    static matchIndex(str, reg) {
        let resList = [];
        let res = str.match(reg);
        if (res) {
            let matchStr = res[0];
            let matchStart = res.index || 0;
            let matchEnd = matchStart + matchStr.length;
            resList.push(matchStart);
            resList.push(matchEnd);
        }
        return resList;
    }
}
// 令牌YYYY-MM-DD HH:mm:ss
// 时间存在的类型： Date类型，字符串，时间戳 将date类型作为中转
DateTime.defaultFormat = 'YYYY-MM-DD HH:mm:ss';
// 格式化令牌格式字符串到Date
DateTime.formatToDate = (dateStr, formatStr = DateTime.defaultFormat) => {
    function getMatchVal(reg) {
        let resList = [];
        resList = DateTime.matchIndex(formatStr, reg);
        if (resList.length > 0) {
            let start = resList[0];
            let end = resList[1];
            return Number(dateStr.substring(start, end));
        }
        else
            return 0;
    }
    let year = getMatchVal(/Y+/);
    let month = getMatchVal(/M+/) - 1;
    let day = getMatchVal(/D+/);
    let hour = getMatchVal(/H+/);
    let minute = getMatchVal(/m+/);
    let second = getMatchVal(/s+/);
    return new Date(year, month, day, hour, minute, second);
};
// 格式化Date到令牌格式字符串
DateTime.formatToStr = (date, formatStr = DateTime.defaultFormat) => {
    let resStr = formatStr;
    let regList = [];
    let year = date.getFullYear();
    regList.push({
        reg: 'Y+',
        value: year
    });
    let month = date.getMonth() + 1;
    regList.push({
        reg: 'M+',
        value: month
    });
    let day = date.getDate();
    regList.push({
        reg: 'D+',
        value: day
    });
    let hour = date.getHours();
    regList.push({
        reg: 'H+',
        value: hour
    });
    let minute = date.getMinutes();
    regList.push({
        reg: 'm+',
        value: minute
    });
    let second = date.getSeconds();
    regList.push({
        reg: 's+',
        value: second
    });
    regList.forEach((item) => {
        if (item.reg === 'Y+') {
            resStr = resStr.replace(new RegExp(item.reg, 'g'), (match) => {
                return String(item.value).substring(4 - match.length);
            });
        }
        else {
            resStr = resStr.replace(new RegExp(item.reg, 'g'), (match) => {
                if (match.length === 1) {
                    return String(item.value);
                }
                else {
                    // 小于10则拼接0
                    return item.value < 10 ? `0${String(item.value)}` : String(item.value);
                }
            });
        }
    });
    return resStr;
};
// 日期字符串，在今日之后,不包含今日 仅支持到天的字符串
DateTime.isFutureDay = (str) => {
    let strDate = DateTime.formatToDate(str);
    let nowDate = new Date();
    // console.log('==========',nowDate.getTime(),strDate.getTime() )
    if (nowDate.getTime() < strDate.getTime()) {
        return true;
    }
    else {
        return false;
    }
};
// 日期字符串，在过去,包含今日  仅支持到天的字符串
DateTime.isPastDay = (str) => {
    let strDate = DateTime.formatToDate(str);
    let nowDate = new Date();
    if (nowDate.getTime() > strDate.getTime()) {
        return true;
    }
    else {
        return false;
    }
};
// 是否过期 精确到秒
DateTime.isOverTime = (str) => {
    let strDate = DateTime.formatToDate(str);
    let nowDate = new Date();
    console.log('==========is over time', strDate, nowDate);
    if (nowDate.getTime() >= strDate.getTime()) {
        return false;
    }
    else {
        return true;
    }
};
// 今日日期字符串
DateTime.todayStr = (formatStr = 'YYYY-MM-DD') => {
    let nowDate = new Date();
    return DateTime.formatToStr(nowDate, formatStr);
};
// 获取以今日为起点，最近某天的日期字符串 count可为正负数表示今日前后
DateTime.latestDayStr = (count, formatStr = 'YYYY-MM-DD') => {
    let currentTime = new Date().getTime();
    let targetTime = currentTime + count * 24 * 60 * 60 * 1000;
    let targetDate = new Date(targetTime);
    return DateTime.formatToStr(targetDate, formatStr);
};
module.exports= { DateTime };

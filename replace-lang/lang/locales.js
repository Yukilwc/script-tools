/*
 * @Author: 李文超
 * @Date: 2021-04-25 13:20:09
 * @LastEditors: 李文超
 * @LastEditTime: 2021-04-25 16:23:27
 * @Description: file content
 */

module.exports.fallbackLocale = 'zh-CN';
module.exports.defaultLocale = 'zh-CN';
const { cn, en } = require('./dictionary')
module.exports.translations = {
    "en-US": en,
    "zh-CN": cn
}

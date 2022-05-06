/*
 * @Author: 李文超
 * @Date: 2021-04-19 17:44:17
 * @LastEditors: 李文超
 * @LastEditTime: 2021-07-21 15:23:31
 * @Description: file content
 */
import { initI18n, getI18nInstance, I18n, I18nPage } from '@miniprogram-i18n/core'
import locales from './locales.js'
function initLanguage() {
    initI18n(locales)
    const i18n = getI18nInstance()
    console.log('==========i18n instance', i18n)
    const system = wx.getSystemInfoSync()
    const lang = system.language
    console.log('==========system', system, lang)
    let localLang = wx.getStorageSync('language')
    console.log('==========读取本地语言设定', localLang)
    if (localLang) {
        console.log('==========使用本地语言',)
        if (localLang === 'zh-CN') {
            console.log('==========中文环境',)
            i18n.setLocale('zh-CN')
        }
        else {
            console.log('==========英文环境',)
            i18n.setLocale('en-US')
        }
    }
    else {
        console.log('==========使用系统语言',)
        if (lang === 'zh_CN') {  // 系统语言是使用下划线连接的，仅此处出现
            console.log('==========中文环境',)
            i18n.setLocale('zh-CN')
        }
        else {
            console.log('==========英文环境',)
            i18n.setLocale('en-US')
        }

    }
    // i18n.setLocale('en-US')
    // wx.$t = i18n.t.bind(i18n)
    wx.$i18n = i18n
    wx.$i18n.onLocaleChange((currentLocale) => {
        console.log('==========wx.$i18n.onLocaleChange', currentLocale)
    })

}
initLanguage()



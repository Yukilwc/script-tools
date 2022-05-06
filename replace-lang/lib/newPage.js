/*
 * @Author: 李文超
 * @Date: 2021-04-25 15:41:27
 * @LastEditors: 李文超
 * @LastEditTime: 2021-07-13 14:21:37
 * @Description: file content
 
 */
// Page构造器重写
const originPage = Page
Page = function (config) {
    // 添加方法
    // config.$switchI18nLocale = function () {
    //     console.log('==========触发切换config.$switchI18nLocale', wx.$i18n.getLocale())
    //     let current = wx.$i18n.getLocale()
    //     let target = current === 'zh-CN' ? 'en-US' : 'zh-CN'
    //     wx.$i18n.setLocale(target)
    //     this.setData({
    //         $_locale: target
    //     })
    // }
    const originOnLoad = config.onLoad
    // 重写onload
    config.onLoad = function (onLoadOptions) {
        console.log('==========通用页面加载流程', config.navTitleKey)
        if (config.navTitleKey) {
            wx.setNavigationBarTitle({
                title: wx.$i18n.t(`navTitle.${config.navTitleKey || 'gongsimingcheng'}`)
            })

        }
        if (typeof originOnLoad === 'function') {
            originOnLoad.call(this, onLoadOptions)
        }

    }

    const originOnShow = config.onShow
    // 重写onload
    config.onShow = function (onShowOptions) {
        if (config.navTitleKey) {
            wx.setNavigationBarTitle({
                title: wx.$i18n.t(`navTitle.${config.navTitleKey}`)
            })
        }
        this.setData({
            $_locale: wx.$i18n.getLocale()
        })
        if (typeof originOnShow === 'function') {
            originOnShow.call(this, onShowOptions)
        }

    }
    return originPage(config)

}

// Component构造器重写 或者组件单独写也行
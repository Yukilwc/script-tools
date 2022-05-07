//app.js
var webim = require('utils/webim_wx.js');
var webimhandler = require('utils/webim_handler.js');
import { finalUrl } from "./config/index"
import './lang/init'
import './lib/newPage'
import { getNavbarHeight, User,Sale, queryString } from './utils/tool'
App({
  onLaunch: function (opion) {
    console.log('==========on launch 执行，更新tab',)
    wx.$User = User
    wx.$Sale= Sale
    wx.$queryString = queryString
    this.updateTabs()
    // //设置下方tabbar
    // wx.setTabBarItem({
    //   index: 1,
    //   text: that.globalData.companyProfile,
    // })
    //用户初始化进来方式
    this.globalData.source = opion.scene
    // 初始化系统信息
    let system = getNavbarHeight()
    this.globalData.system = {
      ...this.globalData.system,
      ...system
    }
  },
  //用户登陆================================================================================================================
  userLogin: function (bindDefaultKfFlag) {
    //公共链接
    var that = this;
    return new Promise(function (resolve, reject) {
      // 调用登录接口
      wx.login({
        success: function (res) {
          that.globalData.hasLogin = true//判断是否登录
          if (res.code) {
            //获取用户信息
            wx.request({
              url: finalUrl + '/mplogin/decodeUser',
              data: {
                code: res.code,
                source: that.globalData.source,
                sourceChannelFlag: that.globalData.sourceChannelFlag,
                wxCompanyId: that.globalData.wxCompanyId,
                wxCompanySalesId: that.globalData.wxCompanySalesId,
                bindDefaultKfFlag: bindDefaultKfFlag
              },
              method: 'POST',
              header: { 'content-Type': 'application/json' },
              success: function (res1) {
                wx.setStorageSync('openid', res1.data.validateMap.openid)//存放用户微信唯一字段
                wx.setStorageSync('api_key', res1.data.validateMap.apiKey)//存放用户微信唯一字段
                wx.setStorageSync('sys_source', res1.data.validateMap.sysSource)//存放用户微信唯一字段
                wx.setStorageSync('sessionkey', res1.data.validateMap.sessionkey)//存放用户微信唯一字段
                //判断当前用户是否为销售
                if (res1.data.validateMap.wxUserIdentityFlag == '2') {
                  that.globalData.wxUserIdentityFlag = true;
                  wx.setStorageSync('wxUserIdentityFlag', true);
                } else {
                  that.globalData.wxUserIdentityFlag = false;
                  wx.setStorageSync('wxUserIdentityFlag', false);
                }
                //销售身份赋值对应后台账户的用户等级
                if (res1.data.validateMap.splUserLevel && res1.data.validateMap.splUserLevel != 'null') {
                  that.globalData.splUserLevel = res1.data.validateMap.splUserLevel;
                }
                //判断当前小程序用户 是否绑定销售用户
                if (res1.data.validateMap.wxCompanySalesId && res1.data.validateMap.wxCompanySalesId != 'null') {
                  that.globalData.wxCompanySalesId = res1.data.validateMap.wxCompanySalesId
                } else {
                  that.globalData.wxCompanySalesId = "";
                }
                //当前小程序用户绑定的手机号
                if (res1.data.validateMap.phoneNum && res1.data.validateMap.phoneNum != "null") {
                  that.globalData.phoneNum = res1.data.validateMap.phoneNum;
                } else {
                  that.globalData.phoneNum = '';
                }
                //当前小程序公司 特殊箱型运价展示标识
                if (res1.data.validateMap.containerFclShowFlag && res1.data.validateMap.containerFclShowFlag != "null") {
                  that.globalData.containerFclShowFlag = res1.data.validateMap.containerFclShowFlag;
                }
                //当前小程序公司 是否公开使用小程序标识   1：内部使用   2：公开使用
                if (res1.data.validateMap.programJurisdictionFlag && res1.data.validateMap.programJurisdictionFlag != "null") {
                  that.globalData.programJurisdictionFlag = res1.data.validateMap.programJurisdictionFlag;
                }
                //当前用户的主键id 赋值
                that.globalData.userId = res1.data.validateMap.userId;
                    //当前用户是否在 黑名单中 标识
                that.globalData.blacklistFlag = res1.data.validateMap.blacklistFlag||2;
                // 当前用户邮箱
                if (res1.data.validateMap.email && res1.data.validateMap.email != "null") {
                  that.globalData.email = res1.data.validateMap.email;
                }
                //腾讯云IM签名
                that.globalData.userSig = res1.data.validateMap.userSig;
                //腾讯云IMSDKID
                that.globalData.sdkappid = res1.data.validateMap.sdkappid;
                //腾讯云IM模式
                that.globalData.accountType = res1.data.validateMap.accountType;
                //用户认证
                that.globalData.certificationStatus = res1.data.validateMap.certificationStatus;
                // 是否多销售
                let salesCount = +res1.data.validateMap.salesCount
                that.globalData.salesCount = salesCount
               // 用户头像，昵称,用户信息是否存在的状态维护
                if (res1.data.validateMap.headPic || res1.data.validateMap.nickName) {
                  that.globalData.userInfo = {
                    avatarUrl: res1.data.validateMap.headPic,
                    nickName: res1.data.validateMap.nickName,
                  }
                  that.globalData.hasUserInfo = true
                  wx.setStorageSync('hasempower', false)//true的时候未获取头像  
                  wx.setStorage({
                    key: 'noUserInfo',
                    data: false
                  })

                }
                else {
                  that.globalData.userInfo = {
                  }
                  that.globalData.hasUserInfo = false
                  wx.setStorageSync('hasempower', true)//true的时候未获取头像  
                  wx.setStorage({
                    key: 'noUserInfo',
                    data: true
                  })

                }
                var res = { status: 200 }
                console.log('==========global data has generated',that.globalData)
                resolve(res);//登陆成功
              }
            })
          } else {
            var res = { status: 300 }
            reject(res);//登陆失败
          }
        }
      })
    });
  },


  //2018-07-12 新版本【同意授权】之后的更新用户信息通用方法 =============================================================================================
  newAuthorizeUpdateUserInfo: function (res) {
    var that = this;
    wx.setStorageSync('hasempower', false)
    that.globalData.userInfo = res.detail.userInfo
    that.globalData.hasUserInfo = true
    var data = {
      openid: wx.getStorageSync("openid"),
      nickname: res.detail.userInfo.nickName,
      headPic: res.detail.userInfo.avatarUrl,
      source: that.globalData.source,
      companyId: that.globalData.wxCompanyId,
    }
    //用户信息补录
    wx.request({
      url: finalUrl + '/mplogin/updateuser',
      data: data,
      method: 'POST',
      header: {
        'content-Type': 'application/json',
        'Authorization': wx.getStorageSync('api_key'),
        'sys_source': wx.getStorageSync('sys_source'),
      },
      success: function (res2) {
        if (res2.data.code == 1) {
          wx.setStorageSync('api_key', res2.data.validateMap.apiKey)//存放用户微信唯一字段
          wx.setStorageSync('hasempower', false)//true的时候未获取头像  
        }
      }
    });
    //设置IM 用户用户昵称 头像
    webimhandler.setProfilePortrait({
      'ProfileItem': [{
        "Tag": "Tag_Profile_IM_Nick",
        "Value": res.detail.userInfo.nickName ? res.detail.userInfo.nickName : "游客"
      },
      {
        "Tag": "Tag_Profile_IM_Image",
        "Value": res.detail.userInfo.avatarUrl ? res.detail.userInfo.avatarUrl : ''
      }
      ]
    }, function () {
      console.log("==========小程序用户允许授权成功后，设置 IM 账户")
    })
  },

  //刷新用户权限  （vip权限 & 用户角色）  (目前同属新缓存 调用接口一样)
  refreshUserAuth: function () {
    //公共链接
    var that = this;
    return new Promise(function (resolve, reject) {
      wx.request({
        url: finalUrl + '/mplogin/reFreshStorge',
        data: {},
        method: 'POST',
        header: {
          'content-Type': 'application/json',
          'Authorization': wx.getStorageSync('api_key'),
          'sys_source': wx.getStorageSync('sys_source'),
        },
        success: function (res) {
          if (res && res.data && res.data.apiKey) { //这里代表返回正常数据了
            //用户类型
            if (res.data.wxUserIdentityFlag == true) {//销售身份
              that.globalData.wxUserIdentityFlag = true;
              wx.setStorageSync('wxUserIdentityFlag', true);
            } else {
              that.globalData.wxUserIdentityFlag = false;
              wx.setStorageSync('wxUserIdentityFlag', false);
              wx.removeTabBarBadge({
                index: 3,
                fail: (e) => {
                  console.warn('在非tab页面removeTabBarBadge,失败')
                }
              })
            }
            //销售身份赋值对应后台账户的用户等级
            if (res.data.splUserLevel && res.data.splUserLevel != 'null') {
              that.globalData.splUserLevel = res.data.splUserLevel;
            }
            that.globalData.certificationStatus = res.data.certificationStatus;
            that.globalData.blacklistFlag= res.data.blacklistFlag||2;
            //绑定的销售id
            that.globalData.wxCompanySalesId = res.data.wxCompanySalesId ? res.data.wxCompanySalesId : "";
            //修改缓存api_key
            wx.setStorageSync('api_key', res.data.apiKey) //存放用户微信唯一字段
            var res = { status: 200 }
            resolve(res);
          } else {
            var res = { status: 300 }
            reject(res);
          }
        }
      });
    });
  },

  //获取用户手机号  
  getbindphonenum: function (data) {
    //公共链接
    var that = this;
    return new Promise(function (resolve, reject) {
      wx.request({
        url: finalUrl + '/mplogin/getbindphonenum',
        data: data,
        method: 'POST',
        header: {
          'content-Type': 'application/json',
          'Authorization': wx.getStorageSync('api_key'),
          'sys_source': wx.getStorageSync('sys_source'),
        },
        success: function (res) {
          console.log(res);
          console.log("=============================================111111111")
          if (res.data.phoneNum) {//授权获取到手机号
            // console.log("=============================================222222222")
            // //当前用户是否在 黑名单中 标识
            that.globalData.blacklistFlag = res.data.blacklistFlag||2;
            // console.log("=============================================333333333")
            // //判断记录用户积分===========
            // wx.request({
            //   url: finalUrl + '/mplogin/savepoints',
            //   data: {},
            //   method: 'POST',
            //   header: {
            //     'content-type': 'application/json',
            //     'Authorization': res.data.apiKey,
            //     'sys_source': wx.getStorageSync('sys_source'),
            //   },
            // })
          }
          console.log("=============================================444444444")
          resolve(res);
          console.log("=============================================555555555")

        },
        fail: function (reserr) {
          reject(reserr);
        }
      });
    });
  },
  // 替换中英文tab
  updateTabs() {
    try {
      let list = ['shouye', 'jiejuefangan', 'qiyejieshao', 'wode'];
      list.forEach((item, index) => {
        wx.setTabBarItem({
          index: index,
          text: wx.$i18n.t(`tabbar.${item}`),
          fail: () => {
            console.warn('在非tab页使用，设置无效')
          }
        })
      });
    }
    catch (e) {
      console.warn('update tap fail', e)
    }

  },

  globalData: {
    source: '',                //用户进入小程序方式（场景值）
    sourceChannelFlag: 1,     //用户来源渠道 默认搜索小程序进入
    userId: '',                //当前登陆用户的后台主键Id
    userInfo: {},              //用户信息(这不是完整的用户信息，只是调微信接口赋值的用户信息)
    hasLogin: false,           //用户是否登陆标记
    hasUserInfo: false,        //是否有用户信息
    phoneNum: '',              //当前登陆用户绑定的手机号
    salesCount: 0, // 用户是否多销售 0单销售  大于0则为多销售
    blacklistFlag: 2,           //是否在黑名单中 1：是 2：否

    wxCompanySalesId: '',       //客户绑定公司的销售对应的id (这里主要针对 扫码，分享 中的salesId)
    wxUserIdentityFlag: false,  //当前微信用户身份标记 （是否为销售标记）
    splUserLevel: '-1',           //销售身份对应的后台账户用户等级    -1：小程序普通用户  0：BOSS 1:商务 2：销售

    wxCompanyId: 1,             //当前小程序所属公司Id  
    containerFclShowFlag: 0,     //当前小程序公司特殊箱型运价展示标识
    programJurisdictionFlag: 2,  //1：内部使用 2：公开使用（默认值）
    certificationStatus: 1,
    startPortId: 3,             //全局默认的起始港id
    startPortNameEn: 'SHENZHEN', //全局默认的起始港英文名

    sdkappid: '',     // 填入创建腾讯云通讯应用获取到的 sdkappid
    accountType: '',       // 填入在帐号体系集成配置中获取到的 accountType
    userSig: "",                //用户签名
    email: "",                //用户邮箱
    // 系统信息
    system: {
      navbarHeight: 40,
      statusBarHeight: 20,
    },
    // 主题色
    color: {
      theme:'#f08519',
      themeS:'#f08519'
    },
    // companyProfile: '', //设置底层tabbar名称(公司简介)
    mpName: "凯迪物流集团",          //小程序名称
    mpNameEn: 'Lucky Logistics',

  }
})
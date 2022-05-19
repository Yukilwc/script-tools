/*
 * @Author: 李文超
 * @Date: 2021-04-25 11:41:47
 * @LastEditors: 李文超
 * @LastEditTime: 2021-09-03 11:17:23
 * @Description: file content
 
 */
let dictionary = {
  // 通用
  common: {
    yishangxinxijingongcankao: ["以上信息仅供参考", "The above information is for reference only"],
    search: ['查询', 'Search'],
    confirm: ['确定', 'Confirm'],
    cancel: ['取消', 'Cancel'],
    loading: ["加载中", 'Loading'],
    comment: ["评论", "Comment"],
    liked: ["点赞", "Like"],
    chat: ["聊一聊", "Chat"],
    weeks: {
      mon: ['周一', 'MON'],
      tue: ['周二', 'TUE'],
      wen: ['周三', 'WED'],
      thu: ['周四', 'THU'],
      fri: ['周五', 'FRI'],
      sat: ['周六', 'SAT'],
      sun: ['周日', 'SUN'],
    },
    freight: ['运价', 'Freight'],
    schedule: ['船期', 'Schedule'],
    banqi: ['班期', 'Schedule'],
    tracking: ['跟踪', 'Tracking'],
    expert: ['专家', 'Expert'],
    startPort: ['起始港', 'POL'],
    qiYunGang: ["起运港", "POL"],
    qishigangkou: ['起始港口', 'POL'],
    startPortPh: ['请选择起始港', 'Please select POL'],
    startPortshuruPh: ['请输入起始港', 'Please enter POL'],
    endPort: ['目的港', 'POD'],
    mudigangkou: ['目的港口', 'POD'],
    endPortPh: ['请选择目的港', 'Please select POD'],
    endPortshuruPh: ['请输入目的港', 'Please enter POD'],
    transferPort: ['中转港', 'Transit Port'],
    dir: ['直达', 'DIR'],
    via: ['中转', 'VIA'],
    zhuan: ['转', ' VIA'],
    ship: ['船公司', 'Carrier'],
    shipPh: ['请选择船公司', 'Please select carrier'],
    qingshuruguanjianci: ['请输入关键词或名称', 'Please enter keywords'],
    voyage: ['航程', 'Voyage'],
    days: ['天', 'Days'],
    reset: ['重置', 'Reset'],
    save: ['保存', 'Save'],
    edit: ['编辑', 'Edit'],
    delete: ['删除', 'Delete'],
    scheduleInquiry: ['船期查询', 'Schedule Inquiry'],
    cargoTracking: ['货物跟踪', 'Cargo Tracking'],
    currencyConverter: ['汇率换算', 'Currency Converter'],
    history: ['最近查询', 'History'],
    liShiSouSuo: ['历史搜索', 'History'],
    clearAll: ['清除全部', 'Clear'],
    qingKongQuanBu: ['清空全部', 'Clear'],
    routeCode: ['航线代码', 'Route'],
    gengduo: ['更多', 'More'],
    chakangengduo: ['查看更多', 'More'],
    hideTabs: ['收起', 'Hide'],
    guakao: ['挂靠', 'Wharf'],
    mudigangguakao: ['目的港挂靠', 'Wharf End'],
    jiazaiwancheng: ['加载完成', 'Completed'],
    filter: ['筛选', 'Filter'],
    noCertiMessage: ['暂无认证信息', 'No certification information'],
    toCertiForSearch: ['请认证后查询', 'Please certificate to view rates'],
    toCerti: ['立即认证', 'Certificate'],
    noSearchResult: ['暂无搜索结果', 'Sorry, there\'s nothing here!'],
    zanwuxiangguanshuju: ['暂无相关数据', 'Sorry, there\'s nothing here!'],
    zanwushuju: ['暂无数据', 'Sorry, there\'s nothing here!'],
    zixunkefu: ['咨询客服', 'Contact'],
    zixun: ['咨询', 'Contact'],
    wancheng: ['完成', 'Completed'],
    price: ['价格', 'Price'],
    callflag: ["电询", "Call"],
    // jie: ["截",""],
    mobile: ["电话", "Tel."],
    copy: ["复制", "Copy"],
    youxiang: ["邮箱", "Email"],
    saveContactList: ["保存通讯录", "Save"],
    call: ["拨打电话", "Call"],
    cny: ["人民币", "CNY"],
    usd: ["美元", "USD"],
    name: ["名称", "Name"],
    unit: ["单位", "Unit"],
    currency: ["币种", "Currency"],
    unitPirce: ["单价", "UnitPrice"],
    perDoc: ["票", "doc"],
    perContainer: ["箱", "container"],
    etd: ["开航日", "ETD"],
    dirVia: ["中转直达", "DIR/VIA"],
    xiangXing: ["箱型", "CNTR"],
    share: ["分享", "Share"],
    xiangliang: ["箱量", "Number"],
    gangqu: ["港区", "Wharf"],
    beiZhu: ["备注", "Remark"],
    beizhuxinxi: ["备注信息", "Remark"],
    kefu: ["客服", "Service"],
    kefuxinxi: ["客服信息", "Service Info"],
    gongsimingcheng: ["公司名称", "Company"],
    gongsimingchengph: ["输入公司名称", "Please enter company"],
    lianxiren: ["联系人", "Contact"],
    lianxirenph: ["输入联系人", "Please enter contact"],
    lianxidianhau: ["联系电话", "Mobile"],
    tuijian: ["推荐", "Reco"],
    haiyunyunshu: ["海运运输", "By Sea"],
    luyunyunshu: ["路运运输", "By Truck"],
    zuiyoufangan: ["最优方案正在运算中", "Beat plan in calculation"],
    kehuqingshaohou: ["客户请稍后", "Wait a moment"],
    youxiaoqi: ["有效期", "Validity Date"],
    youxiaoqiduan: ["有效期", "Validity"],
    sheheshijian: ["审核时间", "Audit Time"],
    boda: ["拨打", "Call"],
    weixin: ["微信", "Wechat"],
    gongsi: ["公司", "Co."],
    sousuo: ["搜索", "Search"],
    sousuoph: ["请输入搜索关键词", "Please enter keyword"],
    quanbu: ["全部", "Total"],
    quanbuall: ["全部", "All"],
    hangxian: ["航线", "Route"],
    chakanxiangqing: ["查看详情", "More"],
    jieguan: ["截关", "Cutoff"],
    xiugai: ["修改", "Edit"],
    shurugaunjianci: ["请输入关键词查找", "Please enter keywords to find"],
    wuchaxunshuju: ["无查询数据", "No query data"],

  },
  // 首页
  main: {
    buy: ["立即抢购", "Snap up"],
    qjtong: ['全境通', 'Global Solution'],
    india: ['印度', 'INDIA '],
    tezhonggui: ['特种柜', 'OOG'],
    shishixiancang: ['实时现舱欲订从速', 'Booking now'],
    jishibaojia: ['即时为您报价', 'Quoting now'],
    newsCommend: ['新闻推荐', 'News Commend'],
    moreNews: ['更多动态', 'More'],
    shuliang: ["数量", "Number"],
    zhengxiangyunjia: ["整箱运价", "FCL"],
    pinxiangyunjia: ["拼箱运价", "LCL"],
    jingpinyuding: ["精品预定", "Space"],
    kongyunchaxun: ["空运查询", "AIR"],
    jingzhunchuanqi: ["精准船期查询", "Schedule"],
    shishihuowugenzong: ["实时货物跟踪", "Tracking"],
    xiancangtuijian: ["现舱推荐", "Space Recommend"],
    gengduoxiancang: ["更多现舱", "More"],
    hangyexinwen: ["行业新闻", "News"],
    kaiChuanEtd: ["开船", "ETD"],
    currencyConverter: ['汇率换算', 'ExchangeRate'],
    haiyunpinxiang: ['海运拼箱', 'LCL'],
    mianxiangquanguoshouhuo: ['面向全国收货', 'Receipt Nationwide'],
    kaituoquanqiugangkou: ['开拓全球200多个直拼港口', 'More than 200 LCL ports worldwide'],
    zixungonggao: ["资讯公告", "News"],
    tezhongguiyunjia: ["特种柜运价", "OOG"],
    dajianhuowuyunshuzhuanjia: ["全球OOG大件货物运输专家", "Global OOG Oversized Cargo Transport Expert"],
    puguiyunjia: ["普柜运价", "FCL"],
    quanqiuyunjiashishichaxun: ["全球运价实时查询", "Real-time query rates"],
    lengdongguiyunjia: ["冷冻柜运价", "Freezer"],
    jingzhunyunjiashujudaquan: ["精准运价数据大全", "Accurate freight rate data"],
    jingdiananli: ["经典案例", "Case"],
    zhuanzhutezhongxiangwuliufuwu: ["专注特种箱物流服务", "Focus on OOG logistics services"],
    anlijieshao: ["案例介绍", "Description"],
    xihuan: ["喜欢", "Like"],
    dianjizhelitianjiadaowodexiaoc: ["点击这里添加到我的小程序吧", "Click here to add to my minapp"],
    xiangmuxunpan: ["项目询盘", "Inquiry"],
    jinpinxiancang: ["精品现舱", "Space"],
    chuanqichaxun: ['船期查询', 'Schedule'],
    huowugenzong: ["货物跟踪", "Tracking"],
  },

  // 运价查询流程
  fcl: {
    beiZhuXiangQing: ["备注详情", "Remark"],
    fuJiaFeiYong: ["附加费用", "Surcharge & Conditions"],
    addCharge: ["添加费用", "Add Charge"],
    shouCangBaoJia: ["收藏报价", "Collect"],
    baoCunChangTu: ["保存长图", "SaveImage"],
    lianxikefu: ["联系客服", "Contact"],

    shareCharge: ["分享报价", "Share"],
    unitPricePh: ["请输入单价", "Please enter unit price"],
    chargeNamePh: ["请输入费用名称", "Please enter charge name"],
    kuaiSuTianJia: ["快速添加", "Quick Add"],
    dingcangshuoming: ["订舱说明", "Booking Remark"],
    tongzhiyouxiang: ["通知邮箱", "Email"],
    shurutongzhiyouxiang: ["请输入通知邮箱", "Please enter email"],
    yunjiadingyue: ["运价订阅", "Subscribe Fcl"],
    xuanzeqiyundaoda: ["请选择起始港 & 目的港", "Please enter POL & POD"],
    dingyuechenggong: ["订阅成功", "Subscribe Success"],
    dingyueshibai: ["订阅失败", "Subscribe Failed"],
    shshiyunjiatixing: ['实时运价提醒立即前往', 'Real-time rate remind'],
    dingyueyunjia: ["订阅运价", "Subscribe Freight"],
    zuiduoshitiao: ["注：每位用户最多可订阅运价数量为10条", "Each user can subscribe a maximum of 10 freight"],
    zinzengdingyueyunjia: ['新增运价订阅', 'Add rate subscription'],
    tuijianyunjia: ["推荐运价", "Recommend"],
    chongzu: ["充足", "Available"],
    jinzhang: ["紧张", "Tight"],
    baocang: ["爆仓", "Overload"],
    tinghang: ["停航", "Suspended"],
    paidui: ["排队", "Lineup"],
    bujie: ["不接", "NotPickUp"],
    tishixinxi: ["提示信息", "Tips"],
    zanweixuanzexiangxing: ["暂未选择箱型", "No box type selected"],
    xuanzexiangxing: ["选择箱型", "Select box type"],
    feiyongqingdan: ["费用清单", "List of fees"],
    qitabizhong: ["其他币种", "Others"],
    haiyunbunengdanwei: ['海运费不能修改单位', 'Sea freight cannot modify the unit']
  },
  // 拼箱
  lcl: {
    tiji: ["体积", "Volume"],
    jianshu: ["件数", "Quantity"],
    kehuleixing: ["收货人类型", "Customer"],
    xuanzekehu: ["请选择收货人类型", "Please enter customer type"],
    shurujianshu: ["请输入件数", "Please enter quantity"],
    shurumaozhong: ["请输入毛重", "Please enter weight"],
    shurutiji: ["请输入体积", "Please enter volume"],
    baozhuangleixingxuanze: ["包装类型选择", "Package"],
    tonghang: ["同行", "Peer"],
    zhike: ["直客", "Direct Customer"],
    tonghangbaojia: ["同行报价", "Peer"],
    zhikebaojia: ["直客报价", "Direct"],
    pinxinagyunfei: ["拼箱运费", "LCL Charge"],
    morenfahuorenzhifu: ["默认发货人支付", "Default shipper pays"],
    renminbifeiyong: ["起运港费用", "Port of loading charge"],
    mudigangshoufei: ["目的港收费", "Port of destination charge"],
    morenshouhuorenzhifu: ["默认收货人支付", "Default consignee pays"],
    mudigangshoufeibeizhu: ["目的港收费备注", "Remarks on charges at port of destination"],
    xuanzebaozhuangleixing: ["请选择包装类型", "Please enter package type"],
    cutOrderTime: ['截单时间', 'SI cutoff'],
    jieguanqi: ["截关期", "Closing time"],
    jiehuoshijian: ["截货时间", "CY cutoff"],
    jiehuocangku: ["接货仓库", "Warehouse"],
    bochuanbanqi: ["驳船班期", "Barge Schedule"],
    tijibi: ["体积比", "Volume ratio"],
    rtFanwei: ["RT范围", "RT range"],
    yufu: ["预付", "pay in advance"],
    daofu: ["到付", "Arrival payment"],
    xiugaixinxi: ["修改信息", "Modify"],
    qingshuruxiugaiyunfeijiage: ["请输入修改运费价格", "Please enter charge"],
    qingshurufeiyongjiage: ["请输入费用价格", "Please enter charge"],
    feiyongmingcheng: ["费用名称", "ChargeName"],
    haiyunfeiyong: ["海运费用", "Ocean Charge"],
    youxiaoriqi: ["有效日期", "Validity Date"],
    qita: ["其他", "Other"],
    m1: ["请输入最多两位小数格式的CBM价格", "Please enter integer or two decimal places CBM price"],
    m2: ["请输入最多两位小数格式的TON价格", "Please enter integer or two decimal places TON price"],
    m3: ["请输入最多两位小数格式的BAF价格", "Please enter integer or two decimal places BAF price"],
    m4: ["请输入最多两位小数格式的CISF价格", "Please enter integer or two decimal places CISF price"],
    m5: ["请输入最多两位小数格式的MIN价格", "Please enter integer or two decimal places MIN price"],
    zuidishoufei: ["最低收费", "Minimum charge"],
    kaihang: ["开航", "ETD"],
    jiageyouxiaoqi: ["价格有效期", "Validity Date"],
  },
  // 跟踪
  tracking: {
    billNo: ["提单号", "Bill No."],
    billNoPh: ["请输入提单号", "Please enter bill No."],
    example: ["示例", "Example"],
    tidan: ["提单", "Bill No."],
    chuanMingHangCi: ["船名航次", "Vessel/Voyage"],
    huoWuDongTai: ["货物动态", "Cargo State"],
    jinGang: ["进港", "Gate In"],
    fangXing: ["放行", "Released"],
    zhuangChuan: ["装船", "Stowage"],
    daoGang: ["到港", "Arrival"],
    tiXiang: ["提箱", "Gate Out"],
    jiZhuangXiangDongTai: ["集装箱动态", "CNTR Status"],
    xiangHao: ["箱号", "CNTR No."],
    fengHao: ["封号", "Seal No."],
    maoZhong: ["毛重", "Weight"],
    shouQiGengDuo: ["收起更多", "Hide"],
    noOrderInfo: ["暂未查询到订单信息", "Sorry, there\'s nothing here!"],
    waitSearch: ["请稍后查询", "Please check later!"],
  },
  // 专家
  expert: {

    teSeFuWu: ["特色服务", "Services"],
    jiTuanWangLuo: ["集团网络", "Group Company"],
    introduction: ["简介", "Introduction"],
    contactMethod: ["联系方式", "Contact"],
    address: ["地址", "Add."],
    expertList: ["专家列表", "Experts"],
    ziXunLiang: ["咨询量", "Inquiries"],
    noExperts: ["暂无相关专家", "Sorry, there\'s nothing here!"],
    shouCang: ["收藏", "Collect"],
    yiShouCang: ["已收藏", "Collected"],
    haoPingDu: ["好评度", "Praise"],
    jingYanShanChang: ["经验擅长", "GoodAt"],
    congyenianxian: ["从业年限", "WorkingYears"],
    zhuanjiajianjie: ["专家简介", "Introduction"],
    zhankai: ["展开", "More"],
    yonghupinglun: ["用户评论", "Comment"],
    woyaopinglun: ["我要评论", "Comment"],
    youke: ["游客", "Visitor"],
    youzhipinglun: ["优质评论", "HighQuality"],
    lianxizhuanjia: ["联系专家", "Contact"],
    tianjiapinglun: ["添加评论", "Add Comment"],
    zhuanjiapingfen: ["给专家评分", "Add Rates"],
    fabiaopinglun: ["发表评论", "Make Comment"],
    zanwushoucangzhuanjia: ["暂无收藏专家", "Sorry, there\'s nothing here!"],
    shanchang: ["擅长", "Skilled in"],
  },
  // 现舱
  space: {
    duoxuan: ["多选", "Multi"],
    qiyungangxuanze: ["起运港选择", "Please select POL"],
    mudigangxuanze: ["目的港选择", "Please select POD"],
    quanbugangkou: ["全部港口", "ALL PORTS"],
    chuangongsixuanze: ["船公司选择", "Please select carrier"],
    xiangxingxuanze: ["箱型选择", "Please select container"],
    yu: ["余", "surplus"],
    kuicangfei: ["亏舱费", "Broken Price"],
    jiedanshijian: ["截单时间", "SI cutoff"],
    jiegangshijian: ["截港时间", "Closing date"],
    pingmingyaoqiu: ["品名要求", "Commodity"],
    tidanleixing: ["提单类型", "Bill Type"],
    yunshutiaokuan: ["运输条款", "Transport clause"],
    lijiyuding: ["立即预定", "Reserve"],
    kaoluyixia: ["考虑一下", "Think over"],
    yiyuedutongyi: ["已阅读并同意", "Read and agree "],
    zhifuyuding: ["支付预定", "Pay"],
    shenhequeren: ["审核确认", "Audit"],
    xiadanchuyun: ["下单出运", "Order Shipment"],
    shengyu: ["剩余", "Surplus"],
    ge: ["个", " "],
    yufufeiyong: ["预付费用", "Prepayment"],
    heji: ["合计", "Total"],
    tuoshushangchuan: ["托书上传", "Booking Order"],
    dingdanbianhao: ["订单编号", "Order No."],
    daishenhe: ["待审核", "To Audit"],
    yichengjiao: ["已成交", "Completed"],
    yijujue: ["已拒绝", "Refused"],
    yiquxiao: ["已取消", "Canceled"],
    yituicang: ["已退舱", "Retreated"],
    yikuicang: ["已亏舱", "Broken Stowage"],
    xiangxingxiangliang: ["箱型箱量", "CNTR"],
    yudingshijian: ["预定时间", "Reserve Time"],
    daishenhemsg: ["您预定的现舱，正在审核中，请耐心等待，如有疑问请联系现舱供应商。", "Your order is under review, Please wait patiently. If you have any questions, please contact the supplier."],
    yichengjiaomsg: ["您预定的现舱已审核通过，请在线下尽快完成订单相关操作，如有疑问请联系现舱供应商。", "Your order has been approved, Please complete the order online as soon as possible. If you have any questions, please contact the supplier."],
    jujuemsg: ["很抱歉，您预定的舱位审核被拒绝，拒绝理由：", "Sorry, your booking has been rejected because of "],
    tuicangmsg: ["很抱歉，您预定的舱位被退舱，退舱理由：", "Sorry, your order has bean canceled because of "],
    tuihuimsg: ["您支付的预定服务费，会在3个工作日内全额退回。", "The booking service fee you paid will be returned in full within 3 working days."],
    dingdanxinxi: ["订单信息", "Order Info"],
    tuoshuxinxi: ["托书信息", "Booking Order"],
    geshidakai: ["仅支持 WORD EXCEL PPT PDF 格式打开", "Support WORD EXCEL PPT PDF"],
    quanbuhangxian: ["全部航线", "All"],
  },
  // 全境通
  qjtong: {
    qiyunguojia: ['起运国家', 'Country'],
    mudiguojia: ['目的国家', 'Country'],
    startPort: ['起 始 港', 'POL'],
    songhuodi: ['送 货 地', 'Delivery'],
    songhuodiph: ["请选择送货地", "Please select delivery"],
    songhuodishuruph: ["请输入送货地", "Please enter delivery"],
    xiangxing: ["箱    型", "CNTR"],
    shuliang: ["数    量", "Number"],
    shuliangph: ["请输入数量", "Please enter number"],
    zhongliang: ["重量", "Weight"],
    zhongliangton: ["重量(TON)", "Weight"],
    zhongliangph: ["请输入重量（货重+箱重）", "Please enter weight(TON)"],
    maoyifangshi: ["贸易方式", "Trade Mode"],
    meiguo: ["美国", "USA"],
    tiaokuan: ["条款", "Terms"],
    yunfeimingxi: ["运费明细", "Freight Info"],
    haiyunfei: ["海运费", "Freight"],
    mudigangzhuanyunfei: ["目的港转运费", "Transportation Charge"],
  },
  // 特种柜
  tezhonggui: {
    zhuangguichang: ["装柜长", "Length"],
    zhuangguichangph: ["请输入装柜长", "Enter cargo length"],
    chaochang: ["超长", "Over"],
    buchao: ["不超", "Normal"],
    zhuangguikuan: ["装柜宽", "Width"],
    zhuangguikuanph: ["请输入装柜宽", "Enter cargo width"],
    chaokuan: ["超宽", "Over"],
    zhuangguigao: ["装柜高", "Height"],
    zhuangguigaoph: ["请输入装柜高", "Enter cargo height"],
    chaogao: ["超高", "Over"],
    huozhong: ["货重", "Weight"],
    huozhongph: ["请输入货重", "Please enter weight"],
    chaozhong: ["超重", "Over"],
    tianjiapeixiang: ["添加配箱", "Add Container"],
    shanchupeixiang: ["删除配箱", "Delete Container"],
    zhuangguichicun: ["装柜尺寸", "Size"],
    chang: ["长", "L"],
    kuan: ["宽", "W"],
    gao: ["高", "H"],
    huowumaozhong: ["货物毛重", "Weight"],
    dingcangbeizhu: ["订舱备注", "Booking Remark"],
    xianzhongbeizhu: ["限重备注", "Weight Remark"],
    peixiangzhidao: ["配箱指导", "Packing guide"],
    zuiduotianjiayici: ["最多添加一次", "add at most once"],
    qingshuruhuowuchang: ["请输入货物长", "Enter cargo length"],
    qingshuruhuowukuan: ["请输入货物宽", "Enter cargo width"],
    qingshuruhuowugao: ["请输入货物高", "Enter cargo height"],
    huowuchang: ["货物长", "Length"],
    huowukuan: ["货物宽", "Width"],
    huowugao: ["货物高", "Height"],
    xiangtineibuchicun: ["箱体内部尺寸", "Internal dimension"],
    xiangmenkaiduchicun: ["箱门开度尺寸", "Door Opening"],
    dingbukaiduchicun: ["顶部开度尺寸", "Roof Opening"],
    zaizhongfuhe: ["载重负荷", "Peyload"],
    huowuzongzhong: ["货物总重", "Max gross"],
    kezaizhongliang: ["可载重量", "Max payload"],
    xiangliang: ["箱量", "Tare"],
    huowuchicun: ["货物尺寸", "Cargo size"],
    kaidingbuneng: ["开顶箱不能超长/超宽/超重", "OT container cannot be over-long/over-width/over-weight"],
    kuangjiabuneng: ["框架箱不能超长/超重", "FR container cannot be over-long/over-weight"],

  },
  lengdongxiang: {

  },
  // 汇率
  currency: {
    qingshuruchazhaodebizhong: ["请输入查找的币种", "Please enter the currency to find"],
    huansuan: ["换算", "Conversion"],
    huilv: ["汇率", " exchange rate"],
    zanwu: ["暂无", "Empty "],
    qingshuaxinyemian: ["请刷新页面！", "Please refresh the page!"],
    paijia: ["牌价", "Quoted Price"],
    huobimingcheng: ["货币名称", "Currency"],
    maichujia: ["卖出价", "Selling"],
    mairujia: ["买入价", "Purchase"],
    // https://zhidao.baidu.com/question/984276908670782019
    hui: ["汇", "E"],
    chao: ["钞", "C"],
  },

  // 扫码登录
  login: {

    benrencaozuo: ["即将登录企业网站，请确认是否本人操作", "you will login website, please confirm whether to operate by yourself."],
    zhanghaodenglu: ["使用你的微信账号信息（昵称、头像、性别、手机号）登录网站", "Requests to use your WeChat name, profile photo, gender and mobile"],
    fuwukefu: ["服务客服", "Service"],
    xuanzekefu: ["请选择为您服务的客服人员", "Please select your customer service"],
    querendenglu: ["确认登录", "Login"],
  },
  // 我的
  my: {
    myMessage: ["我的消息", "Message"],
    myQuotation: ["我的报价单", "My Quotations"],
    wodeyunjiadingyue: ["我的运价订阅", "My FCL Subscription"],
    yunjiadingyue: ["运价订阅", "FCL Subscription"],
    genzongdingyue: ["跟踪订阅", "Tracking Subscription"],
    wodexiancang: ["我的现舱", "My Space"],
    dianjishouquan: ["点击授权小程序", "Allow User Info"],
    woyudingdexiancang: ["我预定的现舱", "My Orders"],
    wodedingdan: ["我的订单", "My Orders"],
    wodezhuanjiaku: ["我的专家库", "My Experts"],
    fenxianghaoyou: ["分享给好友", "Share"],
    kehuleida: ["客户雷达", "Customer Radar"],
    kehugenzong: ["客户跟踪", "Customer Tracking"],
    dingyuexiaoxi: ["订阅消息", "Subscribe Message"],
    bumenleida: ["部门雷达", "Depart Radar"],
    bumenkehu: ["部门客户", "Depart Customers"],
    bossleida: ["BOSS雷达", "Boss Radar"],
    gongsikehu: ["公司客户", "Customers"],
    shuaxinhuancun: ["刷新缓存", "Refresh Cache"],
    yuyanshezhi: ["语言设置", "Language"],
    wodekefu: ["我的客服", "My Customer Service"],
    huokehaibao: ["获客海报", "Poster"],
    wodezhuanshukefu: ["我的专属客服", "Exclusive service"],
    banbengengxin: ["版本更新", "Version Update"],
    wodezhuanshumingpian: ["我的专属名片", "My exclusive card"],
    fenxiangmingpianranggengduoren: ["分享名片让更多人认识你", "Share your cards"],
    yiduiyiweininfuwu: ["一对一为您服务", "One-to-one service"],
    dangqianweishouquan: ["当前未授权", "Not authorized"],
    yirenzheng: ["已认证", "Verified"],
    yonghuzhongxin: ["用户中心", "User Center"],
    yingxiaogongju: ["营销工具", "Marketing Tools"],
    dianzixuanchuance: ["电子宣传册", "E-Brochure"],
    dianzimingpian: ["电子名片", "Electronic Card"],
    xiaoxidingyue: ["消息订阅", "Subscribe Message"],
    haiwaidailifeiyong: ["海外代理费用", "Overseas agency fee"],
    keshangguanli: ["客商管理", "Merchant Management"],
    wodegongyingshang: ["我的供应商", "My Supplier"],
    qiehuanyuyan: ["切换语言", "Switch Language"],
  },
  yunjiadingyue: {

  },
  // 获客海报
  poster: {
    gengduohaibao: ["更多海报", "More Poster"],
    xiazaihaibao: ["下载海报", "Download Poster"],
    youqingtishi: ["友情提示", "Tips"],
    tongguoshouquan: ["通过授权:-->允许【保存到相册】才可根据信息将图片保存到本地相册。 请点击【确定】> 授权", ""],
  },
  // 专属客服 个人名片
  zhuanshukefu: {
    renliulan: ["人浏览", "Views"],
    kaopu: ["靠谱", "Like"],
    jichuxinxi: ["基础信息", "Contact Info"],
    erweimamingpian: ["二维码名片", "QRCode"],
    fenxiangmingpian: ["分享名片", "Share"],
    shagnweishouquan: ["您尚未授权专属信息", "You have not authorized"],
    wufashengcheng: ["无法生成专属名片", "Can't generate your card"],
    likeshouquan: ["立刻授权", "Authorize"],
    changanshibie: ["长按识别", "Long press to identify"],
    zhuanshu: ["专属", " exclusive "],
    erweima: ["二维码", "QRCode"],
    rangwochengwei: ["让我成为您的", "Let me be your"],
    wuliuguanjia: ["物流管家", " logistics manager"],
    baocuntupian: ["保存图片", "Save Image"],
    xiazaierweima: ["下载二维码", "Download QRCode"]
  },
  // 消息列表，聊天
  chat: {
    tianjiaweixin: ["添加微信", "Wechat"],
    ninhao: ["您好", "Hello"],
    huanyingfangwen: ["欢迎访问", "welcome to visit"],
    zhuanshukefu: ["我是您的专属客服", "I'm your exclusive customer service"],
    weininfuwu: ["很高兴为您服务", "I'm glad to serve you."],
    shuruneirong: ["请在此处输入需要填写的内容", "Please enter what needs to be filled in"],
    fasong: ["发送", "Send"],
  },
  // 公司
  company: {
    guanyuwomen: ["关于我们", "About Us"],
    youshi: ["我们的优势", "Service"],
    qiyefengcai: ["企业风采", "Our Team"],
    rongyuzizhi: ["荣誉资质", "Certificate of Honor"],
    hezuohuoban: ["合作伙伴", "Partner"],
    qiyejianjie: ["企业简介", "About Us"],
    tuanduifengcai: ["团队风采", "Our Team"],
    gongsizizhi: ["公司资质", "Certificate of Honor"],
    shouqigengduo: ["收起更多", "Hide"],
    gengduojieshao: ["更多介绍", "More"],
  },
  // 动态
  news: {
    neirongshanchu: ["内容已被删除", "Content has been deleted"],
    fanhuishouye: ["返回首页", "Home"],
    fenxiangtupian: ["分享图片", "Share"],
    weixinhaoyou: ["微信好友", "Friends"],
    shurupinglun: ["请输入评论", "Please enter comment"],
    dianjipinglun: ["请输入您要评论的信息，点击评论即可", "Please enter the information you want to comment on, click comment"],
    tuijiantejia: ["推荐特价", "APAS"],
    remenpinglun: ["热门评论", "Top Comments"],
    yuhaoyoufenxiangyouqudeshiqing: ["与好友分享有趣的事情吧", "Share interesting things with your friends"],
    fabuzhaopian: ["发布照片", "Post photo"],
    gongkaiwodedongtai: ["公开我的动态", "Make my activity public"],
    fabudongtai: ["发布动态", "Post News"],
    fabuzhong: ["发布中", "Posting"],
    tupianweijin: ["上传图片涉嫌违禁,发布失败", "Uploading pictures is suspected of being prohibited and failed to publish"],
  },
  // 我的 销售相关
  xiaoshou: {
    haiyunzhengxiang: ['海运整箱', 'Fcl'],
    haiyunpinxiang: ['海运拼箱', 'Lcl'],
    kongyun: ['空运', 'Air'],
    yewuleixing: ['业务类型', 'Business Type'],
    // 客户雷达
    kehuzonglan: ["客户总览", "All Customers"],
    kehuhuaxiang: ["客户画像", "Customer Portrait"],
    huizong: ["汇总", "Total"],
    zuori: ["昨日", "yday"],
    jin7: ["近七天", "7days"],
    jin30: ["近30天", "30days"],
    kehushu: ["客户数", "Customer"],
    fangwenshu: ["访问数", "Visitor"],
    xinzengkehu: ["新增客户", "New"],
    genjinshu: ["跟进数", "Follow"],
    qushifenxi: ["趋势分析", "Trend Analysis"],
    dao: ["到", "to"],
    diqufenbu: ["地区分布", "Region"],
    xingqufenbu: ["兴趣分布", "Interest"],
    chanpinfenbi: ["产品分布", "Product"],
    laiyuanqudao: ["来源渠道", "Source"],
    fangwenshijian: ["访问时间", "Visit Time"],
    // 客户跟踪
    chaxunchu: ["查询出", "Query out"],
    tiaoshuju: ["条数据", "results"],
    zanwu: ["暂无", "Empty"],
    fangwen: ["访问", "Visit"],
    genjin: ["跟进", "Follow"],
    wuyixiang: ["无意向", "No intention"],
    youyixyang: ["有意向", "Intention"],
    genjinzhong: ["跟进中", "Following"],
    yichengjiao: ["已成交", "Make Deal"],
    zhongdian: ["重点", "Important"],
    laiyuan: ["来源", "Source"],
    weizhigongsi: ["未知公司", "Unknow"],
    fangwenqushi: ["访问趋势", "Trend"],
    kehuguiji: ["客户轨迹", "Track"],
    huaxiangfenxi: ["画像分析", "Analysis"],
    genjinjilu: ["跟进记录", "Follow"],
    xingmingkong: ["姓 名", "Name"],
    gongsiming: ["公司名", "Co."],
    qingshuruxingming: ["请输入姓名", "Please enter name"],
    qingshurugongsiming: ["请输入公司名", "Please enter company"],
    // 订阅消息
    dingyuexiaoxishuoming: ["订阅消息说明", "Subscribe Remark"],
    dingyuecishu: ["订阅次数表示你还可以接收多少条消息", "How many more messages can you receive"],
    fangwentongzhi: ["客户访问通知", "Customer Visit Notice"],
    kejieshou: ["可接收", "Receive "],
    tiaoxiaoxi: ["条消息", " Messages"],
    dingyue: ["订阅", "Sub"],
    shilibuzhou: ["实例步骤", "Step"],
    dianjidingyue: ["点击订阅按钮", "Click subscribe button"],
    dianjihou: ["点击订阅按钮后", "After click"],
    zongbaochi: ["选择总保持以上选择", "Select always keep the above choices"],
    youjian: ["邮件", "email"],
    baifang: ["拜访", "visit"],
    qingshurugenjin: ["请输入跟进内容", "please enter follow content"],
    // boss雷达
    xiaoshoupaihang: ["销售排行", "Sales Rank"],
    xiaoshou: ["销售", "Sales"],
    suoshuxiaoshou: ["所属销售", "Sales"],
    // 公司客户
    xiaoshoumingcheng: ["销售名称", "Sales Name"],
    kehuzhuangtai: ["客户状态", "Customer Status"],
  },
  // 认证
  certi: {
    xingming: ["姓名", "Name"],
    shouji: ["手机", "Phone"],
    zhiwu: ["职务", "Job"],
    qq: ["QQ", "QQ"],
  },
  // Air Freight
  air: {
    qiyundidian: ["起运地点", "POL"],
    xuanzeqiyundidian: ["请选择起运地点", "Please enter POL"],
    daodadidian: ["到达地点", "POD"],
    xuanzedaodadidian: ["请选择到达地点", "Please enter POD"],
    xuanzeqiyundaoda: ["请选择起运地点 & 到达地点", "Please enter POL & POD"],
    qiyundixuanze: ["起运地选择", "Port Search"],
    mudidixuanze: ["目的地选择", "Port Search"],
    bizhong: ["比重", "Density"],
    hangban: ["航班", "Schedule"],
    qixiao: ["起效", "Validity"],
    hangkonggongsi: ["航空公司", "Airline"],
    baozhuangleixing: ["包装类型", "Package"],
    huowuleixing: ["货物类型", "GoodsType"],
    buxian: ["不限", "NoLimit"],
    tuopan: ["托盘", "Tray"],
    sanzhuang: ["散装", "InBulk"],
    baozhuang: ["包装", "Package"],
    huowu: ["货物", "Goods"],
    danjianzhongliangxianzhi: ["单件重量限制", "Weight Limit"],
    zuidichengyun: ["最低承运重量", "Lowest Weight"],
    chicunshangxian: ["尺寸上限", "Size Limit"],
    zuidijiage: ["最低价格", "Lowest Price"],
  },
  // Toast Notice
  message: {
    wanshanxinxigenjin: ["用于完善信息及销售跟进", "Used to improve information and sales follow-up"],
    savedSuccessfully: ['保存成功', 'Saved successfully'],
    saveFailed: ['保存失败', 'Save failed'],
    modifiedSuccessfully: ['修改成功', 'Modified successfully'],
    modificationFailed: ['修改失败', 'Modification failed'],
    pleaseInput: ['请输入', 'Please input'],
    pleasePhone: ['请检查手机号格式', 'Please check the format of mobile phone number'],
    pleaseEmail: ['请检查邮箱格式', 'Please check the email format'],
    successfulApplication: ['申请成功！', 'Successful application!'],
    pleaseContents: ['请填写内容', 'Please fill in the contents'],
    commentSuccess: ['评论成功！', 'Comment success!'],
    // 现舱
    pleaseContainer: ['请不要超过剩余箱量', "Please don't exceed the remaining cartons"],
    valueSmall: ['值不能小于0', "Value cannot be less than 0"],
    reservationFailed: ['预定失败', "Reservation failed"],
    reservationSuccessful: ['预定成功,请到我预定的现舱查看！', "Reservation is successful. Please check my current cabin!"],
    size10M: ['托书大小不能超过10M', "The size of the book should not exceed 10M"],
    wenjiandaxiao10: ['文件大小不能超过10M', "The size of the file should not exceed 10M"],
    uploadSucceeded: ['上传成功', "Upload succeeded"],
    uploadFailed: ['上传失败', "Upload failed"],
    shangchuanzhong: ["上传中", "Uploading"],
    // 现舱校验
    containerEmpty: ['箱量不能为空', "Container quantity cannot be empty"],
    containerLarge: ['箱量必须大于0', "Container quantity must be greater than 0"],
    numberInteger: ['箱量为整数', "The number of cartons is an integer"],
    // uploadFailed:['请不要超过剩余箱量',"Upload failed"],
    bookEmpty: ['托书不能为空', "Booking order cannot be empty"],
    companyEmpty: ['公司名不能为空', "Company cannot be empty"],
    contactsEmpty: ['联系人姓名不能为空', "Contact name cannot be empty"],
    contactNumber: ['联系电话不能为空', "Contact mobile cannot be empty"],
    exchangeRateEmpty: ['汇率不存在，请联系客服', "Exchange rate does not exist. Please contact customer service"],
    // 专家
    noExpertCall: ['暂无专家电话', "No expert call"],
    welcomeComment: ['欢迎明天再评论', "Welcome to comment tomorrow"],
    collectionSuccess: ['收藏成功', "Collection success"],
    collectionFailed: ['收藏失败', "Collection failed"],
    cancelSuccessfully: ['取消收藏成功', "Cancel collection successfully"],
    failedCancel: ['取消收藏失败', "Failed to cancel collection"],
    cleanPrivate: ['清理一下私聊哦', "Clean up the private chat"],
    // 
    inStorage: ['保存中···', "Saving···"],
    savedLocalAlbum: ['已保存本地相册', "Saved local album"],
    // 
    POLPOD: ['请选择：起始港 & 目的港', "Please select POL & POD"],
    widthHeight: ['请填写: 宽度 & 高度', "Please input width & height"],
    boxWidthHeight: ['请填写配箱: 宽度 & 高度', "Please input the packing list width & height"],
    // 
    pleasePrice: ['请填写费用单价', "Please input the unit price"],
    pleaseInteger: ['请输入整数', "please enter an integer"],
    pleaseIntegerPrice: ['请填写整数单价', "Please input the integer unit price"],
    pleaseFeeName: ['请填写费用名称', "Please input the name of the fee"],
    // 
    followUpEmpty: ['跟进方式不能为空', "Follow up method cannot be empty"],
    followUpContentEmpty: ['跟进内容不能为空', "Follow up content cannot be empty"],
    notSetWechat: ['对方未设置微信信息', "The other party did not set wechat information"],
    refreshSuccess: ['刷新成功！', "Refresh success!"],
    refreshFailed: ['刷新失败！', "Refresh failed!"],
    networkError: ['网络错误！请重试！', "Network error! Please try again"],
    PhoneNotset: ['暂未设置电话', "Phone not set up yet"],
    successfullyDeleted: ['删除成功', "Delete success!"],
    deletionFailed: ['删除失败', "Delete failed!"],
    noCustomerCall: ['无客服电话', "No customer service phone"],
    existenceReviewReview: ['您存在问题动态评论审核,暂无发布消息权限！', "You have problems to review dynamically, and you have no permission to publish messages!"],

    pleaseName: ['请填写姓名', "Please fill in your name"],
    pleaseMobile: ['请填写手机号', "Please fill in your mobile number"],
    phoneFormat: ['手机号格式错误', "Wrong format of mobile phone number"],
    companyName: ['请填写公司名称', "Please fill in the company name"],
    companyTitle: ['请填写公司职务', "Please fill in the company title"],
    pleaseQQ: ['请填写QQ号码', "Please fill in the QQ number"],
    emailAddress: ['请填写邮箱地址', "Please fill in the email address"],
    emailError: ['邮箱格式错误', "Email format error"],
    pleaseCompanyAddress: ['请填写公司地址', "Please fill in the company address"],
    pleaseMajor: ['请填写专业擅长', "Please fill in the major"],
    selectCS: ['请选择一个客服', "Please select a customer service center"],
    pleaseContentUpload: ['请填写内容 & 上传图片', "Please fill in the content & Upload pictures"],

    pleasePort: ['请选择港口', "Please select port"],
    pleasePOL: ['请选择起始港', "Please enter POL"],
    pleasePOD: ['请选择目的港', "Please enter POD"],

    messageNoSubscribe: ['尚未添加消息模板，无法订阅', "Message template has not been added and cannot be subscribed"],
    numberChanges: ['您点的太快了，等数字变化之后再点吧~', "Your order is too fast. Wait until the number changes~"],

    pleaseBillNumberOk: ['请输入正确提单号', "Please enter the correct bill No"],
    BillNumberError: ['提单号校验失败', "Bill No verification failed"],
    requiredBillShipping: ['提单号,船公司必填', "Please enter bill No,Carrier"],
    pleaseBillNumber: ['请输入提单号', "Please enter the bill No"],
    pleaseShipping: ['请选择船公司', "Please enter carrier"],

    placeOfOrigin: ['请选择：起运地', "Please select: Place of origin"],
    deliveryPlace: ['请选择：送货地', "Please select: Delivery place"],
    pleaseBoxType: ['请选择：选择箱型', "Please select: Select box type"],
    pleaseNumber: ['请填写：数量', "Please select: number"],
    pleaseWeight: ['请填写：重量', "Please select: weight"],
    shuruzhengshuliangweixiaoshu: ["请输入整数或两位小数", "Please enter integer or two decimal places"],
    shuruzhengshusanweixiaoshu: ["请输入整数或三位小数", "Please enter integer or three decimal places"],
    xuanzekehuleixing: ["请选择：收货人类型", "Please select customer type"],
    xuanzebaozhuangleixing: ["请选择：包装类型", "Please select package type"],
    shurujianshu: ["请输入：件数", "Please enter quantity"],
    shurumaozhong: ["请输入：毛重", "Please select weight"],
    shurutiji: ["请输入：体积", "Please select volume"],
    shuruhaiyunfei: ["请输入海运费", "Please enter Ocean Fee"],
    wentipinglunshenhe: ["您存在问题动态评论审核,暂无发布消息权限！", "You have a problem comment audit, no release message permissions"],
    showModal: {
      wechatPhoneError: ['授权失败,请确认微信是否绑定手机号', "Authorization failed, please confirm whether wechat is bound with mobile phone number"],
      wechatPhoneSettings: ['您微信暂未绑定手机号,请前往【设置】->【账号安全】绑定手机号，绑定成功即可点击获取', "Your wechat has not been bound with a mobile phone number yet. Please go to [settings] - > [account security] to bind the mobile phone number. If the binding is successful, you can click to get it"],
      authorizationFailed: ['授权失败！', "Authorization failed!"],
      friendlyTips: ['友情提示', "Friendly tips"],
      TAsaveToAlbum: ['通过授权:-->允许【保存到相册】才可根据信息将图片保存到本地相册。 请点击【确定】> 授权', "Through authorization: - > allow [save to album] to save pictures to local album according to information. Please click [OK] > authorization"],
      failedWechatPhone: ['失败,请确认微信是否绑定手机号', "Failed, please confirm whether wechat is bound with mobile phone number"],
      delete: ['删除', "Delete"],
      deleteDynamic: ['确认删除该动态?', "Are you sure you want to delete this dynamic?"],
      refreshFailed: ['刷新失败！', "Refresh failed!"],
      tips: ['提示', "Tips"],
      noFreightRate: ['装柜超长或货重超重，没有匹配运价', "The container is too long or the goods are overweight, and there is no matching freight rate"],
    },
    querenshanchu: ["确认删除?", "Are you sure you want to delete?"],
    // 授权状态
    lijirenzheng: ["立即认证", "Certificate"],
    zanwurenzhengchaxun: ["暂无认证信息,请认证后查询", "No certification information, please search after certification"],
    gongnengweikaifang: ["功能暂未开放", "Function not open yet"]

  },
  // 分享
  onShareAppMessage: {
    qiyejieshao: ['企业介绍', "Company Profile"],
    xczsJDJZ: ['现舱在手，即订即走', "Shipping Space"],
    tuijianFX: ["推荐", "Reco"],
    zhuanjiaku: ['专家库', "Experts"],
    tuijianzhuanjia: ['推荐专家', "Rec Expert"],
    zhuanjia: ['专家', "Expert"],
    baojiadan: ['报价单', "Quotation"],
    mingpian: ['您好,这是我的名片,请惠存', "Hello, this is my business card."],
    wodebaojiadan: ['我的报价单', "My Quotation"],
    tezhongguibaojiadan: ['特种柜报价单', "OOG Quotation"],
    genzong: ['跟踪', "Tracking"],
    mudigangzuiyou: ['目的港转运最优方案列表', "Best transportation solutions"],
    haixunzhengxiangtuijian: ["海运整箱推荐运价列表", "Recommend Fcl"],
  },
  // 底部菜单
  tabbar: {
    shouye: ["首页", "Home"],
    jiejuefangan: ['解决方案', "Solutions"],
    qiyejieshao: ["企业介绍", "Company"],
    wode: ["我的", "Mine"],
  },
  // 页面标题
  navTitle: {
    qiyejieshao: ["企业介绍", "Company Profile"],
    bossleida: ["BOSS雷达", "Boss Radar"],
    renzhengxinxi: ["认证信息", "Authentication"],
    kehuxinxi: ["客户信息", "Customer Info"],
    kehugenzong: ["客户跟踪", "Customer Tracking"],
    gongsikehu: ["公司客户", "Customers"],
    pinglun: ["评论", "Comment"],
    gangkousousuo: ["港口搜索", "Port Search"],
    xiugaixinxi: ["修改信息", "Modify"],
    zhuanjia: ["专家", "Experts"],
    zhuanjiaxiangqing: ["专家详情", "Expert Details"],
    baojiadan: ["报价单", "Quotation"],
    yunjialiebiao: ["运价列表", "Freight"],
    haiyunzhengxiang: ["海运整箱", "Freight"],
    xiugaihaiyunfei: ["修改海运费", "Modify Ocean Fee"],
    tianjiafeiyong: ["添加费用", "Add Charge"],
    xiugaifeiyong: ["修改费用", "Modify Charge"],
    genjin: ["跟进", "Follow"],
    wodexiaoxi: ["我的消息", "My Message"],
    wode: ["我的", "Mine"],
    kehuleida: ["客户雷达", "Customer Radar"],
    wodezhuanshukefu: ["我的专属客服", "Exclusive service"],
    wodebaojiadan: ["我的报价单", "My Quotation"],
    lishibaojiadan: ["历史报价单", "History Quotation"],
    dongtai: ["动态", "News"],
    zixungonggao: ["资讯公告", "News"],
    gangkouchaxun: ["港口查询", "Port Search"],
    shezhixinxi: ["设置信息", "Setting"],
    erweimamingpian: ["二维码名片", "QRCode Card"],
    chuanqibiao: ["船期表", "Shipping Schedule"],
    fadongtai: ["发动态", "Release"],
    chuanqichaxun: ["船期查询", "Schedule Search"],
    chuangongsichaxun: ["船公司查询", "Shipping Search"],
    tezhonggui: ["特种柜", "OOG"],
    tezhongguixiangqing: ["特种柜详情", "OOG Details"],
    tezhongguiliebiao: ["特种柜列表", "OOG List"],
    huowugenzong: ["货物跟踪", "Goods Tracking"],
    dingdangenzong: ["订单跟踪", "Order Tracking"],
    dongtaixiangqing: ["动态详情", "News Detail"],
    banbengengxin: ["版本更新", "Version Update"],
    quanjingtong: ["全境通", "Global Solution"],
    quanjingtongfanganxiangqing: ["全境通方案详情", "Global Solution Details"],
    quanjingtongliebiao: ["全境通列表", "Global Solutions"],
    xiancangyuding: ["现舱预定", "Reserve"],
    wodedingdan: ["我的订单", "My Order"],
    wodexiancangyuding: ["我的现舱预定", "My Order"],
    yudingxieyi: ["预定协议", "Reserve Agreement"],
    xiancangxiangqing: ["现舱详情", "Shipping Space Detail"],
    xiancangchaxun: ["现舱查询", "Shipping Space"],
    jiejuefangan: ['解决方案', "Solutions"],
    kongyunchaxun: ['空运查询', "Air Freight"],
    kongyunxiangqing: ['空运详情', "Air Detail"],
    tuijianyunjia: ["推荐运价", "Recommend Fcl"],
    pinxiangchaxun: ["拼箱查询", "LCL Search"],
    pinxiangxiangqing: ["拼箱详情", "LCL Detail"],
    pinxiangshezhi: ["设置", "Setting"],
    pinxiangfeiyongshezhi: ["费用设置", "Charge Setting"],
    huokehaibao: ["获客海报", "Poster"],
    bumenleida: ["部门雷达", "Depart Radar"],
    bumenkehu: ["部门雷达", "Depart Customer"],
    wodeyunjiadingyue: ["我的运价订阅", "My FCL Subscription"],
    yunjiadingyue: ["运价订阅", "FCL Subscription"],
    wodekefu: ["我的客服", "My Customer Service"],
    huilvjisuan: ['汇率计算', 'Exchange rates'],
    huobiqiehuan: ['货币切换', 'Currency Switch'],
    pinxiangliebiao: ['拼箱列表', 'LCL List']
  }


}
const flatten = function (obj) {
  var result = {};

  function recurse(src, prop) {
    var toString = Object.prototype.toString;
    if (toString.call(src) == '[object Object]') {
      var isEmpty = true;
      for (var p in src) {
        isEmpty = false;
        recurse(src[p], prop ? prop + '.' + p : p)
      }
      if (isEmpty && prop) {
        result[prop] = {};
      }
    }
    // else if (toString.call(src) == '[object Array]') {
    //   var len = src.length;
    //   if (len > 0) {
    //     src.forEach(function (item, index) {
    //       recurse(item, prop ? prop + '.[' + index + ']' : index);
    //     })
    //   } else {
    //     result[prop] = [];
    //   }
    // }
    else {
      result[prop] = src;
    }
  }
  recurse(obj, '');

  return result;
}

const getLang = (dictionary, order) => {
  let flattenObj = flatten(dictionary)
  let keys = Object.keys(flattenObj)
  let res = {}
  keys.forEach(key => {
    // 若英文不存在，默认注入中文
    let val = flattenObj[key][order] || flattenObj[key][0] || key
    res[key] = val
  })
  return res
}
let cn = getLang(dictionary, 0)
let en = getLang(dictionary, 1)
// export {
//   dictionary,
//   cn,
//   en,
// }
// 根据中文查询key值
const getKeyByCh = (ch) => {
  let cnKeys = Object.keys(cn)
  let findRes = cnKeys.find(key => {
    if (cn[key] === ch) {
      return true
    }
    else {
      return false
    }
  })
  if (findRes && en[findRes] && en[findRes] !== findRes) {
    // console.log('==========存在可替换的中文key', findRes, en[findRes])
    return findRes
  }
  else {
    return ch
  }
}
module.exports = {
  dictionary,
  cn,
  en,
  getKeyByCh
}

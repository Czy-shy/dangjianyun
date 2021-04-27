// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    user:null,//后台返回的用户信息
    server:"https://www.chezengyang.link", //服务器域名
    examDatas:null, //当前用户考试的试题
    examAnswer:null, //考试情况，答案和用户选取的答案
  }
})

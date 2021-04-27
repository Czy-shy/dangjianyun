// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:"",
    password:""
  },

  phoneinput:function(e){
    // console.log(e.detail.value)
    var that=this
    that.data.phone=e.detail.value
    console.log(this.data.phone)
  },

  passwordinput:function(e){
    // console.log(e.detail.value)
    this.data.password=e.detail.value
    //console.log(this.data.phone)
  },

  login:function(){
    var that = this
    var myreg= /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/
    if(that.data.phone==''){
      wx.showModal({
        title: '提示',
        content: '请输入手机号~',
        showCancel:false,
        success (res) {
        }
      })
    }else if(that.data.phone.length!=11){
      wx.showModal({
        title: '提示',
        content: '手机号长度有误，请重新输入~',
        showCancel:false,
        success (res) {
        }
      })
    }else if(!myreg.test(that.data.phone)){
      wx.showModal({
        title: '提示',
        content: '请输入正确的手机号码~',
        showCancel:false,
        success (res) {
        }
      })
    }else if(that.data.password==""){
      wx.showModal({
        title: '提示',
        content: '请输入密码~',
        showCancel:false,
        success (res) {
        }
      })
    }else{
      wx.request({
        url: getApp().globalData.server+'/dangjian/index.php/Home/User/login',  
        data: {
           phone:that.data.phone,
           password:that.data.password
        },
        method:"POST",
        header: {
          'content-type': 'application/x-www-form-urlencoded' 
        },
        success (res) {
          console.log(res.data)
          if(res.data.error_code==1){
            wx.showModal({
              title: '提示',
              content: res.data.msg,
              showCancel:false,
              success (res) {
              }
            })
          }else if(res.data.error_code==2){
            wx.showModal({
              title: '提示',
              content: '不存在该用户，请联系党支部管理员注册',
              showCancel:false,
              success (res) {
              }
            })
          }else if(res.data.error_code==3){
            wx.showModal({
              title: '提示',
              content: '密码错误，请重新输入',
              showCancel:false,
              success (res) {
              }
            })
          }else if(res.data.error_code==0){
            getApp().globalData.user=res.data.data
            console.log(getApp().globalData.user)
            wx.showModal({
              title: '提示',
              content: '登录成功！',
              showCancel:false,
              success (res) {},
              complete:function(res){
                wx.reLaunch({
                  url: '/pages/main/main',
                })
              }
            })
          }
        }
      })
    }
    
  },
    
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
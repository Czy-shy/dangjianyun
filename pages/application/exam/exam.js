// pages/application/exam/exam.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dan:null,
    duo:null,
    all:[]
  },

  goexam:function(){
    //获取试题数据
    var that=this
    wx.request({
      url: getApp().globalData.server+'/dangjian/index.php/Home/Exam/get_duo_dangshiexam',
      data: {
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' 
      },
      success (res) {
        that.setData({
          duo:res.data.data
      
        })
      }
    })

 
 
    wx.request({
      url:  getApp().globalData.server+'/dangjian/index.php/Home/Exam/get_dan_dangshiexam',
      data: {
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'  
      },
      success (res) {
        that.setData({
          all:res.data.data.concat(that.data.duo)
        })
        app.globalData.examDatas=that.data.all
        console.log(app.globalData.examDatas)
      }
    })
    
    
    //跳转到考试页面
    wx.redirectTo({
      url: '/pages/application/exam/exampage',
    }) 
  },

  gorank:function(){
    wx.navigateTo({
      url: '/pages/application/exam/examrank',
    }) 
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
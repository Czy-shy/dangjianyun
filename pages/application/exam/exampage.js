// pages/application/exam/exampage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked:false,
    index:0,  //当前试题编号
    datas:null, //试题
    examAnswer:[], //answer和select
    grade:0, //成绩
    username:null,
  },

  exam:function(){
    console.log("index:"+this.data.index);
    var currPage=this; //当前页面对象
    var currIndex=currPage.data.index+1; //下一题题号
    
    if(currIndex==100){
      //计算成绩
      for(var i=0;i<100;i++){
        if(currPage.data.examAnswer[i].Answer==currPage.data.examAnswer[i].select){
          currPage.setData({
            grade:currPage.data.grade+1
          })
        }
      }
      console.log(currPage.data.grade)
      
      wx.request({
        url:  getApp().globalData.server+'/dangjian/index.php/Home/Exam/set_dangshigrade',
        data: {
          grade:currPage.data.grade,
          username:getApp().globalData.user.username,
        },
        method:"POST",
        header: {
          'content-type': 'application/x-www-form-urlencoded'  
        },
        success (res) {
        }
      })

      //跳转到查看考试详情页面
      wx.navigateTo({
        url: '/pages/application/exam/examresult?grade='+currPage.data.grade,
      })
    }
 
    if(Object.keys(currPage.data.examAnswer).length ==currIndex){
      currPage.setData({
        index: currIndex,
        checked:false
    })
    }else{
      wx.showToast({
        title: '先完成这道题哦~',
        icon: 'none',
        duration: 1000,
        mask:true
    })
    }
   
},
 
checkboxChange(e){
  var that=this
  console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  const value=e.detail.value
  value.sort()
  var val1=value.join("") 
  var val2=that.data.datas[that.data.index].result
  //console.log(val)
  var aa={}
  aa.Answer=val2
  aa.select=val1
  that.data.examAnswer[that.data.index]=aa
  console.log(that.data.examAnswer)
  
},

radioChange(e){
  var that=this
  const val1=e.detail.value
 
  var val2=that.data.datas[that.data.index].result
  //console.log(val)
  var aa={}
  aa.Answer=val2
  aa.select=val1
  that.data.examAnswer[that.data.index]=aa
  console.log(that.data.examAnswer)
},

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.showLoading({
      title: '准备试题中',
   })
    setTimeout(function () {
    //要延时执行的代码
      that.setData({
      datas:getApp().globalData.examDatas
    })
    wx.hideLoading()
    console.log(that.data.datas)
    }, 3000) //延迟时间 这里是1秒
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
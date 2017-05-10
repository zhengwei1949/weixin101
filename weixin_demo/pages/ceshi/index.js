//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    name: 'mina'
  },
  //事件处理函数
  changeName: function() {
    this.setData({name:'zheng wei'});
  },
  nav_to_icon:function(){
    wx.navigateTo({
      url:'../icon/index'
    })
  },
  nav_to_swiper:function(){
    wx.navigateTo({
      url:'../swiper/index'
    })
  },
  nav_to_cal:function(){
    wx.navigateTo({
      url: '../calculator/index'
    })
  },
  nav_to_piano:function(){
    wx.navigateTo({
      url:'../piano/index'
    })
  },
  nav_to_user_info:function(){
    wx.navigateTo({
      url:'../user_info/index'
    })
  },
  nav_to_option:function(){
    wx.navigateTo({
      url:'../options/index?title=ceshiceshi'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    console.log(app.globalFunction())
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })






    // wx.connectSocket({
    //   url: 'ws://123.207.167.163:9010/ajaxchattest'
    // })

    // wx.onSocketOpen(function(res) {
    //   socketOpen = true
    //   for (var i = 0; i < socketMsgQueue.length; i++){
    //     sendSocketMessage(socketMsgQueue[i])
    //   }
    //   socketMsgQueue = []
    // })

    // function sendSocketMessage(msg) {
    //   if (socketOpen) {
    //     wx.sendSocketMessage({
    //       data:msg
    //     })
    //   } else {
    //     socketMsgQueue.push(msg)
    //   }
    // }

    wx.connectSocket({
      url: 'ws://localhost:8080'
    })
    wx.onSocketOpen(function(res) {
      console.log('WebSocket连接已打开！')
       wx.sendSocketMessage({
          data:"测试测试"
       })
    })
    wx.onSocketMessage(function(res) {
      console.log('收到服务器内容：' + res.data)
    })

  }
})

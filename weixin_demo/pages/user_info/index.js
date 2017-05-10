//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    
  },
  onLoad: function () {
    var that = this
    wx.getUserInfo({
      success: function(res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
        that.setData({
          nickName:nickName,
          gender:gender,
          province:province,
          city:city,
          country:country
        });
      }
    })
  }
})

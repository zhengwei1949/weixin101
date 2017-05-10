//index.js
//获取应用实例
var app = getApp()
Page({
  onLoad: function (options) {
    this.setData({
      title:options.title
    })
  }
})

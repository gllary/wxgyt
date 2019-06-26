//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://47.100.192.102/1.jpg',
      'http://47.100.192.102/2.jpg',
      'http://47.100.192.102/3.jpg',
      'http://47.100.192.102/4.jpg',
      'http://47.100.192.102/5.jpg',
      'http://47.100.192.102/6.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },

  passQuery: function (e) {

    // 传递的参数

    let query = e.currentTarget.dataset['index'];
    if(query==1){
      wx.navigateTo({
        url: '../anwser/anwser',
      })
    }else if(query==2){
      wx.navigateTo({
        url: '../poem/poem',
      })
    }else{
      wx.navigateTo({
        url: '../lib/lib',
      })
    }

  },
  tomusic:function(e){
    // 全局定义
    let query = e.currentTarget.dataset['index'];
    app.data.id = query;
    wx.navigateTo({
      url: '../listen/listen',
    })
    

  }




})

// pages/poem/poem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgpurl:'http://47.100.192.102/q1.gif',
    src: 'http://47.100.192.102/1.wav',
    poem:' ',
    p_url:' '

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
    var num = parseInt(Math.random() * (7 - 1)) + 1;
    var str = 'http://47.100.192.102/q' + num + '.gif';
    var mstr = 'http://47.100.192.102/' + num + '.wav';
    var purl = 'http://157.230.161.31:8080/renren-fast/generator/playdb/info/' + num;
    var that=this;
    this.setData({
      'bgpurl':str,
      'src':mstr,
      'p_url':purl
    }),
    this.audioCtx = wx.createAudioContext('myAudio'),
      wx.request({
        url: purl,
        method: 'GET',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          // console.log(res.data.poem)
          str = res.data.poem;
          var poem = ' ';
          for (let i = 0; i < str.length; i++) {
            if (str[i] != '<' && str[i] != 'b' && str[i] != 'r' && str[i] != '/' && str[i] != '>') {
              poem += str[i]
              if (str[i] == '。') {
                poem += '\n'
              }

            }
          }
          that.setData({
            'poem': poem
          })
        }
      })


  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.playBackgroundAudio({
      dataUrl: this.data.src,
      title: '',
      coverImgUrl: ''
    })
     

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
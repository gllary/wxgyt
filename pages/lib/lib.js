// pages/lib/lib.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    artlist: [
      { imag: 'http://47.100.192.102/y1.jpg', art: "古筝——佳人当窗弄白日，弦将手语弹鸣筝。",id:"1" },
      { imag: 'http://47.100.192.102/y2.jpg', art: "笛子——谁家玉笛暗飞声，散入东风满洛城。", id: "2" },
      { imag: 'http://47.100.192.102/y3.jpg', art: "扬琴——雉操扬琴奏，名翚拂扇尘。", id: "3" },
      { imag: 'http://47.100.192.102/y4.jpg', art: "箫——凤箫声动，玉壶光转，一夜鱼龙舞。", id: "4" },
      { imag: 'http://47.100.192.102/y5.jpg', art: "琵琶——大弦嘈嘈如急雨，小弦切切如私语。", id: "5" },
      { imag: 'http://47.100.192.102/y6.jpg', art: "鼓——打鼓枫林谁作社，枕溪茅屋忆吾庐。去年醉倒倩人扶。", id: "6" },
      { imag: 'http://47.100.192.102/y7.jpg', art: "二胡——哀怨，苍凉，丝丝缕缕。欲断又连。", id: "7" },
      { imag: 'http://47.100.192.102/y8.jpg', art: "古琴——江上调玉琴，一弦清一心。泠泠七弦遍，万木澄幽阴。", id: "8" },
    ]
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

  },
  passQuery: function (e) {

    // 传递的参数
    console.log('hhhh')

    let query = e.currentTarget.dataset['index'];
    app.data.enjoyid=query;
    wx.navigateTo({
      url: '../enjoy/enjoy',
    })

  },
})
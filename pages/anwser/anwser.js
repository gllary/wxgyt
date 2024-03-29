// pages/contact/contact.js
const app = getApp();
var inputVal = '';
var msgList = [];
var windowWidth = wx.getSystemInfoSync().windowWidth;
var windowHeight = wx.getSystemInfoSync().windowHeight;
var keyHeight = 0;

/**
 * 初始化数据
 */
function initData(that) {
  inputVal = '';

  msgList = [{
    speaker: 'server',
    contentType: 'text',
    content: '来和小听聊聊民族乐器吧！'
  },
  {
    speaker: 'customer',
    contentType: 'text',
    content: '你好呀！'
  }
  ]
  that.setData({
    msgList,
    inputVal
  })
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollHeight: '100vh',
    inputBottom: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    initData(this);
    this.setData({
      cusHeadIcon: app.globalData.userInfo.avatarUrl,
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
   * 获取聚焦
   */
  focus: function (e) {
    keyHeight = e.detail.height;
    this.setData({
      scrollHeight: (windowHeight - keyHeight) + 'px'
    });
    this.setData({
      toView: 'msg-' + (msgList.length - 1),
      inputBottom: keyHeight + 'px'
    })
    //计算msg高度
    // calScrollHeight(this, keyHeight);

  },

  //失去聚焦(软键盘消失)
  blur: function (e) {
   
    this.setData({
      scrollHeight: '100vh',
      inputBottom: 0
    })
    this.setData({
      toView: 'msg-' + (msgList.length - 1)
    })

  },

  /**
   * 发送点击监听
   */
  sendClick: function (e) {
    var that=this;
    msgList.push({
      speaker: 'customer',
      contentType: 'text',
      content: e.detail.value
    })
    inputVal = '';
    this.setData({
      msgList,
      inputVal
    });
    var tulinurl = 'http://www.tuling123.com/openapi/api?key=3e8e3cd4698d401c8fd70e85e709dbe3&info=' + e.detail.value;
    wx.request({
      url:tulinurl,
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
       // console.log(res.data)
        msgList.push({
          speaker: 'server',
          contentType: 'text',
          content: res.data.text
        }),
          that.setData({
            msgList,
          });
      }
    })


  },

  /**
   * 退回上一页
   */
  toBackClick: function () {
    wx.navigateBack({})
  }

})

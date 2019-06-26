// pages/enjoy/enjoy.js
const app = getApp()
function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
Page({

  /**
   * 页面的初始数据
   */
  inputValue: '',
  data: {
    bgpurl:'',
    insname:'',
    insdesc:'',
    shi:'',
    src: '',
    videourl:'',
    danmuList:
      [{
        text: '测试测试',
        color: '#ff0000',
        time: 1
      },
      {
        text: '喜欢喜欢',
        color: '#ff00ff',
        time: 3
      }]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var psrc = 'http://47.100.192.102/e' + app.data.enjoyid+'.jpg';
    this.setData({
      'bgpurl':psrc
    })
    var url = 'http://157.230.161.31:8080/renren-fast/generator/instrudb/info/' + app.data.enjoyid;
    wx.request({
      url: url,
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        that.setData({
          'insname':res.data.instrudb.name,
          'insdesc': res.data.instrudb.desc

        })
        
      }
      
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo')

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    var p_url = 'http://157.230.161.31:8080/renren-fast/generator/playdb/info/' + app.data.enjoyid;
    var v_url = 'http://47.100.192.102/video' + app.data.enjoyid + '.mp4';
    this.setData({
      'videourl':v_url
    })

    var str = ''; 
    wx.request({
      url: p_url,
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
       // console.log(res.data.poem)
        str = res.data.poem;
        var poem =' ';      
        for(let i=0;i<str.length;i++){
          if (str[i] != '<' && str[i] != 'b'&& str[i] != 'r' && str[i]!='/' && str[i]!='>'){
            poem += str[i]  
            if(str[i]=='。'){
              poem+='\n'
            }         
          }
        }
        that.setData({
          'shi': poem
        })
      }
    })

  },
  huan: function () {
    var that = this;
    var p_url = 'http://157.230.161.31:8080/renren-fast/generator/playdb/info/' + app.data.enjoyid;
    var str = '';
    wx.request({
      url: p_url,
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
          'shi': poem
        })
      }
    })

  },
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value
  },
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
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
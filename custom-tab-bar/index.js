Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [
      {
        "text":"首页",
        "pagePath":"main",
        "iconPath":"http://123.xydj.xyz/danghui2.png",
        "selectedIconPath":"http://123.xydj.xyz/danghui.png"
      },
      {
        "text":"应用",
        "pagePath":"application",
        "iconPath":"http://123.xydj.xyz/yingyong2.png",
        "selectedIconPath":"http://123.xydj.xyz/yingyong.png"
      },
      {
        "text":"我的",
        "pagePath":"mine",
        "iconPath":"http://123.xydj.xyz/wode2.png",
        "selectedIconPath":"http://123.xydj.xyz/wode.png"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})
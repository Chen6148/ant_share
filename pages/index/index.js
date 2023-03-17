// index.js
Page({
  data:{
    indicatorDots:false,
    autoplay:true,
    interval:5000,
    duration:1000,
    imgUrls:[
      "http://m.qpic.cn/psc?/V53pn3Bl3kIWcW0qA3bv2W8bUs1D6Z3g/ruAMsa53pVQWN7FLK88i5oKGR53YQbLYF.56JUiicxn63vxPY80u*IHXgP88ghY4i0hamCM1vP98xFLyyPS9fT1gY5MreI6URgvLC5zU8h0!/b&bo=6Ak4BAAAAAADZ58!&rf=viewer_4&t=5",
      "http://m.qpic.cn/psc?/V53pn3Bl3kIWcW0qA3bv2W8bUs1D6Z3g/ruAMsa53pVQWN7FLK88i5oKGR53YQbLYF.56JUiicxkYWa8QDzM.SfYNAIMD3eJ.PoM2iOYqD0ToselRGofM2F6y*wWR0R98hYYGVSN20as!/b&bo=6Ak4BAAAAAADZ58!&rf=viewer_4&t=5",
      "http://m.qpic.cn/psc?/V53pn3Bl3kIWcW0qA3bv2W8bUs1D6Z3g/ruAMsa53pVQWN7FLK88i5oKGR53YQbLYF.56JUiicxn2FLS9BUeqen*Tz4zP1R8G0zV9pZeY*.qaFLSaD1XBP0O2GyDJLM6kApfdWng*Gs4!/b&bo=6wk4BAAAAAADZ5w!&rf=viewer_4&t=5"
    ],
    navs:[]
  },
  onLoad:function(options){
    //页面初始化options为页面跳转所带来的参数
    var page = this;
    var navs = this.loadNavData();
    page.setData({navs:navs});
  },
  navBtn:function(e){
    console.log(e);
    var id = e.currentTarget.id;
    if (id == "0"){
      wx.navigateTo({
        url: '../book/book',
      })
    } else if (id == "1") {
      wx.navigateTo({
        url: '../software/software',
      })
    } else if (id == "2"){
      wx.navigateTo({
        url: '../movie/movie',
      })
    } else if (id == "3"){
      wx.navigateTo({
        url: '../more/more',
      })
    }
  },
  loadNavData:function(){
    var navs =[];
    var nav0 = new Object();
    nav0.img = "http://m.qpic.cn/psc?/V53pn3Bl3kIWcW0qA3bv2W8bUs1D6Z3g/ruAMsa53pVQWN7FLK88i5ib2zNbyBNA6aDFZFP7dyzpfREz3orgWsnCzk8mMvoGIglkJ9a5sXTjhiXINEIgAYDqvhp4Fa1JmYx4GLtqg3kg!/b&bo=AAEAAQAAAAADFzI!&rf=viewer_4&t=5";
    nav0.name = '最新文章';
    navs[0] = nav0;
    var nav1 = new Object();
    nav1.img = "http://m.qpic.cn/psc?/V53pn3Bl3kIWcW0qA3bv2W8bUs1D6Z3g/ruAMsa53pVQWN7FLK88i5ib2zNbyBNA6aDFZFP7dyzp0kL8BIYV6fcXB4O7nUoh2gmolM24KoLHoMc0OP0fuPRd22LHFqVredpnLhCy3zDw!/b&bo=AAEAAQAAAAADFzI!&rf=viewer_4&t=5";
    nav1.name = '软件智库';
    navs[1] = nav1;
    var nav2 = new Object();
    nav2.img = "http://m.qpic.cn/psc?/V53pn3Bl3kIWcW0qA3bv2W8bUs1D6Z3g/ruAMsa53pVQWN7FLK88i5ib2zNbyBNA6aDFZFP7dyzorc8ilkUzryNg*CIlSAQzHhSHQjJV4fJKUDN49inigi29cegzuF2N0mqtoKX8Gq00!/b&bo=AAEAAQAAAAADFzI!&rf=viewer_4&t=5";
    nav2.name = '开心一下';
    navs[2] = nav2;
    var nav3 = new Object();
    nav3.img = "http://m.qpic.cn/psc?/V53pn3Bl3kIWcW0qA3bv2W8bUs1D6Z3g/ruAMsa53pVQWN7FLK88i5p*J.nDZFgWd8XgJWoFRAxYFTMk5rhKEPANO6ZTzIwBJKISf8Lxr3kYMZJz4MnjAAcPyfqsNa1Ywr6xfaBcuA7Y!/b&bo=AAEAAQAAAAADFzI!&rf=viewer_4&t=5";
    nav3.name = '休息一下';
    navs[3] = nav3;
    return navs;
  }
})
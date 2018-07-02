
const SUPPORT_TYPE = ['loading', 'success', 'fail'];

Component({
  data: {
    tipPos:{},
    show:false,
    tipText:'',
    opacity:0
  },

  methods: {
    show(options,s) {
      const TipOptions = { ...options };
      this.setData({
       ...TipOptions
        
      });
      let self=this
      wx.createSelectorQuery().in(this).select(".container").fields({
      size: true
      },function(res){
        console.log(res)
        const newX=self.data.tipPos.x-res.width/2
        self.setData({
          tipPos:{x:newX,y:self.data.tipPos.y},
          opacity:1
        })
      }).exec()
     
    },
    clearZanTip(){
      this.setData({
        show:false
      })
    },
    clear() {
      this.setData({
        show:false,
        opacity:0
      });
    }
  }
});


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
      
        const newX=self.data.tipPos.x-res.width/2
        const newY=self.data.tipPos.y-res.height+10
        self.setData({
          tipPos:{x:newX,y:newY},
          opacity:1
        })
      }).exec()
     
    },
    
    clear() {
      this.setData({
        show:false,
        opacity:0
      });
    }
  }
});

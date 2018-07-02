# wxComponent-tag
做毕设的时候发现有赞的小程序框架里面没有标签组件，索性就照着有赞的toast组件做了个标签组件

## 使用文档

* 1.clone到本地
* 2.将tip文件夹添加到项目中
* 3.在需要的页面json文件中引用
* 4.在wxml添加``` <tip id="myTip"></tip> ``` 
* 5.在js引用``` const Tip= require('../../components/tip/tip.js') ```
* Tip({
*          tipPos:{x:e.touches[0].clientX,y:e.touches[0].clientY-45}, //组件出现位置
*          tipText:"文本",//组件显示内容
*          selector: '#myTip'//组件id
*        })  
      
## 效果图
![](https://github.com/ssgnoob/wxComponent-tag/edit/master/example.png)

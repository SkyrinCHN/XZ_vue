// 向 http://localhost:3000/index 发送get请求

// 参数解构解决传参不确定的时候使用
$.ajax({
  url:" http://localhost:3000/index",
  type:"get",
  dataType:"json" // 因为返回json字符串，所以希望自动转为对象 
})// 支持promise:open(result)
 .then(function(products){
   new Vue({
     el: "#main",
     data: {
       products,
       floor:["首页推荐/1F","首页推荐/2F","首页推荐/3F"]
     }
     
   })
 })

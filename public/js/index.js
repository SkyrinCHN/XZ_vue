// 向 http://localhost:3000/index 发送get请求

// // 参数解构解决传参不确定的时候使用
// $.ajax({
//   url:" http://localhost:3000/index",
//   type:"get",
//   dataType:"json" // 因为返回json字符串，所以希望自动转为对象 
// })// 支持promise:open(result)
//  .then(function(products){
   new Vue({
     el: "#main",
     data: {
       products:[{title:"",price:0},{title:"",price:0},{title:"",price:0}],
       floor:["首页推荐/1F","首页推荐/2F","首页推荐/3F"]
     },
     created() {
       axios.get("http://localhost:3000/index")
         .then(res=> {//用箭头函数是因为 要让内外this一致,所以才打开作用域
           this.products = res.data;
           console.log(res.data);
         }
      )
    }
   })


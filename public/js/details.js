window.onload = function () {
  var lid = location.search.split("=")[1];
  axios.get("http://localhost:3000/details", {
      params: {
        lid
      } //"lid="+lid,
    })
    .then((res) => {
      var output = res.data;
      var { product, specs, pics } = output;
      new Vue({
        el: "#details",
        data: {
          product, specs, lid
        }
      });
    })
}
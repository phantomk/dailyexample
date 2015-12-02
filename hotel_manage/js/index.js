/**
 * 百度地图定位api和天气预报api
 */
   // TODO: 完善功能
   // 百度地图API功能
   var map = new BMap.Map("allmap");
   var point = new BMap.Point(116.331398,39.897445);
   map.centerAndZoom(point,12);

   var geolocation = new BMap.Geolocation();
   geolocation.getCurrentPosition(function(r){
     if(this.getStatus() == BMAP_STATUS_SUCCESS){
       var mk = new BMap.Marker(r.point);
       map.addOverlay(mk);
       map.panTo(r.point);
       alert('您的位置：'+r.point.lng+','+r.point.lat);
     }
     else {
       alert('failed'+this.getStatus());
     }
   },{enableHighAccuracy: true})
  //关于状态码
  //BMAP_STATUS_SUCCESS	检索成功。对应数值“0”。
  //BMAP_STATUS_CITY_LIST	城市列表。对应数值“1”。
  //BMAP_STATUS_UNKNOWN_LOCATION	位置结果未知。对应数值“2”。
  //BMAP_STATUS_UNKNOWN_ROUTE	导航结果未知。对应数值“3”。
  //BMAP_STATUS_INVALID_KEY	非法密钥。对应数值“4”。
  //BMAP_STATUS_INVALID_REQUEST	非法请求。对应数值“5”。
  //BMAP_STATUS_PERMISSION_DENIED	没有权限。对应数值“6”。(自 1.1 新增)
  //BMAP_STATUS_SERVICE_UNAVAILABLE	服务不可用。对应数值“7”。(自 1.1 新增)
  //BMAP_STATUS_TIMEOUT	超时。对应数值“8”。(自 1.1 新增)

  // TODO: 获取天气，index.js,解决跨域请求问题
   var xmlhttp = new XMLHttpRequest();
   var weather_json = xmlhttp.open("GET","http://api.map.baidu.com/telematics/v3/weather?location=%E6%9D%AD%E5%B7%9E&output=json&ak=U1fGe9lfreG6OzmxSWv237Gf",true);
   xmlhttp.send(null);
   alert(weather_json);


/**
 * chart.js
 * @type {Array}
 */
   var doughnutData = [
       {
         value: 300,
         color:"#F7464A",
         highlight: "#FF5A5E",
         label: "Red"
       },
       {
         value: 50,
         color: "#46BFBD",
         highlight: "#5AD3D1",
         label: "Green"
       },
       {
         value: 100,
         color: "#FDB45C",
         highlight: "#FFC870",
         label: "Yellow"
       },
       {
         value: 40,
         color: "#949FB1",
         highlight: "#A8B3C5",
         label: "Grey"
       },
       {
         value: 120,
         color: "#4D5360",
         highlight: "#616774",
         label: "Dark Grey"
       }

     ];

     // window.onload = function(){
     //   //var ctx = document.getElementById("chart-area").getContext("2d");
     //   window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});
     // };

     // TODO: 无法在模态框中显示
     $('#business-statistics').on('click',function(){
       //$('#myModal').modal();
       $('#modal-business-statistics').modal('show');
       var ctx = document.getElementById("chart-area").getContext("2d");
       window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});
       var html = $('#canvas-holder');
       $('#chart-1').html(html);
     });


/**
 * 日期选择器绑定
 * @param  {[type]} '#modal-check-in-in-datetimepicker' [description]
 * @return {[type]}                                     [description]
 */
   $('#modal-check-in-in-datetimepicker').datetimepicker({
     format: 'yyyy-mm-dd hh:ii'
   });
   $('#modal-check-in-out-datetimepicker').datetimepicker({
     format: 'yyyy-mm-dd hh:ii'
   });
   $('#modal-check-out-in-datetimepicker').datetimepicker({
     format: 'yyyy-mm-dd hh:ii'
   });
   $('#modal-check-out-out-datetimepicker').datetimepicker({
     format: 'yyyy-mm-dd hh:ii'
   });
/**
 * 输入校验
 */
// TODO: 输入校验,关闭后输入信息是否清空
  $('#modal-check-in-submit').on('click', function(){
    var state = false;
    if (!state){
      if ($('#modal-check-in-name').val() == ""){
        alert("输入姓名");
        state = false;
        return;
      }

      if ($('#modal-check-in-tel').val() == ""){
        alert("输入手机号");
        state = false;
        return;
      }else if (true) {
        var tel = $('#modal-check-in-tel').val();
        var pattern = /^1[34578]\d{9}$/;
        if (!pattern.test(tel)) {
          alert("输入正确手机号");
          state = false;
          return;
        }
      }

      if ($('#modal-check-in-room').val() == ""){
        alert("选择房间号");
        state = false;
        return;
      }

      if ($('#modal-check-in-in-datetimepicker').val() == ""){
        alert("选择入住时间");
        state = false;
        return;
      }

      if ($('#modal-check-in-out-datetimepicker').val() == ""){
        alert("选择退房时间");
        state = false;
        return;
      }
    }
  });

  $('#modal-check-out-submit').on('click', function(){
    var state = false;
    if (!state){
      if ($('#modal-check-out-name').val() == ""){
        alert("输入姓名");
        state = false;
        return;
      }

      if ($('#modal-check-out-tel').val() == ""){
        alert("输入手机号");
        state = false;
        return;
      }else if (true) {
        var tel = $('#modal-check-out-tel').val();
        var pattern = /^1[34578]\d{9}$/;
        if (!pattern.test(tel)) {
          alert("输入正确手机号");
          state = false;
          return;
        }
      }

      if ($('#modal-check-out-room').val() == ""){
        alert("选择房间号");
        state = false;
        return;
      }

      if ($('#modal-check-out-in-datetimepicker').val() == ""){
        alert("选择入住时间");
        state = false;
        return;
      }

      if ($('#modal-check-out-out-datetimepicker').val() == ""){
        alert("选择退房时间");
        state = false;
        return;
      }
    }
  });

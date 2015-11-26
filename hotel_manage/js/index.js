// TODO: 弹出框
/**
 * 弹出框
 */



/**
 * 天气：调用百度天气api
 */
var weather_json = xmlHttp.open("GET","http://api.map.baidu.com/telematics/v3/weather?location=%E6%9D%AD%E5%B7%9E&output=json&ak=U1fGe9lfreG6OzmxSWv237Gf");

/**
 * 设置模态框宽度
 */
 $('#modal').modal().css({
     width: 'auto',
     'margin-left': function () {
        return -($(this).width() / 2);
    }
 });

export default class alink {
    get check() {
        let status = false
        let ws = new WebSocket('ws://127.0.0.1:23089')
        ws.onopen = function () {
            status = true
        }
        ws.onerror = function(event) {
            status=true
          };
        while (status){}
        if (ws.readyState == 1) {
            return true
        }
        else { return false }
    }
    send(host,data){
        function timeFn(d1) {//di作为一个变量传进来
            let dateBegin = d1
            let dateEnd = new Date();//获取当前时间
            let dateDiff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数
            let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
            let leave1=dateDiff%(24*3600*1000) //计算天数后剩余的毫秒数
            let hours=Math.floor(leave1/(3600*1000))//计算出小时数
            //计算相差分钟数
            let leave2=leave1%(3600*1000) //计算小时数后剩余的毫秒数
            let minutes=Math.floor(leave2/(60*1000))//计算相差分钟数
            //计算相差秒数
            let leave3=leave2%(60*1000) //计算分钟数后剩余的毫秒数
            let seconds=Math.round(leave3/1000)
            //console.log(" 相差 "+dayDiff+"天 "+hours+"小时 "+minutes+" 分钟"+seconds+" 秒")
            //console.log(dateDiff+"时间差的毫秒数",dayDiff+"计算出相差天数",leave1+"计算天数后剩余的毫秒数"
            //,hours+"计算出小时数",minutes+"计算相差分钟数",seconds+"计算相差秒数");
            return dateDiff
            }
        let time=new Date()
        let timeout=5000
        let ws = new WebSocket(host)
        ws.onopen = function () {
            if (ws.readyState == 1) {
                ws.send(JSON.stringify(data))
            }
            else{return {}}
        }
        ws.onmessage = function(event) {
            var data = event.data;
            return JSON.parse(data)
          };
          ws.onerror = function(event) {
            return {}
          }
          while (timeFn(time)>=timeout){
            if (ws.readyState == 1) {
                return true
            }
            else { return false }
          }
          return {}
        }
          
}
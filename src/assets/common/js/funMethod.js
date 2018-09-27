
function add0(m) { return m < 10 ? '0' + m : m }
export function format(timeStr) {
    var time = new Date(parseInt(timeStr)*1000);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    // var mm = time.getMinutes();
    // var s = time.getSeconds();
    // return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
    return y + '-' + add0(m) + '-' + add0(d);
}

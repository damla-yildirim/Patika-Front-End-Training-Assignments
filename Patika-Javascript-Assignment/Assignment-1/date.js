var date=new Date()

var time1=[date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()]
document.getElementById('showdate').innerHTML=time1+" tarihinde"

var days=["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
var time3=[days[date.getDay()]]
document.getElementById('showday').innerHTML=time3+" gününde";

window.onload = startTime;
function startTime()
{
 var today=new Date();
 var h=today.getHours();
 var m=today.getMinutes();
 var s=today.getSeconds();

 h=checkTime(h);
 m=checkTime(m);
 s=checkTime(s);
 document.getElementById('showtime').innerHTML=h+":"+m+":"+s+" saatinde";
 t=setTimeout('startTime()',1000);
}

function checkTime(i)
{
if (i<10)
 {
  i="0" + i;
 }
return i;
}


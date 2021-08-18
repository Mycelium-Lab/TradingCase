export default function unixToNormal(unix_timestamp) {  // переводит время из формата unix timetamp в наше родное, человеческое время. Мы же не роботы
  var date = new Date(parseInt(unix_timestamp) * 1000);

  var day = date.getDate();
  var month = date.getMonth()+1;
  var year = date.getFullYear();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  if (month < 10) return [`${day}.0${month}.${year}`,`${hour}:${minute}:${second}`];
  else return [`${day}.${month}.${year}`,`${hour}:${minute}:${second}`];
}


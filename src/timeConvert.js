export default function unixToNormal(unix_timestamp) {  // переводит время из формата unix timetamp в наше родное, человеческое время. Мы же не роботы
  var date = new Date(parseInt(unix_timestamp) * 1000);

  function toNorm(num) {
    if (num < 10)
      return `0${num.toString()}`;
    return num.toString();
  }

  var day = date.getDate();
  var month = toNorm(date.getMonth()+1);
  var year = date.getFullYear();
  var hour = date.getHours();
  var minute = toNorm(date.getMinutes());
  var second = toNorm(date.getSeconds());

  return [`${day}.${month}.${year}`,`${hour}:${minute}:${second}`];
}


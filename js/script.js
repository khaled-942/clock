function fulldate() {
  let date = new Date(),
      year = date.getFullYear(),
      month = date.getMonth() + 1,
      day = date.getDate(),
      minutes = date.getMinutes(),
      seconds = date.getSeconds(),
      divYear = document.getElementById("year"),
      divMonth = document.getElementById("month"),
      divDay = document.getElementById("day"),
      divHour = document.getElementById("hour"),
      divMinutes = document.getElementById("minutes"),
      divSecond = document.getElementById("second");
      formatAMPM(date);

  divYear.innerHTML = year;
  divMonth.innerHTML = month;
  divDay.innerHTML = day;
  divHour.innerHTML = formatAMPM(date);
  divMinutes.innerHTML = minutes;
  divSecond.innerHTML = seconds;
}

function formatAMPM(date) {
  let hours = date.getHours(),
      strTime;
  hours = hours % 12;
  hours = hours ? hours : 12;
  strTime = hours ;
  return strTime;
}
setInterval(() => {
  fulldate();
}, 1000);

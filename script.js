// add an load event to get the current time

window.addEventListener("DOMContentLoaded", () => {
  //access to clock div in html
  const clock = document.querySelector(".clock");

  //add interval to call every second and update the time
  setInterval(() => {
    const date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    //if times are less than 10 , we add a zero to the first of them
    hour = hour < 10 ? `0${hour}` : hour;
    minute = minute < 10 ? `0${minute}` : minute;
    second = second < 10 ? `0${second}` : second;

    const dateSign = +hour < 12 ? "AM" : "PM";

    clock.textContent = `${hour} : ${minute} : ${second} ${dateSign}`;
  }, 1000);
});

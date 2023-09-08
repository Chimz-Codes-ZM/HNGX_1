document.addEventListener("DOMContentLoaded", function () {
  // Current Day of the week
  const currentDate = new Date();
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const getCurrentDayIndex = currentDate.getDay();
  const currentDayName = weekdays[getCurrentDayIndex];
  document.getElementById("current_day").textContent = currentDayName;

  const updateCurrentUTCTime = () => {
    const currentHours = new Date().getUTCHours();
    const currentMinutes = new Date().getUTCMinutes();
    const currentSeconds = new Date().getUTCSeconds();
    const currentMilliseconds = new Date().getUTCMilliseconds()

    const currentUTCTime = `${currentHours}:${currentMinutes}:${currentSeconds}:${currentMilliseconds}`;

    document.getElementById("current_UTC_Time").textContent = currentUTCTime;
  };

  updateCurrentUTCTime();

  setInterval(updateCurrentUTCTime, 100);
  // Current time
});

function displayDateTime() {
    const now = new Date();
    const dayOfWeek = [
      "Sunday",
      "Monday",f
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ][now.getDay()];
    const time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
    const dateTimeString = `${dayOfWeek} ${time}`;
    document.getElementById("date-time").textContent = dateTimeString;
  }
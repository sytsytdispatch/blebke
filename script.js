function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const milliseconds = String(now.getMilliseconds()).padStart(3, '0');

    const currentTime = `${hours}:${minutes}:${seconds}.${milliseconds}`;
    document.getElementById('time').innerText = currentTime;
}

setInterval(updateTime, 10); // Update time every 10 milliseconds
updateTime(); // Initial call to display time immediately

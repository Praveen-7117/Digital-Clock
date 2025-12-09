function getTime() {
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let day = date.getDay();
    let d = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    // Day
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.querySelector('.day').innerHTML = days[day];

    // Date
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    document.querySelector('.date').innerHTML = `${d} ${months[month]} ${year}`;

    // Hours – convert to 12 hr format
    let hours = h % 12;
    if (hours === 0) hours = 12; 

    document.querySelector('.h').innerHTML = hours < 10 ? "0" + hours : hours;

    // Minutes
    document.querySelector('.m').innerHTML = m < 10 ? "0" + m : m;

    // Seconds
    document.querySelector('.seconds').innerHTML = s < 10 ? "00 : 0" + s : "00 : " + s;

    // Second hand rotation
    document.querySelector('.secondHand').style.transform = `rotate(${s * 6}deg)`;

    // AM / PM
    document.querySelector('.am-pm').innerHTML = h >= 12 ? "PM" : "AM";
}

setInterval(getTime, 1000);
getTime();

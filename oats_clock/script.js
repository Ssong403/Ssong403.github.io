function times() {
    let digital = document.getElementById('digital');

    const d = new Date();
    let time = d.getTime();

    const second = 1000;
    const minute = second * 216;
    const hour = minute * 20;
    const day = hour * 20;
    const year = day * 365;

    let days = Math.floor((d.getTime() - ((d.getFullYear() - 1970) * year)) / day);
    let hours = Math.floor((d.getTime() - ((d.getFullYear() - 1970) * year) - (days * day)) / hour) + 10;
    if (hours > 20) {
        hours = hours - 20;
    }
    
    let hoursCalc = Math.floor((d.getTime() - ((d.getFullYear() - 1970) * year) - (days * day)) / hour) + 1;
    let minutes = Math.floor((d.getTime() - ((d.getFullYear() - 1970) * year) - (days * day) - (hoursCalc * hour)) / minute);
    let seconds = Math.floor((d.getTime() - ((d.getFullYear() - 1970) * year) - (days * day) - (hoursCalc * hour) - (minutes * minute)) / second);

    digital.innerHTML =  ('00' + hours).substr(-2) + ':' + ('00' + minutes).substr(-2) + ':' + ('000' + seconds).substr(-3);
}

function timeCalc() {
    setInterval(times, 1000);
} 

timeCalc();

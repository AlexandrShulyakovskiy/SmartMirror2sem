window.onload = function () {
    hideAddressBar();
    window.addEventListener("orientationchange", function () {
        hideAddressBar();
    }, false);
}

function hideAddressBar() {
    setTimeout(function () {
        document.body.style.height = window.outerHeight + 'px';
        setTimeout(function () {
            window.scrollTo(0, 1);
        }, 1100);
    }, 1000);
    return false;
}

$(document).ready(function () {
    (function () {
        function updateClock(currentTime) {
            var clockElement = document.getElementById("clock");
            clockElement.innerHTML = currentTime.toLocaleTimeString();
        }

        function updateDate(currentTime) {
            var month = currentTime.getMonth() + 1;
            var day = currentTime.getDate();
            var weekDay = currentTime.getDay();
            var year = currentTime.getFullYear();
            var dateTag = document.getElementById("date");
            dateTag.innerHTML = getWeekDayName(weekDay) + ",\t" + day + "\t" + getMonthName(month);
        }

        setInterval(() => {
            var dateTime = new Date();
            updateClock(dateTime);
            updateDate(dateTime);
        }, 1000);

        function getMonthName(month) {
            switch (month) {
                case 1: return "January";
                case 2: return "February";
                case 3: return "March";
                case 4: return "April";
                case 5: return "May";
                case 6: return "June";
                case 7: return "July";
                case 8: return "August";
                case 9: return "September";
                case 10: return "October";
                case 11: return "November";
                case 12: return "December";
            }
        }

        function getWeekDayName(weekDay) {
            switch (weekDay) {
                case 1: return "Monday";
                case 2: return "Tuesday";
                case 3: return "Wednesday";
                case 4: return "Thuersday";
                case 5: return "Friday";
                case 6: return "Saturday";
                case 0: return "Sunday";
            }
        }
    })();
});

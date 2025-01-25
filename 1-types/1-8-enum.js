{
    /**
     * Enum
     */
    // JavaScript
    var MAX_NUM = 6;
    var MAX_STUDENTS_PER_CLASS = 10;
    var MONDAY = 0;
    var TUESDAY = 1;
    var WEDNESDAY = 2;
    var DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
    var dayOfToday = DAYS_ENUM.MONDAY;
    var Days = void 0;
    (function (Days) {
        Days[Days["Monday"] = 0] = "Monday";
        Days[Days["Tuesday"] = 1] = "Tuesday";
        Days[Days["Wednesday"] = 2] = "Wednesday";
        Days[Days["Thursday"] = 3] = "Thursday";
        Days[Days["Friday"] = 4] = "Friday";
        Days[Days["Saturday"] = 5] = "Saturday";
        Days[Days["Sunday"] = 6] = "Sunday";
    })(Days || (Days = {}));
    console.log(Days.Monday);
    var day = Days.Saturday;
    day = Days.Tuesday;
    // day = 10; 정의된 값 0~6만 할당 가능
    day = 1;
    console.log(day);
    var dayOfweek = "Monday";
    dayOfweek = "Wednesday";
}

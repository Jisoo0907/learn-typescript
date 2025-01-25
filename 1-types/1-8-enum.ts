{
  /**
   * Enum
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  enum Days {
    Monday, // 0
    Tuesday, // 1
    Wednesday, // 2
    Thursday, // 3
    Friday, // 4
    Saturday, // 5
    Sunday, // 6
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  // day = 10; Error - 정의된 값 0~6만 할당 가능
  day = 1;
  console.log(day);

  let dayOfweek: DaysOfWeek = "Monday";
  dayOfweek = "Wednesday";
}

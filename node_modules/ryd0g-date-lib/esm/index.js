const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const monthshort = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const day = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const dayshort = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

class D {
  constructor(...args) {
    this._date = new Date(...args);
  }
  /**
   * method to get the year
   * @param {number} input the year
   * @returns {number} the year in string format
   */
  get year() {
    return this._date.getFullYear();
  }
  /**
   * method to get the shorter year
   * @param {number} input the year
   * @returns {number} the year in 2 digit format(ex: 2021 = 21)
   */
  get yr() {
    return this._date.getFullYear().toString().substr(-2);
  }
  /**
   * method to get the month
   * @param {number} input the month
   * @returns {string} the month in string format
   */
  get month() {
    return month[this._date.getMonth()];
  }
  /**
   * method to get the shorter month
   * @param {number} input the month
   * @returns {string} the month in 3 letter form(ex: jan)
   */
  get mon() {
    return monthshort[this._date.getMonth().toString().substr(0, 3)];
  }
  /**
   * method to get the day
   * @param {number} input the day
   * @returns {string} the day in string format
   */
  get day() {
    return day[this._date.getDay()];
  }
  /**
   * method to get the shorter day
   * @param {number} input the day
   * @returns {string} the day in 3 letter format(ex: mon, tue)
   */
  get dy() {
    return dayshort[this._date.getDay().toString().substr(0, 3)];
  }
  /**
   * method to get the date
   * @param {number} input the date
   * @returns {number} the date in number format
   */
  get date() {
    return this._date.getDate();
  }
  /**
   * method to get the hour
   * @param {number} input the date as normal
   * @returns {number} the hour of the time in utc
   */
  get hours() {
    return this._date.getHours();
  }
  /**
   * method to get the minutes
   * @param {number} input the date as normal
   * @returns {number} the minutes of the time in utc
   */
  get mins() {
    return this._date.getMinutes();
  }
  /**
   * method to get the seconds
   * @param {number} input the date as normal
   * @returns {number} the seconds of the time in utc
   */
  get secs() {
    return this._date.getSeconds();
  }
  /**
   * method to format the dates when entered
   * @param {number} input the date as normal
   * @returns {string} the date formatted
   */
  format(mask = 'Y M D') {
    var zero = function (val) {
      return val <= 9 ? '0' + val : '' + val;
    };
    const masks = mask.split('');
    let space = '';
    masks.forEach((char) => {
      switch (char) {
        case 'Y':
          space += this.year;
        case 'y':
          space += this.yr;
        case 'M':
          space += this.month;
        case 'm':
          space += this.mon;
        case 'D':
          space += zero(this._date.getDate());
        case 'd':
          space += this.date;
        case 'H':
          space += zero(this._date.getHours());
        case 'h':
          space += this.hours;
        case 'I':
          space += zero(this._date.getMinutes());
        case 'i':
          space += this.mins;
        case 'S':
          space += zero(this._date.getSeconds());
        case 's':
          space += this.secs;
      }
    });
    return space;
  }
  /**
   * method to see how far a given date is from the current date
   * @param {number} input the date as normal
   * @returns {string} the length of years, months, or days of the given date from today
   */
  when() {
    const now = new D();
    const ny = this.year - now.year;
    const nm = this._date.getMonth() - now._date.getMonth() + ny * 12;
    const nd = this.date - now.date;

    //calculating difference in time
    if (nm > 11) {
      return `${ny} years from now`;
    } else if (nm < -11) {
      return `${Math.abs(ny)} years ago`;
    } else if (nm > 0) {
      return `${nm} months from now`;
    } else if (nm < 0) {
      return `${Math.abs(nm)} months ago`;
    } else if (nm > 0) {
      return `${nd} days ago`;
    } else if (nm < 0) {
      return `${nd} days from now`;
    } else {
      return 'today';
    }
  }
}

export default D;

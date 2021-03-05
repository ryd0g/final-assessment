const data = require('./data.json');
const strlib = require('ryan-lee-stringlib');
const D = require('ryd0g-date-lib');
//console.log(data);

for (let i = 0; i < data.length; i++) {
  console.log(printName(data[i].first_name, data[i].last_name));
  console.log(data[i].make.capitalize());
  console.log(data[i].model.capitalize());
  console.log(data[i].city.capitalize());
  console.log(format_date(data[i].purchased));
  console.log(days_since(data[i].lastpayment));
  console.log(phone_num(data[i].phone));
}

function printName(first, last) {
  first_cap = first.charAt(0).toUpperCase() + first.slice(1);
  last_cap = last.charAt(0).toUpperCase() + last.slice(1);
  return first_cap + ' ' + last_cap;
}
// console.log(printName(data[1].first_name, data[1].last_name));

function format_date(purchase_date) {
  const d = new D(purchase_date);
  month = d.month;
  date = d.date;
  year = d.year;
  return month + ' ' + date + ', ' + year;
}

function days_since(last_payment) {
  const d = new D(last_payment);
  return d.when();
}

function phone_num(number) {
  areacode = '(' + number.slice(0, 3) + ')';
  num = number.slice(3, 6) + '-' + number.slice(6, 10);
  return areacode + ' ' + num;
}

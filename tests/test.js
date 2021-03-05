const lib = require('../index');
const T = new lib();

test('phone number output', () => {
  expect(T.phone_num('2839481723').toBe('(283) 948-1723'));
});

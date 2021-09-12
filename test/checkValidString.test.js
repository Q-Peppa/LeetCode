const checkValidString = require("../有效的括号字符串")

test("test checkValidString", () => {
  expect(checkValidString('*(')).toBe(false)
  expect(checkValidString('**')).toBe(true)
  expect(checkValidString('()()')).toBe(true)
  expect(checkValidString("")).toBe(true)
  expect(checkValidString("()")).toBe(true)
  expect(checkValidString("(*")).toBe(true)
  expect(checkValidString("*)")).toBe(true)
  expect(checkValidString("(*)")).toBe(true)
  expect(checkValidString("(*))")).toBe(true)
  expect(checkValidString("*()")).toBe(true)
  expect(checkValidString("(")).toBe(false)
  expect(checkValidString(")")).toBe(false)
  expect(checkValidString("(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(()" +
    ")(()))())((*()()(((()((()*(())*(()**)()(())")).toBe(false)
  expect(checkValidString("((*)")).toBe(true)
})

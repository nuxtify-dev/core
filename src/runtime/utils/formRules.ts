export const formRules = {
  // Required
  required: (v: string) => !!v || 'Required',
  requiredArray: <T>(v: Array<T>) => !!v.length || 'Required',

  // Text
  validEmail: (v: string) => /.+@.+/.test(v) || 'Must be a valid email address',

  // Length
  minLength8: (v: string) =>
    v ? v.length >= 8 || 'Must be at least 8 characters' : true,
  minLength12: (v: string) =>
    v ? v.length >= 12 || 'Must be at least 12 characters' : true,
  maxLength30: (v: string) =>
    v ? v.length <= 30 || 'Must not be longer than 30 characters' : true,
  maxLength60: (v: string) =>
    v ? v.length <= 60 || 'Must not be longer than 60 characters' : true,
  maxLength120: (v: string) =>
    v ? v.length <= 120 || 'Must not be longer than 120 characters' : true,
  maxLength200: (v: string) =>
    v ? v.length <= 200 || 'Must not be longer than 200 characters' : true,
  maxLength300: (v: string) =>
    v ? v.length <= 300 || 'Must not be longer than 300 characters' : true,
  maxLength600: (v: string) =>
    v ? v.length <= 600 || 'Must not be longer than 600 characters' : true,
  maxLength1200: (v: string) =>
    v ? v.length <= 1200 || 'Must not be longer than 1200 characters' : true,
  maxLength5000: (v: string) =>
    v ? v.length <= 5000 || 'Must not be longer than 5000 characters' : true,
  maxLength10000: (v: string) =>
    v ? v.length <= 10000 || 'Must not be longer than 10,000 characters' : true,

  // Number
  isInteger: (v: string) => Number.isInteger(+v) || 'Must be an integer',
  gt0: (v: string) => Number.parseFloat(v) > 0 || 'Must be greater than 0',
  gte6: (v: string) =>
    Number.parseFloat(v) >= 6 || 'Must be greater than or equal to 6',
  lte12: (v: string) =>
    Number.parseFloat(v) <= 12 || 'Must be less than or equal to 12',
  lte365: (v: string) =>
    Number.parseFloat(v) <= 365 || 'Must be less than or equal to 365',
}

const output_year = document.querySelector('.output-year');
const output_month = document.querySelector('.output-month');
const output_day = document.querySelector('.output-day');

const input_day = document.querySelector('#day');
const input_month = document.querySelector('#month');
const input_year = document.querySelector('#year');

const error_day = document.querySelector('.error-day');
const error_month = document.querySelector('.error-month');
const error_year = document.querySelector('.error-year');

const submit_btn = document.querySelector('.submit-btn');

const regexNumber = /^d*$/;
let isValid = false

input_day.addEventListener('input', () => {
  if(regexNumber.test(input_day.value)) {
    error_day.textContent = 'Must be a number'
    isValid = false
    return
  } else {
    error_day.textContent = ''
  }

  if(input_day.value > 31) {
    error_day.textContent = 'Must be less than 31'
    isValid = false
    return
  } else {
    isValid = true
    error_day.textContent = ''
  }

  if(input_day.value === 0) {
    isValid = false
    error_day.textContent = 'Must be greater than 0'
    return
  } else {
    isValid = true
    error_day.textContent = ''
  }
})

input_month.addEventListener('input', () => {
  if(regexNumber.test(input_month.value)) {
    error_month.textContent = 'Must be a number'
    isValid = false
    return
  } else {
    error_month.textContent = ''
  }

  if(input_month.value > 31) {
    error_month.textContent = 'Must be less than 12'
    isValid = false
    return
  } else {
    isValid = true
    error_month.textContent = ''
  }

  if(input_month.value === 0) {
    isValid = false
    error_month.textContent = 'Must be greater than 0'
    return
  } else {
    isValid = true
    error_month.textContent = ''
  }
})


input_year.addEventListener('input', () => {

  const todayYear = new Date().getFullYear();

  if(regexNumber.test(input_year.value)) {
    error_year.textContent = 'Must be a number'
    isValid = false
    return
  } else {
    error_year.textContent = ''
  }

  if(input_year.value > todayYear) {
    error_year.textContent = 'Must be less than this year'
    isValid = false
    return
  } else {
    isValid = true
    error_year.textContent = ''
  }

  if(input_year.value === 0) {
    isValid = false
    error_year.textContent = 'Must be greater than 0'
    return
  } else {
    isValid = true
    error_year.textContent = ''
  }
})

submit_btn.addEventListener('click', calculateDate)

function calculateDate () {
  if(isValid) {
    let birthday = `${input_month.value}/${input_day.value}/${input_year.value}`

    let birthdayDate = new Date(birthday)
    let ageDiffMill = Date.now() - birthdayDate
    let ageDate = new Date(ageDiffMill)
    let ageYear = ageDate.getUTCFullYear() - 1970
    let ageMonth = ageDate.getUTCMonth()
    let ageDay = ageDate.getUTCDay() -1

    output_year.textContent = ageYear
    output_month.textContent = ageMonth
    output_day.textContent = ageDay

  } else {
    alert('Error ...')
  }
}
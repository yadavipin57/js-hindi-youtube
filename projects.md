#My projects code

## Project 1 - Color Changer

## Project 2- BMI Calculator

```javascript

// Calculating only BMI
const form = document.querySelector('form');

const bmiCalculator = document.querySelector('.bmiCalc');

bmiCalculator.addEventListener('click', function (e) {
  const bmiTag = document.querySelector('#bmiTag');
  bmiTag.style.display = 'none';
  heightTag.style.display = 'block';
  weightTag.style.display = 'block';


  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
      results.innerHTML = `<span>Enter valid value</span>`;
    }
    if (weight === '' || weight < 0 || isNaN(weight)) {
      results.innerHTML = `<span>Enter valid value</span>`;
    } else {
      const bmi = ((weight / (height * height)) * 10000).toFixed(4);
      results.innerHTML = `Your BMI is ${bmi}`;
    }
  });
});

// Calculating only HEIGHT

const heightCalculator = document.querySelector('.heightCalc');

heightCalculator.addEventListener('click', function (e) {
  const heightTag = document.querySelector('#heightTag');
  heightTag.style.display = 'none';
  bmiTag.style.display = 'block';
  weightTag.style.display = 'block';

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const weight = parseInt(document.querySelector('#weight').value);
    const bmi = parseInt(document.querySelector('#bmi').value);

    if (weight === '' || weight < 0 || isNaN(weight)) {
      results.innerHTML = `<span>Enter valid value</span>`;
    } else if (bmi === '' || bmi < 0 || isNaN(bmi)) {
      results.innerHTML = `<span>Enter valid value</span>`;
    } else {
      const height = Math.sqrt((weight / bmi) * 10000).toFixed(4);
      results.innerHTML = `<span> Your height is ${height} cms`;
    }
  });
});

```
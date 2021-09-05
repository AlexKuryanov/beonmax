function calc() {
  let persons = document.querySelectorAll('.counter-block-input')[0],
      days = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsCount = 0,
      daysCount = 0,
      total = 0;

      totalValue.innerHTML = 0;

      persons.addEventListener('input', function() {
        personsCount = +this.value;

        total = daysCount * (personsCount * 5000);

        if (days.value == '' || persons.value == '') {
          totalValue.innerHTML = 0;
        } else {
          totalValue.innerHTML = total * place.options[place.selectedIndex].value;
        }

      });

      days.addEventListener('input', function() {
        daysCount = +this.value;

        total = daysCount * (personsCount * 5000);

        if (days.value == '' || persons.value == '') {
          totalValue.innerHTML = 0;
        } else {
          totalValue.innerHTML = total * place.options[place.selectedIndex].value;
        }

      });

      place.addEventListener('change', function() {
        if (days.value == '' || persons.value == '') {
          totalValue.innerHTML = 0;
        } else {
          let a = total;
          totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
      });
}

module.exports = calc;
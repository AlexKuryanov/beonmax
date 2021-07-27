window.addEventListener('DOMContentLoaded', function() {
  let check = document.getElementById('remember-me'),
    change = document.getElementById('change'),
    form = document.getElementsByTagName('form')[0];

    if(localStorage.getItem("isChecked") === "true") {
      check.checked = true;
    }
    console.log(check.checked);
    

    if(localStorage.getItem('bg') === 'changed') {
      form.style.backgroundColor = 'orange';
    }

    check.addEventListener("click", function() {
      localStorage.setItem("isChecked", true);
    });

    change.addEventListener('click', function() {
      localStorage.setItem('bg', 'changed');
      form.style.backgroundColor = 'orange';
    });

    let persone = {
      name: 'Alex',
      age: 35,
      tech: ['mobile', 'laptop']
    }

    let serializedPersone = JSON.stringify(persone);
    localStorage.setItem('Alex', serializedPersone);

    console.log(JSON.parse(localStorage.getItem('Alex')));
});
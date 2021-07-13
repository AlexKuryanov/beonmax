let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', ()=> {
  let request = new XMLHttpRequest();

  // request.open(method, url, async, login, pass);
  request.open('GET', 'js/current.json');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();

  //status
  //statusText
  //responseText - текст ответа сервера / response
  //readyState

  request.addEventListener('readystatechange', function(){
    if (request.readyState === 4 && request.status === 200){
      let data = JSON.parse(request.response);

      inputUsd.value = (inputRub.value / data.usd).toFixed(2);
    } else {
      inputUsd.value = "Something goes wrong!";
    }
  })
})
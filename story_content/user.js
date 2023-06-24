function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5mE84LUPQHO":
        Script1();
        break;
      case "5zrB2jmPo1E":
        Script2();
        break;
      case "5UhMorwh8fG":
        Script3();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbzAO7QCKwS--jYDTc7amG6QvbdaepY3u1qOqOyMQdcRgG8ucHmlc50ArF8rZdVgbvI/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v1q1attempts:player.GetVar("v1q1attempts"),v1q1answeredcorrect:player.GetVar("v1q1answeredcorrect"),v1q2attempts:player.GetVar("v1q2attempts"),v1q2answeredcorrect:player.GetVar("v1q2answeredcorrect"),v1q3attempts:player.GetVar("v1q3attempts"),v1q3answeredcorrect:player.GetVar("v1q3answeredcorrect")})
	}
	)
}

function Script2()
{
  const url="https://script.google.com/macros/s/AKfycbzAO7QCKwS--jYDTc7amG6QvbdaepY3u1qOqOyMQdcRgG8ucHmlc50ArF8rZdVgbvI/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v1q1attempts:player.GetVar("v1q1attempts"),v1q1answeredcorrect:player.GetVar("v1q1answeredcorrect"),v1q2attempts:player.GetVar("v1q2attempts"),v1q2answeredcorrect:player.GetVar("v1q2answeredcorrect"),v1q3attempts:player.GetVar("v1q3attempts"),v1q3answeredcorrect:player.GetVar("v1q3answeredcorrect")})
	}
	)
}

function Script3()
{
  const url="https://script.google.com/macros/s/AKfycbzAO7QCKwS--jYDTc7amG6QvbdaepY3u1qOqOyMQdcRgG8ucHmlc50ArF8rZdVgbvI/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v1q1attempts:player.GetVar("v1q1attempts"),v1q1answeredcorrect:player.GetVar("v1q1answeredcorrect"),v1q2attempts:player.GetVar("v1q2attempts"),v1q2answeredcorrect:player.GetVar("v1q2answeredcorrect"),v1q3attempts:player.GetVar("v1q3attempts"),v1q3answeredcorrect:player.GetVar("v1q3answeredcorrect")})
	}
	)
}


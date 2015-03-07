var CAB_time = 1;
var heure = 0;
var minute = 0;
var seconde = 1;

function zpad( number, width )
{
  width -= number.toString().length;
  if ( width > 0 )
  {
    return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
  }
  return number + ""; // always return a string
}

function refreshTime()
{
	heure = Math.floor(CAB_time / 3600);
	minute = Math.floor((CAB_time % 3600) / 60);
	seconde = CAB_time % 60;

	document.getElementById("h").innerHTML = zpad(heure, 2);
	document.getElementById("m").innerHTML = zpad(minute, 2);
	document.getElementById("s").innerHTML = zpad(seconde, 2);
}

function StartCAB()
{
	window.setTimeout("tick()", 1000);
	document.getElementById("start").disabled = true;

}

function tick()
{
	if (CAB_time > 1)
	{
		window.setTimeout("tick()", 1000);
	}
	else
	{
		document.getElementById("start").disabled = false;
	}
	ChangeCAB(-1);
}

function ChangeCAB(time)
{
	CAB_time = Math.max(0, CAB_time + time);
	refreshTime();
}


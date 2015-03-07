var banner = 1;

function resizelive()
{
	live = document.getElementById('live');
	frame = live.getElementsByTagName("IFRAME")[0]
	chrono = document.getElementById('chrono');

	chrono.style.width = (banner) ? "50%" : "100%";

	live.style.width = (banner) ? "50%" : "100%";
	frame.width = (banner) ? "100%" : "80%";
	frame.height = (frame.offsetWidth - 240) * 9 / 16 + 20;
	live.style.height = frame.height + "px";
	frame.src = frame.src;
}

function switchbanner(elem)
{
	if (banner == 1)
	{
		document.getElementsByTagName("H1")[0].style.display = "none";
		elem.innerText = "Montre moi le logo en fait il est trop kawaï ♥";
		banner = 0;
	}
	else
	{
		document.getElementsByTagName("H1")[0].style.display = "block";
		elem.innerText = "Cache moi ce logo qui nique de la place D:";
		banner = 1;
	}
	resizelive();
}
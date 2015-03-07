<!DOCTYPE html>
<html>
<head>
	<title>Delirium II - La fin du retour de la fin ?</title>
	<meta charset="utf-8"/>
	<link rel="stylesheet" type="text/css" href="css/style.css?8">
	<script type="text/javascript" src="js/cab.js"></script>
	<script type="text/javascript" src="js/liveas.js"></script>
</head>
<body>

	<header>
		<h1><img src="img/ban.png"/></h1>
		<nav>
			<ul>
				<li><a class="red" href="./index.php">Le Salon</a></li>
				<li><a class="green" href="#">L'antre des Déliriums</a></li>
				<li><a class="purple" href="./onlive.php">♥ ON LIVE ♥</a></li>
				<li><a class="cyan" href="#">Et f'là l'cul ? (F.A.Q)</a></li>
				<li><a class="yellow" href="#">Contact !!!</a></li>
			</ul>
		</nav>
	</header>

	<main>
		<div id="live">
			<iframe src="http://cdn.livestream.com/embed/DeliriumII?layout=3&autoPlay=false" width="100" height="100" style="border:0;outline:0" frameborder=0 scrolling=no></iframe>
		</div>
		<div id="chrono">
			<button onclick="ChangeCAB(3600)">^</button>
			<button onclick="ChangeCAB(60)">^</button>
			<button onclick="ChangeCAB(1)">^</button>
			<p><span id="h">00</span> : <span id="m">00</span> : <span id="s">01 </span><button id="start" onclick="StartCAB()">Start</button></p>
			<button onclick="ChangeCAB(-3600)">v</button>
			<button onclick="ChangeCAB(-60)">v</button>
			<button onclick="ChangeCAB(-1)">v</button>
			<br>
			<button onclick="switchbanner(this);">Cache moi ce logo qui nique de la place D:</button>
		</div>
	</main>

	<footer>
		<p class="rainbow">© Ce site est une Fan-Bilouconception humblement proposé par la communautée Bilouteuse ainsi que par tfkmaster ©</p>
	</footer>
	<script>resizelive();</script>
	
	
</body>
			
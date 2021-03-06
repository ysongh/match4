"use strict";

// isX determines which letter is next (X,O)
var isX = true;
var winX = 0;
var winY = 0;
const possibleWinners = 
{
	winningCombinations: 
	[
		// Horizontal Position
		{p1:0, p2:1, p3:2, p4:3},
		{p1:1, p2:2, p3:3, p4:4},
		{p1:5, p2:6, p3:7, p4:8},
		{p1:6, p2:7, p3:8, p4:9},
		{p1:10, p2:11, p3:12, p4:13},
		{p1:11, p2:12, p3:13, p4:14},
		{p1:15, p2:16, p3:17, p4:18},
		{p1:16, p2:17, p3:18, p4:19},
		{p1:20, p2:21, p3:22, p4:23},
		{p1:21, p2:22, p3:23, p4:24},
		// Vertical Position
		{p1:0, p2:5, p3:10, p4:15},
		{p1:5, p2:10, p3:15, p4:20},
		{p1:1, p2:6, p3:11, p4:16},
		{p1:6, p2:11, p3:16, p4:21},
		{p1:2, p2:7, p3:12, p4:17},
		{p1:7, p2:12, p3:17, p4:22},
		{p1:3, p2:8, p3:13, p4:18},
		{p1:8, p2:13, p3:18, p4:23},
		{p1:4, p2:9, p3:14, p4:19},
		{p1:9, p2:14, p3:19, p4:24},
		// Diagnol Position
		{p1:0, p2:6, p3:12, p4:18},
		{p1:6, p2:12, p3:18, p4:24},
		{p1:4, p2:8, p3:12, p4:16},
		{p1:8, p2:12, p3:16, p4:20},
		{p1:1, p2:7, p3:13, p4:19},
		{p1:3, p2:7, p3:11, p4:15},
		{p1:5, p2:11, p3:17, p4:23},
		{p1:9, p2:13, p3:17, p4:21}
	]
};

function pointXY()
{
	let playerX = document.getElementById("playerX");
	let playerY = document.getElementById("playerY");
	playerX.innerHTML = "Player 1 Wins: " + winX;
	playerY.innerHTML = "Player 2 Wins: " + winY;
}

function reset()
{
	let gameStatus = document.getElementById("gameStatus");
	let moves = document.querySelectorAll("#game tbody td");
	
	for (var i = 0; i < moves.length; i++) {
		moves[i].innerHTML = " ";
		moves[i].className = "clear";
	}
	gameStatus.innerHTML = " ";
	pointXY();
}

function move(pThis)
{
	let gameStatus = document.getElementById("gameStatus");
	let turn = document.getElementById("turn");
	// get all the td from the td
	let moves = document.querySelectorAll("#game tbody td");

	if (pThis.innerHTML != " ")
	{
		alert("Stop Cheating");
	}
	else
	{
		if (isX)
		{
			pThis.innerHTML = "X";
			turn.innerHTML = "Player 2 Turn";
		}
		else
		{
			pThis.innerHTML = "O";
			turn.innerHTML = "Player 1 Turn";
		}
		isX = !isX;
	}
	
	possibleWinners.winningCombinations.every(function(e, index, array) 
	{
		let m1 = moves[e.p1].innerHTML;
		let m2 = moves[e.p2].innerHTML;
		let m3 = moves[e.p3].innerHTML;
		let m4 = moves[e.p4].innerHTML;

		if (m1 == m2 && m2 == m3 && m3 == m4 && m1 != " ")
		{
			gameStatus.innerHTML = "Winner, the winner is " + m1;
			moves[e.p1].className = "winner";
			moves[e.p2].className = "winner";
			moves[e.p3].className = "winner";
			moves[e.p4].className = "winner";
			gainPoint(m1);
			return false;
		}
		else
		{
			gameStatus.innerHTML = new Date();	
		}	
			return true;
	});
}

const gainPoint = m1 => m1 === "X" ? winX +=1 : winY +=1;

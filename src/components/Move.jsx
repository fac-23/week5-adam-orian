import React from "react";
// import Pokemon from "./Pokemon";

function Move({
	playerX,
	playerY,
	setPlayerX,
	setPlayerY,
	enemyLeftX,
	enemyLeftY,
	enemyRightX,
	enemyRightY,
	collision,
	setCollision,
}) {
	// sprite center point
	// const spriteCenter = { x: (playerX + 4) / 2, y: (playerY + 4) / 2 };

	React.useEffect(() => {
		console.log("moving");

		function handleKeyDown(event) {
			if (event.key === "ArrowUp") {
				setPlayerY((prevY) => prevY + 2);
			}
			if (event.key === "ArrowDown") {
				setPlayerY((prevY) => prevY - 2);
			}
			if (event.key === "ArrowRight") {
				setPlayerX((prevX) => prevX + 2);
			}
			if (event.key === "ArrowLeft") {
				setPlayerX((prevX) => prevX - 2);
			}
		}

		window.addEventListener("keydown", handleKeyDown);
	}, []);

	React.useEffect(() => {
		if (
			(playerX === enemyLeftX && playerY === enemyLeftY) ||
			(playerX === enemyRightX && playerY === enemyRightY)
		) {
			setCollision(true);
			alert("collision!!!!!!!!");
			// end the game visually!
		}

		console.log("player", playerX, playerY);
		console.log("enemyLeft", enemyLeftX, enemyLeftY);
	}, [enemyLeftX, enemyLeftY, playerX, playerY, enemyRightX, enemyRightY]);

	return null;
}

export default Move;

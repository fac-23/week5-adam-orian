import React from "react";
// import Pokemon from "./Pokemon";

function Move({
	playerX,
	playerY,
	setPlayerX,
	setPlayerY,
	enemyX,
	enemyY,
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
		if (playerX === enemyX && playerY === enemyY) {
			setCollision(true);
			console.log("collision!!!!!!!!");
			// end the game visually!
		}

		console.log("enemyX", enemyX);
		console.log("playerX", playerX);
	}, [enemyX, enemyY, playerX, playerY]);

	return null;
}

export default Move;
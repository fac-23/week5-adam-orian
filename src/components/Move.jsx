import React from "react";
// import Pokemon from "./Pokemon";

function Move({ playerX, setPlayerX, setPlayerY, enemyX }) {
	// const [collision, setCollision] = React.useState(false);

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

	// console.log("enemyX", enemyX);
	// console.log("playerX", playerX);
	// if (playerX >= enemyX) {
	// 	setCollision(true);
	// 	console.log(collision);
	// }

	return null;
}

export default Move;

import React from "react";
// import Pokemon from "./Pokemon";

function Move({ playerX, setX, playerY, setY, enemyX, enemyY }) {
	// const [collision, setCollision] = React.useState(false);

	React.useEffect(() => {
		console.log("moving");

		function handleKeyDown(event) {
			if (event.key === "ArrowUp") {
				setY((prevY) => prevY + 2);
			}
			if (event.key === "ArrowDown") {
				setY((prevY) => prevY - 2);
			}
			if (event.key === "ArrowRight") {
				setX((prevX) => prevX + 2);
			}
			if (event.key === "ArrowLeft") {
				setX((prevX) => prevX - 2);
			}
		}

		// console.log("enemyX", enemyX);

		// const enemyRange = enemyX + 10;
		// if (playerX >= enemyX || playerX <= enemyRange) {
		// 	setCollision(true);
		// 	console.log(collision);
		// }

		window.addEventListener("keydown", handleKeyDown);
	}, []);

	return null;
}

export default Move;

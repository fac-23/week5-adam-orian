import React from "react";
// import Pokemon from "./Pokemon";

function Move({ x, setX, y, setY, translate, setTranslate }) {
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

		window.addEventListener("keydown", handleKeyDown);
	}, []);

	return null;
}

export default Move;

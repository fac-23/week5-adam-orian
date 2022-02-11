import React from "react";
// import Move from "./Move";

// fetch sprite
// make enemy move left and right across screen
// make a collision function to track positions of enemy and pokemon
// const num = getRandomNum();

function Enemy({
	num,
	enemyLeftX,
	enemyLeftY,
	setEnemyLeftX,
	enemyRightX,
	enemyRightY,
	setEnemyRightX,
}) {
	const [sprite, setSprite] = React.useState(null);

	React.useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
			.then((data) => data.json())
			.then((data) => {
				console.log(data);
				setSprite(data.sprites.front_default);
			});
	}, [num]);

	React.useEffect(() => {
		setInterval(() => {
			if (setEnemyRightX) {
				setEnemyRightX((prevX) => {
					if (prevX === 0) {
						prevX = 80;
					}
					return prevX - 2;
				});
			}

			if (setEnemyLeftX) {
				setEnemyLeftX((prevX) => {
					if (prevX === 80) {
						prevX = 0;
					}
					return prevX + 2;
				});
			}
		}, 50);
	}, []);

	if (!sprite) {
		return null;
	} else {
		return enemyLeftX ? (
			<div>
				<img
					className="enemy-sprite"
					src={sprite}
					style={{
						bottom: enemyLeftY + "vh",
						left: enemyLeftX + "vw",
					}}
				/>
			</div>
		) : (
			<div>
				<img
					className="enemy-sprite"
					src={sprite}
					style={{
						bottom: enemyRightY + "vh",
						left: enemyRightX + "vw",
					}}
				/>
			</div>
		);
	}
}

// function getRandomNum() {
// 	return Math.floor(Math.random() * 100);
// }

export default Enemy;

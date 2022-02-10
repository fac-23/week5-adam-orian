import React from "react";
// import Move from "./Move";

// fetch sprite
// make enemy move left and right across screen
// make a collision function to track positions of enemy and pokemon
// const num = getRandomNum();

function Enemy({ num }) {
	const [enemyX, setX] = React.useState(50);
	const [enemyY, setY] = React.useState(0);

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
			setX((prevX) => {
				if (prevX === 80) {
					prevX = 0;
				}
				return prevX + 2;
			});
		}, 200);
	}, []);

	if (!sprite) {
		return <div>Loading...</div>;
	} else {
		return (
			<div>
				<img
					className="enemy-sprite"
					src={sprite}
					style={{
						bottom: enemyY + "vh",
						left: enemyX + "vw",
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

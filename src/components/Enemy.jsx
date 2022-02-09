import React from "react";

// fetch sprite
// make enemy move left and right across screen
// make a collision function to track positions of enemy and pokemon
// const num = getRandomNum();

function Enemy({ num }) {
	console.log(num);
	const [sprite, setSprite] = React.useState(null);

	React.useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
			.then((data) => data.json())
			.then((data) => {
				console.log(data);
				setSprite(data.sprites.front_default);
			});
	}, [num]);

	if (!sprite) {
		return <div>Loading...</div>;
	} else {
		return <img className="enemy-sprite" src={sprite} />;
	}
}

// function getRandomNum() {
// 	return Math.floor(Math.random() * 100);
// }

export default Enemy;

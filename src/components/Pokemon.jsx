import React from "react";
import Move from "./Move";

// fetch pokemon by name
// display sprite on page

function Pokemon({ name }) {
	const [sprite, setSprite] = React.useState(null);
	const [playerX, setX] = React.useState(50);
	const [playerY, setY] = React.useState(0);
	const [translate, setTranslate] = React.useState("translate(-50%, -50%)");

	React.useEffect(() => {
		console.log("fetching");
		fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
			.then((data) => data.json())
			.then((data) => {
				console.log(data);
				setSprite(data.sprites.front_default);
			});
	}, [name]);

	if (!sprite) {
		return <div>Loading...</div>;
	} else {
		return (
			<div className="spriteContainer">
				<img
					className="sprite"
					src={sprite}
					style={{
						bottom: playerY + "vh",
						left: playerX + "vw",
						transform: translate,
					}}
				/>
				<Move
					playerX={playerX}
					setX={setX}
					playerY={playerY}
					setY={setY}
					translate={translate}
					setTranslate={setTranslate}
				/>
			</div>
		);
	}
}

export default Pokemon;

import React from "react";
import Move from "./Move";

// fetch pokemon by name
// display sprite on page

function Pokemon({ name }) {
	const [sprite, setSprite] = React.useState(null);
	const [x, setX] = React.useState(50);
	const [y, setY] = React.useState(0);
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
						bottom: y + "vh",
						left: x + "vw",
						transform: translate,
					}}
				/>
				<Move
					x={x}
					setX={setX}
					y={y}
					setY={setY}
					translate={translate}
					setTranslate={setTranslate}
				/>
			</div>
		);
	}
}

export default Pokemon;

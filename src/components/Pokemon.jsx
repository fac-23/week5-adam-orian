import React from "react";

// fetch pokemon by name
// display sprite on page

function Pokemon({ name, playerX, playerY }) {
	const [sprite, setSprite] = React.useState(null);

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
		return null;
	} else {
		return (
			<div className="spriteContainer">
				<img
					className="sprite"
					src={sprite}
					style={{
						bottom: playerY + "vh",
						left: playerX + "vw",
					}}
				/>
			</div>
		);
	}
}

export default Pokemon;

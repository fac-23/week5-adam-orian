import React from "react";

// fetch pokemon by name
// display sprite on page

function Pokemon({ name }) {
	const [sprite, setSprite] = React.useState(null);

	React.useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
			.then((data) => data.json())
			.then((data) => setSprite(data.sprites.front_default));
	});

	if (!sprite) {
		return <div>Loading...</div>;
	} else {
		return <img src={sprite} />;
	}
}

export default Pokemon;

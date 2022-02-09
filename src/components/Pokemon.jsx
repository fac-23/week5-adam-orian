import React from "react";

// fetch pokemon by name
// display sprite on page

function Pokemon({ name }) {
	const [sprite, setSprite] = React.useState(null);

	React.useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
			.then((data) => data.json())
			.then((data) => setSprite(data.sprites.front_default));

		// function handleKeyDown(event){
		//     if(event.key === "ArrowUp") {

		//     }
		// }
	});

	if (!sprite) {
		return <div>Loading...</div>;
	} else {
		return (
			<div className="spriteContainer">
				<img
					className="sprite"
					src={sprite}
					style={{
						bottom: "0vh",
						left: "50vw",
						transform: "translate(-50%, -50%)",
					}}
				/>
			</div>
		);
	}
}

export default Pokemon;

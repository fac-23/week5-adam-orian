import React from "react";
import Form from "./components/Form.jsx";
import Pokemon from "./components/Pokemon.jsx";
import Enemy from "./components/Enemy.jsx";

function App() {
	const [pokemonName, setPokemonName] = React.useState(null);
	const [num, setNum] = React.useState(null);
	// console.log(pokemonName);
	return (
		<div>
			<Form
				pokemonName={pokemonName}
				setPokemonName={setPokemonName}
				setNum={setNum}
			/>
			<Pokemon name={pokemonName} />
			<Enemy num={num} />
			<Enemy num={num} />
		</div>
	);
}

export default App;

import React from "react";
import Form from "./components/Form.jsx";

function App() {
	const [pokemonName, setPokemonName] = React.useState(null);
  console.log(pokemonName);
	return (
		<div>
			<Form pokemonName={pokemonName} setPokemonName={setPokemonName}/>
			{pokemonName}
		</div>
	);
}

export default App;

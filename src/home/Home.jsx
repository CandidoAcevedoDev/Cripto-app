import { useState, useEffect } from 'react';
import { getInfoCripto } from './data/api';
import { Heading, Container, Image } from './styles';
import { criptoImage } from '../assets/index';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

const Home = () => {
	const [monedas, setMonedas] = useState({});
	const [resultado, setResultado] = useState({});
	const [loader, setLoader] = useState(false);

	useEffect(() => {
		if (Object.keys(monedas).length > 0) {
			async function infoCripto() {
				setLoader(true);
				setResultado({});

				const result = await getInfoCripto(monedas);

				setResultado(result.DISPLAY[monedas.selectCripto][monedas.currency]);

				setLoader(false);
			}

			infoCripto();
		}
	}, [monedas]);

	return (
		<Container>
			<Image src={criptoImage} alt='Cripto Monedas' />

			<div>
				<Heading>Cotiza Criptomonedas al instante</Heading>
				<Formulario setMonedas={setMonedas} />

				{loader && <Spinner />}
				{resultado && resultado.PRICE && <Resultado resultado={resultado} />}
			</div>
		</Container>
	);
};

export default Home;

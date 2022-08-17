import { useState, useEffect } from 'react';
import { getCripto } from '../data/api';
import useSelectCurrency from '../hooks/useSelectCurrency';
import { monedas } from '../data/monedas';
import Error from './Error';
import { InputBtn } from '../styles';

const Formulario = ({ setMonedas }) => {
	const [criptos, setCriptos] = useState([]);
	const [error, setError] = useState(false);

	const [currency, SelectCurrency] = useSelectCurrency(
		'Elige tu Moneda',
		monedas
	);
	const [selectCripto, SelectCriptoCurrency] = useSelectCurrency(
		'Elige tu Criptomoneda',
		criptos
	);

	useEffect(() => {
		async function loadCripto() {
			const result = await getCripto();
			const arrayCripto = result.Data.map(cripto => {
				const objCripto = {
					id: cripto.CoinInfo.Name,
					nombre: cripto.CoinInfo.FullName,
				};

				return objCripto;
			});

			setCriptos(arrayCripto);
		}

		loadCripto();
	}, []);

	const handleSubmit = ev => {
		ev.preventDefault();

		if ([currency, selectCripto].includes('')) return setError(true);

		setError(false);

		setMonedas({ currency, selectCripto });
	};

	return (
		<>
			{error && <Error>Todos los campos son obligatorios</Error>}
			<form onSubmit={handleSubmit}>
				<SelectCurrency />
				<SelectCriptoCurrency />
				<InputBtn type='submit' value='Cotizar' />
			</form>
		</>
	);
};

export default Formulario;

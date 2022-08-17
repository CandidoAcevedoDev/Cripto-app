import { useState } from 'react';
import { Label, Select } from '../styles';

const useSelectCurrency = (label, opciones) => {
	const [state, setState] = useState('');

	const SelectCurrency = () => (
		<>
			<Label htmlFor='moneda'>{label}</Label>
			<Select
				name='moneda'
				id='moneda'
				value={state}
				onChange={ev => setState(ev.target.value)}
			>
				<option>-- Seleccione --</option>
				{opciones.map(opcion => (
					<option key={opcion.id} value={opcion.id}>
						{opcion.nombre}
					</option>
				))}
			</Select>
		</>
	);

	return [state, SelectCurrency];
};

export default useSelectCurrency;

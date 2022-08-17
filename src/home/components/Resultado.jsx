import styled from '@emotion/styled';

const Container = styled.div`
	color: #fff;
	font-family: 'Lato', sans-serif;
	display: flex;
	align-items: start;
	gap: 1rem;
	margin-top: 30px;
`;

const Image = styled.img`
	display: block;
	width: 150px;
`;

const Text = styled.p`
	font-size: 18px;
	span {
		font-weight: 700;
	}
`;

const Precio = styled.p`
	font-size: 24px;
	span {
		font-weight: 700;
	}
`;

const Resultado = ({ resultado }) => {
	const { PRICE, HIGHDAY, LOWDAY, CHANCEPCT24HOUR, IMAGEURL, LASTUPDATE } =
		resultado;

	return (
		<Container>
			<Image
				src={`https://crytopcompare.com/${IMAGEURL}`}
				alt='Imagen Cripto'
			/>
			<div>
				<Precio>
					El precio actual es: <span>{PRICE}</span>
				</Precio>
				<Text>
					El precio más alto del día: <span>{HIGHDAY}</span>
				</Text>
				<Text>
					El precio más bajo del día: <span>{LOWDAY}</span>
				</Text>
				<Text>
					Variación últimas 24 horas: <span>{CHANCEPCT24HOUR}</span>
				</Text>
				<Text>
					última actualización: <span>{LASTUPDATE}</span>
				</Text>
			</div>
		</Container>
	);
};

export default Resultado;

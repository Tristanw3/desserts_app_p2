import styled from 'styled-components';

export const MenuCard = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #ffa8ca;
	height: 45vh;
	width: 50%;
	box-sizing: border-box;

	&:hover {
		background: hotpink;
	}

	@media (max-width: 1000px) {
    width: 100%;
    }
`;

export const Food = styled.div`
	height: 200px;
	width: 200px;
	background: url("https://static.vecteezy.com/system/resources/previews/000/202/224/non_2x/iced-coffee-illustration-vector.jpg")
		no-repeat center;
	background-size: 120%;
	border-radius: 15%;
	margin: 3rem;

	&:hover {
		background-size: 130%;
	}
`;

export const MenuText = styled.div`
	display: block;
	color: #222;
`;

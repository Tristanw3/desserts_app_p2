import styled from 'styled-components';

export const FoodImage = styled.div`
	height: 200px;
	width: 200px;
	background: url(${(props) => props.image}) no-repeat center;
	background-size: 120%;
	border-radius: 15%;

	&:hover {
		background-size: 130%;
	}
`;

export const FoodThumbnail = styled.div`
	height: 100px;
	width: 100px;
	background: url("https://static.vecteezy.com/system/resources/previews/000/202/224/non_2x/iced-coffee-illustration-vector.jpg")
		no-repeat center;
	background-size: cover;
	border-radius: 15%;
	margin-right: 1rem;

	@media (max-width: 1000px) {
		height: 80px;
		width: 80px;
	}
`;

export const FoodTextLayout = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const FoodName = styled.div`
	color: #333;
	font-weight: 600;
	font-size: 2.5rem;
`;

export const FoodCost = styled.div`
	color: #222;
	font-weight: 400;
	font-size: 2rem;
	margin-bottom: 1rem;
`;

import styled from 'styled-components';

export const ModalWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border: hotpink solid 5px;
	border-radius: 300px;
	background: pink;
	text-align: center;
	width: 650px;
	height: 280px;
	box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
	margin: 0 25%;
	transition: all .8s;
	position: absolute;
	z-index: 3;

	@media (min-width: 500px) and (max-width: 1000px) {
		margin: 0 10%;
		width: 600px;
	}
`;

export const ModalText = styled.div`margin: 1rem;`;

export const BackDrop = styled.div`
	background: rgba(48, 49, 48, 0.42);
	height: 100%;
	width: 100%;
	position: fixed;
	transition: all 1.3s;
	margin-top: 201px;

	@media (min-width: 500px) and (max-width: 1000px) {
		margin-top: 150px;
	}
`;

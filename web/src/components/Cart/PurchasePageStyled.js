import styled from 'styled-components';

export const PageSize = styled.div`
  height: 90vh;
`;

export const YellowBanner = styled.div`
  height: 25vh;
  background: #f2e266;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PinkContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  justify-items: center;
  align-items: center;
  background-color: #ffa8ca;
  height: 65vh;
  width: 100%;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    height: auto;
    }
`;

export const PurchaseCard = styled.div`
  box-sizing: border-box;
  border: 2px solid white;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 60vh;

  @media (max-width: 1000px) {
    margin: 1rem;
    }
`;

export const AddSubtractBlock = styled.div`
  display: flex;
  flex: row;
  justify-content: space-evenly;
  width: 200px;
`;

export const PurchaseNumber = styled.div`
  flex-direction: row;
  margin-top: -0.5rem;
  color: white;
  font-weight: 600;
  font-size: 3rem;
`;
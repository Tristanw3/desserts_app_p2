import styled from 'styled-components';

export const PageSize = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;  
  overflow: visible;
`;

export const YellowBanner = styled.div`
  width: 100%;
  height: 25vh;
  background: #f2e266;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const YellowBannerHeader = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 1000px) {
    width: 90%;
    }
`;

export const AquaContainerHeader = styled.header`
  width: 80%; 
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  border-bottom: 2px #222 solid;
  box-sizing: border-box;
  margin-top: 2rem;

  @media (max-width: 1000px) {
    width: 90%;
    }
`;
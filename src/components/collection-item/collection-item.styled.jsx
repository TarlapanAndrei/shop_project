import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
width: 22vw;
display:flex;
flex-direction: column;
height: 350px;
align-items: center;
position: relative;

&:hover{
  button{
    display:flex;
    opacity: 0.85;
  }
  .image{
    opacity: 0.8;
  }
`;
export const CustomButtonStyled = styled(CustomButton)`
  position: absolute;
  width: 80%;
  opacity: 0.7;
  top: 255px;
  display: none;
`;
export const StyledImage = styled.div`
  height: 95%;
  width: 100%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({imageUrl})=> `url(${imageUrl})`}
`;
export const FooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
export const Name = styled.span`
  width: 85%;
  margin-bottom: 15px;
`;
export const Price = styled.span`
  width: 15%;
`;
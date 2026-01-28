import styled from "styled-components";
import { colors } from "./theme";

export const Container = styled.div`
  margin-top: 20px;
  background-color: ${colors.vidro};
  border-radius: 20px;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (max-width: 900px) {
   padding: 10px 15px;
  }

   @media (max-width: 550px) {
   padding: 10px;
  }
`;

export const Text = styled.div`
  font-size: 23px;
  
`;

export const CardHourly = styled.div`
  display: flex;
  gap: 20px;

  img {
    width: 70px;
    height: 65px;
  }

  @media (max-width: 900px) {
   img {
    width: 60px;
    height: 60px;
   } 
  }

  @media (max-width: 550px) {
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

export const DetailHourly = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Hourly = styled.div`
  font-size: 15px;
`;

export const Temperature = styled.div`
  font-size: 15px;
`;

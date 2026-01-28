import styled from "styled-components";
import { colors } from "./theme";
import { getTemperatureColor } from "../services/temperatureColor";

interface TemperatureProps {
  $temp: number;
}

export const Container = styled.div`
  margin-top: 30px;
  width: 100%;
  max-width: 900px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 90px;
    height: 90px;
  }

  @media (max-width: 900px) {
   img {
    width: 70px;
    height: 70px;
   } 
  }

  @media (max-width: 550px) {

    img {
      width: 60px;
      height: 60px;
    }
  }

`;

export const City = styled.div`
  font-size: 36px;
  font-weight: 500;

  @media (max-width: 900px) {
   font-size: 32px;
  }

  @media (max-width: 550px) {
    font-size: 30px;
  }
`;


export const Temperature = styled.span<TemperatureProps>`
  font-size: 54px;
  font-weight: 600;
  color: ${({ $temp }) => getTemperatureColor($temp)};

  @media (max-width: 900px) {
   font-size : 45px;
  }

  @media (max-width: 550px) {
    font-size: 40px;
  }
`;

export const Description = styled.div`
  font-size: 25px;
  text-transform: capitalize;
`;

export const Details = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 20px;
  background-color: ${colors.vidro};
  border-radius: 15px;
  padding: 10px 20px;
`;

export const DetailsItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DetailLabel = styled.div`
  font-size: 16px;
`;

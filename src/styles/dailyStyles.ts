import styled from "styled-components";
import { colors } from "./theme";

export const Container = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 20px;

  @media (max-width: 900px) {
   gap: 15px; 
   margin-top: 15px;
  }

   @media (max-width: 550px) {
    margin-top: 20px;
    gap: 10px;
   }
`;

export const CardDaily = styled.div`
  width: 160px;
  height: 140px;
  border-radius: 20px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.vidro};
  cursor: pointer;

  img {
    width: 65px;
    height: 65px;
  }

  @media (max-width: 900px) {
    img {
      width: 60px;
      height: 60px;
    } 
  }

  &:nth-child(5) {
    @media (max-width: 550px) {
      display: none;
    }
  }

  @media (max-width: 550px) {
    width: 85px;
    height: 120px;
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

export const Date = styled.div`
  font-size: 14px;
  text-align: center;
`;

export const Text = styled.div`
  font-size: 14px;

  @media (max-width: 550px) {
    font-size: 12px;
  }
`;

export const Temperature = styled.div`
  font-size: 14px;
`;

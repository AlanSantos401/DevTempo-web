import styled from "styled-components";
import { colors } from "./theme";

interface ContainerProps {
  $background: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${({ $background }) => $background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  transition: background-image 0.5s ease-in-out;
`;


export const Header = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background-color: #306ca8;

  
  @media (max-width: 900px) {
   height : 70px;
   padding: 0 15px;
  }

  @media (max-width: 550px) {
    height: 70px;
    padding: 0 10px;
    gap: 10px;
  }
`;

export const Logo = styled.div`
  img {
    width: 140px;
    border-radius: 12px;
  }

  @media (max-width: 900px) {
    img {
      width: 120px;
    }
  }

  @media (max-width: 550px) {
    img {
      width: 80px;
    }
  }
`;


export const Buscar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Input = styled.input`
  height: 42px;
  width: 520px;
  padding: 0 20px;
  border: none;
  outline: none;
  border-radius: 25px;
  background-color: ${colors.vidro};
  font-size: 18px;

  @media (max-width: 900px) {
    width: 450px;
  }

  @media (max-width: 550px) {
    height: 35px;
    width: 220px;
    border-radius: 15px;
  }
`;

export const Button = styled.button`
  height: 42px;
  width: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: ${colors.vidro};
  font-size: 18px;
  cursor: pointer;

  @media (max-width: 550px) {
    height: 40px;
    width: 40px;
  }
`;


export const Error = styled.div`
  margin-top: 60px;
   height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-align: center;

  p {
    font-size: 25px;
  }

  button {
    width: 200px;
    font-size: 20px;
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 10px;
    background: ${colors.primaryDark};
    margin-bottom: 60px;
  }

  img {
    width: 600px;

  }
   

  @media (max-width: 900px) {
   button {
    margin-bottom: 40px;
   } 

   img {
    width: 500px;
   }
  }

  @media (max-width: 550px) {
    button {
      margin-bottom: 20px;
    }

    img {
      width: 400px;
    }
  }
`;

export const Loading = styled.div`
margin-top: 60px;
font-size: 25px;
`



export const HourlyDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

  @media (max-width: 550px) {
    display: none;
  }
`;

export const DateView = styled.div`
  font-size: 20px;

  
  @media (max-width: 550px) {
    display: none;
  }
`;

import styled from "styled-components";
import Background from "../../assets/background.svg";

export const Container = styled.div`
  background-image: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0rem 0rem;
  height: 100%;
  min-height: 100vh;
`;

export const Image = styled.img`
  width: 90%;
  max-width: 50rem;
`;
export const Image2 = styled.img`
  transform: rotateY(180deg);
`;

export const Label = styled.p`
  font-size: 1.8rem;
  margin-left: 2rem;
  margin-top: 3.4rem;
`;

export const Input = styled.input`
  padding: 1.5rem 2.5rem;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  width: 80vw;
  font-size: 2.4rem;
  color: #fff;
  max-width: 45rem;

  &::placeholder {
    font-size: 2.4rem;
    color: #fff;
  }
`;

export const User = styled.li`
  padding: 1.5rem 2.5rem;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  width: 80vw;
  font-size: 2.4rem;
  color: #fff;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: none;
  outline: none;
  margin-top: 1.5rem;
  max-width: 45rem;
  column-gap: 2rem;
  text-align: center;

  button {
    background: none;
    border: none;
  }

  img {
    cursor: pointer;
  }
`;

import styled from "styled-components";

export const Button = styled.button `
    background: ${ props => props.comeBack ? "none" : "rgba(0, 0, 0, 0.8)"};
    width: 70vw;
    border-radius: 14px;
    color: #fff;
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: auto;
    font-size: 1.7rem;
    align-items: center;
    padding: 2rem 0rem;
    border: ${ props => props.comeBack ? "0.1rem solid #ffffff" : "none"};
    margin-top: 10rem;
    max-width: 40rem;
    margin-bottom: 2rem;

    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }

    &:active {
        opacity: 0.5;
    }

`
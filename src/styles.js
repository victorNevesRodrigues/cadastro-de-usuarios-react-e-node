import styled from "styled-components";
import Background from "./assets/background.svg"

export const Container = styled.div `
    background-image: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 0rem 0rem;
    height: 100%;
    
`

export const Image = styled.img `
width: 100%;
max-width: 50rem;
`
export const Image2 = styled.img `
`

export const SectionForm = styled.section `
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem;
    color: #fff;
    margin-top: 5rem;
    padding-bottom: 8rem;
    max-width: 50rem;
`

export const H1 = styled.h1 `
    font-size: 3.4rem;
    margin-bottom: 4.6rem;
`

export const Label = styled.p `
    font-size: 1.8rem;
    margin-left: 2rem;
    margin-top: 3.4rem;
`

export const Input = styled.input `
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
`

export const Button = styled.button `
    background: rgba(0, 0, 0, 0.8);
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
    border: none;
    margin-top: 10rem;
    max-width: 40rem;
    margin-bottom: 2rem;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }

`

export const User = styled.li `
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
`

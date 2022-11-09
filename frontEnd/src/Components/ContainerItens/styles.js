import styled from "styled-components";

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

    ${
        props => props.secondPage && `
        min-height: 80vh;
        backdrop-filter: blur(45px);
        `
    }
`
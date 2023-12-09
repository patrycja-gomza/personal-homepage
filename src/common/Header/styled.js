import styled from "styled-components";

export const StyledHeader = styled.header`
    max-width: 1089px;
    margin-top: 115px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 66px;
`;

export const StyledPhoto = styled.img`
    width: 398px;
    height: 398px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center 15%;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
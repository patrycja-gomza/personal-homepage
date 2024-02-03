import styled from "styled-components";

export const StyledHeader = styled.header`
    max-width: 1089px;
    margin-top: 115px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 66px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        display: grid;
        grid-template-columns: 1fr;
        margin-top: 32px;
        grid-gap: 12px;
    }
`;

export const StyledPhoto = styled.img`
    width: 398px;
    height: 398px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center 15%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 132.667px;
        height: 132.667px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
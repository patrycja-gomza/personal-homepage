import styled from "styled-components";

export const Title = styled.h1`
    color: ${({ theme: { darkMode, color } }) => (
        darkMode ? color.white : color.mineShaft)};
    font-size: ${({ theme }) => theme.fontSize.font38};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.font900};
    line-height: normal;
    letter-spacing: 1.9px;
    margin: 12px 0 35px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: ${({ theme }) => theme.fontSize.font22};
        letter-spacing: 1.1px;
        margin: 8px 0 16px; 
    }
`;
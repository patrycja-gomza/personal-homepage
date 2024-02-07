import styled, { css } from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({ theme: { darkMode, color } }) => (
    darkMode ? color.lightMineShaft : color.white)};
    box-shadow: ${({ theme }) => theme.shadow.boxShadow};
    border-radius: 4px;
    padding: 32px;
    margin-top: 72px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        padding: 16px;
        margin-top: 48px;
    }
`;

export const SectionBody = styled.ul`
    list-style: none;
    padding-left: 0;
    margin: 32px 0 0 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 10px;
    justify-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
          display: grid;
          grid-template-columns: 1fr;
          margin: 12px 0 0 0;
    }
`;

export const TileImage = styled.img`
    width: 100%;
    max-width: 300px;
    object-fit: cover;
  

    ${(props) => props.orientation === "vertical" && css`
        height: 100%;
        max-height: 300px;
        width: auto;

        @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
            max-width: 100%;
        }
    `}
`;

export const TileImageContainer = styled.div`
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;
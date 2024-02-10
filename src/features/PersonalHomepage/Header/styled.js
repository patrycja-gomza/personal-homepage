import styled from "styled-components";
import { ReactComponent as clickHereIcon } from "../../../assets/clickhere.svg";

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

export const PhotoWrapper = styled.div`
    position: relative;
    overflow: hidden;
    width: 398px;
    height: 398px;
    border-radius: 50%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        width: 132.667px;
        height: 132.667px;
    }
`;

export const StyledClickHereIconArt = styled(clickHereIcon)`
    position: absolute;
    transform: translate(-50%, -50%) scale(0.3);
    top: 17%;
    left: 31%;
      
    ${PhotoWrapper}:hover & {
        display: none;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        transform: translate(-30%, 150%) scale(0.43);
    }
`;

export const StyledClickHereIconHome = styled(StyledClickHereIconArt)`
    top: 40%;
    left: 80%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        transform: translate(-51%, -50%) scale(0.43);
    }
`;

export const StyledPhoto = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: filter 0.3s ease;
    position: relative;

    ${PhotoWrapper}:hover & {
        filter: brightness(90%) blur(3.5px);
    }
`;

export const TextOverlay = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: ${({ theme }) => theme.fontSize.font30};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.font700};
    line-height: 1.5;
    letter-spacing: 1.1px;
    color: ${({ theme }) => theme.color.white};
    text-align: center;
    padding: 2px;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.3s ease;

    ${PhotoWrapper}:hover & {
        opacity: 1;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
      font-size: ${({ theme }) => theme.fontSize.font16};
      line-height: 1.15;
      font-weight: ${({ theme }) => theme.fontWeight.font600};
      padding: 0;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
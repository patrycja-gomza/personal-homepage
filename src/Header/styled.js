import styled from "styled-components";

export const StyledHeader = styled.header`
    max-width: 1089px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 66px;
`;

export const StyledPhoto = styled.img`
    width: 398px;
    height: 398px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center 30%;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Intro = styled.span`
    color: ${({ theme }) => theme.color.slateGray};
    font-size: ${({ theme }) => theme.fontSize.font12};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.font700};
    line-height: 1.3;
    text-transform: uppercase;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.mineShaft};
    font-size: ${({ theme }) => theme.fontSize.font38};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.font900};
    line-height: normal;
    letter-spacing: 1.9px;
    margin: 12px 0 35px;
`;

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.color.slateGray};
    font-size: ${({ theme }) => theme.fontSize.font20};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.font400};
    line-height: 1.4;
    letter-spacing: 1px;
    margin: 0 0 32px;
`;

export const Button = styled.button`
    width: fit-content;
    display: inline-flex;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border: ${({ theme }) => theme.border.borderHeader};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.color.scienceBlue};
    color: ${({ theme }) => theme.color.white};
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.font20};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.font600};
    line-height: normal;
    letter-spacing: 1px;
`;



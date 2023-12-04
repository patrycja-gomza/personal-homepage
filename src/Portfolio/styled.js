import styled from "styled-components";
import { Paragraph, SectionHeader } from "../styled";

export const StyledArticle = styled.article`
    margin: 72px 0 120px;
`;

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center`;

export const Title = styled(SectionHeader)`
    border: none;
    padding: 12px 0 8px;
`;

export const Subtitle = styled(Paragraph)`
    color: ${({ theme }) => theme.color.mineShaft};
    margin: 0 0 24px;
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
`;

export const Tile = styled.div`
    border-radius: 4px;
    border: ${({ theme }) => theme.border.borderTile};
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: ${({ theme }) => theme.shadow.boxShadow};
    padding: 56px;
    display: grid;
    grid-gap: 24px;
`;

export const ProjectTitle = styled.h3`
    color: ${({ theme }) => theme.color.scienceBlue};
    font-size: ${({ theme }) => theme.fontSize.font24};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.font700};
    line-height: normal;
    letter-spacing: 1.2px;
    margin: 0;
`;

export const ProjectDescription = styled.p`
    color: ${({ theme }) => theme.color.slateGray};
    font-size: ${({ theme }) => theme.fontSize.font18};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.font400};
    line-height: 1.4;
    letter-spacing: 0.9px;
    margin: 0;
    text-align: justify;
`;

export const ProjectLinks = styled(ProjectDescription)`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 8px;
    align-self: end;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.color.scienceBlue};
`;
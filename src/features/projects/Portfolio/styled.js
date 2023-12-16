import styled from "styled-components";
import { Paragraph, SectionHeader } from "../../../styles/sharedStyled";
import { ReactComponent as GitHubIcon } from '../../../images/mark-github.svg';

export const StyledArticle = styled.article`
    margin: 72px 0 120px;
`;

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledGitHubIcon = styled(GitHubIcon)`
  	path {
    	fill: ${({ theme: { darkMode, color } }) => (
            darkMode ? color.dodgerBlue : color.scienceBlue)};
    }
`;

export const Title = styled(SectionHeader)`
    border: none;
    padding: 12px 0 8px;
`;

export const Subtitle = styled(Paragraph)`
    color: ${({ theme: { darkMode, color } }) => (
        darkMode ? color.white : color.slateGray)};
    margin: 0 0 24px;
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
`;

export const Tile = styled.div`
    border-radius: 4px;
    border: ${({ theme: { darkMode, border } }) => (
        darkMode ? border.borderTileDarkMode : border.borderTile)};
    background-color: ${({ theme: { darkMode, color } }) => (
        darkMode ? color.lightMineShaft : color.white)};
    box-shadow: ${({ theme }) => theme.shadow.boxShadow};
    padding: 56px;
    display: grid;
    grid-gap: 24px;
    transition: all 0.3s linear;
    &:hover {
        box-shadow: ${({ theme }) => theme.shadow.boxShadowHover};
        border: ${({ theme: { darkMode, border } }) => (
        darkMode ? border.borderTileHoverDM : border.borderTileHoverLM)};
    }
`;

export const ProjectTitle = styled.h3`
    color: ${({ theme: { darkMode, color } }) => (
        darkMode ? color.dodgerBlue : color.scienceBlue)};
    font-size: ${({ theme }) => theme.fontSize.font24};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.font700};
    line-height: normal;
    letter-spacing: 1.2px;
    margin: 0;
`;

export const ProjectDescription = styled.p`
    color: ${({ theme: { darkMode, color } }) => (
        darkMode ? color.white : color.slateGray)};
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
    color: ${({ theme: { darkMode, color } }) => (
        darkMode ? color.dodgerBlue : color.scienceBlue)};
    text-underline-offset: 4px;
    text-decoration-thickness: 0.02em;
    transition: text-decoration-thickness 0.3s linear; 

&:hover {
    text-decoration-thickness: 0.08em;
}
`;
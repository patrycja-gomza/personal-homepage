import styled from "styled-components";
import { ReactComponent as ListMarker } from '../images/ellipse31.svg';

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
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px 99px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
      display: grid;
      grid-template-columns: 1fr;
      margin: 12px 0 0 0;
    }
`;

export const ListItem = styled.li`
  color: ${({ theme: { darkMode, color } }) => (
    darkMode ? color.white : color.slateGray)};
  font-size: ${({ theme }) => theme.fontSize.font18};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeight.font400};
  line-height: 1.4;
  letter-spacing: 0.9px;
  display: grid;
  grid-template-columns: auto 1fr;
	gap: 16px;
	align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: ${({ theme }) => theme.fontSize.font14};
    letter-spacing: 0.7px;
    gap: 8px;
    }
`;

export const StyledListMarker = styled(ListMarker)`
  	circle {
      fill: ${({ theme: { darkMode, color } }) => (
    darkMode ? color.dodgerBlue : color.scienceBlue)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 6px;
    height: auto;
    }
`;
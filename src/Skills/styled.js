import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.boxShadow};
  border-radius: 4px;
  padding: 32px;
  margin-top: 72px;
`;

export const SectionBody = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 32px 0 0 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px 99px;
`;

export const ListItem = styled.li`
  color: ${({ theme }) => theme.color.slateGray};
  font-size: ${({ theme }) => theme.fontSize.font18};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeight.font400};
  line-height: 1.4;
  letter-spacing: 0.9px;
  display: grid;
  grid-template-columns: auto 1fr;
	gap: 16px;
	align-items: center;
`;

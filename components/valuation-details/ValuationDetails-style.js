import styled from "styled-components";
// import { CSSProp } from 'styled-components';

export const ValuationGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ValuationRow = styled.div`
  display: flex;
  line-height: 1.6;
  font-size: ${(props) => props.theme.typography.m.fontSize};
  color: ${(props) => props.theme.colors.neutral[600]};
  margin: 0.5rem 0;
`;

export const ValuationCol = styled.div`
  display: flex;
  width: 50%;
`;

export const ValuationColValue = styled(ValuationCol)`
  justify-content: ${({alignRight}) => alignRight ? 'flex-end' : 'flex-start'};
`;

export const ValuationValue = styled.span`
  width: fit-content;
  background-color: ${({purchaseGrowthValueBg}) => purchaseGrowthValueBg ? '#c2f7e1' : '#006b57'};
  padding: 0.05rem 1.45rem;
  border-radius: 0.70rem;
  display: flex;
`;


export const PurchaseValue = styled.div`
  color: ${(props) => props.theme.colors.neutral[900]};
`;
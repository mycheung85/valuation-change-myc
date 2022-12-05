import React from 'react';
import PropTypes from 'react';
import { AccountLabel, AccountSection, AccountListItem, InfoText } from '../../modules/property-details/style'
import { account, purchaseYearString, purchaseMonthString } from '../helper-functions';
import { ValuationGrid, ValuationRow, ValuationCol, ValuationColValue, ValuationValue } from './ValuationDetails-style';



export const ValuationDetails = ({purchaseValuation, purchaseValuationPercentage, annualAppreciationPercentage, purchaseGrowthValue}) => {
  return (
    <AccountSection>
      <ValuationGrid>
       <ValuationRow>
        <AccountLabel>Valuation Change</AccountLabel>
       </ValuationRow>
       <ValuationRow>
        <AccountListItem>
          <InfoText>
            Purchased for{" "}
            {new Intl.NumberFormat("en-GB", {
              style: "currency",
              currency: "GBP",
            }).format(Math.abs(account.originalPurchasePrice))}{" "}
            in {purchaseMonthString()} {" "} {purchaseYearString()}
          </InfoText>
        </AccountListItem>
       </ValuationRow>

       <ValuationRow>
        <ValuationCol>
        Since Purchase
        </ValuationCol>
        <ValuationColValue alignRight="alignRight">
    
        <ValuationValue purchaseGrowthValueBg={purchaseGrowthValue}>
          {new Intl.NumberFormat("en-GB", {
              style: "currency",
              currency: "GBP",
            }).format(Math.abs(purchaseValuation))} {" "}
            ({purchaseValuationPercentage} %)
        </ValuationValue>

        </ValuationColValue>

       </ValuationRow>        
       <ValuationRow>
        <ValuationCol>
        Annual appreciation
        </ValuationCol>
        <ValuationColValue alignRight="alignRight">
            <ValuationValue purchaseGrowthValueBg={purchaseGrowthValue}>
              {annualAppreciationPercentage} %
            </ValuationValue>
        </ValuationColValue>
       </ValuationRow>
      </ValuationGrid>
    </AccountSection>
  );
}


ValuationDetails.PropTypes = {
  purchaseValuation: PropTypes.number,
  purchaseValuationPercentage: PropTypes.number,
  annualAppreciationPercentage: PropTypes.number,
  purchaseGrowthValue: PropTypes.bool,
}
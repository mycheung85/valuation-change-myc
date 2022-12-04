import React from 'react';
import { ReactPropTypes } from 'react';
import { AccountLabel, AccountSection, AccountListItem, InfoText } from '../../modules/property-details/style'
import { account, purchaseYearString, purchaseMonthString } from '../helper-functions';
import { ValuationGrid, ValuationRow, ValuationCol, ValuationColValue, ValuationValue } from './ValuationDetails-style';



export const ValuationDetails = ({sincePurchaseValuationSum, sincePurchasePercentage, annualAppreciationSum, purchaseGrowthValue}) => {
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
            }).format(Math.abs(sincePurchaseValuationSum()))} {" "}
            ({sincePurchasePercentage()} %)
        </ValuationValue>
        </ValuationColValue>

       </ValuationRow>        
       <ValuationRow>
        <ValuationCol>
        Annual appreciation
        </ValuationCol>
        <ValuationColValue alignRight="alignRight">
            <ValuationValue purchaseGrowthValueBg={purchaseGrowthValue}>
              {annualAppreciationSum()} %
            </ValuationValue>
        </ValuationColValue>
       </ValuationRow>
      </ValuationGrid>
    </AccountSection>
  );
}


ValuationDetails.ReactPropTypes = {
  sincePurchaseValuationSum: ReactPropTypes.number,
  sincePurchasePercentage: ReactPropTypes.number,
  annualAppreciationSum: ReactPropTypes.number,
  purchaseGrowthValue: ReactPropTypes.bool,
}
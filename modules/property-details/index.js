/* eslint-disable max-statements */
import { add, format } from "date-fns";
import React, { useEffect, useState } from "react";
import PropTypes from 'react';
import { Button } from "../../components/button";
import RowContainer from "../../components/row-container";
import { ValuationDetails } from "../../components/valuation-details/ValuationDetails";
import {
  AccountHeadline, AccountLabel, AccountList, AccountListItem, AccountSection, InfoText, Inset
} from "./style";

import { account, sincePurchaseValuationSum, sincePurchasePercentageSum, annualAppreciationSum } from "../../components/helper-functions";

const Detail = ({}) => {
  let mortgage;
  const lastUpdate = new Date(account.lastUpdate);
  if (account.associatedMortgages.length) {
    mortgage = account.associatedMortgages[0];
  }

  const [purchaseGrowthValue, setPurchaseGrowthValue] = useState(false);
  const [purchaseValuation, setPurchaseValuation] = useState(0);
  const [purchaseValuationPercentage, setPurchaseValuationPercentage] = useState(0);
  const [annualAppreciationPercentage, setAnnualAppreciationPercentage] = useState(0);

  const purchaseGrowth = () => {
    if(sincePurchasePercentageSum() > 0) {
      return setPurchaseGrowthValue(true);
    } else {
      return setPurchaseGrowthValue(false);
    }
  }

  const purchaseValuationClick = () => {
    const purchaseValuation = sincePurchaseValuationSum();
    setPurchaseValuation(purchaseValuation)
  }

  const purchaseValuationPercentageClick = () => {
    const purchaseValuationPercentage = sincePurchasePercentageSum();
    setPurchaseValuationPercentage(purchaseValuationPercentage)
  }

  const annualAppreciationClick = () => {
    const annualAppreciation = annualAppreciationSum();
    setAnnualAppreciationPercentage(annualAppreciation)
  }

  const handleClickValuation = () => {
    purchaseValuationClick();
    purchaseValuationPercentageClick();
    annualAppreciationClick();
    purchaseGrowth();
  }
  return (
    <Inset>
      <AccountSection>
        <AccountLabel>Estimated Value</AccountLabel>
        <AccountHeadline purchaseGrowthValueBg={purchaseGrowthValue}>
          {new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
          }).format(account.recentValuation.amount)}
        </AccountHeadline>
        <AccountList>
          <AccountListItem><InfoText>
            {`Last updated ${format(lastUpdate, "do MMM yyyy")}`}
          </InfoText></AccountListItem>
          <AccountListItem><InfoText>
            {`Next update ${format(
              add(lastUpdate, { days: account.updateAfterDays }),
              "do MMM yyyy"
            )}`}
          </InfoText></AccountListItem>
        </AccountList>
      </AccountSection>
      <AccountSection>
        <AccountLabel>Property details</AccountLabel>
        <RowContainer>
          <AccountList>
            <AccountListItem><InfoText>{account.name}</InfoText></AccountListItem>
            <AccountListItem><InfoText>{account.bankName}</InfoText></AccountListItem>
            <AccountListItem><InfoText>{account.postcode}</InfoText></AccountListItem>
          </AccountList>
        </RowContainer>
      </AccountSection>

      <ValuationDetails 
        purchaseValuationPercentage={purchaseValuationPercentage} annualAppreciationPercentage={annualAppreciationPercentage} 
        purchaseGrowthValue={purchaseGrowthValue} 
        purchaseValuation={purchaseValuation}
      />


      {mortgage && (
        <AccountSection>
          <AccountLabel>Mortgage</AccountLabel>
          <RowContainer
            // This is a dummy action
            onClick={() => alert("You have navigated to the mortgage page")}
          >
            <AccountList>
              <AccountListItem><InfoText>
                {new Intl.NumberFormat("en-GB", {
                  style: "currency",
                  currency: "GBP",
                }).format(
                  Math.abs(account.associatedMortgages[0].currentBalance)
                )}
              </InfoText></AccountListItem>
              <AccountListItem><InfoText>{account.associatedMortgages[0].name}</InfoText></AccountListItem>
            </AccountList>
          </RowContainer>
        </AccountSection>
      )}
      <Button
        // This is a dummy action
        onClick={() =>  handleClickValuation()}
      >
        Edit account
      </Button>
    </Inset>
  );
};

export default Detail;

Detail.PropTypes = {
  purchaseValuation: PropTypes.number,
  sincePurchaseValuationSum: PropTypes.func,
  purchaseValuationPercentage: PropTypes.number,
  sincePurchasePercentageSum: PropTypes.func,
  annualAppreciation: PropTypes.number,
  annualAppreciationSum: PropTypes.func,
  purchaseGrowthValue: PropTypes.bool,
}

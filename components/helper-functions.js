export const account = {
  uid: "65156cdc-5cfd-4b34-b626-49c83569f35e",
  deleted: false,
  dateCreated: "2020-12-03T08:55:33.421Z",
  currency: "GBP",
  name: "15 Temple Way",
  bankName: "Residential",
  type: "properties",
  subType: "residential",
  originalPurchasePrice: 250000,
  originalPurchasePriceDate: "2017-09-03",
  recentValuation: { amount: 310000, status: "good" },
  associatedMortgages: [
    {
      name: "HSBC Repayment Mortgage",
      uid: "fb463121-b51a-490d-9f19-d2ea76f05e25",
      currentBalance: -175000,
    },
  ],
  canBeManaged: false,
  postcode: "BS1 2AA",
  lastUpdate: "2020-12-01T08:55:33.421Z",
  updateAfterDays: 30,
};

export const purchaseYearString = () => {
  return account.originalPurchasePriceDate.split("-")[0];
}

export const purchaseMonthString = () => {
  let purcahseMonth = account.originalPurchasePriceDate.split("-")[1];
  const date = new Date();
  date.setMonth(purcahseMonth);

  return date.toLocaleString('en-US', {
    month: 'long',
  });
}

export const sincePurchaseValuationSum = () => {
  let recentValuation = account.recentValuation.amount;
  let originalPurchase = account.originalPurchasePrice;
  return recentValuation - originalPurchase;
}

export const sincePurchasePercentageSum = () => {
  let originalPurchase = account.originalPurchasePrice;
  return (sincePurchaseValuationSum() / originalPurchase) * 100;
}



export const annualAppreciationSum = () => {
  let lastUpdatedString = account.lastUpdate.split('-')[0];
  let yearsSincePurchase = lastUpdatedString - purchaseYearString();
  return sincePurchasePercentageSum() / yearsSincePurchase
}

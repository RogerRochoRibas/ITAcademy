export function priceCalculator(newBudget) {
    if (newBudget['web']) { var webPrice = 500; } else { var webPrice = 0; }
    if (newBudget['web']) { var extraWeb = newBudget['pages'] * newBudget['langs'] * 30; } else { extraWeb = 0; }
    if (newBudget['seo']) { var seoPrice = 300; } else { var seoPrice = 0; }
    if (newBudget['ads']) { var adsPrice = 200; } else { var adsPrice = 0; }
    let newTotal = webPrice + seoPrice + adsPrice + extraWeb;
    newBudget['total'] = newTotal;
  }
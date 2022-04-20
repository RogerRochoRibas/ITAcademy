export function priceCalculator(newBudget) {
  var webPrice = 0; var seoPrice = 0; var adsPrice = 0;
    if (newBudget['web']) { webPrice = 500; } else { webPrice = 0; }
    if (newBudget['web']) { var extraWeb = newBudget['pages'] * newBudget['langs'] * 30; } else { extraWeb = 0; }
    if (newBudget['seo']) { seoPrice = 300; } else { seoPrice = 0; }
    if (newBudget['ads']) { adsPrice = 200; } else { adsPrice = 0; }
    let newTotal = webPrice + seoPrice + adsPrice + extraWeb;
    newBudget['total'] = newTotal;
  }
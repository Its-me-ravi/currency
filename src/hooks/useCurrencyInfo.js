import { useState, useEffect } from "react";

const mockCurrencyRates = {
    usd: { inr: 74.0, eur: 0.85, gbp: 0.75, jpy: 110.0, cad: 1.25, aud: 1.35, cny: 6.45, chf: 0.92, rub: 72.0 },
    inr: { usd: 0.013, eur: 0.011, gbp: 0.010, jpy: 1.48, cad: 0.017, aud: 0.018, cny: 0.087, chf: 0.012, rub: 0.99 },
    eur: { usd: 1.18, inr: 88.0, gbp: 0.89, jpy: 129.0, cad: 1.47, aud: 1.60, cny: 7.59, chf: 1.08, rub: 85.0 },
    gbp: { usd: 1.34, inr: 98.0, eur: 1.12, jpy: 145.0, cad: 1.66, aud: 1.80, cny: 8.53, chf: 1.21, rub: 95.0 },
    jpy: { usd: 0.0091, inr: 0.67, eur: 0.0077, gbp: 0.0069, cad: 0.011, aud: 0.012, cny: 0.059, chf: 0.0083, rub: 0.66 },
    cad: { usd: 0.80, inr: 58.5, eur: 0.68, gbp: 0.60, jpy: 90.0, aud: 1.07, cny: 5.12, chf: 0.74, rub: 57.0 },
    aud: { usd: 0.74, inr: 55.0, eur: 0.63, gbp: 0.56, jpy: 84.0, cad: 0.94, cny: 4.79, chf: 0.69, rub: 53.0 },
    cny: { usd: 0.15, inr: 11.5, eur: 0.13, gbp: 0.12, jpy: 16.8, cad: 0.20, aud: 0.21, chf: 0.14, rub: 11.3 },
    chf: { usd: 1.09, inr: 81.0, eur: 0.93, gbp: 0.83, jpy: 118.0, cad: 1.36, aud: 1.44, cny: 7.38, rub: 78.0 },
    rub: { usd: 0.014, inr: 1.01, eur: 0.012, gbp: 0.011, jpy: 1.52, cad: 0.018, aud: 0.019, cny: 0.088, chf: 0.013 }
  };
  
  

const useCurrencyInfo = (fromCurrency) => {
  const [rates, setRates] = useState({});

  useEffect(() => {
    setRates(mockCurrencyRates[fromCurrency] || {});
  }, [fromCurrency]);

  return rates;
};

export default useCurrencyInfo;

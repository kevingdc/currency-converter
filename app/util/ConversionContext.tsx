import React, { createContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';

import { api } from '../util/api';

type ContextType = {
  baseCurrency: string;
  quoteCurrency: string;
  swapCurrencies(): void;
  setBaseCurrency(currency: string): void;
  setQuoteCurrency(currency: string): void;
  date: string;
  rates: Object;
  isLoading: boolean;
};

const DEFAULT_BASE_CURRENCY = 'USD';
const DEFAULT_QUOTE_CURRENCY = 'GBP';

export const ConversionContext = createContext<ContextType>();

type Props = {
  children: React.ReactNode;
};

export function ConversionContextProvider({ children }: Props) {
  const [baseCurrency, _setBaseCurrency] = useState(DEFAULT_BASE_CURRENCY);
  const [quoteCurrency, setQuoteCurrency] = useState(DEFAULT_QUOTE_CURRENCY);
  const [date, setDate] = useState();
  const [rates, setRates] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  function setBaseCurrency(currency: string): Promise<void> {
    setIsLoading(true);
    return api(`/latest?base=${currency}`)
      .then(res => {
        _setBaseCurrency(currency);
        setDate(res.date);
        setRates(res.rates);
      })
      .catch(error => {
        console.log(error);
        Alert.alert('Sorry, something went wrong!', error.message);
      })
      .finally(() => setIsLoading(false));
  }

  function swapCurrencies(): void {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  }

  const contextValue = {
    baseCurrency,
    quoteCurrency,
    swapCurrencies,
    setBaseCurrency,
    setQuoteCurrency,
    date,
    rates,
    isLoading,
  };

  useEffect(() => {
    setBaseCurrency(DEFAULT_BASE_CURRENCY);
  }, []);

  return (
    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  );
}

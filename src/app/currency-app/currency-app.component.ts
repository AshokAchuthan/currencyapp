import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-app',
  templateUrl: './currency-app.component.html',
  styleUrls: ['./currency-app.component.css']
})
export class CurrencyAppComponent {
  value = 0;
  currencyCode = 'USD';
  targetCurrency = 'USD';
  convertedValue = '';
  currencyCodes = ['INR', 'USD', 'EUR', 'GBP', 'JPY'];
  
  convert(targetCurrency: string = this.targetCurrency): void {
    const exchangeRates: {[key: string]: number} = {
      INR: 82.10,
      USD: 1,
      EUR: 0.92,
      GBP: 0.81,
      JPY: 130.80,
    };
  
    const convertedValue = (this.value / exchangeRates[this.currencyCode]) * exchangeRates[targetCurrency];
    const symbol = this.currencySymbol[targetCurrency];
    this.convertedValue = `${convertedValue.toFixed(2)} ${symbol}`;
  }
  
  get currencySymbol(): {[key: string]: string} {
    return {
      INR: '₹',
      USD: '$',
      EUR: '€',
      GBP: '£',
      JPY: '¥',
    };
  }  
}
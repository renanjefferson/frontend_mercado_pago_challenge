import IMercadoPago from './index';

declare global {
  interface Window {
    MercadoPago: IMercadoPago;
  }
}

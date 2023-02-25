import MercadoPago from './index';

declare global {
  interface Window {
    MercadoPago: MercadoPago;
  }
}

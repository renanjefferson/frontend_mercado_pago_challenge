export default interface MercadoPago {
  AJAX: (t: any) => void;
  clearSession: () => void;
  createDeviceProvider: (n: any) => void;
  deviceProfileId: string;
  getAllPaymentMethods: (t: any) => any;
  getIdentificationTypes: () => any;
  getIssuers: (e: any) => Promise<any>;
  getPaymentMethods: (e: any) => Promise<any>;
  initMercadopagP: () => void;
  initialized: boolean;
  initializedInsights: boolean;
  key: string;
  referer: string;
  sessionId: any;
  setPaymentMethods: (e: any) => void;
  setPublishableKey: (key: string) => void;
  tokenId: string;
  validateBinPattern: (e: any, t: any) => boolean;
  validateCardNumber: (e: any, t: any, n: any) => void;
  validateCardholderName: (e: any) => boolean;
  validateExpiryDate: (e: any, t: any) => boolean;
  validateIdentification: (e: any, t: any) => boolean;
  validateLuhn: (e: any) => boolean;
  validateSecurityCode: (e: any, t: any, n: any) => any;
  version: string;
}

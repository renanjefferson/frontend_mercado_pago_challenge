export function maskCardNumber(e: React.FormEvent<HTMLInputElement>) {
  let { value } = e.currentTarget;
  value = Array.from(
    value
      .replaceAll(/\D/g, '')
      .matchAll(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/g)
  )[0]
    .slice(1, 5)
    .join(' ')
    .trim();
  e.currentTarget.value = value;
}

export function maskCardExpirationMonth(e: React.FormEvent<HTMLInputElement>) {
  let { value } = e.currentTarget;
  value = value.replaceAll(/\D{0,2}/g, '');
  e.currentTarget.value = value;
}

export function maskCardExpirationYear(e: React.FormEvent<HTMLInputElement>) {
  let { value } = e.currentTarget;
  value = value.replaceAll(/\D{0,4}/g, '');
  e.currentTarget.value = value;
}

export function maskSecurityCode(e: React.FormEvent<HTMLInputElement>) {
  let { value } = e.currentTarget;
  value = value.replaceAll(/\D{0,4}/g, '');
  e.currentTarget.value = value;
}

export function maskIdentificationNumber(e: React.FormEvent<HTMLInputElement>) {
  let { value } = e.currentTarget;
  value = value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
  e.currentTarget.value = value;

  return e;
}

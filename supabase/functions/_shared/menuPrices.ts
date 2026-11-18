export const DELIVERY_FEE = 500;
export const DELIVERY_RATE_PER_KM = 50;

export const MENU_PRICES: Record<number, number> = {
  1: 1500,
  2: 1500,
  3: 1700,
  4: 1700,
  5: 1700,
  6: 1900,
  7: 1900,
  8: 1900,
  9: 2200,
  10: 2600,
  11: 2500,
  12: 2600,
  13: 3000,
  14: 2000,
  15: 2500,
  16: 3000,
  17: 1500,
  18: 300,
  19: 250,
  20: 500,
  21: 500,
  22: 500,
};

export function calculatePaystackFee(amount: number): number {
  if (amount <= 0) return 0;
  let fee = Math.ceil(amount * 0.015);
  if (amount > 2500) fee += 100;
  return Math.min(fee, 2000);
}

export function calculateDeliveryFee(distanceKm: number): number {
  if (!Number.isFinite(distanceKm) || distanceKm <= 0) return DELIVERY_FEE;
  return Math.max(DELIVERY_FEE, Math.ceil(distanceKm) * DELIVERY_RATE_PER_KM);
}

export function calculateTotal(
  items: Array<{ id: number | string; quantity?: number }>,
  deliveryFee = DELIVERY_FEE,
): number {
  if (!Array.isArray(items) || items.length === 0) return 0;
  const subtotal = items.reduce(
    (sum, item) => sum + (MENU_PRICES[Number(item.id)] ?? 0) * (item.quantity || 1),
    0,
  );
  const withDelivery = subtotal + deliveryFee;
  return withDelivery + calculatePaystackFee(withDelivery);
}

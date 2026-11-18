export const DELIVERY_FEE = 500;
export const DELIVERY_RATE_PER_KM = 50;

export function calculatePaystackFee(amount) {
  if (amount <= 0) return 0;
  let fee = Math.ceil(amount * 0.015);
  if (amount > 2500) fee += 100;
  return Math.min(fee, 2000);
}

// Authoritative server-side price list — never trust prices from the client
export const MENU_PRICES = {
  3: 1700, // Small Plate of Jollof & Fried Rice with Beef
  4: 1700, // Spag with Beef
  5: 1700, // Pounded Yam per Plate
  6: 1900, // Small Plate of Asun Jollof with Beef
  7: 1900, // Rice and Beans Small Plate with Beef
  8: 1900, // Village Rice with Beef Small Plate
  9: 2200, // Big Plate of Jollof & Fried Rice with Beef
  10: 2600, // Big Plate of Asun Jollof with Beef
  11: 2500, // Rice and Beans with Beef Big Plate
  12: 2600, // Village Rice with Beef Big Plate
  13: 3000, // Yam and Egg
  14: 2000, // Small Chicken
  15: 2500, // Big Chicken
  16: 3000, // Turkey
  17: 1500, // Fish
  18: 300, // Egg
  19: 250, // Table Water
  20: 500, // Big Coke
  21: 500, // Big Fanta
  22: 500, // Big Sprite
};

export function calculateDeliveryFee(distanceKm) {
  if (!Number.isFinite(distanceKm) || distanceKm <= 0) return DELIVERY_FEE;
  return Math.max(DELIVERY_FEE, Math.ceil(distanceKm) * DELIVERY_RATE_PER_KM);
}

export function calculateTotal(items, deliveryFee = DELIVERY_FEE) {
  if (!Array.isArray(items) || items.length === 0) return 0;
  const subtotal = items.reduce((sum, item) => sum + (MENU_PRICES[item.id] ?? 0) * (item.quantity || 1), 0);
  const withDelivery = subtotal + deliveryFee;
  const paystackFee = calculatePaystackFee(withDelivery);
  return withDelivery + paystackFee;
}

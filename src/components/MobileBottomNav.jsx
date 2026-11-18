function Icon({ type }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', viewBox: '0 0 24 24' };
  if (type === 'home') return <svg {...common}><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9M9 20v-6h6v6" /></svg>;
  if (type === 'menu') return <svg {...common}><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /></svg>;
  if (type === 'cart') return <svg {...common}><path d="M4 5h2l1.3 9.2a2 2 0 0 0 2 1.8h7.7a2 2 0 0 0 1.9-1.5L20 8H7" /><circle cx="10" cy="19" r="1" /><circle cx="17" cy="19" r="1" /></svg>;
  if (type === 'orders') return <svg {...common}><path d="M7 3.5h10v17L12 17l-5 3.5z" /><path d="M9.5 8h5M9.5 11.5h5" /></svg>;
  return <svg {...common}><circle cx="12" cy="8" r="3.2" /><path d="M5.5 20a6.5 6.5 0 0 1 13 0" /></svg>;
}

function MobileBottomNav({ activePage, cartCount, onNavigate }) {
  const items = [
    { id: 'home', target: 'home', label: 'Home', icon: 'home' },
    { id: 'menu', target: 'menu', label: 'Menu', icon: 'menu', prominent: true },
    { id: 'cart', target: 'cart', label: 'Cart', icon: 'cart', badge: cartCount },
    { id: 'orders', target: 'track', label: 'Orders', icon: 'orders' },
    { id: 'account', target: 'profile', label: 'Account', icon: 'account' },
  ];

  return (
    <nav className="mikun-mobile-nav md:hidden" aria-label="Mobile navigation">
      {items.map((item) => {
        const active = activePage === item.target;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onNavigate(item.target)}
            className={`mikun-mobile-nav-item ${item.prominent ? 'mikun-mobile-nav-primary' : ''} ${active ? 'is-active' : ''}`}
            aria-label={item.label}
          >
            <span className="relative">
              <Icon type={item.icon} />
              {item.badge > 0 && <span className="mikun-mobile-nav-badge">{item.badge}</span>}
            </span>
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

export default MobileBottomNav;

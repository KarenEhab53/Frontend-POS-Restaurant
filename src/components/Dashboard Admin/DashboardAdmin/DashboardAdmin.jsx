import React from 'react'
import styles from './DashboardAdmin.module.css'
import { FaBagShopping, FaBoxesStacked, FaClipboardList, FaTriangleExclamation } from 'react-icons/fa6'
import { AlertTriangle, Store } from 'lucide-react'

const StatCard = ({ title, value, icon, colorClass }) => (
  <div className={styles.statCard}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div className={`${styles.statIconWrapper} ${colorClass}`}>{icon}</div>
      <div style={{ marginLeft: '12px' }}>
        <p className={styles.statTitle}>{title}</p>
        <h4 className={styles.statValue}>{value}</h4>
      </div>
    </div>
  </div>
)

const OutOfStockCard = ({ items }) => (
  <div className={styles.outOfStockCard}>
    <div className={styles.outOfStockHeader}>
      <AlertTriangle size={18} strokeWidth={2.5} />
      <span className={styles.outOfStockTitle}>Out of Stock Items</span>
    </div>
    <div className={styles.outOfStockBadges}>
      {items.map((item) => (
        <span key={item} className={styles.badge}>{item}</span>
      ))}
    </div>
  </div>
)

export default function DashboardAdmin() {
  const outOfStockItems = ['Cheese']

  return (
    <div style={{ position: 'relative' }}>
      <div className="row g-3">
        <div className="col-md-3">
          <StatCard title="Total Products" value="2" icon={<FaBagShopping />} colorClass="bg-primary" />
        </div>
        <div className="col-md-3">
          <StatCard title="Total Ingredients" value="5" icon={<FaBoxesStacked />} colorClass="bg-success" />
        </div>
        <div className="col-md-3">
          <StatCard title="Total Orders" value="0" icon={<FaClipboardList />} colorClass="bg-warning" />
        </div>
        <div className="col-md-3">
          <StatCard title="Low Stock Items" value="?" icon={<FaTriangleExclamation />} colorClass="bg-danger" />
        </div>
      </div>

      <hr />

      <div className={styles.bottomSection}>
        <div className={styles.revenueCard}>
          <h3 className={styles.revenueTitle}>Total Revenue</h3>
          <div className={styles.revenueValue}>$0.00</div>
        </div>
        <OutOfStockCard items={outOfStockItems} />
      </div>
      <button style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', backgroundColor: 'var(--color-primary)', color: '#fff', border: 'none', padding: '0.75rem 1.25rem', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', cursor: 'pointer', boxShadow: 'var(--shadow-md)' }}>
        <Store size={20} /> POS Screen
      </button>
    </div>
  )
}

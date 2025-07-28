// components/Sidebar.tsx
import Link from 'next/link'
import styles from '../styles/Sidebar.module.css'

export default function Sidebar({ closeSidebar }) {
  const handleClick = () => {
    if (closeSidebar) closeSidebar()
  }

  return (
    <aside className={styles.sidebar}>
      <nav>
        <h1>Menu</h1>
        <ul className={styles.menu} style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', textDecoration: 'none', textTransform: 'none', 'color': 'aliceblue' }}>
          <li><Link onClick={handleClick} href="/dashboard">Dashboard</Link></li>
          <li><Link onClick={handleClick} href="/settings">Paramètres</Link></li>
          <li><Link onClick={handleClick} href="/clients">clients</Link></li>
          <li><Link onClick={handleClick} href="/fournisseurs">fournisseurs</Link></li>
        </ul>
      </nav>
    </aside>
  )
}





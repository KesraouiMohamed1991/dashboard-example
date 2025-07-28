import { useState } from 'react'
import { useRouter } from 'next/router'
import Sidebar from '../components/Sidebar'
import useMobile from '../hook/useMobile'
import styles from '../styles/Layout.module.css'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const isMobile = useMobile()
  const noSidebarRoutes = ['/login', '/']
  const showSidebar = !noSidebarRoutes.includes(router.pathname)

  const [sidebarOpen, setSidebarOpen] = useState(false)


  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      {showSidebar && (
        <>
          {isMobile ? (
            sidebarOpen && (
              <div className={styles.overlayContainer}>
                <div
                  className={styles.overlayBackground}
                  onClick={() => setSidebarOpen(false)}
                  aria-label="Fermer le menu latéral"
                  tabIndex={0}
                  role="button"
                  onKeyDown={e => {
                    if (e.key === 'Escape' || e.key === 'Enter') setSidebarOpen(false)
                  }}
                />
                <div className={styles.sidebarMobile}>
                  <Sidebar closeSidebar={() => setSidebarOpen(false)} />
                </div>
              </div>
            )
          ) : (
            <div className={styles.sidebarDesktop}>
              <Sidebar />
            </div>
          )}
        </>
      )}

      {/* Main content */}
      <div className={styles.main}>
        {isMobile && showSidebar && (
          <button
            onClick={() => setSidebarOpen(true)}
            className={styles.burger}
            aria-label="Ouvrir le menu latéral"
          >
            ☰
          </button>
        )}
        <main className={styles.pageContent}>
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  )
}
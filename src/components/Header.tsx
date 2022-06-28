import { CSSProperties, ReactNode } from 'react'

import { ReactComponent as GitHub } from '../assets/github.svg'
import { vars } from '../styles/vars.css'

const styles: Record<string, CSSProperties> = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '1.5rem 2rem',
  },
  h1: {
    fontSize: '2rem',
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  nav: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  ul: {
    display: 'flex',
  },
  a: {
    display: 'block',
    textDecoration: 'none',
    width: '2.5rem',
    fill: vars.colors.text,
  },
}

export const Header = ({ children }: { children: ReactNode }) => (
  <header style={styles.header}>
    <h1 style={styles.h1}>{children}</h1>
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li>
          <a style={styles.a} href="https://github.com/kanziw/fibonachicken" target='_blank' rel="noreferrer">
            <GitHub />
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

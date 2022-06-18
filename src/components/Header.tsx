import { useTheme } from 'next-themes'
import { CSSProperties, ReactNode } from 'react'

import GitHub from '../assets/github.svg'
import GitHubDark from '../assets/github_dark.svg'

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
    listStyle: 'none',
    display: 'flex',
  },
  a: {
    display: 'block',
    textDecoration: 'none',
  },
  liImg: {
    height: '2.5rem',
  },
}

export const Header = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme()

  return (
    <header style={styles.header}>
      <h1 style={styles.h1}>{children}</h1>
      <nav style={styles.nav}>
        <ul style={styles.ul}>
          <li>
            <a style={styles.a} href="https://github.com/kanziw/fibonachicken" target='_blank' rel="noreferrer">
              <img style={styles.liImg} src={theme === 'dark' ? GitHubDark : GitHub} alt='GitHub' />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

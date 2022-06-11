import { ReactNode } from 'react'

import { headerStyle } from '../styles.css'

export const Header = ({ children }: { children: ReactNode }) => (
  <h1 className={headerStyle}>{children}</h1>
)

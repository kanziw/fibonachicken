import { useTheme } from 'next-themes'
import { CSSProperties, ReactNode } from 'react'

import { vars } from '../styles/vars.css'

const styles: Record<string, CSSProperties> = {
  debugger: {
    position: 'fixed',
    bottom: 0,
    width: '80%',
    border: `1px solid ${vars.colors.text}`,
    margin: '0 8%',
    padding: '1%',
  },
}

type Props = {
  isDebuggerOn: boolean,
  children?: ReactNode,
}

export const Debugger = ({ isDebuggerOn }: Props) => {
  const { theme, setTheme } = useTheme()

  return (
    <div style={{ ...styles.debugger, display: isDebuggerOn ? 'block' : 'none' }}>
      Theme:
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="darcular">Darcular</option>
      </select>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { capitalizeFirstLetter } from '../../utils'

function ThemeToggler() {
  const [theme, setTheme] = useState('dark')

  const changeTheme = (val) => {
    setTheme(val)
    const root = window.document.documentElement
    root.setAttribute('data-theme', val)
    localStorage.setItem('theme', val)
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')

    if (storedTheme && storedTheme === 'dark') {
      changeTheme('dark')
    } else {
      localStorage.setItem('theme', 'dark')
      changeTheme('dark')
    }
  }, [])

  return (
    <button
      type="button"
      onClick={() => changeTheme('dark')} // Mengubah tema menjadi 'dark'
    >
      {capitalizeFirstLetter(theme)}
      {' '}
      Theme
    </button>
  )
}

export default ThemeToggler

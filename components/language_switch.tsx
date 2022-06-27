import React, { useCallback } from 'react'
import { useRouter } from 'next/router'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'

export const LanguageSwitch = ({ className = '' }) => {
  const { locale, push } = useRouter()

  const handleOnChange = useCallback(
    (event, value: 'de' | 'en') => {
      push(`/${value}`)
    },
    [push]
  )

  return (
    <ToggleButtonGroup
      value={locale}
      exclusive
      onChange={handleOnChange}
      aria-label="Page Language"
      className={className}
    >
      <ToggleButton value="en" aria-label="EN">
        EN
      </ToggleButton>
      <ToggleButton value="de" aria-label="DE">
        DE
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

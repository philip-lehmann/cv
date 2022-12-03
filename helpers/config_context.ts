import { createContext, useContext } from 'react'

export interface ConfigProps {
  googleAnalyticsKey?: string
  rollbarClientToken?: string
  env: string
  siteUrl: string
}

const ConfigContext = createContext<ConfigProps>({
  googleAnalyticsKey: undefined,
  rollbarClientToken: undefined,
  env: 'development',
  siteUrl: 'http://localhost:3000'
})

export const ConfigProvider = ConfigContext.Provider

export const useConfig = () => {
  return useContext(ConfigContext)
}

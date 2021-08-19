import React, { memo, FC } from 'react'

type GoogleAnalyticsProps = {
  googleAnalyticsKey: string
}

const GoogleAnalytics: FC<GoogleAnalyticsProps> = memo(({ googleAnalyticsKey }: GoogleAnalyticsProps) => {
  if (!googleAnalyticsKey) return null
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsKey}`}></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', '${googleAnalyticsKey}');`
        }}
      />
    </>
  )
})

GoogleAnalytics.displayName = 'GoogleAnalytics'
export default GoogleAnalytics

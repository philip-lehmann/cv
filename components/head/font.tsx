import React, { memo, FC } from 'react'

const Font: FC = memo(() => {
  return (
    <script
      defer
      dangerouslySetInnerHTML={{
        __html: `
            var loadDeferredStyles = function() {
              var link = document.createElement('link');
              link.rel = 'stylesheet';
              link.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500'
              document.querySelector('head').appendChild(link);
            }
            var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
            if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
            else window.addEventListener('load', loadDeferredStyles);`
      }}
    />
  )
})

Font.displayName = 'Font'
export default Font

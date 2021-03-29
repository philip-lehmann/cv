import React, { FC } from 'react'

const Header: FC<HeaderProps> = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <a
          href="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </a>
      </h1>
    </div>
  </header>
)

interface HeaderProps {
  siteTitle: string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header

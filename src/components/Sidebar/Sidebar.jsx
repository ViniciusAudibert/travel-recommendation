import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
// import Link from 'next/link'
// import AdminNavbarLinks from '../Navbars/AdminNavbarLinks.jsx'

const Sidebar = (props) => {
  const router = useRouter()
  const [width, setWidth] = useState(1080)

  useEffect(() => {
    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [setWidth])

  function activeRoute(routeName) {
    return router.pathname === routeName ? 'active' : ''
  }

  function updateDimensions() {
    setWidth(window.innerWidth)
  }

  function componentDidMount() {}

  const sidebarBackground = {
    backgroundImage: 'url(' + props.image + ')',
  }

  return (
    <div id="sidebar" className="sidebar" data-color="orange" data-image={props.image}>
      {props.hasImage ? <div className="sidebar-background" style={sidebarBackground} /> : null}
      <div className="logo">
        <a href="/" className="simple-text logo-mini">
          <div className="logo-img">
            <img src="/img/traveler.svg" alt="logo_image" />
          </div>
        </a>
        <a href="/" className="simple-text logo-normal">
          Travel Recommendation
        </a>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav">
          {props.routes.map((prop, key) => {
            if (!prop.redirect)
              return (
                <li className={prop.upgrade ? 'active active-pro' : activeRoute(prop.path)} key={key}>
                  {/* <Link > */}
                  <a href={prop.path} className="nav-link">
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </a>
                  {/* </Link> */}
                </li>
              )
            return null
          })}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar

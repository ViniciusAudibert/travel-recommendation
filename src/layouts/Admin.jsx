import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './admin.scss'

import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system'

import AdminNavbar from '../components/Navbars/AdminNavbar'
// import Footer from '../components/Footer/Footer'
import Sidebar from '../components/Sidebar/Sidebar'

import { style } from '../variables/Variables'

import routes from '../routes'

class Admin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      _notificationSystem: null,
      image: '/img/sidebar-3.jpg',
      color: 'orange',
      hasImage: true,
      fixedClasses: 'dropdown show-dropdown open',
    }
  }

  handleNotificationClick = (position) => {
    var color = Math.floor(Math.random() * 4 + 1)
    var level
    switch (color) {
      case 1:
        level = 'success'
        break
      case 2:
        level = 'warning'
        break
      case 3:
        level = 'error'
        break
      case 4:
        level = 'info'
        break
      default:
        break
    }
  }
  getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === '/admin') {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} handleClick={this.handleNotificationClick} />}
            key={key}
          />
        )
      } else {
        return null
      }
    })
  }

  handleImageClick = (image) => {
    this.setState({ image: image })
  }

  handleHasImage = (hasImage) => {
    this.setState({ hasImage: hasImage })
  }

  handleFixedClick = () => {
    if (this.state.fixedClasses === 'dropdown') {
      this.setState({ fixedClasses: 'dropdown show-dropdown open' })
    } else {
      this.setState({ fixedClasses: 'dropdown' })
    }
  }
  componentDidMount() {
    // this.setState({ _notificationSystem: this.refs.notificationSystem })
    var _notificationSystem = this.refs.notificationSystem
    var color = Math.floor(Math.random() * 4 + 1)
    var level
    switch (color) {
      case 1:
        level = 'success'
        break
      case 2:
        level = 'warning'
        break
      case 3:
        level = 'error'
        break
      case 4:
        level = 'info'
        break
      default:
        break
    }
  }

  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf('nav-open') !== -1
    ) {
      document.documentElement.classList.toggle('nav-open')
    }
    if (e.history && e.history.action === 'PUSH') {
      document.documentElement.scrollTop = 0
      document.scrollingElement.scrollTop = 0
      this.refs.mainPanel.scrollTop = 0
    }
  }

  render() {
    return (
      <div className="wrapper">
        <NotificationSystem ref="notificationSystem" style={style} />
        <Sidebar {...this.props} routes={routes} image={this.state.image} color={this.state.color} hasImage={this.state.hasImage} />

        <div id="main-panel" className="main-panel" ref="mainPanel">
          <AdminNavbar {...this.props} brandText="Teste" />

          {this.props.children}

          {/* <Footer /> */}
        </div>
      </div>
    )
  }
}

export default Admin

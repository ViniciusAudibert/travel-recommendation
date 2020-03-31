import React from 'react'
import Admin from '../src/layouts/Admin'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../src/assets/css/animate.min.css'
import '../src/assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0'
import '../src/assets/css/demo.scss'
import '../src/assets/css/pe-icon-7-stroke.scss'

export default ({ Component, pageProps }) => (
  <Admin>
    <Component {...pageProps} />
  </Admin>
)

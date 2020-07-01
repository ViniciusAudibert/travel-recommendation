import React from 'react'
import Head from 'next/head'
import Admin from '../src/layouts/Admin'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../src/assets/css/animate.min.css'
import '../src/assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0'
import '../src/assets/css/demo.scss'
import '../src/assets/css/pe-icon-7-stroke.scss'

export default ({ Component, pageProps }) => (
  <>
    <Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WR2BCBD');`,
        }}
      />
      <style dangerouslySetInnerHTML={{ __html: `.async-hide { opacity: 0 !important}` }} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
})(window,document.documentElement,'async-hide','dataLayer',4000,
{'GTM-WR2BCBD':true});`,
        }}
      />
    </Head>

    <noscript
      dangerouslySetInnerHTML={{
        __html: `
<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WR2BCBD"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
`,
      }}
    />

    <Admin>
      <Component {...pageProps} />
    </Admin>
  </>
)

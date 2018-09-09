import React from 'react';
import { Helmet } from 'react-helmet'

import { SiteTitle } from 'env'

const Head = (props) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{ props.title } | { SiteTitle }</title>
  </Helmet>
)

export default Head

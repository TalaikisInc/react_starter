import React from 'react';

import { SiteUrl, SiteTitle } from 'env'

const Footer = () => (
  <div>
    <p>&copy; {(new Date()).getFullYear()}, <a href={SiteUrl}>{SiteTitle}</a></p>
  </div>
)

export default Footer

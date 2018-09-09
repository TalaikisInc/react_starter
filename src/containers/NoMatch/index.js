import React from 'react'

import Async from 'components/Async'
const Head = Async(() => import('components/Head'))
const Container = Async(() => import('templates/Container'))
const Heading = Async(() => import('templates/Heading'))
const Paragraph = Async(() => import('templates/Paragraph'))

const NoMatch = (props) => (
  <Container>
    <Head title="Not Found" />
    <Heading>Not Found</Heading>
    <Paragraph>Sorry, this page doesn't exist.</Paragraph>
  </Container>
)

export default NoMatch

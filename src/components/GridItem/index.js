import React from 'react'
import PropTypes from 'prop-types'

//@TOOD needs link and image components
import { randomNumber } from 'utils'
import { Item, StyledLink, Overlay, ItemTitle, ItemSubtitle } from './styles'

const GridItem = ({ uid, sizes, alt, title, subtitle, callAction, what }) => (
  <Item flexDirection="column" key={uid} style={{ marginTop: `${randomNumber(4, 8) * 2}rem` }}>
    <StyledLink to={uid}>
      <Overlay justifyContent="center" alignItems="center" flexDirection="column">
        <span>{callAction}</span>
        <span>{what}</span>
      </Overlay>
      <Image sizes={sizes} alt={alt} />
    </StyledLink>
    <ItemTitle>{title}</ItemTitle>
    <ItemSubtitle>{subtitle}</ItemSubtitle>
  </Item>
)

GridItem.propTypes = {
  uid: PropTypes.string.isRequired,
  sizes: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  callAction: PropTypes.string.isRequired,
  what: PropTypes.string.isRequired,
}

export default GridItem

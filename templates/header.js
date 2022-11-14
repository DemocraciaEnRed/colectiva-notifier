const React = require('react')
const ReactDom = require('react-dom/server')
const { Email, Item, Span, A, renderEmail, Box, Image } = require('react-html-email')
const Styles = require('./styles')
const { ORGANIZATION_URL } = process.env

const MailHeader = (props) => {
  return (
    <Item align='center' style={Styles.headerStyle}>
      <Image src={`${ORGANIZATION_URL}/static/assets/colectiva.png`} align='center' style={{ width: 'auto', maxHeight: 120, margin: 25 }} />
    </Item>
  )
}

module.exports = MailHeader

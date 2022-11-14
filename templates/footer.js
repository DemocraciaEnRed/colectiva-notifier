const React = require('react')
const ReactDom = require('react-dom/server')
const { Email, Item, Span, A, renderEmail, Box, Image } = require('react-html-email')
const Styles = require('./styles')
const { ORGANIZATION_URL } = process.env

const MailFooter = (props) => {
  return (
    <Item style={Styles.footerStyle}>
      <Box align='center'>
        <Item align='center'>
          <Image src={`${ORGANIZATION_URL}/static/assets/images/logotipo.png`} align='center' style={{maxWidth: '180px'}} />
        </Item>
        <Item align='center'>
          <Span {...Styles.textStyle}>
            <b>COLECTIVA ES UN PROYECTO DE FUNDACIÓN ARTEMISAS</b><br></br><br></br>
            <A href='https://www.artemisas.org' style={Styles.linkFooterStyle}>www.artemisas.org</A><br></br>
            <A href='mailto:organizacionartemisas@gmail.com' style={Styles.linkFooterStyle}>organizacionartemisas@gmail.com</A><br></br>
            <A href='https://www.facebook.com/OrganizacionArtemisas/' style={Styles.linkFooterStyle}>Facebook</A> | <A href="https://twitter.com/Artemisas_org" style={Styles.linkFooterStyle}>Twitter</A> | <A href="https://instagram.com/organizacionartemisas?igshid=YmMyMTA2M2Y=" style={Styles.linkFooterStyle}>Instagram</A>
          </Span>
        </Item>
      </Box>
    </Item>
  )
}

module.exports = MailFooter

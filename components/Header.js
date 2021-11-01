//+
import { useRouter } from 'next/router'
import { useContext } from 'react'
import HeaderHome from './HeaderHome'
import AuthContext from '@/context/AuthContext'
import { Container, Row, Col } from 'react-bootstrap'

export default function Header(homeHeader, menu) {
  const { user, logout } = useContext(AuthContext)
  const router = useRouter()
  return (
    <div>
      <section className="top-bar-area home-3">
      <Container>
        <Row>
          <Col md={6} >
              <div className="pull-left">
                <ul className="contact-info">
                  <li><span><i className="fc-icon ftc-icon-email"></i> {homeHeader.homeHeader.header_email !== "" ? homeHeader.homeHeader.header_email : ""}</span></li>
                  <li><span><i className="fc-icon ftc-icon-phone-contact"></i> {homeHeader.homeHeader.header_tel !== "" ? homeHeader.homeHeader.header_tel : ""}</span></li>
                </ul>
              </div>
          </Col>
          <Col md={6} >
          <div className="pull-right">
            <ul className="social">
              {homeHeader.homeHeader.cocial_buttons !== false ? homeHeader.homeHeader.cocial_buttons.map((evt, index) => {
                      return (
                        <li key={index}><a href={evt.link}><i className={evt.cocil == 'google-plus' ? "fa fa-" + [evt.cocil] : "fa myfbpd fa-" + [evt.cocil]} ></i></a></li>
                       )
                }) : ' '}
            </ul>
          </div>
          </Col>
        </Row>
      </Container>
      </section>
      {router.pathname === '/' && <HeaderHome homeHeader={homeHeader} menu={menu} />}

    </div>

   
  )
}
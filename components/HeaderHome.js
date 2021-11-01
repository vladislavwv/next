import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function HeaderHome(homeHeader) {
 
    return (
      <div>
        <section className="logo-area-h3">
          <Container>
            <Row>
              <Col md={12} >
                <div className="logo-h3 text-center">
                  <a href="index.html"><img src={homeHeader.homeHeader.home[0].page_logo_src} alt="" style={{ maxWidth: '259px' }} /></a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <header className="header home-3 stricky">
        
        <Container>
                <div className="has-angle">
                    <nav className="navigation clearfix">
                        <div id="menuzord" className="menuzord">
                            <a href="#" className="menuzord-brand">
                                <img src={homeHeader.homeHeader.home[0].page_logo_src} alt="" style={{ maxWidth: '259px' }} />
                            </a>
                            <ul className="menuzord-menu" >

                                 {homeHeader.homeHeader.menu.items.map((evt, index) => {
                                        return (
                                            <li key={index}>
                                                <a href="/" className="flip-flop-btn"><span data-hover={evt.title}>{evt.title}</span></a>
                                                {[evt].map((item, index3) => { 
                                                    
                                                    return (
                                                        item.children ? <ul key={index3} className="dropdown none" style={{ right: 'auto', display: 'block' }}> 
                                                        {item.children.map((cases, index2) => {
                                                            return (
                                                                <li key={index2}><a href={cases.url}>{cases.title}</a></li>
                                                               )
                                                        })}
                                                        </ul> : " "     
                                                    )
                                                } )
                                                }
                                            </li>

                                        )
                                    
                                })}
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="search-box collapse" id="search-box">
                    <form action="#">
                        <input type="text" placeholder="To Search Start Typing..." />
                    </form>
                </div>
            </Container>
        </header>
      </div>
      
    )
  }
  

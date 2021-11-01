//+
import Link from 'next/link'
import Layout from '@/components/Layout'
import Case from '@/components/Case'
import Trainer from '@/components/Trainer'
import Gitnessgallery from '@/components/Gitnessgallery'
import Pattern from '@/components/Pattern'
import Workout from '@/components/Workout'
import { API_URL } from '../config/index'




export default function HomePage({ home, menu, homePage, homeHeader, section_case, fitness_team, fitness_gallery, workout }) {
  return (
      
    <Layout home={home} menu={menu} homeHeader={homeHeader} section_case={section_case} fitness_team={fitness_team} fitness_gallery={fitness_gallery} workout={workout} key={homePage.id}>
     
     <section className="rev_slider_wrapper">
        <div id="slider2" className="rev_slider" data-version="5.0" data-height="700" data-delay="7000">
            <ul>
                {homePage.home_slider.map((evt, index) => {
                      return (
                        <>
                            {evt.acf_fc_layout == "slider1" ? 
                                <>
                                    <li key={index} data-transition="random">
                                        <img src={evt.image ? evt.image.sizes.homeSlider : "" } alt="" width="1920" height="705" data-bgposition="bottom center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="1" />
                                        <div className="tp-caption  tp-resizeme banner-caption-h1  text-center" data-x="left" data-hoffset="0" data-y="top" data-voffset="230" data-transform_idle="o:1;" data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-start="500">
                                            {evt.text_1 ? evt.text_1 : ""}
                                        </div>
                                        <div className="tp-caption  tp-resizeme banner-caption-h1 banner-caption-bg text-center" data-x="left" data-hoffset="-20" data-y="top" data-voffset="315" data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start="1000">
                                            {evt.text_2 ? evt.text_2 : ""}
                                        </div>
                                        <div className="tp-caption  tp-resizeme banner-caption-p text-center" data-x="left" data-hoffset="0" data-y="top" data-voffset="420" data-transform_idle="o:1;" data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-start="1500">
                                            {evt.text_3 ? evt.text_3 : ""}
                                        </div>
                                        <div className="tp-caption  tp-resizeme text-center " data-x="left" data-hoffset="0" data-y="top" data-voffset="495" data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start="2000">
                                            <p className="price-p">{evt.price_text_1 ? evt.price_text_1 : ""} <span>{evt.price_text_2 ? evt.price_text_2 : ""}</span>{evt.price_text_3 ? evt.price_text_3 : ""}</p>&emsp;&emsp;<a href={evt.price_link ? evt.price_link : "" } className="thm-btn arrow-push-in-right"><span>Join Now<i className="fa fa-caret-right"></i></span></a>
                                        </div>
                                    </li>
                                </>
                                
                            : ''}


                            {evt.acf_fc_layout == "slider2" ? 
                                <>
                                    <li key={index} data-transition="random" className="slider-2">
                                        <img src={evt.image ? evt.image.sizes.homeSlider : "" } alt="" width="1920" height="705" data-bgposition="top left" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="3" />
                                        <div className="tp-caption  tp-resizeme banner-caption-bg banner-caption-h1 banner-caption-bg medium" data-x="left" data-hoffset="15" data-y="top" data-voffset="140" data-transform_idle="o:1;" data-transform_in="y:-50px;opacity:0;s:1500;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start="1500">
                                            <span>{evt.title ? evt.title : "" }</span>
                                        </div>
                                        <div className="tp-caption  tp-resizeme feature-list-item " data-x="left" data-hoffset="15" data-y="top" data-voffset="250" data-transform_idle="o:1;" data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-start="1500">
                                            <div className="icon-box">
                                                <div className="box">
                                                    <i className="fa fa-user"></i>
                                                </div>
                                            </div>
                                            <div className="text-box">
                                                <p>Responsive Layout</p>
                                            </div>
                                        </div>
                                        <div className="tp-caption  tp-resizeme feature-list-item " data-x="left" data-hoffset="320" data-y="top" data-voffset="250" data-transform_idle="o:1;" data-transform_in="x:[175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[-100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start="1500">
                                            <div className="icon-box">
                                                <div className="box">
                                                    <i className="fa fa-calculator"></i>
                                                </div>
                                            </div>
                                            <div className="text-box">
                                                <p>BMI & IWC Calculator </p>
                                            </div>
                                        </div>
                                        <div className="tp-caption  tp-resizeme feature-list-item " data-x="left" data-hoffset="15" data-y="top" data-voffset="335" data-transform_idle="o:1;" data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-start="1500">
                                            <div className="icon-box">
                                                <div className="box">
                                                    <i className="fa fa-codepen"></i>
                                                </div>
                                            </div>
                                            <div className="text-box">
                                                <p>Premium Plugins Free</p>
                                            </div>
                                        </div>
                                        <div className="tp-caption  tp-resizeme feature-list-item " data-x="left" data-hoffset="320" data-y="top" data-voffset="335" data-transform_idle="o:1;" data-transform_in="x:[175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[-100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start="1500">
                                            <div className="icon-box">
                                                <div className="box">
                                                    <i className="fa fa-calendar"></i>
                                                </div>
                                            </div>
                                            <div className="text-box">
                                                <p>Active Contact Form</p>
                                            </div>
                                        </div>
                                        <div className="tp-caption  tp-resizeme feature-list-item " data-x="left" data-hoffset="15" data-y="top" data-voffset="420" data-transform_idle="o:1;" data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-start="1500">
                                            <div className="icon-box">
                                                <div className="box">
                                                    <i className="fa fa-users"></i>
                                                </div>
                                            </div>
                                            <div className="text-box">
                                                <p>MailChimp Support</p>
                                            </div>
                                        </div>
                                        <div className="tp-caption  tp-resizeme feature-list-item " data-x="left" data-hoffset="320" data-y="top" data-voffset="420" data-transform_idle="o:1;" data-transform_in="x:[175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[-100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start="1500">
                                            <div className="icon-box">
                                                <div className="box">
                                                    <i className="fa fa-calculator"></i>
                                                </div>
                                            </div>
                                            <div className="text-box">
                                                <p>Free customer Support</p>
                                            </div>
                                        </div>
                                        <div className="tp-caption  tp-resizeme  " data-x="left" data-hoffset="15" data-y="top" data-voffset="532" data-transform_idle="o:1;" data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-start="1500">
                                            <img src="img/slides/title-decor2.png" alt="Awesome Image" />
                                        </div>
                                        <div className="tp-caption  tp-resizeme  " data-x="left" data-hoffset="200" data-y="top" data-voffset="520" data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start="1500">
                                            <a href="#" className="thm-btn borderd arrow-push-in-right"><span>More Details<i className="fa fa-caret-right"></i></span></a>
                                        </div>
                                        <div className="tp-caption  tp-resizeme  " data-x="left" data-hoffset="400" data-y="top" data-voffset="520" data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start="1500">
                                            <a href="#" className="thm-btn arrow-push-in-right"><span>Buy Now<i className="fa fa-caret-right"></i></span></a>
                                        </div>
                                    </li>
                                </>
                                
                            : ''}


                            {evt.acf_fc_layout == "slider3" ? 
                                <>
                                        <li key={index} data-transition="random" className="slider-2">
                                            <img src={evt.image ? evt.image.sizes.homeSlider : "" } alt="" width="1920" height="705" data-bgposition="top left" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="3" />
                                            <div className="tp-caption  tp-resizeme banner-caption-bg banner-caption-h1 banner-caption-bg medium" data-x="left" data-hoffset="15" data-y="top" data-voffset="140" data-transform_idle="o:1;" data-transform_in="y:-50px;opacity:0;s:1500;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start="1500">
                                                <span>Get Maximum From Us</span>
                                            </div>
                                            <div className="tp-caption  tp-resizeme feature-list-item " data-x="left" data-hoffset="15" data-y="top" data-voffset="250" data-transform_idle="o:1;" data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-start="1500">
                                                <div className="icon-box">
                                                    <div className="box">
                                                        <i className="fa fa-user"></i>
                                                    </div>
                                                </div>
                                                <div className="text-box">
                                                    <p>Responsive Layout</p>
                                                </div>
                                            </div>
                                            <div className="tp-caption  tp-resizeme feature-list-item " data-x="left" data-hoffset="320" data-y="top" data-voffset="250" data-transform_idle="o:1;" data-transform_in="x:[175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[-100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start="1500">
                                                <div className="icon-box">
                                                    <div className="box">
                                                        <i className="fa fa-calculator"></i>
                                                    </div>
                                                </div>
                                                <div className="text-box">
                                                    <p>BMI & IWC Calculator </p>
                                                </div>
                                            </div>
                                            <div className="tp-caption  tp-resizeme feature-list-item " data-x="left" data-hoffset="15" data-y="top" data-voffset="335" data-transform_idle="o:1;" data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-start="1500">
                                                <div className="icon-box">
                                                    <div className="box">
                                                        <i className="fa fa-codepen"></i>
                                                    </div>
                                                </div>
                                                <div className="text-box">
                                                    <p>Premium Plugins Free</p>
                                                </div>
                                            </div>
                                            <div className="tp-caption  tp-resizeme feature-list-item " data-x="left" data-hoffset="320" data-y="top" data-voffset="335" data-transform_idle="o:1;" data-transform_in="x:[175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[-100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start="1500">
                                                <div className="icon-box">
                                                    <div className="box">
                                                        <i className="fa fa-calendar"></i>
                                                    </div>
                                                </div>
                                                <div className="text-box">
                                                    <p>Active Contact Form</p>
                                                </div>
                                            </div>
                                            <div className="tp-caption  tp-resizeme feature-list-item " data-x="left" data-hoffset="15" data-y="top" data-voffset="420" data-transform_idle="o:1;" data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-start="1500">
                                                <div className="icon-box">
                                                    <div className="box">
                                                        <i className="fa fa-users"></i>
                                                    </div>
                                                </div>
                                                <div className="text-box">
                                                    <p>MailChimp Support</p>
                                                </div>
                                            </div>
                                            <div className="tp-caption  tp-resizeme feature-list-item " data-x="left" data-hoffset="320" data-y="top" data-voffset="420" data-transform_idle="o:1;" data-transform_in="x:[175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[-100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start="1500">
                                                <div className="icon-box">
                                                    <div className="box">
                                                        <i className="fa fa-calculator"></i>
                                                    </div>
                                                </div>
                                                <div className="text-box">
                                                    <p>Free customer Support</p>
                                                </div>
                                            </div>
                                            <div className="tp-caption  tp-resizeme  " data-x="left" data-hoffset="15" data-y="top" data-voffset="532" data-transform_idle="o:1;" data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-start="1500">
                                                <img src="img/slides/title-decor2.png" alt="Awesome Image" />
                                            </div>
                                            <div className="tp-caption  tp-resizeme  " data-x="left" data-hoffset="200" data-y="top" data-voffset="520" data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start="1500">
                                                <a href="#" className="thm-btn borderd arrow-push-in-right"><span>More Details<i className="fa fa-caret-right"></i></span></a>
                                            </div>
                                            <div className="tp-caption  tp-resizeme  " data-x="left" data-hoffset="400" data-y="top" data-voffset="520" data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start="1500">
                                                <a href="#" className="thm-btn arrow-push-in-right"><span>Buy Now<i className="fa fa-caret-right"></i></span></a>
                                            </div>
                                        </li>
                                </>
                                
                            : ''}
                        </>

                       )
                })}
                </ul>
        </div>
    </section>

    {homePage.sections ? homePage.sections.map((cases, index) => {
            return (
                <>
                {
                    cases.acf_fc_layout == "cases" ? <Case section_case={section_case} /> : ""
                }
                {
                    cases.acf_fc_layout == "trainer" ? <Trainer fitness_team={fitness_team} /> : ""
                }
                {
                    cases.acf_fc_layout == "fitnessgallery" ? <Gitnessgallery fitness_gallery={fitness_gallery} /> : ""
                }
                {
                    cases.acf_fc_layout == "workout" ? <Workout workout={workout} /> : ""
                }
                <Pattern />
               
                </>
            )
    }) : ""}
 

    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/wp-json/wp/v2/posts`)
  const home = await res.json()
  const res2 = await fetch(`${API_URL}/wp-json/wp-api-menus/v2/menus/3`)
  const menu = await res2.json()
  const res3 = await fetch(`${API_URL}/wp-json/wp/v2/pages/36`)
  const homePage = await res3.json()
  const res4 = await fetch(`${API_URL}/wp-json/wp/v2/sport/76`)
  const homeHeader = await res4.json()
  const res5 = await fetch(`${API_URL}/wp-json/wp/v2/section/237`)
  const section_case = await res5.json()
  const res6 = await fetch(`${API_URL}/wp-json/wp/v2/section/263`)
  const fitness_team = await res6.json()
  const res7 = await fetch(`${API_URL}/wp-json/wp/v2/section/275`)
  const fitness_gallery = await res7.json()
  const res8 = await fetch(`${API_URL}/wp-json/wp/v2/section/280`)
  const workout = await res8.json()
  

  return {
    props: { home, menu, homePage, homeHeader, section_case, fitness_team, fitness_gallery, workout },
    revalidate: 1,
  }
}
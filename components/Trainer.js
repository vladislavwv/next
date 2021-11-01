//работал
export default function Trainer(fitness_team) {
  
    return (
    <section className="fitness-team-style-two">
        <div className="container">
            <div className="owl-carousel owl-theme">
                {fitness_team.fitness_team.sliders.map((evt, index) => {
                      return (
                        <div className="item" key={index}>
                            <div className="single-fitness-team-style-two">
                                <div className="img-box">
                                    {evt.image != false ? <img src={evt.image.sizes.trainersPhoto} alt="Awesome Image" /> : '' }
                                    
                                    <div className="overlay">
                                        <div className="inner-box">
                                            <div className="top-box clearfix">
                                                <div className="left-box pull-left">
                                                    <h3>{evt.title}</h3>
                                                    <p>{evt.position}</p>
                                                </div>
                                                <div className="right-box pull-right">
                                                    <div className="icon-box">
                                                        <i className="fc-icon ftc-icon-yoga13"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>{evt.text}</p>
                                            <ul className="social-icons">
        {evt.cocial_buttons ? evt.cocial_buttons.map((coc, index) => {
            return (
                <li key={index}><a href={coc.link}><i className={'fa fa-' + coc.icon }></i></a></li>
            )
        }) : ""}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       )
                })}
            </div>
        </div>
    </section>
    )
  }
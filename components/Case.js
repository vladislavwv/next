//работал
export default function Case(section_case) {
  
    return (
        <section className="fitness-service-round-icon square-box section-padding">
            <div className="container">
                <div className="row">
                {section_case.section_case.service.map((evt, index) => {
                        return (
                            <div className="col-md-4" key={index}>
                            <div className="single-fitness-service-round-icon square-box">
                                <div className="icon-box">
                                    <i className={"fc-icon ftc-icon-"+ evt.icon}></i>
                                </div>
                                <h3>{evt.title}</h3>
                                <p>{evt.text}</p>
                                <a href={evt.link}>Join Now</a>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
  }
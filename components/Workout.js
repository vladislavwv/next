//работал
export default function Workout(workout) {
  
    return (
        <section className="workout-schedules-area">
        <div className="container">
            <div className="section-title">
                <h1><span>daily workout Schedules</span></h1>
            </div>
            <div className="row">
                {workout.workout.workout ? workout.workout.workout.map((evt, index) => {
                     return (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="single-item">
                                {console.log(evt)}
                                <div className="img-holder">
                                    <img alt="" src={evt.image ? evt.image.sizes.workout : ""} />
                                    <div className="overlay">
                                        <div className="icon-holder">
                                            <a href=""><i className="fa fa-share"></i></a>
                                        </div>
                                    </div>
                                    <div className="date">
                                        <h4>Day<br />{evt.day}</h4>
                                    </div>
                                </div>
                                <div className="content">
                                    <h3> {evt.title}<span>( {evt.to_title} )</span></h3>
                                    <ul>
                                        <li><i className="fa fa-clock-o"></i> Duration : {evt.duration}</li>
                                        <li><i className="fa fa-user"></i>{evt.trainer}</li>
                                    </ul>
                                    {evt.muscle_groups ? evt.muscle_groups.map((musc, index) => {
                                        return(
                                            <div key={index} className="schedules-list">
                                                <h4>{musc.title}</h4>
                                                <ul>
                                                    {musc.muscle ? musc.muscle.map((caseses, index)=> {
                                                        return(
                                                            <li key={index}><i className="fa fa-check"></i>{caseses.groups}</li>
                                                        )
                                                    })
                                                    : ""
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    })
                                    : ""
                                    }
                                    <a href="single-workout.html" className="arrow-push-out-right"><span>View EXERCISE Plans <i className="fa fa-caret-right"></i></span></a>
                                </div>
                            </div>
                        </div>
                    )
                }) 
                : ""}
                   
                
                
                
            </div>
        </div>
    </section>  
    )
  }
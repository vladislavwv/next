export default function Gitnessgallery(fitness_gallery) {
  
    return (
        <section className="project-content home-3 section-padding pb0">
            <div className="container">
                <div className="section-title text-center">
                    <h1><span>FITNESS CARE GALLERY</span></h1>
                </div>
            </div>
            <div className="container-fluid">
                <div className="mixit-gallery">
                    <ul className="gallery-filter list-inline text-center">
                        <li className="filter" data-filter="all"><span>Show All</span></li>
                    {fitness_gallery.fitness_gallery.fitness_gallery[0].category.map((evt, index) => {
                        return(
                            <li key={index} className="filter" data-filter={'.'  + [evt.name_category]} ><span>{evt.name_category}</span></li>
                        )
                        
                    })}   
                    </ul>
                    <div className="clearfix">
                    {fitness_gallery.fitness_gallery.fitness_gallery[0].images.map((evt, index) => {
                        return(
                            <div key={index} className={'col-md-3 mix col-sm-6 '  + [evt.add_to_category]}>
                                <div className="single-project-item">
                                    <div className="img-box">
                                        <img src={evt.image.sizes.fitnessSize} alt="Awesome Image" />
                                        <div className="overlay">
                                            <div className="box">
                                                <div className="top-box">
                                                    <div className="title">
                                                        <h3>Training program is complete solution</h3>
                                                    </div>
                                                </div>
                                                <div className="bottom-box">
                                                    <ul>
                                                        <li><a href="gallery-details-sidebar.html"><i className="fa fa-link"></i></a></li>
                                                        <li><a href="img/single-project-item/h3-1.jpg" data-fancybox-group="simple-project" className="fancybox"><i className="fa fa-search-plus"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        
                    })}   
                        
                    </div>
                </div>
            </div>
        </section>
    )
  }
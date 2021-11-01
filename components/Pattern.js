//работал
export default function Pattern() {
  
    return (
        <section class="pattern-4 section-padding">
        {/* <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="section-title text-left">
                        <h1><span>Bmi Caluclatror</span></h1>
                    </div>
                    <div class="bmi-tab-box">
                        <div class="bmi-tab-title">
                            <ul role="tablist">
                                <li class="active" data-tab-name="male"><a href="#male" aria-controls="male" role="tab" data-toggle="tab"><i class="fa fa-male"></i> Male</a></li>
                                <li data-tab-name="female"><a href="#female" aria-controls="female" role="tab" data-toggle="tab"><i class="fa fa-female"></i> Female</a></li>
                            </ul>
                        </div>
                        <div class="bmi-tab-content tab-content">
                            <div class="content-box tab-pane fade in active" id="male">
                                <form action="#" class="bmi-calc-form">
                                    <ul>
                                        <li>
                                            <label>Age</label>
                                            <input type="text" />
                                        </li>
                                        <li>
                                            &nbsp;&nbsp;
                                            <label>Weight </label>
                                            <input type="text" class="input-weight" />
                                            <span>Pounds</span>
                                        </li>
                                        <li>
                                            <label>Height </label>
                                            <input type="text" class="input-height-feet" />
                                            <span>Feet</span>
                                        </li>
                                        <li>
                                            <input type="text" class="input-height-inch" />
                                            <span>Inches</span>
                                        </li>
                                    </ul>
                                    <button type="submit" class="thm-btn arrow-push-in-right"><span>Calculate <i class="fa fa-caret-right"></i></span></button> &emsp;&emsp;
                                    <button type="reset" class="thm-btn arrow-push-in-left"><span>Reset <i class="fa fa-caret-left"></i></span></button>
                                    <div class="result-box">
                                        <label>Your BMI Result :</label>
                                        <input type="text" value="0.0" class="input-result" />
                                        <a href="#">View BMI Class <i class="fa fa-arrow-circle-o-right"></i></a>
                                    </div>
                                </form>
                            </div>
                            <div class="content-box tab-pane fade" id="female">
                                <form action="#" class="bmi-calc-form">
                                    <ul>
                                        <li>
                                            <label>Age</label>
                                            <input type="text" />
                                        </li>
                                        <li>
                                            &nbsp;&nbsp;
                                            <label>Weight </label>
                                            <input type="text" class="input-weight" />
                                            <span>Pounds</span>
                                        </li>
                                        <li>
                                            <label>Height </label>
                                            <input type="text" class="input-height-feet" />
                                            <span>Feet</span>
                                        </li>
                                        <li>
                                            <input type="text" class="input-height-inch" />
                                            <span>Inches</span>
                                        </li>
                                    </ul>
                                    <button type="submit" class="thm-btn arrow-push-in-right"><span>Calculate <i class="fa fa-caret-right"></i></span></button> &emsp;&emsp;
                                    <button type="reset" class="thm-btn arrow-push-in-left"><span>Reset <i class="fa fa-caret-left"></i></span></button>
                                    <div class="result-box">
                                        <label>Your BMI Result :</label>
                                        <input type="text" value="0.0" class="input-result" />
                                        <a href="#">View BMI Class <i class="fa fa-arrow-circle-o-right"></i></a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="section-title text-left">
                        <h1><span>Popular Classes</span></h1>
                    </div>
                    <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <div class="single-popular-class">
                                <div class="img-box">
                                    <img src="img/class/popular-1.jpg" alt="Awesome Image" />
                                    <div class="overlay">
                                        <div class="content">
                                            <div class="box">
                                                <a href="#"><i class="fa fa-share"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-box clearfix">
                                    <div class="left-box pull-left">
                                        <h3>Fat Loss</h3>
                                        <p><span>$130</span> / Year</p>
                                    </div>
                                    <div class="rignt-box pull-right">
                                        <div class="icon-box">
                                            <i class="fc-icon ftc-icon-running"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="single-popular-class">
                                <div class="img-box">
                                    <img src="img/class/popular-2.jpg" alt="Awesome Image" />
                                    <div class="overlay">
                                        <div class="content">
                                            <div class="box">
                                                <a href="#"><i class="fa fa-share"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-box clearfix">
                                    <div class="left-box pull-left">
                                        <h3>Body Building</h3>
                                        <p><span>$130</span> / Year</p>
                                    </div>
                                    <div class="rignt-box pull-right">
                                        <div class="icon-box">
                                            <i class="fc-icon ftc-icon-running"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="single-popular-class">
                                <div class="img-box">
                                    <img src="img/class/popular-3.jpg" alt="Awesome Image" />
                                    <div class="overlay">
                                        <div class="content">
                                            <div class="box">
                                                <a href="#"><i class="fa fa-share"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-box clearfix">
                                    <div class="left-box pull-left">
                                        <h3>Yoga & Streching</h3>
                                        <p><span>$130</span> / Year</p>
                                    </div>
                                    <div class="rignt-box pull-right">
                                        <div class="icon-box">
                                            <i class="fc-icon ftc-icon-yoga13"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="single-popular-class">
                                <div class="img-box">
                                    <img src="img/class/popular-4.jpg" alt="Awesome Image" />
                                    <div class="overlay">
                                        <div class="content">
                                            <div class="box">
                                                <a href="#"><i class="fa fa-share"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-box clearfix">
                                    <div class="left-box pull-left">
                                        <h3>Weight Lifting</h3>
                                        <p><span>$130</span> / Year</p>
                                    </div>
                                    <div class="rignt-box pull-right">
                                        <div class="icon-box">
                                            <i class="fc-icon ftc-icon-yoga13"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </section>
    )
  }
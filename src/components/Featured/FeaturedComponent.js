import * as React from 'react';
import "./FeaturedComponent.css";

const FeaturedComponent = () => {
    return(
        <React.Fragment>
            <div className = "image1">

            </div>
            <div className = "container">
                <div className = "row">
                    <div className = "col-12 col-sm-7">
                        <h1>Floodsafe Registration</h1>
                        <h6>Discover new features and utilize the full potential of this Flood monitoring app.</h6>
                        <div className = "row">
                            <div className = 'col-6'>
                                <button className = 'button btn-warning'>Register</button>
                            </div>
                            <div className = 'col-6'>
                                <button className = 'button'>Sign in</button>
                            </div>
                        </div>
                    </div>
                    <div className = "col-12 col-sm-5">
                        <img src = "carousel.png"/>
                    </div>
                </div>
            </div>
            <div className = "image2">

            </div>
            <div className = "space">
                
            </div>
        </React.Fragment>
    );
}

export default FeaturedComponent;
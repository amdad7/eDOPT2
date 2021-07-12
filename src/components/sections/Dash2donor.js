import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Input from '../elements/Input';
import { Link } from 'react-router-dom';
import './style.css'
import FooterSocial from '../layout/partials/FooterSocial';


const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: '',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <p className="m-0" style={{alignItems:"center"}}>
                  <a href="/Feed_Donor" style={{color:"#f1b12a", fontSize:"14px", margin:"0rem"}}>Adopt More</a>
                  <br/>
                    <div style={{border:"1px solid #f1b12a", padding:"7%", margin:"4% 0%", borderRadius:"20px", boxShadow: "5px 5px #f1f1f1"}}>
                        <div className="row"> 
                                <div className="column" style={{padding:"1%"}}>
                                    <img src={require('./../../assets/images/i2.jpg')} alt="" style={{width:"70%"}}/>
                                    <br/>
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"14px"}}>
                                        Pankaj Mishra
                                    </p>
                                    <br/>
                                    <br/>
                                    <Link to="/Dashboard3_Donor" className="button button-primary button-wide-mobile button-sm" onClick="" style={{backgroundColor:"#f1b12a"}}>Show More</Link>
                                </div>
                                <div className="column" style={{padding:"1%"}}>
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"14px"}}>
                                        
                                            Age : 17<br/>
                                            Gender : Male<br/>
                                            City : Faridabad<br/>
                                            Phone No : 8745372736<br/>
                                            Class : 10th<br/>
                                        
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div style={{border:"1px solid #f1b12a", padding:"7%", margin:"4% 0%", borderRadius:"20px", boxShadow: "5px 5px #f1f1f1"}}>
                        <div className="row"> 
                                <div className="column" style={{padding:"1%"}}>
                                    <img src={require('./../../assets/images/i3.jpg')} alt="" style={{width:"70%"}}/>
                                    <br/>
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"14px"}}>
                                        Varsha Ganguly
                                    </p>
                                    <br/>
                                    <br/>
                                    <Link to="/Dashboard3_Donor" className="button button-primary button-wide-mobile button-sm" onClick="" style={{backgroundColor:"#f1b12a"}}>Show More</Link>
                                </div>
                                <div className="column" style={{padding:"1%"}}>
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"14px"}}>
                                    
                                        Age : 19<br/>
                                        Gender : Female<br/>
                                        City : Bangalore<br/>
                                        Phone No : 9898975352<br/>
                                        Class : 11th<br/>
                                    
                                    </p>
                                </div>
                        </div>
                    </div>
                </p>
              </div>
              <div className='split-item-image center-content-mobile reveal-from-bottom' data-reveal-container=".split-item" style={{paddingLeft:"2%"}}>
                <p className="m-0">
                    <center>
                    <a href="#" style={{color:"grey", fontSize:"14px", margin:"0.5rem"}}>Recent Notification</a>
                        <div style={{border:"1px solid #f1b12a", padding:"7%", margin:"4% 0%", width:"80%", borderRadius:"20px", boxShadow: "5px 5px #f1f1f1"}}>
                            <div className="row" style={{padding:"1%"}}>
                                <div className="column">
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"16px"}}>
                                        02/08/2021
                                    </p>
                                    </div>
                                <div className="column">
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"16px"}}>
                                        Recent Notification
                                    </p>
                                </div>
                            </div>
                            <div className="row" style={{padding:"1%"}}>
                                <div className="column">
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"16px"}}>
                                        02/08/2021
                                    </p>
                                    </div>
                                <div className="column">
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"16px"}}>
                                        Recent Notification
                                    </p>
                                </div>
                            </div>
                            <div className="row" style={{padding:"1%"}}>
                                <div className="column">
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"16px"}}>
                                        02/08/2021
                                    </p>
                                    </div>
                                <div className="column">
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"16px"}}>
                                        Recent Notification
                                    </p>
                                </div>
                            </div>
                            <div className="row" style={{padding:"1%"}}>
                                <div className="column">
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"16px"}}>
                                        02/08/2021
                                    </p>
                                    </div>
                                <div className="column">
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"16px"}}>
                                        Recent Notification
                                    </p>
                                </div>
                            </div>
                            <div className="row" style={{padding:"1%"}}>
                                <div className="column">
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"16px"}}>
                                        02/08/2021
                                    </p>
                                    </div>
                                <div className="column">
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"16px"}}>
                                        Recent Notification
                                    </p>
                                </div>
                            </div>
                            <div className="row" style={{padding:"1%"}}>
                                <div className="column">
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"16px"}}>
                                        02/08/2021
                                    </p>
                                    </div>
                                <div className="column">
                                    <p className="text-sm mb-0" style={{textAlign:"left", fontSize:"16px"}}>
                                        Recent Notification
                                    </p>
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                </center>
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
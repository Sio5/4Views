import React, {Component} from "react";
import Typist from 'react-typist';
import {Button} from 'reactstrap';
import '../assets/css/Home.css';
import 'react-typist/dist/Typist.css';
import NavBar from "./NavBar"
import Footer from "./Footer"
import LoadingOrderAnimation from 'react-loading-order-with-animation';
import Scrolldown from '../assets/img/scrolldown.png'
import Elegant from '../assets/img/elegant.png';
import Greyvo from '../assets/img/greyvo.jpg';
import Counter from '../assets/img/counter.png';
import Counterlogo from '../assets/img/counterlogo.png';
import elegantlogo from '../assets/img/elegantlogo.png'
import greyvologo from '../assets/img/greyvologo.jpg'
import '../i18n';
import {t} from 'i18next'
import {Link} from 'react-router-dom';
export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            style: 'overbg',
            visibl: 'hidden'
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({style: 'overbgnoon'});
        }, 3300)
        setTimeout(() => {
            this.setState({visibl: 'overbgnoon'});
        }, 3300)

    }

    render() {

        return (
            <div className="Home">

                <LoadingOrderAnimation
                    animation="fade-in"
                    move="from-top-to-bottom"
                    distance={30}
                    speed={1000}
                    wait={3550}>
                    <div className={this.state.visibl}>
                        <NavBar/>
                    </div>
                </LoadingOrderAnimation>
                <div className="headerbg">

                    <div id="gradient-overlay" className={this.state.style}></div>

                    <div className="preText">
                        <div className="row customrow">
                            <div className="col">
                            <h1 className="preTextH1"> <Typist
                                    cursor={{
                                    blink: true,
                                    element: '_'
                                }}
                                    >{t('title')}</Typist></h1>
                                <LoadingOrderAnimation
                                    animation="fade-in"
                                    move="from-bottom-to-top"
                                    distance={30}
                                    speed={1000}
                                    wait={3600}>
                                    <span className={this.state.style}>
                                        <p>{t('untertitlepart1')}<br/>{t('untertitlepart2')}</p>
                                    </span>
                                </LoadingOrderAnimation>
                            </div>
                        </div>
                        <div className="row customrow scrolldownrow">
                            <div id="blinkdown" className={this.state.visibl}>
                                <LoadingOrderAnimation
                                    animation="fade-in"
                                    move="from-bottom-to-top"
                                    distance={30}
                                    speed={1000}
                                    wait={7600}>
                                    <img src={Scrolldown} className="scrolldown" alt="scrolldown"/>
                                </LoadingOrderAnimation>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="presentation bgw">
                    <div className="custom-h50"></div>

                    <div className="row">
                        <div className="col-xl-2 col-xs-0 col-sm-0 col-md-1"></div>
                        <div className="col-xl-5 col-xs-12 col-sm-12 col-md-5"><img className="elegantimg" src={Elegant} alt="Elegant"/></div>
                        <div className="col-xl-3 col-xs-12 col-sm-12 col-md-3">
                            <img src={elegantlogo} alt="Elegant" className="w-50"/>
                            <h3>Elegant {t('Template')}</h3>
                            <p className="opacolor">{t('elegantpromo')}</p>
                            <span className="buttoninfo">
                                <Button outline color="custom_orange" tag={Link} to="/elegant">{t('more')}...</Button>
                                <p className="infotext">HTML5,CSS3</p>
                            </span>
                        </div>
                        <div className="col-xl-2 col-xs-0 col-sm-0 col-md-1"></div>
                    </div>
                    <div className="custom-h200"></div>
                    <div className="row">
                        <div className="col-xl-2 col-xs-0 col-sm-0 col-md-1"></div>
                        <div className="col-xl-3 col-xs-12 col-sm-12 col-md-4">
                            <img src={greyvologo} alt="Greyvo" className="w-50"/>
                            <h3>Greyvo {t('Template')}</h3>
                            <p className="opacolor">{t('greyvopromo')}</p>
                            <span className="buttoninfo">
                                <Button outline color="custom_grey" tag={Link} to="/greyvo">{t('more')}...</Button>
                                <p className="infotext">HTML5,CSS3</p>
                            </span>
                        </div>
                        <div className="col-xl-5 col-xs-12 col-sm-12 col-md-6">
                            <img className="greyvoimg"  src={Greyvo} alt="Greyvo"/>
                        </div>
                        <div className="col-xl-2 col-xs-0 col-sm-0 col-md-1"></div>
                    </div>
                    <div className="custom-h200"></div>
                    <div className="row">
                        <div className="col-xl-2 col-xs-0 col-sm-0 col-md-1"></div>
                        <div className="col-xl-5 col-xs-12 col-sm-12 col-md-5"><img className="counterimg" src={Counter} alt="Counter"/></div>
                        <div className="col-xl-3 col-xs-12 col-sm-12 col-md-3">
                            <img src={Counterlogo} alt="Counter"/>
                            <h3>{t('counterapp')}</h3>
                            <p className="opacolor">{t('counterpromo')}</p>
                            <span className="buttoninfo">
                                <Button
                                    outline
                                    color="custom_blue"
                                    target="blank"
                                    href="https://play.google.com/store/apps/details?id=com.countereasycounter">{t('more')}...</Button>
                                <p className="infotext">React Native, JS</p>
                            </span>
                        </div>
                        <div className="col-xl-2 col-xs-0 col-sm-0 col-md-1"></div>
                    </div>
                    <div className="custom-h200"></div>
                    <Footer/>

                </div>

            </div>
        );
    }
}


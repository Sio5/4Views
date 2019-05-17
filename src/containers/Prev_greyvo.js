import React, {Component} from 'react'
import NavBar from "./NavBar"
import Footer from "./Footer"
import {Button} from 'reactstrap'
import '../i18n';
import {t} from 'i18next'
import Greyvo from '../assets/img/greyvo.jpg';
import greyvologo from '../assets/img/greyvologo.jpg'

export default class Prev_Greyvo extends Component {
    render() {
        return (
            <div className="testele">
                <NavBar/>
                <div className="custom-h50"></div>
                <div className="row vorschau">

                    <div className="col-xl-3 col-xs-0 col-sm-0 col-md-3"></div>
                    <div className="col-xl-6 col-xs-12 col-sm-12 col-md-6"><img src={Greyvo} alt="Elegant"/></div>
                    <div className="col-xl-3 col-xs-0 col-sm-0 col-md-3"></div>

                    <div className="col-xl-3 col-xs-0 col-sm-0 col-md-3"></div>
                    <div className="col-xl-6 col-xs-12 col-sm-12 col-md-6">
                        <img src={greyvologo} alt="Greyvo" className="w-25"/>
                        <h3>Greyvo {t('Template')}</h3>
                        <p className="opacolor">{t('greyvopromo')}</p>
                        <span className="buttoninfo">
                            <Button outline color="custom_grey" href="/templates/greyvo/indexEN.html">{t('preview')}...</Button>
                            <p className="infotext">HTML5,CSS3</p>
                        </span>
                    </div>
                    <div className="col-xl-3 col-xs-0 col-sm-0 col-md-3"></div>

                </div>
                <div className="custom-h100"></div>
                <Footer/>
            </div>
        )
    }
}

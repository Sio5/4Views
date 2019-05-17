import React, {Component} from 'react'
import NavBar from "./NavBar"
import Footer from "./Footer"
import {Button} from 'reactstrap'
import '../i18n';
import {t} from 'i18next'
import Elegant from '../assets/img/elegant.png';
import elegantlogo from '../assets/img/elegantlogo.png'

export default class Prev_Elegant extends Component {
    render() {
        return (
            <div className="testele">
                <NavBar/>
                <div className="row vorschau">

                    <div className="col-xl-3 col-xs-0 col-sm-0 col-md-3"></div>
                    <div className="col-xl-6 col-xs-12 col-sm-12 col-md-6"><img src={Elegant} alt="Elegant"/></div>
                    <div className="col-xl-3 col-xs-0 col-sm-0 col-md-3"></div>

                    <div className="col-xl-3 col-xs-0 col-sm-0 col-md-3"></div>
                    <div className="col-xl-6 col-xs-12 col-sm-12 col-md-6">
                        <img src={elegantlogo} alt="Elegant" className="w-25"/>
                        <h3>Elegant {t('Template')}</h3>
                        <p className="opacolor">{t('elegantpromo')}</p>
                        <span className="buttoninfo">
                            <Button outline color="custom_orange" href="/templates/elegant/elegant.html">{t('preview')}...</Button>
                            <p className="infotext">HTML5,CSS3</p>
                        </span>
                    </div>
                    <div className="col-xl-3 col-xs-0 col-sm-0 col-md-3"></div>

                </div>
                <div className="custom-h50"></div>
                <Footer/>
            </div>
        )
    }
}

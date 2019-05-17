import React, {Component} from 'react';
import {Button} from 'reactstrap';
import '../i18n';
import '../assets/css/Footer.css';
import {t} from 'i18next';
import * as emailjs from 'emailjs-com';
import toastr from 'toastr'

function sucessfull() {
    document
        .getElementById('submit')
        .classList
        .add('hidden');
    document
        .getElementById('send')
        .classList
        .remove('hidden');
}

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            email: '',
            feedback: ''
        }
    }
    handleInputChange(event) {
        event.preventDefault()
        const target = event.target
        const name = target.name
        const value = target.value

        this.setState({[name]: value})

    }

    validateMail() {
        let formisValid = true
        return formisValid

    }

    sentMessage(event) {
        event.preventDefault()

        if (!this.validateMail()) {
            return
        }
        var template_params = {
            fname: this.state.name + '(' + this.state.email + ')',
            feedback: this.state.feedback
        }
        var service_id = "default_service";
        var template_id = "template_TaONz74A";
        var user_id = "user_vyDQVrx9WmJLM3GSlRZh1";

        emailjs
            .send(service_id, template_id, template_params, user_id)
            .then(function () {
                sucessfull()
            }, function (err) {
                toastr.error(err)
            });
        setTimeout(() => {
            this.setState({fname: '', email: '', feedback: ''})
        }, 3000)
    }

    render() {
        return (
            <div className="Footer">
                <div className="row dark">
                    <h3 className="p2" align="center">{t('getintouch')}</h3>
                </div>
                <form id="myform" method="post">
                    <div className="row dark">
                        <div className="col-xl-2 col-xs-0 col-sm-0 col-md-3"></div>
                        <div className="col-xl-3 col-xs-12 col-sm-12 col-md-3"><input
                            type="text"
                            id="fname"
                            name="fname"
                            value={this.state.fname}
                            className="getintoucform"
                            onChange={this
                .handleInputChange
                .bind(this)}
                            placeholder={t('yourname')}/></div>
                        <div className="col-xl-3 col-xs-12 col-sm-12 col-md-3"><input
                            type="mail"
                            id="email"
                            name="email"
                            value={this.state.email}
                            className="getintoucform"
                            onChange={this
                .handleInputChange
                .bind(this)}
                            placeholder={t('yourmail')}/></div>
                        <div className="col-xl-2 col-xs-0 col-sm-0 col-md-3"></div>
                    </div>
                    <div className="row dark">
                        <div className="col-xl-3 col-xs-0 col-sm-0 col-md-3"></div>
                        <div className="col-xl-6 col-xs-12 col-sm-12 col-md-6"><textarea
                            id="message"
                            name="feedback"
                            value={this.state.feedback}
                            onChange={this
                .handleInputChange
                .bind(this)}
                            className="getintoucform messagebox"
                            placeholder={t('yourmessage')}/></div>
                        <div className="col-xl-3 col-xs-0 col-sm-0 col-md-3"></div>
                        <Button
                            outline
                            color="custom_getinttouch submit"
                            type="submit"
                            id="submit"
                            onClick={this
                            .sentMessage
                            .bind(this)}>{t('send')}</Button>
                        <Button
                            outline
                            color="custom_getinttouch send"
                            type="submit"
                            className="hidden"
                            id="send"
                            onClick={this
                            .sentMessage
                            .bind(this)}>
                            {t('gesendet')}</Button>

                    </div>
                    <div className="row dark ">
                        <p className="p2">4VIEWS.DE &copy; 2019</p>
                    </div>
                </form>
            </div>
        )
    }
}

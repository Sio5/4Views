import React, {Component} from "react";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody} from 'react-accessible-accordion';
import NavBar from "./NavBar";
import '../assets/css/Editor.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import {
    changelogo,
    changegallery,
    shipping,
    updatepaymenth,
    downloadtemplate,
    ebaygetcrossdata
} from './Editor_func';
import plugins from 'suneditor/src/plugins'
import 'suneditor/src/assets/css/suneditor.css'
import suneditor from 'suneditor';
import de from 'suneditor/src/lang/de';
import '../i18n';
import {t} from 'i18next'


var count = 1;
var editor;
// Handle Upload of Html Template
function handleFileSelect(evt) {
    var files = evt.target.files;

    for (var i = 0, f; f = files[i]; i++) {

        // Only process image files.
        if (!f.type.match('html')) {
            continue;
        }
        var reader = new FileReader();

        // Closure to capture the file information and output them inside textarea.
        reader.onload = (function () {

            return function (e) {

                var span = e.target.result;
                pastehtml(span);

            };
        })();

        reader.readAsText(files[0]);
        document
            .getElementById('files')
            .addEventListener('change', handleFileSelect, false);
    }
}
function pastehtml(span) {
    editor.setContents(span);
}

function createEditor() {
    editor = suneditor.create('sample', {
        plugins: plugins,
        buttonList: [
            [
                'undo', 'redo'
            ],
            [
                'fontColor', 'hiliteColor'
            ],
            [
                'fullScreen', 'codeView'
            ],
            ['preview']
        ],
        lang: (de),
        // Callback functions that is called when the Save button is clicked
        callBackSave: function (contents) {
            alert(contents)
        }

    })

}
function save() {
    let save = editor.getContents();
    setTimeout(function () {
        document
            .getElementById('textsave')
            .value = save;
    }, 1)

}
export default class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this
            .toggle
            .bind(this);

    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    componentDidMount() {
        createEditor();
        if (navigator.userAgent.toLowerCase().indexOf('firefox') != -1) {
            this.setState({modal: false});
        } else {
            this.setState({modal: true});
        }
    }

    render() {

        return (

            <div className="editorcontainer">
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{t('WBtitle')}</ModalHeader>
                    <ModalBody>
                    {t('WBtext')}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="editor" href="https://www.mozilla.org/firefox/new/" target="_blank">{t('WBfirefox')}</Button>
                        <Button color="editor" onClick={this.toggle}>{t('close')}</Button>
                    </ModalFooter>
                </Modal>
                <div className="editornav">
                    <NavBar/>
                </div>
                <div className="row Editorcon">
                    <div className="col-3 editorgrid">
                        <Accordion>
                            <AccordionItem expanded={true}>
                                <AccordionItemTitle>
                                    <h3>{t('uploadtemplate')}</h3>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <p className="uploadtext">{t('uploadtext')}</p>
                                    <input type="file" id="files" name="files[]" onChange={handleFileSelect}/>
                                    <Button color="editor">{t('fileupload')}</Button>
                                </AccordionItemBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemTitle>
                                    <h3>Logo</h3>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <div className="row changelogo">
                                        <p>{t('changelogotext')}</p>
                                        <input type="url" id="logourl" placeholder="URL"/>
                                    </div>
                                    <div className="row changelogo">
                                        <Button color="editor" onClick={changelogo}>{t('save')}</Button>
                                    </div>
                                </AccordionItemBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemTitle>
                                    <h3>{t('gallery')}</h3>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <div className="col">
                                        <form id="menuitems">
                                            <p>{t('gallerytext')}
                                            </p>
                                            <input type="url" placeholder={'URL ' + count++}/>
                                            <input type="url" placeholder={'URL ' + count++}/>
                                            <input type="url" placeholder={'URL ' + count++}/>
                                            <input type="url" placeholder={'URL ' + count++}/>
                                            <input type="url" placeholder={'URL ' + count++}/>
                                            <input type="url" placeholder={'URL ' + count++}/>
                                            <input type="url" placeholder={'URL ' + count++}/>
                                            <input type="url" placeholder={'URL ' + count++}/>
                                            <Button color="editor" onClick={changegallery}>{t('change')}</Button>
                                        </form>
                                    </div>
                                </AccordionItemBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemTitle>
                                    <h3>{t('shipping')}</h3>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <div className="row shipping">
                                        <p>{t('shippingtext')}</p>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="url"
                                                placeholder="URL"
                                                id="customshipping"/>
                                        </div>
                                    </div>
                                    <div className="row shipping">
                                        <Button color="editor" onClick={shipping}>{t('change')}</Button>
                                    </div>
                                </AccordionItemBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemTitle>
                                    <h3>{t('paymenth')}</h3>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <div className="row pay" id="paymenthInputs">
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="checkbox" id="paypal"/>
                                            <label className="form-check-label">Paypal</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="checkbox" id="bank"/>
                                            <label className="form-check-label">{t('Banktransfer')}</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="checkbox" id="cc"/>
                                            <label className="form-check-label">{t('Creditcard')}</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="checkbox" id="cash"/>
                                            <label className="form-check-label">{t('Cash')}</label>
                                        </div>
                                    </div>
                                    <div className="row pay">
                                        <Button color="editor" onClick={updatepaymenth}>{t('change')}</Button>
                                    </div>
                                </AccordionItemBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemTitle>
                                    <h3>Crossselling</h3>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <div className="row">
                                        <p>{t('crosssellingtext')}</p>
                                    </div>
                                    <div className="row save crossselling">
                                        <input type="text" id="crosssellid1" placeholder={t('ebayitemid')}/>
                                        <input type="text" id="crosssellid2" placeholder={t('ebayitemid')}/>
                                        <input type="text" id="crosssellid3" placeholder={t('ebayitemid')}/>
                                        <Button color="editor" onClick={ebaygetcrossdata}>{t('change')}</Button>
                                    </div>
                                </AccordionItemBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemTitle>
                                    <h3>{t('save')}</h3>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <div className="row save">
                                        <textarea id="textsave"></textarea>
                                        <Button color="editor" onClick={save}>{t('generatecode')}</Button>
                                        <Button color="editor" onClick={downloadtemplate}>{t('downloadcode')}</Button>
                                    </div>
                                </AccordionItemBody>
                            </AccordionItem>
                        </Accordion>

                    </div>
                    <div className="col-9 editorgrid">

                        <textarea id="sample" className="sample"></textarea>

                    </div>

                </div>

            </div>
        );
    }
}

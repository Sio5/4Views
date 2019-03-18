import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody,} from 'react-accessible-accordion';
import NavBar from "./NavBar";
import './Editor.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import {
frame_logo,
changegallery,
shipping,
paymenth,
refresh,
downloadtemplate,
}
 from './Editor_func';
 import plugins from 'suneditor/src/plugins'
 import 'suneditor/src/assets/css/suneditor.css'
 import suneditor from 'suneditor';


var editor;
// Handle Upload of Html Template
function handleFileSelect(evt) { 
  var files = evt.target.files; // FileList object

  for (var i = 0, f; f = files[i]; i++) {

    // Only process HTML files.
  if (!f.type.match('.html')) {
    continue;
  }

  var reader = new FileReader();

    // Closure to capture the file information and output them inside textarea.
  reader.onload = (function(theFile) {
    return function(e) {
      // Render thumbnail.
      var span = e.target.result;
      pastehtml(span);
      
      
    };
  })(f);

    // Read in the image file as a data URL.
  reader.readAsText(f);
  document.getElementById('files').addEventListener('change', handleFileSelect, false);

  }
}
function pastehtml(span){
  console.log('object', span)
  editor.setContents(span);
}
function createEditor () {
    editor = suneditor.create('sample', {
    plugins: plugins,
    buttonList: [
        ['undo', 'redo'],
        ['fontColor', 'hiliteColor'],
        ['fullScreen', 'codeView'],
        ['preview']
    ],
    // Callback functions that is called when the Save button is clicked
    callBackSave: function (contents) {      
        alert(contents)
    }
    
    
  })

}
function save(){
  let save = editor.getContents();
  setTimeout(function(){
    document.getElementById('textsave').value = save;
  }, 1)
  
 }



export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.toggle = this.toggle.bind(this);

  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
        }));
  }


componentDidMount(){
  createEditor();
}

  render() {

    
    return (

      <div className="aboutcontainer">
      
      <div className="aboutnav">
      <NavBar/>
      </div>
  <div className="row Editorcon">
    <div className="col-3">
    <Accordion>
      <AccordionItem expanded={true}>
        <AccordionItemTitle><h3>Upload Template</h3></AccordionItemTitle>
        <AccordionItemBody>
        <input type="file" id="files" name="files[]" onChange={handleFileSelect} />
        <p>Laden Sie eine unserer Vorlagen oder eine gespeicherte Version davon.</p>
        <p>Upload one of our Templates or your saved Version.</p>
        <textarea id="editor-textarea" className="editor-textarea" onChange={refresh}></textarea>
        </AccordionItemBody>
      </AccordionItem>
        <AccordionItem>
            <AccordionItemTitle>
                <h3>Logo</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
            <Button color="danger" onClick={this.toggle}>Change Logo</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
              <ModalBody>
              <input type="url" id="logourl" name="homepage"/>
              <p>Paste inside your new Logo Url.</p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={frame_logo}>Save</Button>
                <Button color="secondary" onClick={this.toggle}>Close</Button>
              </ModalFooter>
            </Modal>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle><h3>Gallery</h3></AccordionItemTitle>
          <AccordionItemBody>
            <div className="row">
          </div>
          <div className="col">
          <form id="menuitems">
          <input type="url" id="changeimg1" placeholder="Image 1 Url"/>
          <input type="url" id="changeimg2" placeholder="Image 2 Url"/>
          <input type="url" id="changeimg3" placeholder="Image 3 Url"/>
          <input type="url" id="changeimg4" placeholder="Image 4 Url"/>
          <input type="url" id="changeimg5" placeholder="Image 5 Url"/>
          <input type="url" id="changeimg6" placeholder="Image 6 Url"/>
          <input type="url" id="changeimg7" placeholder="Image 7 Url"/>
          <input type="url" id="changeimg8" placeholder="Image 8 Url"/>
          <Button color="primary" onClick={changegallery}>Change</Button>
          </form>
          </div>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle><h3>Shipping</h3></AccordionItemTitle>
          <AccordionItemBody>
          <div className="row shipping">
          <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="dhl" value="dhl" />
          <label className="form-check-label">DHL</label>
          </div>
          <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="dpd" value="dpd" />
          <label className="form-check-label">DPD</label>
          </div>
          <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="hermes" value="hermes" />
          <label className="form-check-label">Hermes</label>
          </div>
          <div className="form-check form-check-inline">
          <input className="form-check-input" type="url" placeholder="Custom Shipping Image URL" id="customshipping" />
          </div>
          
          </div>
          <div className="row shipping">
          <Button color="primary" onClick={shipping}>Change</Button>
          </div>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle><h3>Paymenth</h3></AccordionItemTitle>
          <AccordionItemBody>
          <div className="row pay">
          <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="paypal" />
          <label className="form-check-label">Paypal</label>
          </div>
          <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="bank" />
          <label className="form-check-label">Banktransfer</label>
          </div>
          <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="cc" />
          <label className="form-check-label">Creditcard</label>
          </div>
          <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="cash" />
          <label className="form-check-label">Cash</label>
          </div>
          </div>
          <div className="row pay">
          <Button color="primary" onClick={paymenth}>Change</Button>
          </div>
          </AccordionItemBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemTitle><h3>Save</h3></AccordionItemTitle>
          <AccordionItemBody>
          <div className="row save">
          <textarea id="textsave"></textarea>
          <Button color="primary" onClick={save}>Generate Code</Button>
          <Button color="primary" onClick={downloadtemplate}>Download Code</Button>
          </div>
          </AccordionItemBody>
        </AccordionItem>
    </Accordion>
    

    

    </div>
    <div className="col-9">

    <textarea id="sample" className="sample"></textarea>
    
    </div>

  </div>

      </div>
    );
  }
}




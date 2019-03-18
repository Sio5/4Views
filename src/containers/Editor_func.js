/* 
// Logo change
export function frame_menu(){
  // Get the Value from input field. 
  let frame = document.getElementById('preview');
  let innerDoc = (frame.contentDocument) 
                  ? frame.contentDocument 
                  : frame.contentWindow.document;

  // Get the logo.src and replace it by the input value
  var change = innerDoc.querySelector('#menu'); 
  console.log('New Logo Url', change)
}
*/



// Logo change
export function frame_logo(){
    // Get the Value from input field. 
    var logo = document.getElementById("logourl").value;	
    console.log('Inputvalue', logo)
    // Get the logo.src and replace it by the input value
    var change = document.getElementById('logo').src = logo; 
    console.log('New Logo Url', change)
  }
  // Logo change
export function changegallery(){
  // Get the Value from input field. 
  let changeimg1 = document.getElementById("changeimg1").value;
  let changeimg2 = document.getElementById("changeimg2").value;
  let changeimg3 = document.getElementById("changeimg3").value;
  let changeimg4 = document.getElementById("changeimg4").value;
  let changeimg5 = document.getElementById("changeimg5").value;
  let changeimg6 = document.getElementById("changeimg6").value;
  let changeimg7 = document.getElementById("changeimg7").value;
  let changeimg8 = document.getElementById("changeimg8").value;
  	
  // Get the logo.src and replace it by the input value
  document.getElementById('img1').src = changeimg1; 
  document.getElementById('img2').src = changeimg2; 
  document.getElementById('img3').src = changeimg3; 
  document.getElementById('img4').src = changeimg4; 
  document.getElementById('img5').src = changeimg5; 
  document.getElementById('img6').src = changeimg6; 
  document.getElementById('img7').src = changeimg7; 
  document.getElementById('img8').src = changeimg8; 
  document.getElementById('thumb1').src = changeimg1; 
  document.getElementById('thumb2').src = changeimg2; 
  document.getElementById('thumb3').src = changeimg3; 
  document.getElementById('thumb4').src = changeimg4; 
  document.getElementById('thumb5').src = changeimg5; 
  document.getElementById('thumb6').src = changeimg6; 
  document.getElementById('thumb7').src = changeimg7; 
  document.getElementById('thumb8').src = changeimg8;
}
export function shipping(){

  let shipping_dhl = document.getElementById("dhl").checked;
  let shipping_dpd = document.getElementById("dpd").checked;
  let shipping_hermes = document.getElementById("hermes").checked;
  let customshipping = document.getElementById('customshipping').value;

  if (shipping_dhl === true){
      document.getElementById("shipping_dhl").setAttribute('style', 'display:inline-block;');

  } else {
      document.getElementById("shipping_dhl").setAttribute('style', 'display:none;');
  };
  if (shipping_dpd === true){
    document.getElementById("shipping_dpd").setAttribute('style', 'display:inline-block;');

  } else {
      document.getElementById("shipping_dpd").setAttribute('style', 'display:none;');
  };
  if (shipping_hermes === true){
    document.getElementById("shipping_hermes").setAttribute('style', 'display:inline-block;');
  
  } else {
    document.getElementById("shipping_hermes").setAttribute('style', 'display:none;');
  };
  document.getElementById("customship").setAttribute('src', customshipping);
  }

  export function paymenth(){
    let pay_paypal = document.getElementById("paypal").checked;
    let pay_bank = document.getElementById("bank").checked;
    let pay_cc = document.getElementById("cc").checked;
    let pay_cash = document.getElementById("cash").checked;

    if (pay_paypal === true) {
      document.getElementById("pay_paypal").setAttribute('style', 'display:block;');
    } else {
      document.getElementById("pay_paypal").setAttribute('style', 'display:none;');
    }
    if (pay_bank === true) {
      document.getElementById("pay_bank").setAttribute('style', 'display:block;');
    } else {
      document.getElementById("pay_bank").setAttribute('style', 'display:none;');
    }
    if (pay_cc === true) {
      document.getElementById("pay_cc").setAttribute('style', 'display:block;');
    } else {
      document.getElementById("pay_cc").setAttribute('style', 'display:none;');
    }
    if (pay_cash === true) {
      document.getElementById("pay_cash").setAttribute('style', 'display:block;');
    } else {
      document.getElementById("pay_cash").setAttribute('style', 'display:none;');
    }

  }

  export function downloadtemplate() {
    var base64doc = btoa(unescape(encodeURIComponent(document.getElementById('textsave').value))),
        a = document.createElement('a'),
        e = new MouseEvent('click');
  
    a.download = '4views.html';
    a.href = 'data:text/html;base64,' + base64doc;
    a.dispatchEvent(e);
  }

  // Refresh the Iframe Content, important for new Import.
export function refresh(){ 
    var textContent = document.getElementById('editor-textarea').value;
    document.getElementById('preview').srcdoc = textContent;
    };
  
  
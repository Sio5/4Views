export function ebaygetcrossdata() {
    let crossitem1 = document
        .getElementById('crosssellid1')
        .value;
    let crossitem2 = document
        .getElementById('crosssellid2')
        .value;
    let crossitem3 = document
        .getElementById('crosssellid3')
        .value;
    let siteid = document.getElementById('ebaycountry');
    let siteidselected = siteid.options[siteid.selectedIndex].value;

    var url = 'http://open.api.ebay.com/shopping?';
    url += 'callname=GetMultipleItems';
    url += '&appid=RuslanKr-forviews-PRD-2f2fb35bc-4bba6302';
    url += '&version=967';
    url += `&siteid=${siteidselected}`;
    url += '&responseencoding=JSON';
    url += '&REST-PAYLOAD';
    url += `&ItemID=${crossitem1},${crossitem2},${crossitem3}`;

    fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "text/plain",
            "responseType": "json"
        }
    }).then(response => {
        return (response.json())

    }).then(data => {
        var crossgallery = Array
            .from(document.querySelectorAll("#crossgallery a"))
            .map(crossitems => crossitems.childNodes[1].src);

        var crossgalleryIMG = Array
            .from(document.querySelectorAll("#crossgallery a img"))
            .map((img, i) => {
                if (crossgallery[i]) {
                    return (img.setAttribute("src", data.Item[i].PictureURL[0]))
                }
            })
        var crossgalleryTitle = Array
            .from(document.querySelectorAll("#crossgallery a h3"))
            .map((h3, i) => {
                if (crossgallery[i]) {
                    return h3.innerHTML = data.Item[i].Title;
                }
            })
        var crossgalleryPrice = Array
            .from(document.querySelectorAll("#crosssellitem_price"))
            .map((h4, i) => {
                if (crossgallery[i]) {
                    return h4.innerHTML = `${data.Item[i].ConvertedCurrentPrice.Value}<sup>${data.Item[i].ConvertedCurrentPrice.CurrencyID}</sup>`;
                }
            })
            .catch(error => console.error(error));

    });

};

export function changelogo() {

    var logo = document
        .getElementById("logourl")
        .value;
    if (logo !== '') {
        document
            .getElementById('logo')
            .src = logo;
    }
}

export function changegallery() {

    var newimgURL = Array
        .from(document.querySelectorAll('#menuitems > input'))
        .map(imgdata => imgdata.value);

    //Replace Gallery Images & Thumbs src with new ones from Input fields.
    Array
        .from(document.querySelectorAll('#gallery img'))
        .map((img, i) => {
            if (newimgURL[i] !== '') {
                return (img.setAttribute("src", newimgURL[i]))
            } else {
                return (img.setAttribute("src", ''))
            }
        });
    Array
        .from(document.querySelectorAll('#gallery .ThumbNav img'))
        .map((img, i) => {
            if (newimgURL[i] !== '') {
                return (img.setAttribute("src", newimgURL[i]))
            } else {
                return (img.setAttribute("src", ''))
            }
        });
};

export function shipping() {

    let customshipping = document
        .getElementById('customshipping')
        .value;
    if (customshipping !== '') {
        document
            .getElementById("customship")
            .setAttribute('src', customshipping);
    }
}

//Updathe the Paymenths the User has selected and hide the unselected ones.
export function updatepaymenth() {
    var paymenthName = Array
        .from(document.querySelectorAll('#paymenthInputs input'))
        .map(nameofin => nameofin.attributes[2].value);

    var paymenthChecked = Array
        .from(document.querySelectorAll('#paymenthInputs input'))
        .map(nameofin => nameofin.checked);

    Array
        .from(document.querySelectorAll('#paybox span'))
        .map((span, i) => {
            if (paymenthChecked[i] === true) {
                return (document.getElementById("pay_" + paymenthName[i]).setAttribute('style', 'display:block;'))
            } else {
                return (document.getElementById("pay_" + paymenthName[i]).setAttribute('style', 'display:none;'))
            }
        });

}

export function downloadtemplate() {
    var base64doc = btoa(unescape(encodeURIComponent(document.getElementById('textsave').value))),
        a = document.createElement('a'),
        e = new MouseEvent('click');

    a.download = '4views.html';
    a.href = `data:text/html;base64,${base64doc}`;
    a.dispatchEvent(e);
}

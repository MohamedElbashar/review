document.addEventListener('DOMContentLoaded', function () {
    let payment_method;
    var dataElement = document.getElementById('dataElement');
    var dataObj = JSON.parse(dataElement.getAttribute('data-options'));
    var localArr = document.getElementById('local_arr');
    var localArrayData = JSON.parse(localArr.getAttribute('local-array-data'));
    let options = document.querySelectorAll('.image-container');
    let proceed_pay = document.getElementById('pay');

    document.getElementById('snackbar').style.display = 'none';

    document.getElementById('show_loader').style.visibility = 'hidden';
    console.log("dataObj", dataObj);
    // Loop through each 'image-container' element and attach a click event listener
    let selectFlag = false
    proceed_pay.disabled = true
    proceed_pay.classList.add('disabled-button');

    document.getElementById('mySelect').addEventListener('change', function() {
        let selectedVal = localArrayData[this.selectedIndex].key;
        window.location.href = `${dataObj['internal_url']}v1/fetchPaymentOptions?product_type=${dataObj['product_type'] || 'MOTOR'}&channel_code=${dataObj['channel_code'] || 'SP'}&device_type=${dataObj['device_type']}&checkout_id=${dataObj['parent_checkout_id']}&locale=${selectedVal || 'en'}`
    });


    options.forEach(function (option) {
        option.addEventListener('click', () => {
            selectFlag = false
            option.classList.toggle('selected')
            options.forEach(function (otherOption) {
                if (otherOption !== option) {
                    otherOption.classList.remove('clicked');
                    otherOption.classList.remove('selected')
                }
                if(otherOption.classList.contains('selected')) {
                    selectFlag = true
                }
            });
            option.classList.toggle('clicked');
            option.classList.remove('unclicked');
            let typeData = option.getAttribute('data-type');
            let type = JSON.parse(typeData);
            payment_method = type['payment_type'];
            if(!selectFlag) {
                proceed_pay.disabled = true
                proceed_pay.classList.add('disabled-button')
            } else {
                proceed_pay.disabled = false
                proceed_pay.classList.remove('disabled-button')
            }
        });
    });

    proceed_pay.addEventListener('click', () => {
        dataObj['payment_method'] = payment_method;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Content-Type header for JSON data
            },
            body: JSON.stringify(dataObj)
        };
    
        console.log("options", dataObj);
        document.getElementById('show_loader').style.visibility = 'visible';
        fetch(dataObj['callback_url'], options)
            .then(response => {
                return response.json();
            }).then((data) => {
                console.log(data);
                document.getElementById('show_loader').style.visibility = 'hidden';
                if(data && data['redirectUrl']) {
                    window.location.href = data['redirectUrl'];
                } else {
                    showSnackbar(data['error'] || 'Payment failed... Please select other payment mode to proceed');
                }
            })
            .catch(error => {
                document.getElementById('show_loader').style.visibility = 'hidden';
                console.error('There was a problem with the fetch operation:', error);
                showSnackbar(error || 'Payment failed... Please select other payment mode to proceed');
                // Handle errors appropriately
            });
    });

});

function showSnackbar(message) {
    var snackbar = document.getElementById("snackbar");
    snackbar.style.display = 'block';
    snackbar.innerText = message;
    snackbar.className = "show";
    setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}

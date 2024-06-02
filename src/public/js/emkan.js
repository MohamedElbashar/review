// Function to open the modal
function openModal() {
    let modal = document.getElementById('popup');
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    let modal = document.getElementById('popup');
    modal.style.display = 'none';
}

// Call openModal function when the page loads
window.onload = openModal;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('show_loader').style.visibility = 'hidden';

    let paymentElement = document.getElementById('emkan_payment');
    let paymentDetails = JSON.parse(paymentElement.getAttribute('data-payer'));

    if(document.getElementById('closePopup')) {
        document.getElementById('closePopup').addEventListener('click', () => {
            window.location.href = `${paymentDetails['cancel_url']}`
            closeModal();
        });
    }

    if (paymentDetails['activity_type'] == 'get_voucher') {
        let submit = document.getElementById('get_voucher');
        let voucher_code = document.getElementById('voucher_no');
        let application_id = document.getElementById('application_id');
        let error_msg = document.getElementById('error_msg');

        submit.addEventListener('click', (event) => {
            if(!voucher_code.value || !application_id.value) {
                error_msg.style.display = 'block';
                error_msg.textContent = `Please provide valid details`;
                return;
            } else {
                paymentDetails['voucher_code'] = voucher_code.value.trim();
                paymentDetails['application_id'] = application_id.value.trim();
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json' // Content-Type header for JSON data
                    },
                    body: JSON.stringify(paymentDetails)
                }; 

                document.getElementById('show_loader').style.visibility = 'visible';
                fetch(paymentDetails['callback_url'], options)
                .then(response => {
                    return response.json();
                }).then((data) => {
                    console.log(data);
                    document.getElementById('show_loader').style.visibility = 'hidden';
                    if (data['redirectUrl']) {
                        window.location.href = data['redirectUrl'];
                    } else {
                        error_msg.style.display = 'block';
                        error_msg.textContent = data['error'];
                    }
                })
                .catch(error => {
                    document.getElementById('show_loader').style.visibility = 'hidden';
                    console.error('There was a problem with the fetch operation:', error);
                    errorElement.style.display = 'block';
                    // Handle errors appropriately
                });
            }
        });

        
    }


    if(paymentDetails['activity_type'] == 'enter_otp') {
        let errorElement = document.getElementById('error_msg_1');
        let enterOtpSubmit = document.getElementById('enter_otp_submit');
        let otpVal = document.getElementById('otp_val');
        let otpValue = '';


        otpVal.addEventListener('keyup', (event) => {
            let res = event.target.id.split('_');
            if (event.key === 'Backspace' && event.target.value == '' && res[1] != 1) {
                let res_id = parseInt(res[1]) - 1;
                document.getElementById('otp_' + res_id).focus();
            } else if (event.key.length === 1 && event.target.value != '' && res[1] != 4) {
                let res_id = parseInt(res[1]) + 1;
                document.getElementById('otp_' + res_id).focus();
            }

            let otpval_1 = document.getElementById('otp_1').value;
            let otpval_2 = document.getElementById('otp_2').value;
            let otpval_3 = document.getElementById('otp_3').value;
            let otpval_4 = document.getElementById('otp_4').value;

            otpValue = otpval_1 + '' + otpval_2 + '' + otpval_3 + '' + otpval_4;

            if (!otpValue) {
                errorElement.textContent = 'Please enter OTP';
                errorElement.style.display = 'block';
                return;
            } else {
                errorElement.style.display = 'none';
            }
        });

        enterOtpSubmit.addEventListener('click', (event) => {
            if (otpValue == '' || otpValue.length != 4) {
                errorElement.style.display = 'block';
                errorElement.textContent = `Please enter OTP value`;
                return;
            } else {
                //set amount and otp
                if (errorElement && errorElement.style.display == 'block')
                    errorElement.style.display = 'none';
                paymentDetails['voucher_data'] = {
                    "national_id": paymentDetails['national_id'],
                    "voucher_code": paymentDetails['voucher_code'],
                    "otp_value": otpValue,
                    "otp_reference": paymentDetails['otp_reference']
                }
                paymentDetails['otp_value'] = otpValue;

                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json' // Content-Type header for JSON data
                    },
                    body: JSON.stringify(paymentDetails)
                };

                document.getElementById('show_loader').style.visibility = 'visible';
                fetch(paymentDetails['callback_url'], options)
                    .then(response => {
                        return response.json();
                    }).then((data) => {
                        if (data && data['error']) {
                            errorElement.style.display = 'block';
                            errorElement.textContent = data['error'];
                            return;
                        }
                        console.log(data);
                        document.getElementById('show_loader').style.visibility = 'hidden';
                        if (data) {
                            window.location.href = data['redirectUrl'];
                        }
                    })
                    .catch(error => {
                        document.getElementById('show_loader').style.visibility = 'hidden';
                        console.error('There was a problem with the fetch operation:', error);
                        // Handle errors appropriately
                    });
            }
        })
    }
});
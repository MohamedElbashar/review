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


// Add event listener for DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('show_loader').style.visibility = 'hidden';
    let paymentElement = document.getElementById('mokfaa_payment');
    let paymentDetails = JSON.parse(paymentElement.getAttribute('data-auth-mobile'));
    let errorElement = document.getElementById('error_msg');

    if(document.getElementById('auth_mobile_cancel')) {
        document.getElementById('auth_mobile_cancel').addEventListener('click', () => {
            window.location.href = `${paymentDetails['cancel_url']}`
            closeModal();
        });
    }

    if(document.getElementById('closePopup')) {
        document.getElementById('closePopup').addEventListener('click', () => {
            window.location.href = `${paymentDetails['cancel_url']}`
            closeModal();
        });
    }

    if (paymentDetails['activity_type'] == 'auth_mobile') {
        let editButton = document.getElementById('edit');
        let edit_content = document.getElementById('edit_input');
        let show_mobile_no = document.getElementById('show_mobile_no');
        let editMobileNo = document.getElementById('edit_mobile_no');
        let authMobileSubmit = document.getElementById('auth_mobile_submit');
        edit_content.style.display = 'none';
        show_mobile_no.style.display = 'block';
        editButton.addEventListener('click', (event) => {
            event.preventDefault();
            if (edit_content.style.display === 'none') {
                edit_content.style.display = 'block';
                show_mobile_no.style.display = 'none';
                let initValue = document.getElementById('quote_mob').innerText;
                editMobileNo.value = initValue.substring(5);
            } else {
                edit_content.style.display = 'none';
                show_mobile_no.style.display = 'block';
            }
        });


        //  event listener to input field for validation
        editMobileNo.addEventListener('input', () => {
            // Hide error message when user starts typing again
            errorElement.style.display = 'none';
        });

        editMobileNo.addEventListener('keydown', (event) => {
            // Get the key code of the pressed key
            var key = event.key;

            // Allow only numeric keys (0-9) and special keys like Backspace, Delete, and Arrow keys
            if ((isNaN(parseInt(key)) || key === ' ') && // Non-numeric keys
                key !== 'Backspace' && key !== 'Delete' && // Backspace and Delete keys
                key !== 'ArrowLeft' && key !== 'ArrowUp' && key !== 'ArrowRight' && key !== 'ArrowDown') { // Arrow keys
                // Prevent default behavior (input of non-numeric characters)
                event.preventDefault();
            }
        });

        authMobileSubmit.addEventListener('click', () => {
            if (edit_content.style.display === 'block' && (editMobileNo.value == '' || editMobileNo.value.length < 9)) {
                errorElement.style.display = 'block';
                errorElement.textContent = 'Please enter valid mobile number';
            } else {
                let mobile_no;
                if (edit_content.style.display === 'block') {
                    mobile_no = editMobileNo.value;
                }

                //set mobile_no
                paymentDetails['mobile_no'] = mobile_no || paymentDetails['mobile_no'];

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
        });
    }


    // Enter otp 

    if (paymentDetails['activity_type'] == 'enter_otp') {
        let errorElement = document.getElementById('error_msg_1');
        let mokafaa_amt = document.getElementById('mokafaa_req_amt');
        let enterOtpSubmit = document.getElementById('enter_otp_submit');
        let resentOtp = document.getElementById('resent_otp');
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
            } else if (!mokafaa_amt.value) {
                errorElement.textContent = 'Please enter SAR Value';
                errorElement.style.display = 'block';
                return;
            } else {
                errorElement.style.display = 'none';
            }
        })

        enterOtpSubmit.addEventListener('click', () => {
            if (otpValue == '' || otpValue.length != 4 || mokafaa_amt.value == '') {
                errorElement.style.display = 'block';
                errorElement.textContent = `Please enter ${(otpValue && otpValue.length == 4) ? 'SAR' : 'OTP'} value`;
                return;
            } else {
                //set amount and otp
                if (errorElement && errorElement.style.display == 'block')
                    errorElement.style.display = 'none';
                paymentDetails['otp_value'] = otpValue;
                paymentDetails['mokafaa_amount_req'] = mokafaa_amt.value;


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
        });

        resentOtp.addEventListener('click', () => {
            document.getElementById('show_loader').style.visibility = 'visisble';
            fetch(paymentDetails['resend_otp_url'], options)
                .then(response => {
                    return response.json();
                }).then((data) => {
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
        });
    }


    if (paymentDetails['activity_type'] == 'success') {
        let reverse_points = document.getElementById('reverse_points');
        let redeem_confirmation = document.getElementById('confirm_reedem');

        reverse_points.addEventListener('click', () => {
            document.getElementById('show_loader').style.visibility = 'visible';
            window.location.href = paymentDetails['reverse_url'];
            document.getElementById('show_loader').style.visibility = 'hidden';
        });

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Content-Type header for JSON data
            },
            body: JSON.stringify(paymentDetails)
        };

        redeem_confirmation.addEventListener('click', () => {
            document.getElementById('show_loader').style.visibility = 'visible';
            fetch(paymentDetails['confirm_url'], options)
                .then(response => {
                    return response.json();
                }).then((data) => {
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
        });

    }

    if (paymentDetails['activity_type'] == 'reverse') {
        let mokafaa_reverse_confirm = document.getElementById('mokafaa_reverse_confirm');

        mokafaa_reverse_confirm.addEventListener('click', () => {
            document.getElementById('show_loader').style.visibility = 'visible';
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' // Content-Type header for JSON data
                },
                body: JSON.stringify(paymentDetails)
            };
            fetch(paymentDetails['reverse_url'], options)
                .then(response => {
                    return response.json();
                }).then((data) => {
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
        })

    }

});

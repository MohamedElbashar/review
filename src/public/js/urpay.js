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

    let paymentElement = document.getElementById('urpay_payment');
    let paymentDetails = JSON.parse(paymentElement.getAttribute('data-payer'));
    let enterOtpSubmit = document.getElementById('enter_otp_submit');
    let errorElement = document.getElementById('error_msg_1');
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

        // if (!otpValue) {
        //     errorElement.textContent = 'Please enter OTP';
        //     errorElement.style.display = 'block';
        //     return;
        // } else {
        //     errorElement.style.display = 'none';
        // }
    });

    enterOtpSubmit.addEventListener('click', () => {
        if (otpValue == '' || otpValue.length != 4) {
            errorElement.style.display = 'block';
            errorElement.textContent = `Please enter OTP value`;
            return;
        } else {
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
                    console.log(data);
                    document.getElementById('show_loader').style.visibility = 'hidden';
                    if (data) {
                        window.location.href = data['redirectUrl'];
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

    resentOtp.addEventListener('click', () => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Content-Type header for JSON data
            },
            body: JSON.stringify(paymentDetails)
        };

        document.getElementById('show_loader').style.visibility = 'visible';
        fetch(paymentDetails['resend_otp'], options)
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
                errorElement.style.display = 'block';
                errorElement.textContent = `OTP has been expired`;
                // Handle errors appropriately
            });
    });
});
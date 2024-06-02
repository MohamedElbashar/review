// Function to refresh the page
function refreshPage() {
  // Refresh the page using location.reload() method
  location.reload();
}

// Function to disable navigation to the previous page (browser's back button)
function disableBackButton() {
  // Push a new state to the history
  window.history.replaceState({}, document.title, window.location.href);
  window.history.pushState({ page: 'payment_status' }, document.title, window.location.href);
  // window.history.pushState(null, null, window.location.href);

  // Add event listener to the popstate event
  window.addEventListener('popstate', function (event) {
    // Reload the page when the back button is clicked
    refreshPage();

    // Prevent navigation to the previous page
    window.history.pushState(null, document.title, window.location.href);
  });
}

window.history.pushState(null, null, window.location.href);

// Listen for the beforeunload event to prevent leaving the page
window.addEventListener('beforeunload', function (e) {
  // Cancel the event
  // e.preventDefault();
  e.returnValue = '';
  // Push a new state to the history stack to prevent navigating back
  window.history.pushState(null, null, window.location.href);
});

window.addEventListener('load', () => {
  // Check if we are on the desired page
  if (!isPaymentPage()) {
    return;
  }

  // Disable the back button
  document.body.addEventListener("keydown", function (event) {
    if ((event.key === "Backspace") || (event.key === "ArrowLeft")) {
      event.preventDefault();
      return false;
    }
  });

  history.pushState(null, null, location.href);
  window.onpopstate = function () {
    history.go(1);
  };
});

function isPaymentPage() {
  // Replace this condition with your own logic to detect the payment page
  return location.pathname.includes('/payment_status');
}


// Add event listener for DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function () {
  disableBackButton();
  var dataElement = document.getElementById('dataElement');
  var dataObj = JSON.parse(dataElement.getAttribute('data-options'));
  var localArr = document.getElementById('local_arr');
  var localArrayData = JSON.parse(localArr.getAttribute('local-array-data'));


  if(document.getElementById('closePopup')) {
    document.getElementById('closePopup').addEventListener('click', () => {
        window.location.href = 'https://www.alrajhitakaful.com/en'
    });
  }


  let copied = document.getElementById('copied');
  copied.style.visibility = 'hidden';

  // get elements
  let copyButton = document.getElementById('copy');
  let txnRefNumber = document.getElementById('txnRefNumber').innerText;

  // Add click event listener to copy button
  copyButton.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();

    // Create a temporary textarea element
    var tempTextArea = document.createElement('textarea');
    tempTextArea.value = txnRefNumber;
    document.body.appendChild(tempTextArea);

    // Focus and select the text in the textarea
    tempTextArea.focus();
    tempTextArea.select();

    // Copy the selected text to the clipboard
    try {
      document.execCommand('copy');
      copied.style.visibility = 'visible';
      setTimeout(() => {
        copied.style.visibility = 'hidden';
      }, 1000);
    } catch (error) {
      console.error('Error copying text:', error);
    } finally {
      // Remove the temporary textarea from the DOM
      document.body.removeChild(tempTextArea);
    }
  });

  document.getElementById('mySelect').addEventListener('change', function () {
    let selectedVal = localArrayData[this.selectedIndex].key;
    window.location.href = `${dataObj['internal_url']}v1/payment_status?parent_checkout_id=${dataObj['parent_checkout_id']}&txn_ref_number=${dataObj?.txn_ref_number}&source_id_no=${dataObj['source_id_no']}&locale=${selectedVal}`;
  });

  // Function to copy text to clipboard
  function copyText(text) {
    try {
      navigator.clipboard.writeText(text);
      copied.style.visibility = 'visible';

      setTimeout(() => {
        copied.style.visibility = 'hidden';
      }, 1000)
    } catch (error) {
      console.error('Error copying text:', error);
    }
  }

  if (document.getElementById('backtohome')) {
    const backtohome = document.getElementById('backtohome');
    let home_page_link;
    if (backtohome) {
      home_page_link = backtohome.getAttribute('data-options');
    }
    backtohome.addEventListener('click', () => {
      if (home_page_link)
        window.location.href = home_page_link
    });


    if (home_page_link) {
      let seconds = 10;

      function updateTimer() {
        document.getElementById('timer').innerText = dataObj['locale'] == 'ar' ? getArabic('ar', seconds) : seconds;

        seconds--;

        if (seconds <= 0) {
          window.location.href = home_page_link;
        } else {
          setTimeout(updateTimer, 1000);
        }
      }

      updateTimer();
    }
  }

  function getArabic(locale, num) {
    let arabic_num = [{
      "en": 1,
      "ar": "١"
    },
    {
      "en": 2,
      "ar": "٢"
    },
    {
      "en": 3,
      "ar": "٣"
    },
    {
      "en": 4,
      "ar": "٤"
    },
    {
      "en": 5,
      "ar": "٥"
    },
    {
      "en": 6,
      "ar": "٦"
    },
    {
      "en": 7,
      "ar": "٧"
    },
    {
      "en": 8,
      "ar": "٨"
    },
    {
      "en": 9,
      "ar": "٩"
    },
    {
      "en": 10,
      "ar": "١٠"
    }];

    return arabic_num.filter(x => x[locale == 'ar' ? 'en' : 'ar'] == num)[0][locale];
  }
});


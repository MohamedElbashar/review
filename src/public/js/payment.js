window.history.pushState(null, null, window.location.href);

// Listen for the beforeunload event to prevent leaving the page
window.addEventListener('beforeunload', function(e) {
    // Cancel the event
    // e.preventDefault();
    e.returnValue = ''
    // Push a new state to the history stack to prevent navigating back
    window.history.pushState(null, null, window.location.href);
});
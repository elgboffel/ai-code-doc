//create a function to validate email with regex
function validateEmail(email: string) {
    //regex to validate email
    const test = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    return test
}

    
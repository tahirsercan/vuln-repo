// Vulnerable JavaScript Code Demonstrating Multiple Security Issues

// 1. SQL Injection Vulnerability
function getUserByUsername(username) {
    // VULNERABLE: Directly inserting user input into SQL query
    const query = `SELECT * FROM users WHERE username = '${username}'`;
    return database.execute(query);
}

// 2. Cross-Site Scripting (XSS) Vulnerability
function renderUserComment(comment) {
    // VULNERABLE: Directly inserting user input into HTML without sanitization
    document.getElementById('comment-section').innerHTML = comment;
}

// 3. Hardcoded Credentials
const DATABASE_PASSWORD = 'supersecretpassword123';  // VULNERABLE: Never hardcode credentials

// 4. Potential Remote Code Execution
function unsafeEval(userInput) {
    // VULNERABLE: Using eval() with unsanitized user input
    return eval(userInput);
}

// 5. Weak Cryptographic Function
function generateWeakToken(userId) {
    // VULNERABLE: Using a predictable token generation method
    return userId + Date.now().toString();
}

// 6. Dependency with Known Vulnerability
const axios = require('axios');  // Using an outdated version with known security issues

// 7. Insecure Random Number Generation
function generateInsecureToken() {
    // VULNERABLE: Math.random() is not cryptographically secure
    return Math.random().toString(36).substring(2);
}

// 8. Potential Path Traversal
function readUserFile(filename) {
    // VULNERABLE: No input validation for file path
    const fullPath = `/user-uploads/${filename}`;
    return fs.readFileSync(fullPath);
}

// 9. Sensitive Data Exposure
function logUserDetails(user) {
    // VULNERABLE: Logging sensitive information
    console.log(`User Details: ${JSON.stringify(user)}`);
}

// 10. Insecure Deserialization
function parseUserData(data) {
    // VULNERABLE: Using JSON.parse without validation
    return JSON.parse(data);
}

module.exports = {
    getUserByUsername,
    renderUserComment,
    unsafeEval,
    generateWeakToken,
    generateInsecureToken,
    readUserFile,
    logUserDetails,
    parseUserData
};

// src/helpers/fileHandler.js
const atob = require('atob');

const validateFile = (base64String) => {
    if (!base64String) return { valid: false };

    const matches = base64String.match(/^data:(.*);base64,(.*)$/);
    if (!matches || matches.length !== 3) return { valid: false };

    const mimeType = matches[1];
    const fileContent = matches[2];
    const fileSizeKb = Math.round((atob(fileContent).length / 1024) * 100) / 100;

    return { valid: true, mimeType, fileSizeKb };
};

module.exports = validateFile;

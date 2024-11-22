// src/controllers/bfhlController.js
const processData = require('../helpers/dataProcessing');
const validateFile = require('../helpers/fileHandler');

const handlePostRequest = (req, res) => {
    const { data, file_b64 } = req.body;

    const processedData = processData(data);

    let fileData = { valid: false };
    if (file_b64) {
        fileData = validateFile(file_b64);
    }

    const response = {
        is_success: true,
        user_id: 'john_doe_17091999',
        email: 'john@xyz.com',
        roll_number: 'ABCD123',
        ...processedData,
        file_valid: fileData.valid,
        file_mime_type: fileData.mimeType || null,
        file_size_kb: fileData.fileSizeKb || null,
    };

    res.status(200).json(response);
};

const handleGetRequest = (req, res) => {
    res.status(200).json({ operation_code: 1 });
};

module.exports = { handlePostRequest, handleGetRequest };

const express = require('express');
const multer = require('multer');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const upload = multer({ dest: './uploads/' });
const apiKey = 'AIzaSyBsKibhqZSNAq0tQPi1uNL3SLvRpqo9-VI';
const genAI = new GoogleGenerativeAI(apiKey);

app.post('/generate-text', upload.single('image'), async (req, res) => {
    try {
        const imageBuffer = req.file.buffer;
        const model = await genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const result = await model.generateContent([
            'What is in this photo?',
            {
                inlineData: {
                    data: imageBuffer.toString('base64'),
                    mimeType: 'image/png',
                },
            },
        ]);
        const generatedText = result.response.text();
        res.json({ text: generatedText });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to generate text' });
    }
});

app.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
});
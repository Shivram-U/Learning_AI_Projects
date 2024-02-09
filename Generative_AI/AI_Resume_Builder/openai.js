const fs = require('fs'); 
const OpenAI = require('openai');

const apiKey = "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";
console.log(apiKey);

const openai = new OpenAI({
  apiKey,
});

const prompt = 'What is the purpose of life?'; 

async function getResponse(prompt) {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ]
    });
    
    console.log(completion.choices[0]);
    console.log(completion.choices[0].message);
    return completion.choices[0].message.content; 
  } catch (error) {
    console.error('Error:', error);
  }
}


module.exports = { getResponse }; 
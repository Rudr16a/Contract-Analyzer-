const { Configuration, OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: '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'
});

const analyzeContract = async (contractText) => {
  try {
    const prompt = `Analyze the following contract and summarize its main points, highlight anything that could potentially help the user and anything that could be dangerous to the user, also provide suggestions to improve the contract:\n\n${contractText}\n`;
    
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{"role": "user", "content": prompt}],
    });
    console.log(chatCompletion);
    return chatCompletion.choices[0].message.content;
  } catch (error) {
    console.error('Error in analyzing contract:', error);
    throw error;
  }
};

module.exports = analyzeContract;

import { Configuration, OpenAIApi } from "openai";

type MessageType = {
    sender: string;
    message: string;
    timestamp: string;
}

const configuration = new Configuration({
    apiKey: "KEY",
});
const openai = new OpenAIApi(configuration);

async function fetchBotReply(messageHistory: MessageType[]) {
    const messages = messageHistory.map((msg) => {
        return {
            role: msg.sender.toLowerCase(),
            content: msg.message,
        }
    });

    messages.unshift({ role: 'system', content: 'You are a helpful assistant.' });

    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "debug",
            max_tokens: 10,
        });

        return response.data.choices[0].text;
    } catch (error) {
        console.error("Error during API request:", error);
    }

    return "Sorry, my owner has not bought any credits!"
}

export default fetchBotReply;

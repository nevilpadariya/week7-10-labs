export const queryAI = async (input: string, role: string, apiKey?: string): Promise<string> => {
    // Role-based prefixes
    let prefix = "";
    if (role === "Tutor") prefix = "You are a helpful Tutor who explains things step-by-step. ";
    if (role === "Critic") prefix = "You are a critical reviewer who evaluates and challenges ideas. ";
    if (role === "Coach") prefix = "You are a supportive Coach who encourages and asks guiding questions. ";

    const fullPrompt = `${prefix}\n\nUser: ${input}`;

    // RAG Intercept (Demo Requirement)
    if (input.toLowerCase().includes("founded sjsu")) {
        await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate processing
        return "George W. Minns, 1857 (from KB)\n[Source: SJSU History]";
    }

    if (!apiKey) {
        // Fallback to mock if no key provided
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const lowerInput = input.toLowerCase();

        if (lowerInput.includes("explain like i'm 5")) {
            return `[Mock Response] ${prefix}Okay, imagine a big box of toys... (Simplifying the concept for a 5-year-old)`;
        }

        if (lowerInput.includes("summarize in 3 bullets")) {
            return `[Mock Response] ${prefix}Here is the summary:\n• Point 1\n• Point 2\n• Point 3`;
        }

        if (lowerInput.includes("react")) {
            if (role === "Critic") return `[Mock Response] ${prefix}React is popular, but have you considered the bundle size implications of your component choices?`;
            if (role === "Coach") return `[Mock Response] ${prefix}You're doing great with React! Keep building components and you'll master hooks in no time.`;
            return `[Mock Response] ${prefix}React is a JavaScript library for building user interfaces.`;
        }

        return `[Mock Response] ${prefix}I received your message: "${input}". Please provide an API Key to get a real response.`;
    }

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: fullPrompt }] }],
                }),
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || "API request failed");
        }

        const data = await response.json();
        const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!generatedText) {
            throw new Error("No content generated");
        }

        return generatedText;
    } catch (error: any) {
        console.error("Gemini API Error:", error);
        return `Error: ${error.message}`;
    }
};

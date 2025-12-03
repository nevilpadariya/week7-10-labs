export interface RAGResult {
    answer: string;
    citations: Array<{
        id: string;
        text: string;
        source: string;
    }>;
}

export const queryRAG = async (query: string): Promise<RAGResult> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (query.toLowerCase().includes("founded sjsu") || query.toLowerCase().includes("sjsu founded")) {
        return {
            answer: "San José State University was founded in 1857 as the Minns' Evening Normal School.",
            citations: [
                {
                    id: "1",
                    text: "San José State University was founded in 1857.",
                    source: "https://www.sjsu.edu/about/history/"
                },
                {
                    id: "2",
                    text: "It is the oldest public university on the West Coast.",
                    source: "https://en.wikipedia.org/wiki/San_Jose_State_University"
                }
            ]
        };
    }

    return {
        answer: "I don't have information about that specific query in my knowledge base.",
        citations: []
    };
};

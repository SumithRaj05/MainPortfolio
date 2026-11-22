// Project cards, newest/most relevant first.
// Facts here come from each repository's README / pull request.
const projects = [
    {
        title: "ESP32 Sensor Server",
        tools: ["C++", "ESP32", "REST"],
        description: "An ESP32 reads temperature, humidity, light and motion sensors and serves them as JSON over a REST API on the local network, with an OLED display.",
        links: [
            { kind: "github", href: "https://github.com/SumithRaj05/ESP32_REST_API_Sensor_Server", label: "ESP32 REST API Sensor Server on GitHub" },
        ],
    },
    {
        title: "Local RAG with Ollama",
        tools: ["Python", "Ollama", "LlamaIndex"],
        description: "Chat with your own documents fully offline: a RAG pipeline on Ollama models via LlamaIndex, plus a from-scratch RAG notebook.",
        links: [
            { kind: "github", href: "https://github.com/SumithRaj05/Rag_Ollama", label: "Rag_Ollama on GitHub" },
            { kind: "github", href: "https://github.com/SumithRaj05/Custom-RAG-Model", label: "Custom-RAG-Model notebook on GitHub" },
        ],
    },
    {
        title: "Auth CRUD API",
        tools: ["Node.js", "Express", "MongoDB"],
        description: "Sign-up, login and profile CRUD API with JWT auth, bcrypt-hashed passwords and email verification links sent with Nodemailer.",
        links: [
            { kind: "github", href: "https://github.com/SumithRaj05/Authentication-CRUD-api", label: "Authentication CRUD API on GitHub" },
        ],
    },
    {
        title: "Desktop-UI",
        tools: ["React", "Vite", "KDE"],
        description: "A custom desktop UI built with React + Vite and embedded into the Linux KDE Plasma desktop with an HTML plugin and a bash script.",
        links: [
            { kind: "github", href: "https://github.com/SumithRaj05/Desktop-UI", label: "Desktop-UI on GitHub" },
        ],
    },
    {
        title: "Bitbucket MCP Server",
        badge: "Open source · Merged",
        tools: ["Node.js", "MCP"],
        description: "Fixed the server's entry-point check on Windows by comparing resolved paths with fileURLToPath, so it starts on both Windows and Linux.",
        links: [
            { kind: "github", href: "https://github.com/garc33/bitbucket-server-mcp-server/pull/38", label: "Bitbucket Server MCP pull request #38 on GitHub" },
        ],
    },
    {
        title: "CopilotKit OpenDots",
        badge: "Open source · In review",
        tools: ["TypeScript", "UI/UX"],
        description: "Chat UX fixes from an end user's view: sticky composer, short previews instead of full prompts, and a proper loading state.",
        links: [
            { kind: "github", href: "https://github.com/CopilotKit/OpenDots/pull/179", label: "OpenDots pull request #179 on GitHub" },
        ],
    },
    {
        title: "Registration System",
        badge: "Earlier work",
        tools: ["C++", "JSON"],
        description: "A simple project to demonstrate how a database actually works, using a JSON file to store the data with CRUD operations.",
        links: [
            { kind: "github", href: "https://github.com/SumithRaj05/Registration-System-CPP", label: "Registration System on GitHub" },
        ],
    },
    {
        title: "Todo App",
        badge: "Earlier work",
        tools: ["React", "MongoDB", "Node.js"],
        description: "A MERN todo app showcasing MongoDB's CRUD operations to create, read, update and delete todo lists, with user accounts.",
        links: [
            { kind: "github", href: "https://github.com/SumithRaj05/TodoApp_MERN", label: "Todo App on GitHub" },
            { kind: "demo", href: "https://srtaskmanager.netlify.app/", label: "Todo App live demo" },
        ],
    },
];

export default projects;

export default
    {
        verbose: true,
        transform: {
            "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
        },
        testEnvironment: "jsdom",
    };
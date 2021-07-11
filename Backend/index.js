const Jokes = require('./jokesArray');


exports.jokes_generator = async () => {
    const random = Math.floor(Math.random() * Jokes.length);
    const response = {
        statusCode: 200,
        body: Jokes[random],
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    };
    return response;
};

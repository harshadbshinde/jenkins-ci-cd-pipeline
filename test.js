const http = require("http");
const { spawn } = require("child_process");

const server = spawn("node", ["app.js"]);

server.stdout.on("data", (data) => {
    console.log(`APP: ${data}`);
});

server.stderr.on("data", (data) => {
    console.error(`APP ERROR: ${data}`);
});

server.on("error", (error) => {
    console.error("Failed to start application:", error.message);
    process.exit(1);
});

setTimeout(() => {

    http.get("http://localhost:3000/health", (res) => {

        console.log(`Health check status: ${res.statusCode}`);

        if (res.statusCode === 200) {
            console.log("Test passed!");

            server.kill();

            process.exit(0);
        } else {
            console.log("Test failed! Unexpected status code.");

            server.kill();

            process.exit(1);
        }

    }).on("error", (err) => {

        console.error("Test failed:", err.message);

        server.kill();

        process.exit(1);
    });

}, 3000);

const http = require("http");
const { spawn } = require("child_process");

const server = spawn("node", ["app.js"]);

setTimeout(() => {
    http.get("http://localhost:3000/health", (res) => {
        if (res.statusCode === 200) {
            console.log("Test passed!");
            server.kill();
            process.exit(0);
        } else {
            console.log("Test failed!");
            server.kill();
            process.exit(1);
        }
    }).on("error", (err) => {
        console.error("Test failed:", err.message);
        server.kill();
        process.exit(1);
    });
}, 2000);
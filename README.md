# Jenkins CI/CD Pipeline – DevOps Internship Task 2

## 📌 Project Overview

This project demonstrates a basic **CI/CD pipeline using Jenkins and Docker** for a Node.js application.

The objective of this task is to automate the **build, test, and deployment** process using a Jenkins pipeline. The project uses a `Jenkinsfile` to define the complete CI/CD workflow.

---

## 🎯 Objective

The main objectives of this project are:

- Set up Jenkins for CI/CD automation
- Create a Jenkinsfile
- Automate application build
- Run application tests
- Build a Docker image
- Deploy the application using Docker
- Understand the basic Jenkins CI/CD workflow

---

## 🛠️ Technologies Used

- **Jenkins**
- **Docker**
- **Node.js**
- **Express.js**
- **Git**
- **GitHub**
- **Jenkinsfile**
- **Windows**

---

## 📂 Project Structure

```text
jenkins-ci-cd-pipeline/
│
├── app.js
├── test.js
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
├── Jenkinsfile
└── README.md
---

# 🛠️ Technologies Used

- **Jenkins** – CI/CD automation
- **Docker** – Containerization
- **Node.js** – Application runtime
- **Express.js** – Web framework
- **GitHub** – Source code management
- **Git** – Version control
- **Windows** – Jenkins host enviro

---

# 📄 Project Files

## `app.js`

Contains the Node.js application and starts the Express server.

The application runs on:

```text
http://localhost:3000
```

Health-check endpoint:

```text
http://localhost:3000/health
```

---

## `test.js`

Contains the application test.

It checks whether the Node.js application is running correctly and whether the `/health` endpoint returns HTTP status `200`.

---

## `package.json`

Contains:

- Project information
- Node.js dependencies
- Application scripts

Example:

```json
{
  "scripts": {
    "start": "node app.js",
    "test": "node test.js"
  }
}
```

---

## `package-lock.json`

Stores the exact dependency versions installed by npm and helps maintain consistent dependency installation.

---

## `Dockerfile`

The Dockerfile is used to create the Docker image for the Node.js application.

Jenkins builds the Docker image using:

```bash
docker build -t nodejs-demo-app:latest .
```

---

## `Jenkinsfile`

The `Jenkinsfile` is the main CI/CD configuration file.

It defines three stages:

```text
Build
  ↓
Test
  ↓
Deploy
```

---

# 🔄 CI/CD Pipeline

The Jenkins pipeline performs the following steps:

## 1. Build

Jenkins builds the Docker image:

```bash
docker build -t nodejs-demo-app:latest .
```

This creates a Docker image named:

```text
nodejs-demo-app:latest
```

---

## 2. Test

Jenkins installs the Node.js dependencies:

```bash
npm install
```

Then runs the application tests:

```bash
npm test
```

If the tests fail, the pipeline stops and the Deploy stage is skipped.

---

## 3. Deploy

Jenkins first stops the existing Docker container:

```bash
docker stop nodejs-demo-container
```

Then removes the old container:

```bash
docker rm nodejs-demo-container
```

Finally, Jenkins starts a new container:

```bash
docker run -d -p 3000:3000 --name nodejs-demo-container nodejs-demo-app:latest
```

The application is then available on:

```text
http://localhost:3000
```

---

# ⚙️ Jenkins Configuration

## Step 1: Create Jenkins Pipeline

Create a new Jenkins item:

```text
nodejs-demo-app-pipeline
```

Select:

```text
Pipeline
```

---

## Step 2: Configure Pipeline from SCM

Select:

```text
Pipeline script from SCM
```

Select SCM:

```text
Git
```

Repository URL:

```text
https://github.com/harshadbshinde/jenkins-ci-cd-pipeline.git
```

Branch:

```text
*/main
```

Script Path:

```text
Jenkinsfile
```

### Jenkins Configuration

```text
Definition:
Pipeline script from SCM

SCM:
Git

Repository URL:
https://github.com/harshadbshinde/jenkins-ci-cd-pipeline.git

Branch:
*/main

Script Path:
Jenkinsfile
```

---

# 🔄 Pipeline Workflow

```text
Developer
    │
    │ git push
    ▼
GitHub Repository
    │
    ▼
Jenkins
    │
    ▼
Build Stage
    │
    ├── Docker Build
    │
    ▼
Test Stage
    │
    ├── npm install
    ├── npm test
    │
    ▼
Deploy Stage
    │
    ├── Stop Old Container
    ├── Remove Old Container
    └── Start New Container
    │
    ▼
Docker Container
    │
    ▼
Node.js Application
    │
    ▼
Port 3000
```

---

# 🐳 Docker

## Build Docker Image

To build the Docker image manually:

```bash
docker build -t nodejs-demo-app:latest .
```

---

## Check Docker Images

```bash
docker images
```

Expected image:

```text
nodejs-demo-app
```

---

## Run Docker Container

```bash
docker run -d -p 3000:3000 --name nodejs-demo-container nodejs-demo-app:latest
```

---

## Check Running Containers

```bash
docker ps
```

---

## Check Container Logs

```bash
docker logs nodejs-demo-container
```

---

## Stop Container

```bash
docker stop nodejs-demo-container
```

---

## Remove Container

```bash
docker rm nodejs-demo-container
```

---

# 🧪 Testing

## Install Dependencies

```bash
npm install
```

## Run Tests

```bash
npm test
```

Expected result:

```text
Test passed!
```

The same test is automatically executed by Jenkins during the **Test** stage.

---

# 🌐 Application

After successful deployment, open:

```text
http://localhost:3000
```

Health-check endpoint:

```text
http://localhost:3000/health
```

---

# 📚 Learning Outcomes

Through this project, I learned:

- Jenkins CI/CD fundamentals
- Jenkins Pipeline
- Jenkinsfile
- Declarative Pipeline syntax
- Build, Test, and Deploy stages
- Docker image creation
- Docker container deployment
- GitHub and Jenkins integration
- Automated application deployment
- Basic CI/CD troubleshooting

---

---

# 🎯 Project Result

The project demonstrates a basic Jenkins CI/CD pipeline that automates the build, testing, and deployment of a Node.js application using Jenkins and Docker.

```text
GitHub
   ↓
Jenkins
   ↓
Build
   ↓
Test
   ↓
Deploy
   ↓
Docker Container
   ↓
Node.js Application
```

---

---

# 🔗 Repository

GitHub Repository:

https://github.com/harshadbshinde/jenkins-ci-cd-pipeline.git

---

# 👨‍💻 Author
Harshad Shinde
DevOps / AWS Learner

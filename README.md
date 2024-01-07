# Instagram-Clone Website

This website is a simple instagram clone using EJS, NodeJs, ExpressJs and Mongoose.


## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- [npm](https://www.npmjs.com/) (Node Package Manager) comes with Node.js.

### Installation
1. Clone the repository:
```bash
git clone https://github.com/deedee-code/Instagram-Clone.git
```

2. Navigate to the project directory:
```bash
cd Instagram-Clone
```

3. Install Dependencies:
```bash
npm install
```

4. Create an .env file in the root directory to store your MONGO_URI.

5. Run the Server:
```bash
npm run dev
```


## Table of Contents

- [Features](https://github.com/deedee-code/Instagram-Clone#features)
- [Environment Variables](https://github.com/deedee-code/Instagram-Clone#environment-variables)


### [Features](#features)

- **NoSQL database**: [MongoDB](https://www.mongodb.com/) object data modeling using [Mongoose](https://mongoosejs.com/)
- **Error handling**: error handling mechanism with specific result messages and codes
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv)


### [Environment Variables](#environment-variables)

The environment variables should be set in a '.env' file. The '.env' file should be created in your root folder.You should set the values of these keys:

```js
# PORT
PORT=PORT_HERE

# Mongoose URL
MONGO_URI=MONGO_URI_HERE
```


### Here is the hosted link: https://instagram-clone-8r32.onrender.com

**Dummy Login details**
```js
username: jane_doe
password: janedoe
```

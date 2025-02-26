# Node.js-API-Data-Fetcher-Exporter
This Node.js application fetches data from an external API, stores it in a database (MongoDB or MySQL), and provides an API endpoint to retrieve the stored data with pagination and sorting.

Features

✅ Fetch data from https://jsonplaceholder.typicode.com/posts
✅ Save the fetched data into MongoDB or MySQL
✅ Provide an API endpoint to export the stored data
✅ Support pagination for better performance
✅ Support sorting based on fields

Installation & Setup

1️⃣ Clone the Repository:
git clone <repository_url>
cd node-api-fetch

2️⃣ Install Dependencies:
npm install

3️⃣ Database Configuration

MongoDB Setup

If using MongoDB, update your .env file:

DB_TYPE=mongodb
MONGO_URI=mongodb://localhost:27017/mydatabase

Start MongoDB:

mongod --dbpath=/data/db

MySQL Setup

If using MySQL, update your .env file:
DB_TYPE=mongodb
MONGO_URI=mongodb://localhost:27017/mydatabase


Start MongoDB:

mongod --dbpath=/data/db

MySQL Setup

If using MySQL, update your .env file:

DB_TYPE=mysql
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=password
MYSQL_DATABASE=mydatabase

Start MySQL and create the database:

CREATE DATABASE mydatabase;

4️⃣ Run the Application
npm run start
![image](https://github.com/user-attachments/assets/49b4ae5f-8f6a-4957-bf98-4c4aee545dae)
![image](https://github.com/user-attachments/assets/104faed7-edb2-4102-a503-b6df18f022a5)




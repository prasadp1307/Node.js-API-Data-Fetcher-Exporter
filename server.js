const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios");
const cors = require("cors");
const db = require("./config/db");
const Post = require("./models/post");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Fetch and store data in DB
app.get("/fetch-data", async (req, res) => {
    try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
        await Post.bulkCreate(data); 
        res.json({ message: "Data successfully stored in DB" });
    } catch (error) {
        res.status(500).json({ error: "Error fetching or saving data" });
    }
});

// Get paginated and sorted data
app.get("/posts", async (req, res) => {
    try {
        let { page = 1, limit = 10, sort = "id", order = "ASC" } = req.query;
        page = parseInt(page);
        limit = parseInt(limit);

        const offset = (page - 1) * limit;
        const posts = await Post.findAll({
            limit,
            offset,
            order: [[sort, order.toUpperCase()]]
        });

        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving data" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

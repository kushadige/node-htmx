import express from "express";
import path from "path";
import routes from "@/routes/*";

// App config
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use("/", routes);

// Listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import express from "express";
import path from "path";
import routes from "@/routes/*";

import { requestLogger, errorHandler, checkHxRequest } from "./middlewares/*";

// App config
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(express.json());
app.use(requestLogger);
app.use(checkHxRequest);
app.use("/", routes);
app.use(errorHandler);

// Listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

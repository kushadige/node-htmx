import winston from "winston";

const logger = winston.createLogger({
  level: "info", // Minimum log level
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.colorize(),
    winston.format.errors({ stack: true }),
    winston.format.splat(), // Interpolate the message
    winston.format.simple() // Simple log format
  ),
  transports: [
    new winston.transports.Console(), // Log to console
  ],
});

export default logger;

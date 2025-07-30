// import ratelimit from "../config/upstash.js";

// Tạm thời tắt rate limiter để tránh lỗi Upstash permissions
const rateLimiter = async (req, res, next) => {
  // Bypass rate limiting completely for now
  next();
};

export default rateLimiter;

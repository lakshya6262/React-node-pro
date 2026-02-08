const LIMIT = 100;
const WINDOW = 60000;
const clients = new Map();

module.exports = (req, res, next) => {
  const ip = req.ip;
  const now = Date.now();

  if (!clients.has(ip)) {
    clients.set(ip, { count: 1, start: now });
    return next();
  }

  const data = clients.get(ip);

  if (now - data.start > WINDOW) {
    data.count = 1;
    data.start = now;
    return next();
  }

  if (data.count >= LIMIT) {
    return res.status(429).json({ message: "Too many requests" });
  }

  data.count++;
  next();
};

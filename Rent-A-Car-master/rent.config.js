module.exports = {
  apps : [{
    name        : "rent-a-car-backend",
    script      : "./backend/app.js",
    watch       : true,
    env: {
      "NODE_ENV": "development",
    },
    env_production : {
     "NODE_ENV": "production"}
  }]
}

require("dotenv").config();
const amqbUrl = `amqp://${process.env.User}:${process.env.Password}@${process.env.IP}:${process.env.Port}/${process.env.vHost}`;
const queueSlug = "jack-checkin";
module.exports = { amqbUrl, queueSlug };

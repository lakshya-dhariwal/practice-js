import { amqbUrl, queueSlug } from "./constants";
import { connect } from "amqplib";

const consumer = async () => {
  try {
    const amqbConnection = await connect(amqbUrl);
    const channel = await amqbConnection.createChannel();
    channel.consume(queueSlug, (message) => {
      channel.ack(message);
      console.log(`message: ${message}`);
    });
  } catch (e) {
    console.log(e);
  }
};
consumer();

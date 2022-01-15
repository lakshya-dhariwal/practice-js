import { amqbUrl, queueSlug } from "./constants";
import { connect } from "amqplib";
const publisher = async () => {
  try {
    const amqbConnection = await connect(amqbUrl);
    const channel = await amqbConnection.createChannel();
    channel.assertQueue(queueSlug, {
      durable: true,
    });
    const sent = channel.sendToQueue(
      queueSlug,
      Buffer.from("Team Lakshya Checked In"),
      {
        persistent: true,
      }
    );
    console.log(sent);
  } catch (e) {
    console.log(e);
  }
};

publisher();

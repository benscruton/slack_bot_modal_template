require("dotenv").config();
const {App} = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  port: process.env.PORT || 3000
});


// IMPORT VIEWS, ACTIONS, COMMANDS, EVENTS

const {
  categoryViewSubmissions,          // view
  categorySlashCommands             // command
} = require("./category");


// ADD FUNCTIONALITY TO APP, BY TYPE

Object.entries(categoryViewSubmissions).forEach(([name, func]) =>
  app.view(name, func)
);

Object.entries(categorySlashCommands).forEach(([command, func]) =>
  app.command(`/${command}`, func)
);


// ADD APP-WIDE PING COMMAND

app.message("!ping", async ({say}) => {
  say("Pong!")
    .catch(e => console.log(e));
});


// WITH FUNCTIONS ADDED, START BOT

const main = async () => {
  await app.start();
  console.log("⚡️ Bolt app is running!")
};
main();
const {createFirstModal} = require("../modals/views");

const commandname = ({ack, command, client}) => {
  ack();
  const view = createFirstModal("info");
  
  client.views.open({
    trigger_id: command.trigger_id,
    view
  });
};

module.exports = commandname;
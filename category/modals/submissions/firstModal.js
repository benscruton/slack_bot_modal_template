const feedbackModal = stuff => {
  stuff.ack();
  const values = stuff.payload.state.values;
  const selections = {
    shortText: values.textInput.textAction.value,
    date: values.dateInput.dateAction.selected_date,
    singleSelect: values.selectInput.selectAction.selected_option.value,
    multiSelect: values.multiSelectInput.multiAction.selected_options.map(s => s.value),
    longText: values.multiLineInput.multiLineAction.value
  };

  console.log(selections);
};

module.exports = feedbackModal;
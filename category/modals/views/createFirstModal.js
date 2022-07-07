const createFeedbackModal = () => {
  const modal = {
    type: "modal",
    callback_id: "firstModal",
    title: {
      type: "plain_text",
      text: "CRM Feedback",
      emoji: true
    },
    submit: {
      type: "plain_text",
      text: "Submit",
      emoji: true
    },
    blocks: [
      // Text input
      {
        type: "input",
        block_id: "textInput",
        label: {
          type: "plain_text",
          text: "Some Text",
          emoji: true
        },
        element: {
          type: "plain_text_input",
          action_id: "textAction"
        }
      },

      // Date
      {
        type: "input",
        block_id: "dateInput",
        label: {
          type: "plain_text",
          text: "Choose a Date Pls:",
          emoji: true
        },
        element: {
          type: "datepicker",
          action_id: "dateAction",
          placeholder: {
            type: "plain_text",
            text: "Select a date",
            emoji: true
          }
        }
      },

      // Static Select
      {
        type: "input",
        block_id: "selectInput",
        label: {
          type: "plain_text",
          text: "Pick an option:",
          emoji: true
        },
        element: {
          type: "static_select",
          action_id: "selectAction",
          placeholder: {
            type: "plain_text",
            text: "Choose one...",
            emoji: true
          },
          options: [
            "Alice",
            "Bob",
            "Charlie",
            "David",
            "Edith",
            "Poison"
          ].map(choice => {
            return {
              text: {
                type: "plain_text",
                text: choice,
                emoji: true
              },
              value: choice
            }
          }),
        }
      },

      // Multi Select
      {
        type: "input",
        block_id: "multiSelectInput",
        label: {
          type: "plain_text",
          text: "Select A Few Options",
          emoji: true
        },
        element: {
          type: "multi_static_select",
          action_id: "multiAction",
          placeholder: {
            type: "plain_text",
            text: "Select all that apply",
            emoji: true
          },
          options: [
            "Category 1",
            "Category 2",
            "Category 3",
            "Category 5"
          ].map(category => {
            return {
              text: {
                type: "plain_text",
                text: category,
                emoji: true
              },
              value: category
            }
          })
        }
      },

      // Multi Line Input
      {
        type: "input",
        block_id: "multiLineInput",
        label: {
          type: "plain_text",
          text: "Longer Text",
          emoji: true
        },
        optional: true,
        element: {
          type: "plain_text_input",
          multiline: true,
          action_id: "multiLineAction"
        }
      }
    ]
  };

  return modal;
};

module.exports = createFeedbackModal;
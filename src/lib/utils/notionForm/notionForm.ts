const createTitle = (content: string) => ({
  title: [
    {
      text: {
        content,
      },
    },
  ],
});

const createRichText = (content: string) => ({
  rich_text: [
    {
      type: "text" as const,
      text: {
        content,
      },
    },
  ],
});

const createSelect = (name: string) => ({
  select: {
    name,
  },
});

const notionForm = {
  createTitle,
  createRichText,
  createSelect,
};

export default notionForm;

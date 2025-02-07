const useNotionForm = () => {
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

  const createTitle = (content: string) => ({
    title: [
      {
        text: {
          content,
        },
      },
    ],
  });

  return {
    createRichText,
    createSelect,
    createTitle,
  };
};

export default useNotionForm;

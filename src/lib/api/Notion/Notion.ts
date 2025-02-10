const { VITE_NOTION_API_KEY } = import.meta.env;

// const Notion11 = new Client({
//   auth: VITE_NOTION_API_KEY,
// });

interface createExamplePrams {
  parent: {
    database_id: string;
    type: "database_id" | "page_id";
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  properties: any;
}

const Notion = {
  pages: {
    create: async (param: createExamplePrams) => {
      return await fetch("/notion/v1/pages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${VITE_NOTION_API_KEY}`,
          "Notion-Version": "2022-06-28",
        },
        body: JSON.stringify(param),
      });
    },
  },
};

export default Notion;

import { Client } from "@notionhq/client";

const { VITE_NOTION_API_KEY } = import.meta.env;

const Notion = new Client({
  auth: VITE_NOTION_API_KEY,
});

export default Notion;

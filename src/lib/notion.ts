import { Client } from '@notionhq/client';

const notion = new Client({ auth: import.meta.env.ASTRO_NOTION_TOKEN });
type Category = string;

export const getCategoryies = async () => {
  const db = await notion.databases.retrieve({ database_id: import.meta.env.ASTRO_NOTION_DATABASE_ID });
  const categories = db.properties.Category.select.options.map((option) => option.name);

  return categories;
};

export const getCategoryWorks = async (category: Category): Promise<any[]> => {
  interface FetchByCategoryResult {
    results: any[]; // Replace 'any' with a more specific type if you have the Notion page object type
  }
  const res: FetchByCategoryResult = await notion.databases.query({
    database_id: import.meta.env.ASTRO_NOTION_DATABASE_ID,
    filter: {
      property: 'Category',
      select: {
        equals: category,
      },
    },
  });

  return res.results.map((page) => {
    const props = page.properties;
    return {
      id: page.id,
      title: props.Name.title[0].plain_text || '',
      desc: props.Description.rich_text[0]?.plain_text || '',
      image: props.Thumbnail.files[0]?.file?.url || '',
      url: props.Link.url || '',
      category: props.Category.select?.name || '',
    };
  });
};

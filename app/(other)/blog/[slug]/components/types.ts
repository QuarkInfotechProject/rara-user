export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  featured_image: string;
  short_description: string;
  description: string;
  publish_date: string;
  read_time: string;
  author: {
    name: string;
    avatar: string;
  };
  category: {
    name: string;
  };
  meta: {
    keywords: string[];
  };
}

export interface TableOfContentItem {
  id: string;
  text: string;
  level: number;
}

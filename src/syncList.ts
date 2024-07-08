// src/synclist.ts
interface PluginItem {
  manifest: string;
  path: string;
  tags: string[];
  homepage?: string;
  identifier?: string;
  title?: string;
}

const PluginList: PluginItem[] = [
  {
    manifest: 'https://manifest-ivory.vercel.app/news/manifest.json',
    path: 'news',
    tags: ['news', 'crypto'],
    homepage: 'https://app-2-0-sand.vercel.app/',
    identifier: 'news',
    title: 'News'
  },
  // Add other plugins as needed
];

export default PluginList;

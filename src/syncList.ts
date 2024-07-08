interface PluginItem {
  path?: string;
  manifest: string;
  tags?: string[];
}

const PluginList: PluginItem[] = [
  {
    manifest: 'https://manifest-ivory.vercel.app/news/manifest.json',
    path: 'news',
    tags: ['article', 'search'],
  },
  {
    manifest: 'https://savvytrader.com/.well-known/ai-plugin.json',
    path: 'savvy-trader',
    tags: ['stock', 'analyze'],
  },
  {
    manifest: 'https://weathergpt.vercel.app/.well-known/ai-plugin.json',
    path: 'weather-gpt',
    tags: ['weather'],
  },
  {
    manifest: 'https://portfoliometa.com/.well-known/ai-plugin.json',
    path: 'stock-data',
    tags: ['stock'],
  },
  {
    manifest: 'https://medium.com/.well-known/ai-plugin.json',
    path: 'medium',
    tags: ['article', 'search'],
  },
  {
    manifest: 'https://mermaid.pyxl.uk/.well-known/ai-plugin.json',
    path: 'charts-and-diagrams',
    tags: ['chart', 'diagram'],   
  }
];

export default PluginList;

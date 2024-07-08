// src/index.ts
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import PluginList from './syncList';
import { pluginDir } from './const';

interface PluginItem {
  path: string;
  manifest: string;
  tags: string[];
  homepage?: string;
  identifier?: string;
  title?: string;
}

interface Manifest {
  expires: string[];
  plugins: {
    author: string;
    homepage: string;
    identifier: string;
    manifest: string;
    meta: {
      avatar: string;
      description: string;
      tags: string[];
      title: string;
    };
    schemaVersion: number;
  }[];
}

// Function to generate manifest.json
const generateManifestJson = (pluginList: PluginItem[]): Manifest => {
  const plugins = pluginList.map(plugin => ({
    author: plugin.path,
    homepage: plugin.homepage || `https://${plugin.manifest.split('/')[2]}`,
    identifier: plugin.identifier || plugin.path,
    manifest: plugin.manifest,
    meta: {
      avatar: `${plugin.manifest.replace('/manifest.json', '/logo.webp')}`,
      description: `Plugin for accessing, browsing and extracting ${plugin.path} content.`,
      tags: plugin.tags,
      title: plugin.title || `${plugin.path.charAt(0).toUpperCase() + plugin.path.slice(1)} news`,
    },
    schemaVersion: 1,
  }));

  return {
    expires: [],
    plugins: plugins,
  };
};

// Generate the manifest.json
const manifestJson = generateManifestJson(PluginList);

// Print the generated manifest.json
console.log(JSON.stringify(manifestJson, null, 2));

// Write to a file
writeFileSync(resolve(pluginDir, 'index.json'), JSON.stringify(manifestJson, null, 2));

// source.config.ts
import { defineDocs, defineConfig } from "fumadocs-mdx/config";
import { rehypeCodeDefaultOptions } from "fumadocs-core/mdx-plugins";
var docs = defineDocs({
  dir: "src/content/mspaint",
  docs: { postprocess: { includeProcessedMarkdown: true } }
});
var obsidianDocs = defineDocs({
  dir: "src/content/obsidian",
  docs: { postprocess: { includeProcessedMarkdown: true } }
});
var cobaltDocs = defineDocs({
  dir: "src/content/cobalt",
  docs: { postprocess: { includeProcessedMarkdown: true } }
});
var source_config_default = defineConfig({
  mdxOptions: {
    providerImportSource: "@/components/mdx",
    rehypeCodeOptions: {
      themes: {
        light: "github-light",
        dark: "github-dark"
      },
      transformers: [
        // Fumadocs packages pull different @shikijs/types versions.
        // Cast to ShikiTransformer[] to unify types across versions.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...rehypeCodeDefaultOptions.transformers ?? []
      ]
    }
  }
});
export {
  cobaltDocs,
  source_config_default as default,
  docs,
  obsidianDocs
};

// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  site: "https://lostcache.github.io",
  base: "/Parallel-Computing",
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    starlight({
      title: "Parallel Computing",
      customCss: ["./src/custom.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/lostcache/Parallel-Computing",
        },
      ],
      sidebar: [
        {
          label: "1. Foundational Principles of Computation and Parallelism",
          autogenerate: { directory: "1-foundational-principles" },
          collapsed: true,
        },
        {
          label: "2. The Imperative for Parallelism",
          autogenerate: { directory: "2-imperative-for-parallelism" },
          collapsed: true,
        },
        {
          label: "3. A Brief History of parallel architectures",
          autogenerate: {
            directory: "3-A-Brief-History-of-parallel-architectures",
          },
          collapsed: true,
        },
        {
          label: "4. The Evolution of Parallel Hardware: CPUs",
          autogenerate: { directory: "4-evolution-of-parallel-hardware-cpus" },
          collapsed: true,
        },
        {
          label: "5. The Evolution of Parallel Hardware: Memory and Storage",
          autogenerate: {
            directory: "5-evolution-of-parallel-hardware-memory",
          },
          collapsed: true,
        },
        {
          label: "6. The Evolution of Parallel Hardware: GPUs",
          autogenerate: { directory: "6-evolution-of-parallel-hardware-gpus" },
          collapsed: true,
        },
        {
          label: "7. General-Purpose Computing on GPUs (GPGPU)",
          autogenerate: { directory: "7-gpgpu" },
          collapsed: true,
        },
        {
          label: "8. Parallel Algorithms: Design and Analysis",
          autogenerate: { directory: "8-parallel-algorithms" },
          collapsed: true,
        },
        {
          label:
            "9. Implementation: Frameworks, Libraries, and Hardware Mapping",
          autogenerate: { directory: "9-implementation" },
          collapsed: true,
        },
        {
          label: "10. The Future of Parallelism",
          autogenerate: { directory: "10-future-of-parallelism" },
          collapsed: true,
        },
        {
          label: "11. Conclusion",
          link: "/Parallel-Computing/11-conclusion/"
        },
      ],
    }),
  ],
});

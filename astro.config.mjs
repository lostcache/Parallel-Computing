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
    rehypePlugins: [
      rehypeKatex
    ],
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
        },
        {
          label: "2. The Imperative for Parallelism",
          autogenerate: { directory: "2-imperative-for-parallelism" },
        },
        {
          label: "3. The Evolution of Parallel Hardware: CPUs",
          autogenerate: { directory: "3-A-Brief-History-of-parallel-architectures" },
        },
        {
          label: "4. The Evolution of Parallel Hardware: CPUs",
          autogenerate: { directory: "4-evolution-of-parallel-hardware-cpus" },
        },
        {
          label: "5. The Evolution of Parallel Hardware: Memory and Storage",
          autogenerate: {
            directory: "5-evolution-of-parallel-hardware-memory",
          },
        },
        {
          label: "6. The Evolution of Parallel Hardware: GPUs",
          autogenerate: { directory: "6-evolution-of-parallel-hardware-gpus" },
        },
        {
          label: "7. General-Purpose Computing on GPUs (GPGPU)",
          autogenerate: { directory: "7-gpgpu" },
        },
        {
          label: "8. Parallel Algorithms: Design and Analysis",
          autogenerate: { directory: "8-parallel-algorithms" },
        },
        {
          label: "9. Implementation: Frameworks, Libraries, and Hardware Mapping",
          autogenerate: { directory: "9-implementation" },
        },
        {
          label: "10. The Future of Parallelism",
          autogenerate: { directory: "9-future-of-parallelism" },
        },
        {
          label: "11. Conclusion",
          link: "/Parallel-Computing/10-conclusion/",
        },
      ],
    }),
  ],
});

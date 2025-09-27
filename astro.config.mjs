// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Parallel Computing",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
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
          autogenerate: { directory: "3-evolution-of-parallel-hardware-cpus" },
        },
        {
          label: "4. The Evolution of Parallel Hardware: Memory and Storage",
          autogenerate: {
            directory: "4-evolution-of-parallel-hardware-memory",
          },
        },
        {
          label: "5. The Evolution of Parallel Hardware: GPUs",
          autogenerate: { directory: "5-evolution-of-parallel-hardware-gpus" },
        },
        {
          label: "6. General-Purpose Computing on GPUs (GPGPU)",
          autogenerate: { directory: "6-gpgpu" },
        },
        {
          label: "7. Parallel Algorithms: Design and Analysis",
          autogenerate: { directory: "7-parallel-algorithms" },
        },
        {
          label:
            "8. Implementation: Frameworks, Libraries, and Hardware Mapping",
          autogenerate: { directory: "8-implementation" },
        },
        {
          label: "9. The Future of Parallelism",
          autogenerate: { directory: "9-future-of-parallelism" },
        },
        {
          label: "10. Conclusion",
          link: "/10-conclusion",
        },
      ],
    }),
  ],
});

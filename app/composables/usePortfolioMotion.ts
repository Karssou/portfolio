import { nextTick, onBeforeUnmount, onMounted, type Ref } from "vue";

type ReversibleContext = {
  revert: () => void;
};

export const usePortfolioMotion = (root: Ref<HTMLElement | null>) => {
  let ctx: ReversibleContext | undefined;

  onMounted(async () => {
    if (!root.value) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    await nextTick();

    const [{ gsap }, { ScrollTrigger }] = await Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]);

    gsap.registerPlugin(ScrollTrigger);

    ctx = gsap.context(() => {
      const heroTl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      heroTl
        .from("[data-hero='eyebrow']", {
          opacity: 0,
          y: 18,
          duration: 0.45,
        })
        .from(
          "[data-hero='title']",
          {
            opacity: 0,
            y: 42,
            scale: 0.98,
            duration: 0.8,
          },
          "-=0.2",
        )
        .from(
          "[data-hero='tagline']",
          {
            opacity: 0,
            y: 18,
            duration: 0.45,
          },
          "-=0.45",
        )
        .from(
          "[data-hero='cta']",
          {
            opacity: 0,
            y: 14,
            duration: 0.35,
          },
          "-=0.3",
        )
        .from(
          "[data-hero='contacts']",
          {
            opacity: 0,
            y: 16,
            duration: 0.4,
          },
          "-=0.2",
        );

      gsap.to("[data-orb]", {
        y: (index) => (index === 0 ? -22 : 18),
        x: (index) => (index === 0 ? 10 : -12),
        duration: 8 + Math.random() * 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
      });

      gsap.utils.toArray<HTMLElement>("[data-section]").forEach((section) => {
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 44,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-card]").forEach((card) => {
        const delay = Number(card.dataset.delay ?? 0) / 1000;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 26,
            rotateX: -8,
            transformPerspective: 900,
            scale: 0.985,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            duration: 0.8,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 86%",
            },
          },
        );
      });
    }, root.value) as ReversibleContext;
  });

  onBeforeUnmount(() => {
    ctx?.revert();
  });
};

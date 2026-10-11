document.documentElement.classList.add("js");

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  const header = document.querySelector("[data-header]");
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const narrowScreen = window.matchMedia("(max-width: 760px)");

  const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 32);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const closeMenu = () => {
    menuButton?.setAttribute("aria-expanded", "false");
    nav?.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  menuButton?.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(open));
    nav?.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
  });
  nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  window.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });

  const revealItems = [...document.querySelectorAll("[data-reveal]")];
  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  }

  const skillSection = document.querySelector("[data-skill-section]");
  const skillPanels = [...document.querySelectorAll("[data-skill]")];
  let skillFrameRequested = false;
  let activeSkill = 0;

  const setActiveSkill = (index) => {
    activeSkill = Math.max(0, Math.min(skillPanels.length - 1, index));
    skillPanels.forEach((panel, panelIndex) => {
      const selected = panelIndex === activeSkill;
      panel.classList.toggle("is-active", selected);
      panel.querySelector(".skill-bar")?.setAttribute("aria-expanded", String(narrowScreen.matches || reducedMotion.matches || selected));
    });
  };

  const updateSkillsFromScroll = () => {
    skillFrameRequested = false;
    if (!skillSection || narrowScreen.matches || reducedMotion.matches || skillPanels.length < 2) {
      skillPanels.forEach((panel) => panel.querySelector(".skill-bar")?.setAttribute("aria-expanded", "true"));
      return;
    }
    const rect = skillSection.getBoundingClientRect();
    const travel = Math.max(1, rect.height - window.innerHeight);
    const progress = Math.min(1, Math.max(0, -rect.top / travel));
    setActiveSkill(Math.round(progress * (skillPanels.length - 1)));
  };

  const requestSkillUpdate = () => {
    if (skillFrameRequested) return;
    skillFrameRequested = true;
    window.requestAnimationFrame(updateSkillsFromScroll);
  };

  skillPanels.forEach((panel, index) => {
    panel.querySelector(".skill-bar")?.addEventListener("click", () => {
      if (narrowScreen.matches || reducedMotion.matches || !skillSection) return;
      const top = window.scrollY + skillSection.getBoundingClientRect().top;
      const travel = Math.max(1, skillSection.offsetHeight - window.innerHeight);
      window.scrollTo({ top: top + (index / (skillPanels.length - 1)) * travel, behavior: "smooth" });
    });
  });

  if (skillSection) {
    updateSkillsFromScroll();
    window.addEventListener("scroll", requestSkillUpdate, { passive: true });
    window.addEventListener("resize", requestSkillUpdate);
    narrowScreen.addEventListener?.("change", requestSkillUpdate);
    reducedMotion.addEventListener?.("change", requestSkillUpdate);
  }

  const viewer = document.querySelector("#station-viewer");
  const viewerPoster = viewer?.querySelector(".viewer-poster");
  const progress = viewer?.querySelector(".viewer-progress");
  const progressLine = progress?.querySelector("i");
  viewerPoster?.addEventListener("click", () => viewer.dismissPoster?.());
  viewer?.addEventListener("progress", (event) => {
    if (progressLine) progressLine.style.width = `${Math.max(4, event.detail.totalProgress * 100)}%`;
    progress?.classList.toggle("is-hidden", event.detail.totalProgress >= 1);
  });
  viewer?.addEventListener("load", () => progress?.classList.add("is-hidden"));
  document.querySelector("[data-reset-model]")?.addEventListener("click", () => {
    if (!viewer) return;
    viewer.cameraOrbit = viewer.dataset.initialOrbit || "auto auto auto";
    viewer.fieldOfView = "auto";
    viewer.jumpCameraToGoal?.();
  });
  document.querySelector("[data-fullscreen-model]")?.addEventListener("click", async () => {
    if (!viewer) return;
    if (document.fullscreenElement) await document.exitFullscreen();
    else await viewer.requestFullscreen?.();
  });

  const lightbox = document.querySelector("[data-lightbox-dialog]");
  const lightboxImage = lightbox?.querySelector("[data-lightbox-image]");
  const lightboxCaption = lightbox?.querySelector("[data-lightbox-caption]");
  document.querySelectorAll("[data-lightbox]").forEach((item) => {
    item.addEventListener("click", () => {
      if (!lightbox || !lightboxImage) return;
      lightboxImage.src = item.dataset.lightbox;
      lightboxImage.alt = item.querySelector("img")?.alt || "Selected visualization";
      if (lightboxCaption) lightboxCaption.textContent = item.dataset.caption || "";
      lightbox.showModal();
    });
  });
  lightbox?.querySelector("[data-lightbox-close]")?.addEventListener("click", () => lightbox.close());
  lightbox?.addEventListener("click", (event) => { if (event.target === lightbox) lightbox.close(); });
});

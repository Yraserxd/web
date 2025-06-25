class StoreWhatsapp extends HTMLElement {
  connectedCallback() {
    this.#showWhatsappMessage();
    this.closeButton = $(".store-whatsapp__message-close", this);
    this.closeButton.on("click", () => this.#closeWhatsappMessage());
  }

  #showWhatsappMessage() {
    const days = +this.getAttribute("box-cookie");
    const whatsappMessage = document.querySelector(".store-whatsapp__message");
    const closedAt = localStorage.getItem("whatsappMessageClosedAt");

    if (days == 0 || Number.isNaN(days)) {
      whatsappMessage.style.display = "none";
    } else if (whatsappMessage && !closedAt) {
      whatsappMessage.style.display = "";
    } else if (whatsappMessage && closedAt) {
      const now = new Date().getTime();
      const oneDay = days * 60 * 60 * 1000;

      if (now - closedAt >= oneDay) {
        whatsappMessage.style.display = "";
        localStorage.removeItem("whatsappMessageClosedAt");
      }
    }
  }

  #closeWhatsappMessage() {
    const whatsappMessage = document.querySelector(".store-whatsapp__message");
    if (whatsappMessage) {
      whatsappMessage.style.display = "none";
      localStorage.setItem("whatsappMessageClosedAt", new Date().getTime());
    }
  }
}
window.customElements.define("store-whatsapp", StoreWhatsapp);

class SwiperSlider extends HTMLElement {
  connectedCallback() {
    if (this.initialized) return;
    this.initialized = true;

    const rootSelector = this.getAttribute("sw-root") || "[id^=component-]";
    this.root = this.closest(rootSelector) || this;

    // If we have thumbs and they come later, pass sw-wait-thumbs="true" to this
    // swiper and sw-target-thumbs="[selector]" to the thumbs coming later.
    // If the thumbs came before pass sw-source-thumbs="[selector]" to this swiper.
    this.waitThumbs = this.getAttribute("sw-wait-thumbs") === "true";
    this.targetThumbs = this.getAttribute("sw-target-thumbs");
    this.sourceThumbs = this.getAttribute("sw-source-thumbs");

    this.layout = this.getAttribute("sw-layout");
    this.items = this.querySelectorAll(".swiper-slide");
    this.span = this.getAttribute("sw-span");
    this.layoutType = this.getAttribute("sw-layout-type");

    this.rewind = this.getAttribute("sw-rewind") !== "false";
    this.loop = this.getAttribute("sw-loop") === "true";
    this.freeMode = this.getAttribute("sw-free-mode") === "true";
    this.effect = this.getAttribute("sw-effect");
    this.observer = this.getAttribute("sw-observer") === "true";
    this.autoHeight = this.getAttribute("sw-auto-height") === "true";
    this.grab = this.getAttribute("sw-grab") === "true";
    this.autoplay = this.getAttribute("sw-autoplay") === "true";
    this.speed = this.getAttribute("sw-speed") || 1000;

    if (!this.waitThumbs) this.#initSwiper();
  }

  initFromThumbs(thumbs) {
    if (!this.waitThumbs) {
      throw new Error("SwiperSlider: thumbs must be initialized only once");
    }
    this.waitThumbs = false;
    this.thumbs = thumbs.swiper;
    this.#initSwiper();
  }

  #autoplay() {
    return this.autoplay ? { delay: this.speed, disableOnInteraction: false, pauseOnMouseEnter: true } : false;
  }

  #navigation() {
    const nextEl = this.root.querySelector(".swiper-button-next");
    const prevEl = this.root.querySelector(".swiper-button-prev");
    return nextEl && prevEl ? { nextEl, prevEl } : false;
  }

  #pagination() {
    const pagination = this.root.querySelector(".swiper-pagination");
    return pagination ? { el: pagination, clickable: true } : false;
  }

  #layout() {
    const layout = swiperLayout.call(this);
    if (layout) return layout;
    throw new Error(`Missing or invalid ss-layout in swiper-slider: ${this.layout}`);
  }

  #swiperConfig() {
    return {
      direction: "horizontal",
      rewind: this.rewind && !this.loop && this.items.length > 1,
      loop: this.loop && this.items.length > 1,
      freeMode: this.freeMode,
      effect: this.effect,
      observer: this.observer,
      observeParents: this.observer,
      autoHeight: this.autoHeight,
      grabCursor: this.grab,
      watchSlidesProgress: true,
      navigation: this.#navigation(),
      pagination: this.#pagination(),
      autoplay: this.#autoplay(),
      thumbs: this.thumbs ? { swiper: this.thumbs } : undefined,
      ...this.#layout(),
    };
  }

  #initSwiper() {
    if (this.sourceThumbs) this.thumbs = this.#nearest(this.sourceThumbs).swiper;
    this.swiper = new Swiper(this, this.#swiperConfig());
    if (this.targetThumbs) this.#nearest(this.targetThumbs).initFromThumbs(this);
  }

  #nearest(selector) {
    let current = this;
    while (current && current.nodeName !== "BODY") {
      current = current.parentElement;
      if (current.matches(selector)) return current;
      const element = current.querySelector(selector);
      if (element) return element;
    }
  }
}
window.customElements.define("swiper-slider", SwiperSlider);

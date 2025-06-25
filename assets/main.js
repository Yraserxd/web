// Adding Classes
$(
  "#shipping_address_country select, #shipping_address_region select, #billing_address_country select, #billing_address_region select",
).addClass("col-sm-12 form-control");
$(".field label").addClass("control-label");
$("textarea,#contactpage #contactpage_message").addClass("field");
$("#estimate_shipping_button, #set_shipping_button, #set_coupon_code_button").addClass("btn secondary btn-block");
$(".actions .button").addClass("btn primary");
$(".checkbox-field").addClass("checkbox");
$(
  "#contacts .textarea, #shipping_address .textarea, #other .textarea, #billing_address .textarea, #contacts .select, #shipping_address .select, #other .select, #billing_address .select, #customer_password, #customer_password_confirmation, .text-field input, #contact_email, #contact_name, #contact_message, #contact_phone, #coupon_code, #customer_email, #customer_phone, #customer_shipping_address_name, #customer_shipping_address_surname, #customer_shipping_address_address, #customer_shipping_address_taxid, #customer_shipping_address_postal, #customer_shipping_address_city, #customer_billing_address_name, #customer_billing_address_surname, #customer_billing_address_address, #customer_billing_address_taxid, #customer_billing_address_postal, #customer_billing_address_city,#estimate_shipping_form select,#estimate_shipping_form input",
).addClass("form-control");

$(
  "#shipping_address div.col-sm-12 input,#shipping_address div.col-sm-12 select,#billing_address div.col-sm-12 input,#billing_address div.col-sm-12 select,#billing_address div.col-sm-12 textarea,#customer_additional_fields input,#customer_additional_fields select,#customer_additional_fields textarea",
).addClass("form-control");
$("input.invalid").addClass("is-invalid");

$(".error").addClass("mt-2");
$(".success").addClass("mt-2");

// Pagination
$(".pager").addClass("pagination justify-content-center");
$(".pagination li").addClass("page-item");
$(".pagination li a").addClass("page-link");
$(".pagination").removeClass("pager");
$(".pagination").wrapAll("<nav>");

// Contact Page
$("#contactpage").addClass("row");
$("#contactpage h2").wrapAll('<div class="col-12">');
$("#contactpage_email,#contactpage_name,#contactpage_phone").addClass("col-md-4");
$("#contactpage_message, #contactpage .actions, #contactpage p.required, #contactpage #contactpage_message").addClass(
  "col-12",
);
$("#contactpage .success").addClass("alert alert-success").wrapAll("<div class='col-12'>");
$("#contactpage .error").addClass("alert alert-danger").wrapAll("<div class='col-12'>");
$("#contactpage .actions .button").addClass("btn primary btn-block");
$("#contactpage .badge.error").parent().addClass("error-field");

// Cart
$("#coupon_code").wrapAll('<div class="form-group">');
$("#estimate_shipping_form > label:nth-child(1), #estimate_shipping_country").wrapAll('<div class="form-group">');
$("#estimate_shipping_form > label:nth-child(2), #estimate_shipping_region").wrapAll('<div class="form-group">');
$("#estimate_shipping_form > label:nth-child(3), #estimate_shipping_municipality").wrapAll('<div class="form-group">');
$("#estimate_shipping_form > label:nth-child(4), #estimate_shipping_postal").wrapAll('<div class="form-group">');
$("#estimate_shipping #shipping_address_municipality").addClass("form-group");

// Checkout
$("#checkout h2.legend").addClass("block-header");
$("#checkout h2.legend").removeClass("legend");
$("#contacts > div").wrapAll('<div class="row">');
$("#shipping_address > div").wrapAll('<div class="row">');
$("#billing_address > div").wrapAll('<div class="row">');
$("#checkout #other > div").wrapAll('<div class="row">');
$("#contacts .row > div, #shipping_address .row > div, #billing_address .row > div").addClass("col-md-6 form-field");
$("#shipping_address_same_as_shipping").removeClass("col-md-6");
$("#shipping_address_same_as_shipping").addClass("col-12");
$("#checkout p.required").insertBefore("#contacts");
$("#checkout .form-field input[type=date]").addClass("form-control");
$("input.invalid").addClass("is-invalid");

$("#billing_address").append("<hr>");
$("#billing_address hr").insertBefore("#payments");
$("#other_additional_information, #contacts_accepts_marketing").removeClass("col-md-6 col-sm-6 ");
$("#other .row > div").addClass("col-12 form-field");
$("#payments, #shipping").addClass("col-md-6");
$("#payments, #shipping").wrapAll('<div class="row">');
$("#checkout #payments_options li").addClass("payment-item");
$("#checkout #shipping_options li").addClass("shipping-item");
$("#submit_review_order").addClass("btn-block");
$("#checkout .checkbox-field").addClass("no-label");
$("#contacts_accepts_marketing").removeClass("col-md-12 col-sm-12");
$("#contacts_accepts_marketing input").removeClass("form-control");

$("#checkout #payments_options li, #checkout #shipping_options li").addClass("form-check");
$("#checkout #payments_options li > input, #checkout #shipping_options li > input ").addClass("form-check-input");
$("#checkout #payments_options li > label, #checkout #shipping_options li > label ").addClass("form-check-label");

// Success
$("#credentials_password").wrapAll('<div class="form-group">');
$("#credentials_password_confirmation").wrapAll('<div class="form-group">');

// Customer
$("#credentials p").addClass("mb-0");
$("#submit_login, #register_customer").addClass("btn-block");
$("#reset_password").addClass("text-center mt-2");
$("#credentials .error").insertBefore("#credentials_email");
$("#customer_address h2").addClass("block-header");
$("#customer_address .btn,#create-password-wrapper form .btn").addClass("btn-block");
$("#customer_additional_fields > div").removeClass("col-sm-12");
$("#customer_additional_fields").removeClass("row");
$("#customer_details #contacts_email").wrapAll('<div class="form-group">');
$("#customer_details #contacts_phone").wrapAll('<div class="form-group">');
$("#customer_details #details_password").wrapAll('<div class="form-group">');
$("#customer_details #details_confirm_password").wrapAll('<div class="form-group">');
$(".pending-payment").addClass("badge badge-warning mt-2");
$(".paid").addClass("badge badge-success  mt-2");
$(".abandoned").addClass("badge badge-default mt-2");
$(".canceled").addClass("badge badge-danger mt-2");
$(".shipped").addClass("badge badge-primary mt-2");
$(
  "#address #shipping_address_name, #address #shipping_address_surname, #address #shipping_address_address, #address #shipping_address_taxid, #address #shipping_address_city, #address #shipping_address_postal, #address #shipping_address_country, #address #shipping_address_region, #address #billing_address_name, #address #billing_address_surname, #address #billing_address_address,#address #billing_address_taxid, #address #billing_address_city, #address #billing_address_postal, #address #billing_address_country, #address #billing_address_region,#customer_details_password > div",
).addClass("form-group ");
$("#shipping_address div.col-sm-12,#billing_address div.col-sm-12").addClass("field form-group");

$("ul.nav > li.dropdown > ul > li").click(function (event) {
  // stop bootstrap.js to hide the parents
  event.stopPropagation();
  // hide the open children
  $(this).find("ul.nav > li.dropdown > ul > li").removeClass("open");
  // add 'open' class to all parents with class 'dropdown-submenu'
  $(this).parents("ul.nav > li.dropdown > ul > li").addClass("open");
  // this is also open (or was)
  $(this).toggleClass("open");
});

$("#main-menu .nav-item.dropdown").hover(
  function () {
    $(this).addClass("sfhover");
  },
  function () {
    $(this).removeClass("sfhover");
  },
);

// -------------------- Custom Theme menu arrow down --------------
$("select").addClass("select");
$(".preheader-menu .dropdown > a").append('<i class="linear-icon icon-0827-chevron-down"></i>');
$("#category-menu li.has-children,#mobile-menu li.has-children").append(
  '<i class="linear-icon icon-0829-chevron-right"></i>',
);

// Product page
$(window).on("load", function () {
  $(".product-page .bootstrap-filestyle .btn").append('<i class="linear-icon icon-0153-paperclip"></i>');
  $(".product-page .bootstrap-filestyle .btn").addClass("secondary");
});

// category mobile menu - N levels down
$("#category-menu li.has-dropdown a.first-trigger").click(function () {
  $("#category-menu").toggleClass("active");
  $(this).next().toggleClass("active");
});

$("#category-menu li.has-dropdown a.last-trigger").click(function () {
  $("#category-menu").toggleClass($(this).attr("class").split(" ").shift().toString());
  $(this).next().addClass("active");
});

// back button on category mobile menu
$("#category-menu li.has-dropdown a.back-level-1").click(function () {
  $("#category-menu, #category-menu ul.dropdown").removeClass("active");
});

// back button on mobile menu - N levels up
$("#category-menu li.has-dropdown a[class^='back-level-']").click(function () {
  classesArray = $(this).attr("class").split("-");
  classesArray.shift();

  $("#category-menu").toggleClass(classesArray.join("-"));
  $("ul." + classesArray.join("-").toString() + ".dropdown").removeClass("active");
});

// navigation mobile menu - N levels down
$("#mobile-menu li.has-dropdown a.first-trigger").click(function () {
  $("#mobile-menu").toggleClass("active");
  $(this).next().toggleClass("active");
});

$("#mobile-menu li.has-dropdown a.last-trigger").click(function () {
  $("#mobile-menu").toggleClass($(this).attr("class").split(" ").shift().toString());
  $(this).next().addClass("active");
});

// back button on navigation mobile
$("#mobile-menu li.has-dropdown a.back-level-1").click(function () {
  $("#mobile-menu,#mobile-menu ul.dropdown").removeClass("active");
});

// back button on mobile menu - N levels up
$("#mobile-menu li.has-dropdown a[class^='back-level-']").click(function () {
  classesArray = $(this).attr("class").split("-");
  classesArray.shift();

  $("#mobile-menu").toggleClass(classesArray.join("-"));
  $("ul." + classesArray.join("-").toString() + ".dropdown").removeClass("active");
});

function createCartEntryHTML() {
  return $(
    `<div class="header-cart-product">
      <a href="#" class="header-cart-product__link">
        <img src="//assets.jumpseller.com/public/placeholder/themes/mega/no-image-cart.png" class="header-cart-product__image header-cart-product__image--option" alt="" width="100" height="100" loading="lazy">
      </a>
      <div class="header-cart-product__info">
        <div class="header-cart-product__wrapper">
          <span class="header-cart-product__name"></span>
          <div class="header-cart-product__options"></div>
          <div class="header-cart-product__pricing">
            <span class="header-cart-product__qty"></span>
            <span class="header-cart-product__times"> &times; </span>
            <span class="header-cart-product__price"></span>
            <span class="header-cart-product__price header-cart-product__price--old"></span>
          </div>
        </div>
      </div>
    </div>`
      .trim()
      .replace(/\n\s+/gm, ""),
  );
}

function updateCartEntryImage(cartItem, element) {
  if ("image" in cartItem && cartItem.image?.url) {
    const url = Jumpseller.thumbImageURL(cartItem.image.url, 100, 100);
    if (url) element.find("img").attr("src", url);
  }
}

function updateCartEntryWithCartData(cartItem, element) {
  // partiremos Item is one item from the cart API
  const id = +cartItem.id;
  const url = cartItem.storefront_url || cartItem.url || "#";
  const added = element.parent().length === 0;
  if (added) updateCartEntryImage(cartItem, element); // just image

  element.attr("data-cartid", id);
  element.find(".header-cart-product__link").attr("href", url);
  element.find(".header-cart-product__image").attr("title", cartItem.name || "");
  element.find(".header-cart-product__name").text(cartItem.original_name || cartItem.name || "");
  element
    .find(".header-cart-product__pricing")
    .toggleClass("header-cart-product__pricing--discounted", cartItem.discount > 0);
  element.find(".header-cart-product__qty").text(cartItem.qty);
  element.find(".header-cart-product__price").text(cartItem.price_with_discount_formatted);
  element.find(".header-cart-product__price--old").text(cartItem.price_formatted);

  const options = Object.values(cartItem.options || [])
    .filter((option) => option.value)
    .map((option) => {
      return $('<span class="header-cart-product__option"></span>').text(`${option.name}: ${option.value || ""}`);
    });
  element.find(".header-cart-product__options").html(options);
}

function newCartEntryWithCartData(cartItem) {
  const element = createCartEntryHTML();
  updateCartEntryWithCartData(cartItem, element);
  return element;
}

function updateCart(cart) {
  $("#header-cart-wrapper").each(function () {
    const divs = cart.products.map((cartItem) => {
      const element = $(this).find(`.header-cart-product[data-cartid="${cartItem.id}"]`).first();
      return element.length > 0 ? element.detach() : newCartEntryWithCartData(cartItem);
    });
    $(this).find(".header-cart-product").remove();
    $(this).find(".header-cart__content").append(divs);
  });

  const refresh = (selector, formatted, value) => {
    $(selector)
      .text(formatted)
      .closest(".header-cart-summary__total")
      .toggleClass("hidden", value === 0);
  };

  refresh(".header-cart-summary__string--subtotal", cart.subtotal_formatted, cart.subtotal);
  refresh(".header-cart-summary__string--discount", cart.discount_formatted, cart.discount);
  refresh(".header-cart-summary__string--tax", cart.tax_formatted, cart.tax);
  refresh(".header-cart-summary__string--total", cart.total_formatted, cart.total);
  $(".header-cart_message").toggleClass("hidden", cart.products_count > 0);
  $(".cart-size").text(cart.products_count);
}

class NewsletterForm extends HTMLElement {
  connectedCallback() {
    if (this.initialized) return;
    this.success = this.getAttribute("fn-success") || "Registered successfully";
    this.failure = this.getAttribute("fn-failure") || "Error registering, please try again later";
    this.placeholder = this.getAttribute("fn-email-placeholder") || "mail@example.com";
    this.buttonText = this.getAttribute("fn-button-text") || "Subscribe";
    const form = $(this).find("form");
    if (form.length > 0) {
      this.initialized = true;
      this.#extendBaseForm(form);
      this.#boostForm(form.get(0));
    }
  }

  #extendBaseForm(form) {
    form.addClass("validate");
    form.find(".newsletter_form_group").addClass("row");
    form
      .find("input[name='customer[email]']")
      .addClass("email form-control")
      .attr("placeholder", this.placeholder)
      .wrap('<div class="col-md-7 mb-md-0 mb-3" />');
    form.find("button").addClass("btn primary").text(this.buttonText).wrap('<div class="col-md-5" />');
  }

  #boostForm(form) {
    form.addEventListener("jumpseller-captcha-validated", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      $.ajax({ method: "POST", url: form.action, data: formData, processData: false, contentType: false })
        .done(() => toastr.success(this.success))
        .fail(() => toastr.error(this.failure));
    });
  }
}
window.customElements.define("newsletter-form", NewsletterForm);

function swiperLayout() {
  return {
    one: { slidesPerView: 1 },
    "product-thumbnails": {
      slidesPerView: 3,
      spaceBetween: 10,
      breakpoints: {
        576: { slidesPerView: 4 },
        768: { slidesPerView: 6 },
      },
    },
    products: {
      slidesPerView: this.layoutType === "true" ? 2 : 1,
      spaceBetween: 30,
      breakpoints: {
        0: { slidesPerView: 1, ...(this.items.length - (this.span || 0) <= 8 || { pagination: false }) },
        321: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 4 },
      },
    },
    testimonials: {
      slidesPerView: 1,
      spaceBetween: 30,
      breakpoints: {
        576: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: this.span },
      },
    },
    "logo-gallery": {
      slidesPerView: 2,
      spaceBetween: 30,
      breakpoints: {
        415: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 4 },
        1200: { slidesPerView: this.span },
      },
    },
    "featured-reviews": {
      spaceBetween: 30,
      breakpoints: {
        0: { slidesPerView: 1, pagination: this.items.length - (this.span || 0) <= 8 },
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 4 },
      },
    },
    "trust-bar": {
      slidesPerView: 1,
      spaceBetween: 30,
      breakpoints: {
        576: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        992: { slidesPerView: this.span },
      },
    },
    categories: {
      slidesPerView: 3,
      spaceBetween: 30,
      breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        991: { slidesPerView: 3 },
      },
    },
    "cross-selling": {
      slidesPerView: 3,
      spaceBetween: 30,
      breakpoints: {
        0: { slidesPerView: 1 },
        415: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
      },
    },
  }[this.layout];
}

// Animaciones al scroll mejoradas
function initScrollAnimations() {
  const elements = document.querySelectorAll('.product-block, .category-card, .section-title');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        
        // Agregar animación aleatoria
        const animations = ['fadeInUp', 'slideInLeft', 'slideInRight', 'rotateIn'];
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        entry.target.style.animation = `${randomAnimation} 0.6s ease forwards`;
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

// Inicializar animaciones
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
});

// Lazy loading mejorado
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Barra de progreso de scroll
window.addEventListener('scroll', () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.querySelector('.scroll-progress').style.width = scrolled + '%';
});

// Header flotante
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header-float');
  if (window.scrollY > 200) {
    header.classList.add('visible');
  } else {
    header.classList.remove('visible');
  }
});

// Contador de stock
function updateStockBar(stockLevel, maxStock) {
  const percentage = (stockLevel / maxStock) * 100;
  document.querySelector('.stock-bar-fill').style.width = percentage + '%';
}

// Sistema de notificaciones
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
    <span>${message}</span>
  `;
  document.body.appendChild(notification);
  setTimeout(() => notification.classList.add('show'), 100);
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Efecto de parallax en imágenes
document.querySelectorAll('.product-image-container').forEach(container => {
  container.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = container.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    const image = container.querySelector('img');
    image.style.transform = `
      translateZ(30px)
      rotateY(${x * 20}deg)
      rotateX(${y * -20}deg)
    `;
  });
  
  container.addEventListener('mouseleave', () => {
    const image = container.querySelector('img');
    image.style.transform = 'translateZ(0) rotateY(0) rotateX(0)';
  });
});

// Efecto de ondas al hacer click
document.querySelectorAll('.ripple-effect').forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    ripple.style.width = ripple.style.height = `${diameter}px`;
    
    const rect = button.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left - diameter/2}px`;
    ripple.style.top = `${e.clientY - rect.top - diameter/2}px`;
    
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

// Contador de tiempo para ofertas
function updateCountdown() {
  const countdowns = document.querySelectorAll('.offer-countdown');
  countdowns.forEach(countdown => {
    const endTime = new Date(countdown.dataset.endTime).getTime();
    const now = new Date().getTime();
    const distance = endTime - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    countdown.innerHTML = `
      <div class="countdown-item">${days}d</div>
      <div class="countdown-item">${hours}h</div>
      <div class="countdown-item">${minutes}m</div>
      <div class="countdown-item">${seconds}s</div>
    `;
  });
}

setInterval(updateCountdown, 1000);

// Efecto de revelación al scroll
const revealElements = document.querySelectorAll('.reveal-on-scroll');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// Indicador de progreso circular
function updateProgressCircles() {
  document.querySelectorAll('.progress-circle').forEach(circle => {
    const value = parseInt(circle.dataset.value);
    circle.style.setProperty('--value', value);
  });
}

updateProgressCircles();


// Dark mode toggle
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("theme-toggle");
  if (!button) return;
  const root = document.documentElement;
  const stored = localStorage.getItem("theme");
  if (stored) root.setAttribute("data-theme", stored);
  button.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", current);
    localStorage.setItem("theme", current);
    const icon = button.querySelector("i");
    if (icon) {
      icon.classList.toggle("fa-moon", current === "light");
      icon.classList.toggle("fa-sun", current === "dark");
    }
  });
});

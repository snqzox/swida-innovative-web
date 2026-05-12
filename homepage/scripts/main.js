/* =========================================================================
   SWIDA HOMEPAGE — SMALL JS FOR DEMO INTERACTIONS
   - Reveal-on-scroll for .reveal elements
   - Instacarrier widget that cycles through example lanes
   ========================================================================= */
(function () {
  "use strict";

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-in"));
  }

  /* ---------- Instacarrier demo widget ---------- */
  const lanes = [
    {
      pickup: "Bratislava, SK",
      dropoff: "Lyon, FR",
      vehicle: "Van 3.5 t",
      weight: "1 200 kg",
      eta: "Pickup in 2 h",
      price: "€ 1 240",
    },
    {
      pickup: "Prague, CZ",
      dropoff: "Hamburg, DE",
      vehicle: "Sprinter L4H3",
      weight: "850 kg",
      eta: "Pickup in 90 min",
      price: "€ 980",
    },
    {
      pickup: "Vienna, AT",
      dropoff: "Milan, IT",
      vehicle: "Van 3.5 t",
      weight: "1 450 kg",
      eta: "Pickup in 3 h",
      price: "€ 1 060",
    },
    {
      pickup: "Budapest, HU",
      dropoff: "Rotterdam, NL",
      vehicle: "Sprinter L3H2",
      weight: "720 kg",
      eta: "Pickup in 4 h",
      price: "€ 1 480",
    },
  ];

  const widget = document.querySelector("[data-quote-widget]");
  if (!widget) return;

  const fieldEls = {
    pickup: widget.querySelector('[data-field="pickup"] .quote__field-value'),
    dropoff: widget.querySelector('[data-field="dropoff"] .quote__field-value'),
    vehicle: widget.querySelector('[data-field="vehicle"] .quote__field-value'),
    weight: widget.querySelector('[data-field="weight"] .quote__field-value'),
    eta: widget.querySelector("[data-eta]"),
    price: widget.querySelector(".quote__price-value"),
  };

  let idx = 0;
  function applyLane(lane) {
    if (fieldEls.pickup) fieldEls.pickup.textContent = lane.pickup;
    if (fieldEls.dropoff) fieldEls.dropoff.textContent = lane.dropoff;
    if (fieldEls.vehicle) fieldEls.vehicle.textContent = lane.vehicle;
    if (fieldEls.weight) fieldEls.weight.textContent = lane.weight;
    if (fieldEls.eta) fieldEls.eta.textContent = lane.eta;
    if (fieldEls.price) {
      fieldEls.price.style.transition = "opacity 240ms";
      fieldEls.price.style.opacity = "0";
      setTimeout(() => {
        fieldEls.price.textContent = lane.price;
        fieldEls.price.style.opacity = "1";
      }, 180);
    }
  }

  applyLane(lanes[idx]);

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (!prefersReduced) {
    setInterval(() => {
      idx = (idx + 1) % lanes.length;
      applyLane(lanes[idx]);
    }, 3600);
  }
})();

if ("serviceWorker" in navigator)
  navigator.serviceWorker.register("/flexbox-playground/dev-sw.js?dev-sw", {
    scope: "/flexbox-playground/",
    type: "classic",
  });

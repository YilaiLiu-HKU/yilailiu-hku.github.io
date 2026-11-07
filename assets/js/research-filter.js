(function () {
  "use strict";

  document.querySelectorAll("[data-research-browser]").forEach(function (browser) {
    var filters = browser.querySelector(".research-filters");
    var buttons = Array.from(filters.querySelectorAll("[data-research-tag]"));
    var status = browser.querySelector("[data-research-status]");
    var items = Array.from(browser.querySelectorAll("[data-research-item]"));
    var topics = items.map(function (item) {
      return JSON.parse(item.dataset.researchTags);
    });

    function filterBy(tag) {
      var visible = [];
      items.forEach(function (item, index) {
        item.hidden = tag !== "" && topics[index].indexOf(tag) === -1;
        item.classList.remove("is-last-visible");
        if (!item.hidden) visible.push(item);
      });
      if (visible.length) visible[visible.length - 1].classList.add("is-last-visible");
      buttons.forEach(function (button) {
        var active = button.dataset.researchTag === tag;
        button.setAttribute("aria-pressed", String(active));
        button.classList.toggle("is-active", active);
      });
      status.textContent = visible.length + " of " + items.length +
        " publications shown" + (tag ? " for " + tag : "") + ".";
    }

    filters.addEventListener("click", function (event) {
      var button = event.target.closest("button[data-research-tag]");
      if (button && filters.contains(button)) filterBy(button.dataset.researchTag);
    });
    filterBy("");
    filters.hidden = false;
  });
}());

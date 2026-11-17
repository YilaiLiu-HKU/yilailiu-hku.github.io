(function () {
  "use strict";

  document.querySelectorAll("[data-research-browser]").forEach(function (browser) {
    var filters = browser.querySelector(".research-filters");
    var buttons = Array.from(filters.querySelectorAll("[data-research-tag]"));
    var section = browser.closest(".selected-works-section");
    var authorFilter = section && section.querySelector("[data-research-author-filter]");
    var status = browser.querySelector("[data-research-status]");
    var empty = browser.querySelector("[data-research-empty]");
    var items = Array.from(browser.querySelectorAll("[data-research-item]"));
    var topics = items.map(function (item) {
      return JSON.parse(item.dataset.researchTags);
    });
    var selectedTag = "";
    var firstAuthorOnly = false;

    function applyFilters() {
      var visible = [];
      items.forEach(function (item, index) {
        var matchesTopic = selectedTag === "" || topics[index].indexOf(selectedTag) !== -1;
        var matchesAuthor = !firstAuthorOnly || item.dataset.firstAuthor === "true";
        item.hidden = !(matchesTopic && matchesAuthor);
        item.classList.remove("is-last-visible");
        if (!item.hidden) visible.push(item);
      });
      if (visible.length) visible[visible.length - 1].classList.add("is-last-visible");
      buttons.forEach(function (button) {
        var active = button.dataset.researchTag === selectedTag;
        button.setAttribute("aria-pressed", String(active));
        button.classList.toggle("is-active", active);
      });
      if (authorFilter) authorFilter.setAttribute("aria-pressed", String(firstAuthorOnly));
      if (empty) empty.hidden = visible.length !== 0;
      status.textContent = visible.length + " of " + items.length +
        " publications shown" + (selectedTag ? " for " + selectedTag : "") +
        (firstAuthorOnly ? "; first or co-first author only" : "") + ".";
    }

    filters.addEventListener("click", function (event) {
      var button = event.target.closest("button[data-research-tag]");
      if (button && filters.contains(button)) {
        selectedTag = button.dataset.researchTag;
        applyFilters();
      }
    });
    if (authorFilter) {
      authorFilter.addEventListener("click", function () {
        firstAuthorOnly = !firstAuthorOnly;
        applyFilters();
      });
      authorFilter.hidden = false;
    }
    applyFilters();
    filters.hidden = false;
  });
}());

(function () {
  function escapeHtml(value) {
    return (value || "")
      .toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function normalize(value) {
    return (value || "").toString().toLowerCase().trim();
  }

  function snippet(content, query, maxLen) {
    const plain = (content || "").replace(/\s+/g, " ").trim();
    if (!plain) return "";

    const q = normalize(query);
    const lower = plain.toLowerCase();
    const idx = q ? lower.indexOf(q) : -1;

    if (idx < 0) {
      return escapeHtml(plain.slice(0, maxLen)) + (plain.length > maxLen ? "…" : "");
    }

    const start = Math.max(0, idx - Math.floor(maxLen / 2));
    const end = Math.min(plain.length, start + maxLen);
    const segment = plain.slice(start, end);

    const safe = escapeHtml(segment);
    const safeQuery = escapeHtml(plain.slice(idx, idx + q.length));
    return (start > 0 ? "…" : "") + safe.replace(safeQuery, "<mark>" + safeQuery + "</mark>") + (end < plain.length ? "…" : "");
  }

  async function initSearch() {
    const input = document.querySelector(".js-search-input");
    const resultsWrap = document.querySelector(".js-search-results");
    if (!input || !resultsWrap) return;

    let indexData = {};
    try {
      const response = await fetch("/assets/js/search-data.json", { cache: "no-cache" });
      indexData = await response.json();
    } catch (error) {
      resultsWrap.innerHTML = "<p>Search index failed to load.</p>";
      return;
    }

    const docs = Object.values(indexData || {});

    function render(query) {
      const q = normalize(query);
      if (!q) {
        resultsWrap.innerHTML = "";
        return;
      }

      const matches = docs
        .map((doc) => {
          const title = normalize(doc.title);
          const content = normalize(doc.content);
          const titleHit = title.includes(q) ? 3 : 0;
          const contentHit = content.includes(q) ? 1 : 0;
          return { doc, score: titleHit + contentHit };
        })
        .filter((entry) => entry.score > 0)
        .sort((left, right) => right.score - left.score)
        .slice(0, 40);

      if (matches.length === 0) {
        resultsWrap.innerHTML = "<p>No results found.</p>";
        return;
      }

      resultsWrap.innerHTML = matches
        .map(({ doc }) => {
          const title = escapeHtml(doc.title || "Untitled");
          const href = escapeHtml(doc.relUrl || doc.url || "#");
          const date = escapeHtml(doc.date || "");
          const excerpt = snippet(doc.content, q, 180);

          return "<article class=\"search-result\">" +
            "<h3><a href=\"" + href + "\">" + title + "</a></h3>" +
            (date ? "<div class=\"search-result-date\">" + date + "</div>" : "") +
            (excerpt ? "<p class=\"search-result-excerpt\">" + excerpt + "</p>" : "") +
            "</article>";
        })
        .join("");
    }

    input.addEventListener("input", function () {
      render(input.value);
    });

    if (input.value) {
      render(input.value);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSearch);
  } else {
    initSearch();
  }
})();

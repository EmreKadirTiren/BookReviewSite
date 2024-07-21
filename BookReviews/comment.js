document.addEventListener("DOMContentLoaded", function() {
    var script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "EmreKadirTiren/BookReviewSite");
    script.setAttribute("data-repo-id", "R_kgDOMXjucw");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "DIC_kwDOMXjuc84ChDU7");
    script.setAttribute("data-mapping", "title");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("data-lang", "nl");
    script.crossOrigin = "anonymous";
    script.async = true;

    document.body.appendChild(script);
});
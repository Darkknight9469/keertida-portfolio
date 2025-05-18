document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[href]");
  links.forEach(link => {
    const url = new URL(link.href);
    if (url.origin === window.location.origin && !url.href.includes("#")) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        document.body.classList.add("fade-out");
        setTimeout(() => {
          window.location.href = link.href;
        }, 300);
      });
    }
  });
});


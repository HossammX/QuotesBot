document.getElementById("get-quote").addEventListener("click", () => {
  const quoteText = document.getElementById("quote-text");

  // Show typing animation
  quoteText.innerHTML = `<div class="typing"><span>•</span><span>•</span><span>•</span></div>`;

  fetch("https://dummyjson.com/quotes/random")
    .then(res => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    })
    .then(data => {
      // data = { id, quote, author }
      const quote = data.quote || "No quote found";
      const author = data.author || "Unknown";

      quoteText.textContent = `"${quote}"\n\n— ${author}`;
    })
    .catch(err => {
      quoteText.textContent = "❌ Couldn't fetch a quote. Try again!";
      console.error("Error fetching quote:", err);
    });
});

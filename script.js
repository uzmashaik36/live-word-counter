 const textarea = document.getElementById("textInput");
    const charCount = document.getElementById("charCount");
    const wordCount = document.getElementById("wordCount");

    textarea.addEventListener("input", () => {
      let text = textarea.value;
      charCount.textContent = `Characters: ${text.length}`;
      let words = text.trim().split(/\s+/).filter(word => word !== "").length;
      wordCount.textContent = `Words: ${words}`;
    });
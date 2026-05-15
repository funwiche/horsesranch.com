export default defineNuxtPlugin(() => {
  // Check for production mode - better approach without process
  const isProduction =
    import.meta.env?.NODE_ENV === "production" ||
    import.meta.env?.PROD === true;

  // Check if we're in client-side and production
  // if (!(isProduction && import.meta.client)) return;

  // // Block right-click
  // window.addEventListener("contextmenu", (e) => {
  //   e.preventDefault();
  //   return false;
  // });

  // Block keyboard shortcuts
  window.addEventListener("keydown", (e) => {
    // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S
    const blockedKeys = [
      e.key === "F12",
      e.ctrlKey && e.shiftKey && e.key === "I",
      e.ctrlKey && e.shiftKey && e.key === "J",
      e.ctrlKey && e.key === "U",
      e.ctrlKey && e.key === "S",
      e.ctrlKey && e.key === "C", // optional: block inspect element
    ];
    if (!blockedKeys.some(Boolean)) return;
    e.preventDefault();
    return false;
  });
});

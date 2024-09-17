(async () => {
    const h1 = document.getElementById("main");

    // see the note below on how to choose currentWindow or lastFocusedWindow
    const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    const url = tab.url;
    if (!url.startsWith('https://x.com')) {
        h1.innerText = "This page is not x.com";
        return;
    }

    const replacedURL = url.replace("https://x.com", "https://twitter.com");

    setTimeout(async () => {
        await navigator.clipboard.writeText(replacedURL);
        h1.innerText = "Copied: " + replacedURL;
    }, 500);
})();

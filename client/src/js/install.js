const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // store triggered events
    window.deferredPrompt = event;

    // remove hidden class from install button
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // set promptEvent to whatever the window deferred prompt was from before
    const promptEvent = window.deferredPrompt;

    // if no prompt event is set up, exit the installer
    if (!promptEvent) {
        return;
    }

    // show the prompt stored
    promptEvent.prompt();

    // reset the deferred prompt variable, as it should only be used once 
    window.deferredPrompt = null;

    // add hidden class to install button to hide it
    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // upon successful installation, clear the prompt like on line 27
    window.deferredPrompt = null;
});

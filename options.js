function save() {
    const newTab = document.getElementById('chk-new-tab').checked;
    chrome.storage.sync.set(
        { newTab: newTab },
        () => {
            const status = document.getElementById('status');
            status.textContent = 'Options saved.';
            setTimeout(() => { status.textContent = ''; }, 1500);
        }
    );
}

function restore() {
    chrome.storage.sync.get(
        { newTab: false },
        (items) => document.getElementById('chk-new-tab').checked = items.newTab
    );
}

document.addEventListener('DOMContentLoaded', restore);
document.getElementById('btn-save').addEventListener('click', save);
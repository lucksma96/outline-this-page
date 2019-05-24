function save() {
    const newTab = document.getElementById('chkNewTab').checked;
    chrome.storage.sync.set(
        { newTab: newTab },
        () => {
            const status = document.getElementById('status');
            status.classList.replace('d-none', 'd-block');
            setTimeout(() => { status.classList.replace('d-block', 'd-none'); }, 1500);
        }
    );
}

function restore() {
    document.getElementById('btnSave').addEventListener('click', save);

    chrome.storage.sync.get(
        { newTab: false },
        (items) => document.getElementById('chkNewTab').checked = items.newTab
    );
}

document.addEventListener('DOMContentLoaded', restore);
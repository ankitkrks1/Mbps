document.getElementById("convert").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: inMbps
  });
});

function inMbps() {
  const el = document.getElementById("speed-value");
  if (!el) {
    console.log("speed-value element not found");
    return;
  }

  console.log("el.innerHTML in bits/s", el.innerHTML);
  el.innerHTML = (parseFloat(el.innerHTML) / 8).toFixed(1);
  console.log("el.innerHTML in MBps", el.innerHTML);

  const units = document.getElementById("speed-units");
  if (units) {
    console.log("units.innerHTML before", units.innerHTML);
    units.innerHTML = "MBps";
    console.log("units.innerHTML after", units.innerHTML);
  }

  const uploadEl = document.getElementById("upload-value");
    if (uploadEl) {
        console.log("uploadEl.innerHTML in bits/s", uploadEl.innerHTML);
        uploadEl.innerHTML = (parseFloat(uploadEl.innerHTML) / 8).toFixed(1);
        console.log("uploadEl.innerHTML in MBps", uploadEl.innerHTML);
        const uploadUnits = document.getElementById("upload-units");
        if (uploadUnits) {
            console.log("uploadUnits.innerHTML before", uploadUnits.innerHTML);
            uploadUnits.innerHTML = "MBps";
            console.log("uploadUnits.innerHTML after", uploadUnits.innerHTML);
        }
    }
}

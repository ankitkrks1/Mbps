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
}

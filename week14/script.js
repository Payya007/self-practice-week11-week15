let events = [];
async function loadEvents() {
  const res = await fetch("./event.json");
  const events = await res.json();

  showEvents(events);
}

loadEvents();

function formatLocal(isoString) {
  return new Date(isoString).toLocaleString("th-TH", {
    dateStyle: "medium",
    timeStyle: "short"
  });
}

function showEvents(events) {
  const list = document.getElementById("list");
  list.innerHTML = "";

  const now = new Date();

  events.forEach(ev => {
    const eventTime = new Date(ev.time);

    let status = now >= eventTime ? "ถึงเวลาแล้ว!" : "ยังไม่ถึงเวลา";

    const p = document.createElement("p");
    p.textContent = `${ev.title} — ${status} — (${formatLocal(ev.time)})`;

    list.appendChild(p);
  });
}

async function startShare() {
  const cookie = document.getElementById('cookie').value.trim();
  const link = document.getElementById('link').value.trim();
  const limit = document.getElementById('limit').value.trim();
  const responseDiv = document.getElementById('response');

  responseDiv.innerHTML = "👻 Summoning spirits... please wait!";

  const res = await fetch("/api/share", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cookie, link, limit })
  });

  const data = await res.json();

  if (data.status) {
    responseDiv.innerHTML = `🎉 ${data.message}`;
  } else {
    responseDiv.innerHTML = `☠️ Error: ${data.message}`;
  }
}

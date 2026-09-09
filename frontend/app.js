const backend = "http://localhost:5000";

async function loadHealth() {
  const status = document.getElementById("status");
  try {
    const response = await fetch(`${backend}/health`);
    const data = await response.json();
    status.textContent = `Backend: ${data.status}`;
  } catch (error) {
    status.textContent = "Backend unavailable";
  }
}

async function loadItems() {
  const list = document.getElementById("items");
  list.innerHTML = "<li>Loading...</li>";

  try {
    const response = await fetch(`${backend}/api/items`);
    const data = await response.json();
    list.innerHTML = data.length
      ? data.map(item => `<li>${item.id}: ${item.name}</li>`).join("")
      : "<li>No items yet.</li>";
  } catch (error) {
    list.innerHTML = "<li>Could not reach backend.</li>";
  }
}

loadHealth();

// Simple hero metric animation on home page
document.addEventListener("DOMContentLoaded", () => {
  const metric = document.getElementById("heroMetric");
  if (!metric) return;

  const values = ["+18.4%", "+22.7%", "+15.2%", "+19.9%"];
  let index = 0;

  setInterval(() => {
    index = (index + 1) % values.length;
    metric.textContent = values[index];
  }, 3500);
});

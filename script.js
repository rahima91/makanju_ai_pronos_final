
async function getPrediction() {
  const prompt = document.getElementById("prompt").value;
  const responseDiv = document.getElementById("response");

  responseDiv.innerHTML = "⏳ Chargement...";
  const res = await fetch("/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });
  const data = await res.json();
  responseDiv.innerHTML = "<b>⚽ Prédiction :</b><br>" + data.result;
}

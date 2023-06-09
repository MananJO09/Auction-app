

const cardsContainer = document.getElementsByClassName("cards-container")[0];
function addDataOntoUI(resultsList) {
  for(let i=0; i<resultsList.length; i++){
    let card = resultsList[i];
    let innerCard =`   
      <div class="top">
        <div class="status">
          <b class="status-chip ${card.status.toLowerCase()}">${card.status}</b>
          <span class="case-number">${card.caseNumber}</span>
        </div>
        <span class="date">${card.date}</span>
      </div>
      <div class="bottom">
        <b class="from-location">${card.fromLocation}</b>
        <span class="to-location">${card.toLocation}</span>
      </div>
      <span class="price">${card.fare}</span>
  `;
    let cardContainer = document.createElement("div");
    cardContainer.className="card";
    cardContainer.innerHTML=innerCard
    cardsContainer.append(cardContainer);
  }  
}

async function fetchData() {
    try {
        const result = await fetch("https://gauravgitacc.github.io/postAppData/auctionData.json");
        const data = await result.json();
        addDataOntoUI(data);
    }
    catch (error) {
        alert("some error occured", error)
    }
}
fetchData();


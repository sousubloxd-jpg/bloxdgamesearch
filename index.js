fetch("https://social28.bloxd.io", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    contents: {
      searchQuery: null,
      pageNumber: 1,
      pageSize: 10,
      onlyFavouriteGames: false,
      gameCategories: []
    }
  })
})
.then(res => res.json())
.then(data => {
  console.log("Top 10 Games Found:");
  data.games.forEach((g, i) => console.log(`${i+1}. ${g.gameName} - Likes: ${g.likes}`));
})
.catch(err => console.error("Error fetching data:", err));

fetch("https://social28.bloxd.io/social/get-published-game-previews", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    "contents": {
      "searchQuery": null,
      "pageNumber": 1,
      "pageSize": 10, // Let's just get the Top 10
      "onlyFavouriteGames": false,
      "gameCategories": []
    }
  })
})
.then(res => res.json())
.then(data => console.log("Success! Top Game:", data.games[0].gameName))
.catch(err => console.error("CORS Blocked or Error:", err));

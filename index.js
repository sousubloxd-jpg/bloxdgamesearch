const fetch = require('node-fetch'); // Only needed if using Node.js < 18

async function getTopGames() {
    const url = "https://social28.bloxd.io";
    
    const payload = {
        "contents": {
            "searchQuery": null,
            "pageNumber": 1,
            "pageSize": 10,
            "onlyFavouriteGames": false,
            "gameCategories": []
        }
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        
        console.log("=== REAL-TIME TOP 10 ===");
        data.games.forEach((game, index) => {
            console.log(`${index + 1}. ${game.gameName} | Likes: ${game.likes} | Players: ${game.playerCount}`);
        });

    } catch (error) {
        console.error("Failed to fetch Bloxd data:", error);
    }
}

getTopGames();

let option_btn = document.querySelectorAll(".option_btn");
let search_emoji = document.getElementById("search_emoji");
let emoji_container = document.getElementById("emoji_container");


window.addEventListener("load", function() {
    displayEmoji("");
});

function displayEmoji(searchQuery) {

    let filteredEmoji = emojiList.filter((emoji) => {
        if (!searchQuery) {
            return true;
        }
        if (emoji.description.includes(searchQuery)) {
            return true;
        }
        if (emoji.aliases.includes(searchQuery)) {
            return true;
        }
        if (emoji.tags.includes(searchQuery)) {
            return true;
        }
        return false;
    });

    emoji_container.innerHTML = "";
    filteredEmoji.forEach((e) => {
        let emoji_box = document.createElement("div");
        emoji_box.innerText = e.emoji;
        emoji_box.classList.add('emoji_box');
        emoji_container.append(emoji_box);
    
    });
}

search_emoji.addEventListener("keyup", function(){
    let searchValue = search_emoji.value.toLowerCase();
    displayEmoji(searchValue);
});

emoji_container.addEventListener("click", (e) => {
    navigator.clipboard.writeText(e.target.innerText);
    alert(e.target.innerText + " "  +"Copied..!!!");
});

option_btn.forEach(btn => {
    btn.addEventListener("click", () => {
        event.preventDefault();
        if(btn.innerText.toLowerCase() === "all"){
            displayEmoji();
        }
        else{
            displayEmoji(btn.innerText.toLowerCase());
        }
    }) 
})
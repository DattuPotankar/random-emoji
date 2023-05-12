const btnEl = document.getElementById("btn");
const emojiNameEl= document.getElementById("emoji-name");

const emoji = [];

async function getEmoji(){
 let response = await fetch("https://emoji-api.com/emojis?access_key=d1a856dc71db9c0ca1ea2f115054f20d7d42bb47");
 data = await response.json();
//  console.log(data)
 
 for (let i=0; i<1500; i++){
    emoji.push({
        emojiName: data[i].character,
        emojiCode: data[i].unicodeName,

    })
 }
}
getEmoji();
// console.log(emoji)

btnEl.addEventListener("click", ()=>{
    const randomNum= Math.floor(Math.random() * emoji.length);
    btnEl.innerText = emoji[randomNum].emojiName;
    emojiNameEl.innerText = emoji[randomNum].emojiCode;
})
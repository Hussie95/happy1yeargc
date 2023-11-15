// script.js

function showWishes(memberName, memberImage) {
    const cardPopup = document.getElementById('cardPopup');
    const popupTitle = document.getElementById('popupTitle');
    const popupMessage = document.getElementById('popupMessage');

    // Change the heading to just display the name
    popupTitle.textContent = memberName;

    // Assign specific colors and messages based on member names
    const messagesMap = {
        'Chachi': {
            color: '#FFC0CB',
            message: `
                You're not just my best friend, you're genuinely one of the best people I've ever met. 
                You care for everyone and want everyone around you to be happy and you try your best to make 
                it happen too even when you're not doing well yourself.  Your very supportive too and your support is like a 
                pillar for all of us, and I can't thank you enough for being there, not just for me but for everyone.
                It's not just the big things; it's the little moments, the genuine happiness you show for our achievements, 
                that make you stand out. You're like a cheerleader for all of us, you're the best. You're more than deserving 
                of all the goodness that the world has to offer and In Sha Allah, you'll reach heights you've never imagined. My prayers will always 
                be with you. I know the road ahead may have its challenges, but your potential is boundless. I just know for a fact, 
                you'll make your parents proud In Sha Allah. You're the best, and I hope you'll stay the same no matter what.
            `,
        },
        'Daud': {
            color: '#ADD8E6',
            message: `
                You're genuinely such a kind, sensible, mature, understanding, and caring individual. 
                It's disheartening to see you harbor negative thoughts about yourself. 
                You're the heartbeat of our group chat, and when you're not around, it loses its spark. 
                Always remember, I'm here for you whenever you need to vent (we both have those moments). 
                I have complete faith that, In Sha Allah, you'll transform into an even more remarkable gentleman. 
                Your maturity and understanding are already evident, and you truly are amazing.
            `,
        },
        'Ahmed': {
            color: '#FFA500',
            message: `
                You don't talk much now, so I kinda hate you, but you've done a lot for me too, and I would never forget that. 
                The group chat is actually fine without you; your presence or absence doesn't really make a difference, 
                but it's good when you show up, so yeah. And yeah, you're caring and supportive too. 
                You're a very good person, understanding, a bit rude, but that's okay. 
                We all manage to tolerate you, so yeah, happy 15th or whatever.
            `,
        },
        'Fatima': {
            color: '#800080',
            message: `
                You're the best baji bhabhi behna ever. 
                You always have the best ideas and you're literally the most creative person I've ever met. 
                You're full of potential; you'll go far one day In Sha Allah. 
                You're very caring and supportive too; you've done so much for everyone, and I can't thank you enough. 
                I just wish you don't deactivate this much; it's fun when you're in the gc. 
                We all miss you so much, and I kinda miss you roasting me too lol.
            `,
        },
        'Willy': {
            color: '#8B4513',
            message: `
                Willyy, you're genuinely the most innocent person I've ever come across. 
                Half the time, it seems like you don't even know what's going on lol, 
                That prank i did was so fun and I'm thinking of doing contemplating another one hehe
                Beyond your innocence and sillyness, your caring and supportive nature shines through. 
                You've been a constant source of motivation, always there when I needed someone. 
                I reakky appreciate your presence and all that you've done for me.
                Remember when you mentioned that a listener needs a listener too? 
                It didn't fully resonate with me at first, but over time, I've come to understand and appreciate 
                the depth of what you actually meant and just like that there are so many insights you've shared 
                that have only recently clicked for me, and your guidance has been invaluable. 
                Thank you so much for everything silly, Willy******
            `,
        },
    };

    // Use the color and message from the map or defaults if not found
    const { color, message } = messagesMap[memberName] || { color: getRandomColor(), message: '' };
    cardPopup.style.backgroundColor = color;

    // Change the text color to black for better readability
    popupMessage.innerHTML = `<span style="color: black;">${message}</span>`;

    cardPopup.style.display = 'block';
}

function closeCardPopup() {
    const cardPopup = document.getElementById('cardPopup');
    cardPopup.style.display = 'none';
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to generate a random RGB color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Function to handle key click
  function handleKeyClick() {
    this.style.backgroundColor = getRandomColor();
  }
  
  // Create keys and add them to the keyboard
  const keyboard = document.getElementById('keyboard');
  
  // Create emoji key
  const emojiKey = document.createElement('div');
  emojiKey.className = 'key emoji-key';
  emojiKey.innerHTML = '😊🎉❤️'; // Add your favorite emojis
  keyboard.appendChild(emojiKey);
  
  // Create circular keys
  for (let i = 0; i < 9; i++) {
    const key = document.createElement('div');
    key.className = 'key';
    key.addEventListener('click', handleKeyClick);
    keyboard.appendChild(key);
  }
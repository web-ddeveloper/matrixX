var cvs = document.getElementById('cvs');
cvs.height = window.innerHeight;
cvs.width = window.innerWidth;
var ctx = cvs.getContext('2d');
var font = 'arial';
var fontSize = 10;
ctx.font = fontSize + 'px ' + font;
var cols = cvs.width / fontSize;

// Characters
var charSet;
charSet = '1234567890-=#!"£$%^&*()_+qwertyuiop]asdfghjklzxcvbnm,./'; 
charSet = charSet.split(''); 
var drops = [];
for (var col = 0; col < cols; col++)
  drops[col] = Math.floor(Math.random() * cvs.height);

// speed char
setInterval(rain, 40);

function rain() {
  // more than 0.1 u  cant see the char or number
  ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
  ctx.fillRect(0, 0, cvs.width, cvs.height);
  
  
  for (var col = 0; col < drops.length; col++) {
    //random char
    var char = charSet[Math.floor(Math.random() * charSet.length)];
    
    ctx.fillStyle = randColour();
    ctx.fillText(char, col * fontSize, drops[col] * fontSize);
    if (Math.random() > 0.99)
      drops[col] = 0
    drops[col]++; 
  }
}

function randColour()
{
    return '#00A300';
    // random colors or one color
//   return'rgb(' + 
//     Math.floor(Math.random() * 256) + ',' +
//     Math.floor(Math.random() * 256) + ','+ 
//     Math.floor(Math.random() * 256) + ',' + 
//     Math.floor(Math.random() * 256) + ')';
}
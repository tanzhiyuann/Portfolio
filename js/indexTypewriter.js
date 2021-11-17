console.log('loaded')
const text = document.getElementById('typewriter')
const phrases  = ['Full Stack Developer','Music Producer','Digital Artist (3D)','Video/Photo Editor','Human?']
const cursor = document.getElementById('blinkingCursor')
let x = 0;
let y = 0;
let typed = [];
let deleting = false;
let end = false;


function typewriter(){
    cursor.style.display = 'block';
    end = false;
    text.innerHTML = typed.join(''); //Appending to the empty array

    if (x < phrases.length){
        
        if (!deleting && y <= phrases[x].length){
            typed.push(phrases[x][y]); //indexing string pos (x), followed by the individual strings(y)
            y++ ;
            text.innerHTML = typed.join('');
        }

        if (deleting && y <= phrases[x].length){
            typed.pop(phrases[x][y]);
            y--;
            text.innerHTML = typed.join('');
        }

        // If finished appending the entire string/phrase into the array (typed)
        if (y == phrases[x].length){
            end = true;
            deleting = true;
        }

        if (deleting && y === 0){
            typed = []; //reset typed array to be empty
            deleting = false;
            x++; //Moves to next word in phrases array
            
            if (x === phrases.length){
                x = 0
            }
        }
    }

    var time = 150;
    
    if (end ===  true){
        time = 2000;
        cursor.style.display = 'none';
    }

    setTimeout(typewriter, time)
}

typewriter()
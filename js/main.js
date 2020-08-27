'use strict';

{
   const word = 'apple';
   let loc = 0;
   let score = 0;
   let miss = 0;

   const target = document.getElementById('target');
   const scoreLabel = document.getElementById('score');
   const missLabel = document.getElementById('miss');

   target.textContent = word;

   function updateTarget() {
       let placeholder = '';
       for (let i = 0; i < loc; i++) {
           placeholder += '_';
       }
       target.textContent = placeholder + word.substring(loc);
   }

    window.addEventListener('keydown' , e => {
    if(e.key === word[loc]) {
        loc++;
        updateTarget();
        score++;
        scoreLabel.textContent = score;
    } else {
        miss++;
        missLabel.textContent = miss;
    }
   }); 
}
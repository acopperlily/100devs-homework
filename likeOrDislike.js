// YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.

// Task
// Create a function that takes in a list of button inputs and returns the final state.

// Examples
// likeOrDislike([Dislike]) => Dislike
// likeOrDislike([Like,Like]) => Nothing
// likeOrDislike([Dislike,Like]) => Like
// likeOrDislike([Like,Dislike,Dislike]) => Nothing
// Notes
// If no button is currently active, return Nothing.
// If the list is empty, return Nothing.

/* PREP
  Parameters: an array of strings representing Like and Dislike buttons
  Returns: final state after buttons are pressed
  Examples:
    ['Dislike'] returns 'Dislike'
    ['Like', 'Like'] returns 'Nothing'
    ['Dislike', 'Like'] returns 'Like'
  Pseudocode:
    set variables for likes and dislikes to false
    loop through array to track state
      if button equals 'Like':
        change dislikes to false
        change likes to not likes
      else:
        change likes to false
        change dislikes to not dislikes
    if likes or dislikes is true, return the one that's true
    if they're both false, return 'Nothing'
*/

function likeOrDislike(buttons) {
  let likes = false;
  let dislikes = false;
  for (let button of buttons) {
    if (button === 'Like') {
      dislikes = false;
      likes = !likes;
    } else {
      likes = false;
      dislikes = !dislikes;
    }
  }
  return likes === true ? 'Like' : dislikes === true ? 'Dislike' : 'Nothing';
}

// Test cases
console.log(likeOrDislike(['Dislike'])); // 'Dislike'
console.log(likeOrDislike(['Like', 'Like'])); // 'Nothing'
console.log(likeOrDislike(['Dislike', 'Like'])); // 'Like'
console.log(likeOrDislike(['Like', 'Dislike', 'Dislike'])); // 'Nothing'
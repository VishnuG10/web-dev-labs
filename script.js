const zipInput = document.getElementById("zip"); 

const zipPattern = /^\d{5}$/;
const isValidZip = zipPattern.test(zipInput.value);
console.log(isValidZip); 

const name = "Ada";
let labsCompleted = 6;
let isEnrolled = true;
labsCompleted = labsCompleted + 1;
console.log(`${name} has completed ${labsCompleted} labs.`);

//Lab 8
const goals = ["HTML", "CSS", "JavaScript", "Git"];
const goalsList = document.querySelector("#goals-list");
goals.forEach(function(goal) {
const item = document.createElement("li");
item.textContent = goal;
goalsList.appendChild(item);
});

const likeBtn = document.querySelector("#like-btn");
const likeCount = document.querySelector("#like-count");

if (!likeBtn) {
console.warn("like-btn not found on this page");
}

const LikeCounter = {
likes: 0,
increment() {
this.likes = this.likes + 1;
this.render();
},
render() {
likeCount.textContent = `${this.likes} likes`;
}
};
likeBtn.addEventListener("click", function() {
LikeCounter.increment();
});

// //Lab 7 (Update Lab 8)
// let likes = 0;
// function incrementLikes() {
// likes = likes + 1;
// updateLikeDisplay();
// }
// function updateLikeDisplay() {
// likeCount.textContent = `${likes} likes`;
// }
// likeBtn.addEventListener("click", incrementLikes);


// //Lab 8

// const likeMessage = document.querySelector("#like-message");
// function updateLikeDisplay() {
// likeCount.textContent = `${likes} likes`;
// if (likes >= 10) {
// likeMessage.textContent = "Wow, thanks for all the likes!";
// } else if (likes >= 5) {
// likeMessage.textContent = "Glad you like it!";
// } else {
// likeMessage.textContent = "";
// }
// }


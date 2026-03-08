const users = [{
    name: "Krishna",
    pic: "https://i.pinimg.com/1200x/85/3a/dd/853adde9ef1c27621565cdbaab8496db.jpg",
    bio: "Consistency is the quiet engine of mastery. Small, repetitive actions often yield more significant results than a single burst of effort.",
},
{
    name: "Ritesh",
    pic: "https://i.pinimg.com/1200x/af/46/62/af46627ff8de2e7a5641bb9705bb4cff.jpg",
    bio: "Growth and comfort rarely occupy the same space. Embracing a bit of friction is usually a sign that you are moving forward.",
},
{
    name: "Nitish",
    pic: "https://i.pinimg.com/1200x/1a/04/25/1a04252be1ab04dcc7c6982576bc7272.jpg",
    bio: "The best time to debug a problem is before it becomes a crisis. Preventive maintenance—in code and in life—saves hours of future stress.",
},
{
    name: "Daksh",
    pic: "https://i.pinimg.com/1200x/d3/91/73/d39173de174fe958c4c12917b048f002.jpg",
    bio: "Simplicity is the ultimate sophistication. Stripping away the unnecessary allows the core value of your work to shine.",
},
{
    name: "Vikash",
    pic: "https://i.pinimg.com/1200x/d2/a5/b3/d2a5b3dfdabd1f278dafdb100c7a3823.jpg",
    bio: "Your focus is a finite resource; guard it fiercely. Multi-tasking is often just an efficient way to do several things poorly.",
},
{
    name: "Harsh",
    pic: "https://i.pinimg.com/1200x/12/fb/45/12fb4591242a357978ecfbf48c1aca75.jpg",
    bio: "Failure is just a data point. It isn’t an end state, but rather a specific piece of feedback on what to adjust for the next iteration.",
},
{
    name: "Aman",
    pic: "https://i.pinimg.com/1200x/93/3d/0f/933d0f684cb2153dd99968b5b8a4648b.jpg",
    bio: "The most valuable skill is learning how to learn. Tools and platforms change, but the ability to adapt is a permanent asset.",
},
{
    name: "Rishi",
    pic: "https://i.pinimg.com/1200x/3d/84/95/3d84955681799578d25df8a7b85aa452.jpg",
    bio: "Efficiency is doing things right; effectiveness is doing the right things. Always pause to ensure you are climbing the right ladder.",
},
{
    name: "Laksh",
    pic: "https://i.pinimg.com/1200x/26/da/ba/26dababc4358167418bb1fe1ff7e8a55.jpg",
    bio: "A clear mind leads to clean logic. Taking a ten-minute walk can often solve a problem that an hour of staring at a screen couldn't.",
},
{
    name: "Jotish",
    pic: "https://i.pinimg.com/736x/36/00/61/3600618dc33f454c3650cdd9a5f935ea.jpg",
    bio: "Build for the person you will be in six months. Document your processes and comment your work so your future self doesn't have to start from scratch.",
},
{
    name: "Rudra",
    pic: "https://i.pinimg.com/1200x/21/be/10/21be10df58569bdd5598207d9c1a4543.jpg",
    bio: "Comparison is the thief of progress. The only person you should try to outpace is the version of yourself from yesterday.",
},
{
    name: "Alok",
    pic: "https://i.pinimg.com/1200x/fa/64/fa/fa64fa0b4aabcd526120a4bf1ed0e725.jpg",
    bio: "Integrity is doing the right thing when no one is checking the logs. It builds a foundation of trust that is impossible to manufacture.",
},
{
    name: "Ashu",
    pic: "https://i.pinimg.com/1200x/8a/8a/3c/8a8a3c13acd74a759259322e495727db.jpg",
    bio: "Don't let the \"perfect\" be the enemy of the \"finished.\" Shipping a functional version is almost always better than over-engineering a concept that never launches.",
}
];


function showUsers(arr){
    arr.forEach(function(user){
        
// 1. Create the main card container
const card = document.createElement('div');
card.classList.add( 'card');

// 2. Create the background image
const bgImg = document.createElement('img');
bgImg.classList.add ('bg-img');
bgImg.src = user.pic;
bgImg.alt = 'User Portrait'; // Added for accessibility

// 3. Create the blur overlay
const blurDiv = document.createElement('div');
blurDiv.style.backgroundImage = `url(${user.pic})`
blurDiv.classList.add( 'blur');

// 4. Create the content wrapper
const contentDiv = document.createElement('div');
contentDiv.classList.add( 'content');

// 5. Create the heading and paragraph
const heading = document.createElement('h2');
heading.textContent = user.name;

const paragraph = document.createElement('p');
paragraph.textContent = user.bio;

// 6. Assemble the elements
contentDiv.appendChild(heading);
contentDiv.appendChild(paragraph);

card.appendChild(bgImg);
card.appendChild(blurDiv);
card.appendChild(contentDiv);

// 7. Finally, append the card to the body or a specific container
document.querySelector(".main").appendChild(card);
    });
};

showUsers(users);

let inp = document.querySelector("input");

inp.addEventListener("input",function(){
    let newUsers = users.filter((user)=>{
        return user.name.toLocaleLowerCase().startsWith(inp.value.toLocaleLowerCase()); 
    });
    document.querySelector(".main").innerHTML = "";
    showUsers(newUsers);
})
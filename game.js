// import { textNodes } from "./textnodes";

// PLEASE IMPORT THIS SHIT
// "CANT FUCKIGN APPEAR TOP LEVLE MODULE SHIT FUIK KYO"FUCCKK K YOUUU
const textNodes = [
  {
    text:
      "This is sign dating simulator two. Click the text box or press Z to begin.",
    bg: null,
    characterOnScreen: null,
    speaker: "",
  },
  {
    text:
      "You enter the Home Depot hoping to spice up your front lawn a bit. It's a cloudy day outside, you just got fired from your job, and you're really excited to display your depression to the entire neighborhood.",
    bg: "img/bg/homedepot.jpg",
    characterOnScreen: null,
    speaker: "",
  },
  {
    text:
      'Once inside, you start browsing for signs. There are quite a few available, but none seem to pertain to your liking. You\'re going for something depressing as shit, something that will make people stop and say "Damn."',
    bg: "img/bg/homedepot.jpg",
    characterOnScreen: null,
    speaker: "",
  },
  {
    text:
      "After some browsing, one sign catches your eye. It's all the way in the back of the store where no one goes, and all it has is a straight face. Since no other signs pertained to your liking, and this is the only one that conveyed unhappiness, you decided to give it a go...and buy it.",
    bg: "img/bg/homedepot.jpg",
    characterOnScreen: null,
    speaker: "",
  },
  {
    text: "I'd, UH, like to buy this sign. It looks pretty interesting.",
    bg: "img/bg/cashier.jpg",
    characterOnScreen: null,
    speaker: "You",
  },
  {
    text: "Fuck off.",
    bg: "img/bg/cashier.jpg",
    characterOnScreen: null,
    speaker: "Cashier",
  },
  {
    text: "     ",
    bg: "img/bg/cashier.jpg",
    characterOnScreen: null,
    speaker: "You",
  },
  {
    text: "Got Sign.",
    bg: "img/bg/cashier.jpg",
    characterOnScreen: null,
    speaker: "",
    event: () => {
      inv("add", items.sign);
    },
  },
  {
    text:
      "Well, you're at your house now. All you have to do is plop this sign down and you can continue watching virtual stuff.",
    bg: "img/bg/house.jpg",
    characterOnScreen: null,
    speaker: "",
  },
  {
    text:
      "Once the sign is planted in the ground, you walk back inside. Today will be a normal day. A very normal and sad day.",
    bg: "img/bg/house.jpg",
    characterOnScreen: null,
    speaker: "",
  },
  {
    text: "Pssst. Hey.",
    bg: "img/bg/house.jpg",
    characterOnScreen: null,
    speaker: "????",
  },
  {
    text: "Who said that?",
    bg: "img/bg/house.jpg",
    characterOnScreen: null,
    speaker: "",
  },
  {
    text: "You. Guy walking into his house.",
    bg: "img/bg/house.jpg",
    characterOnScreen: null,
    speaker: "????",
  },
  {
    text:
      "Must be your lousy neighbor. Every morning he'd shout at you and try to get your attention for something meaningless, you guess today he was late. He's so forgettable you forgot his name.",
    bg: "img/bg/house.jpg",
    characterOnScreen: null,
    speaker: "",
  },
  {
    text: "Yes? I'm kind of busy right now...",
    bg: "img/bg/house.jpg",
    characterOnScreen: null,
    speaker: "You",
  },
  {
    text: "Can you, uhhhhh, get me out of this soil??",
    bg: "img/bg/house.jpg",
    characterOnScreen: null,
    speaker: "????",
  },
  {
    text: "He's pranking you.",
    bg: "img/bg/house.jpg",
    characterOnScreen: null,
    speaker: "",
  },
  {
    text:
      "Go home!! Quit trying to prank me because it's annoying as shit, I would pop a cap in your skull but most people generally regard bloody murder as taboo.",
    bg: "img/bg/house.jpg",
    characterOnScreen: null,
    speaker: "You",
  },
  {
    text: "...",
    bg: "img/bg/house.jpg",
    characterOnScreen: null,
    speaker: "",
  },
  {
    text:
      "Looks like he left. You glance back at your sign before walking back outside.",
    bg: "img/bg/house.jpg",
    characterOnScreen: null,
    speaker: "",
  },
  {
    text: "It's perfect.",
    bg: "img/bg/house.jpg",
    characterOnScreen: null,
    speaker: "",
  },
  {
    text:
      "You turn on the news. You like the news because it makes you think of how fortunate you are to not be slapped around like a clown.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: null,
    speaker: "",
  },
  {
    text: "So peculiar.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: null,
    speaker: "",
  },
  {
    text: "Go fuck yourself.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: null,
    speaker: "Reporter",
  },
  {
    text: " ",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: null,
    speaker: "You",
  },
  {
    text: "After an hour or two of watching TV, you hear a knock on your door.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: null,
    speaker: "",
  },
  {
    text: "Who is it?? I'm busy as shit right now.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: null,
    speaker: "You",
  },
  {
    text: "The sign.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: null,
    speaker: "????",
  },
  {
    text: "Why does he keep fucking persisting?",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: null,
    speaker: "",
  },
  {
    text:
      "You ultimately decide to surrender to your neighbor and open the door. And what, the fuck.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: null,
    speaker: "",
  },
  {
    text: "Took you long enough.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/neutral.png",
    speaker: "Sign",
  },
  {
    text: "",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/neutral.png",
    speaker: "",
  },
  {
    text: "So thaaaaat's who it was.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/neutral.png",
    speaker: "",
  },
  {
    text: "A talking sign.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/neutral.png",
    speaker: "",
  },
  {
    text: "",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/neutral.png",
    speaker: "",
  },
  {
    text:
      "You can't really do anything because A, you're not good with socializing, and B,",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/neutral.png",
    speaker: "",
  },
  {
    text: "this is a fucking talking sign.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/neutral.png",
    speaker: "",
  },
  {
    text: "So naturally, you book it.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/neutral.png",
    speaker: "",
  },
  {
    text:
      "You lock your doors, run to the other side of the road, and breathe a sigh of relief.",
    bg: "img/bg/house.jpg",
    characterOnScreen: null,
    speaker: "",
  },
  {
    text: "What the hell was that thing?",
    bg: "img/bg/house.jpg",
    characterOnScreen: null,
    speaker: "",
  },
  {
    text:
      "Talking signs aren't real, and they never have been. No one even mentions them in horror stories because they're so fucking absurd and mundane.",
    bg: "img/bg/house.jpg",
    characterOnScreen: null,
    speaker: "",
  },
  {
    text: "Clearly, a ghost is messing with you.",
    bg: "img/bg/house.jpg",
    characterOnScreen: null,
    speaker: "",
  },
  {
    text:
      "But if it didn't slap you and put a bunch of splinters in your mouth, and it alterted you to it's presence after you grounded it into soil...",
    bg: "img/bg/house.jpg",
    characterOnScreen: null,
    speaker: "",
  },
  {
    text:
      "It's tampering with you. It knows you're upset and it's trying to take advantage of you.",
    bg: "img/bg/house.jpg",
    characterOnScreen: null,
    speaker: "",
  },
  {
    text: "But how would you go about getting sleep if that thing's in there?",
    bg: "img/bg/house.jpg",
    characterOnScreen: null,
    speaker: "",
  },
  {
    text: "You surrender yet again...",
    bg: "img/bg/house.jpg",
    characterOnScreen: null,
    speaker: "",
  },
  {
    text: "Oh, hey you're back.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/neutral.png",
    speaker: "Sign",
  },
  {
    text: "People usually react that way when they see me.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/sad.png",
    speaker: "Sign",
  },
  {
    text:
      "You were not about to plunder to this poltergeist's guilt tripping shit.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/sad.png",
    speaker: "",
  },
  {
    text:
      "Are you trying to make me feel bad? And then kill me? Is that what you're trying to do, fatass?",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/sad.png",
    speaker: "You",
  },
  {
    text: "I can hammer you to pieces whenever I want.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/sad.png",
    speaker: "You",
  },
  {
    text: "...",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/neutral.png",
    speaker: "Sign",
  },
  {
    text:
      "I don't know how I'm going to get you to believe that I'm just an ordinary talking sign.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/sad.png",
    speaker: "Sign",
  },
  {
    text: "Go ahead, kill me.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/sad.png",
    speaker: "Sign",
  },
  {
    text: "Shit. It got you.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/sad.png",
    speaker: "",
  },
  {
    text:
      "You don't want to feel bad even if it's a ghost, but you don't want this thing bothering you in your house either.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/sad.png",
    speaker: "",
  },
  {
    text:
      "Okay...shit...fine....I'll keep you. But don't kill me or do anything stupid.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/neutral.png",
    speaker: "You",
  },
  {
    text: "Really? You really will?",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/wtf.png",
    speaker: "Sign",
  },
  {
    text:
      "I mean... you're a sign. You don't have anything better to do, right?",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/wtf.png",
    speaker: "You",
  },
  {
    text:
      "No...other than sitting around all day. It gets boring...the reason I know english is from all the insults people have chanted while walking by me.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/sad.png",
    speaker: "Sign",
  },
  {
    text: "Well, I guess I'll help you out.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/sad.png",
    speaker: "You",
  },
  {
    text: "...really? Like...you aren't trying to trick me or anything?",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/wtf.png",
    speaker: "Sign",
  },
  {
    text: "(Aren't you trying to trick me?)",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/wtf.png",
    speaker: "",
  },
  {
    text: "I...I guess I won't.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/wtf.png",
    speaker: "You",
  },
  {
    text: "Thank you so much, man! I really owe you one!!!!",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/happy.png",
    speaker: "Sign",
  },
  {
    text:
      "The idea of having your only friend be a talking sign who is possibly a ghost who wants to kill you wasn't something you ever thought of...uh...thinking of.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/happy.png",
    speaker: "",
  },
  {
    text:
      "You werent going to trust this supernatural sign shit for a second, but at least you have a sort of friend now.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/happy.png",
    speaker: "",
  },
  {
    text:
      "You made someone/something happy, and even though it's probably a cheeky bastard out to get you... it feels genuine enough.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/happy.png",
    speaker: "",
    event: () => {
      items.sign.description =
        "A talking sign that's probably a ghost. Seems nice, though.";
      inv("render");
    },
  },
  {
    text: "Welcome to Sign Dating Simulator Two: Sign Story.",
    bg: null,
    characterOnScreen: null,
    speaker: "",
  },
  {
    text: "In this game, you date a sign.",
    bg: null,
    characterOnScreen: null,
    speaker: "",
  },
  {
    text:
      "The game is meant to be enjoyed in one sitting, and is meant to be a different way of reading a lame, ordinary novel.",
    bg: null,
    characterOnScreen: null,
    speaker: "",
  },
  {
    text:
      "This is a Visual Novel, a novel that is visual. Therefore, you will read a lot. There is not much interactivity",
    bg: null,
    characterOnScreen: null,
    speaker: "",
  },
  {
    text: "But I think you might like it.",
    bg: null,
    characterOnScreen: null,
    speaker: "",
  },
  {
    text:
      "You are You. You bought a sign. The sign is sentient. Or is it a ghost? You don't know.",
    bg: null,
    characterOnScreen: null,
    speaker: "",
  },
  {
    text:
      "Eventually, as you have read by the title, you will fall in love with the sign.",
    bg: null,
    characterOnScreen: null,
    speaker: "",
  },
  {
    text: "It is inevitable. You cannot stop it.",
    bg: null,
    characterOnScreen: null,
    speaker: "",
  },
  {
    text: "Before we truly begin, I must introduce you to the inventory.",
    bg: null,
    characterOnScreen: null,
    speaker: "",
  },
  {
    text: 'Click on "Open Inventory" to open it, and look at all you have.',
    bg: null,
    characterOnScreen: null,
    speaker: "",
  },
  {
    text:
      "Be warned, however, if you are playing the game on an older version some things might break.",
    bg: null,
    characterOnScreen: null,
    speaker: "",
  },
  {
    text:
      "Interactivity will become a necessity with the new mechanics and button choices. Don't worry about that right now.",
    bg: null,
    characterOnScreen: null,
    speaker: "",
  },
  {
    text:
      "I hope you enjoy the novel. If you already have a love interest, fuck off and go to hell I hate you and I want to kill you.",
    bg: null,
    characterOnScreen: null,
    speaker: "",
  },
  {
    text: "So...what do you do in here?",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/neutral.png",
    speaker: "Sign",
  },
  {
    text: "I don't know, mostly just watching teevee and mowing my lawn.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/neutral.png",
    speaker: "You",
  },
  {
    text: "That sounds, uhhhh...",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/neutral.png",
    speaker: "Sign",
  },
  {
    text: "That sounds a bit like me...",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/neutral.png",
    speaker: "Sign",
  },
  {
    text: "Haha.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/sad.png",
    speaker: "Sign",
  },
  {
    text: "Well, at least TV is more entertaining than sitting around all day.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/neutral.png",
    speaker: "You",
  },
  {
    text: "What do you wanna watch?",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/neutral.png",
    speaker: "You",
  },
  {
    text:
      "I've seen the TVs play this house making show thing. I can't remember the name, though.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/neutral.png",
    speaker: "Sign",
  },
  {
    text: "House building?",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/neutral.png",
    speaker: "You",
  },
  {
    text: "Yea.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/neutral.png",
    speaker: "Sign",
  },
  {
    text: "Is it Ache Gee Tee Vee?",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/neutral.png",
    speaker: "You",
  },
  {
    text: "I don't know. Check and see.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/neutral.png",
    speaker: "Sign",
  },
  {
    text: "...",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/neutral.png",
    speaker: "Sign",
  },
  {
    text:
      "Yea, yea!!! This is it! This was my only source of entertainment, and I could only catch a sliver of the logo from such a distance.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/wtf.png",
    speaker: "Sign",
  },
  {
    text: "Thank you so much!",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/happy.png",
    speaker: "Sign",
  },
  {
    text: "Yea, that's great...no problem.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/happy.png",
    speaker: "You",
  },
  {
    text:
      "And so you watched TV with the sign for a while. It felt good not being by yourself.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/happy.png",
    speaker: "",
  },
  {
    text:
      "You were kind of starting to fall for the ghost's tricks completely.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/happy.png",
    speaker: "",
  },
  {
    text: "It didn't really matter. At least you had someone to be with.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/happy.png",
    speaker: "",
  },
  {
    text: "Hey. You look upset. Is there anything wrong?",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/what.png",
    speaker: "Sign",
  },
  {
    text: "No.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/what.png",
    speaker: "You",
  },
  {
    text: "Oh, okay. Let me know if you need any help.",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/sad.png",
    speaker: "Sign",
  },
  {
    text: "Well, actually....",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/sad.png",
    speaker: "You",
  },
  {
    text: "Yes? What's been bothering you?",
    bg: "img/bg/house_interior.jpg",
    characterOnScreen: "img/sign/what.png",
    speaker: "Sign",
  },
];

const container = document.getElementById("game");
const textbox = {
  container: document.getElementById("textbox"),
  text: document.getElementById("text"),
  speaker: document.getElementById("speaker"),
};
const inventoryEl = document.getElementById("inventory");
const slots = document.querySelectorAll(".slot");
const invClose = document.getElementById("inv");
const infobox = document.getElementById("infobox");
const ibText = document.getElementById("ibtext");
const portrait = document.getElementById("portrait");
const piss = document.getElementById("pis");

let state = 0;

const items = {
  sign: {
    name: "Sign",
    description: "A sign you bought at home depot. Looks happy enough.",
    quantity: 0,
    max: 1,
    img: "img/sign/neutral.png",
  },
};
const inventory = [];

textbox.container.addEventListener("click", () => {
  inc();
});
document.addEventListener("keydown", (obj) => {
  if (obj.key === "z") {
    inc();
  }
});
invClose.addEventListener("click", () => {
  if (inventoryEl.classList.contains("hide")) {
    inventoryEl.classList.remove("hide");
    invClose.style.float = "right";
    invClose.textContent = "Close inventory";
  } else {
    inventoryEl.classList.add("hide");
    invClose.style.float = "left";
    invClose.textContent = "Open inventory";
  }
});
infobox.onclick = () => {
  infobox.classList.add("hidereal");
};

function init() {
  // "replace this with inc() you say but thisll do other init stuff i promise"
  state = 0;
  render(0);
}

function render(specific) {
  const node = textNodes[specific ? specific : state];
  textbox.speaker.textContent = node.speaker;
  textbox.text.textContent = node.text;
  bg(node.bg ? node.bg : "img/bg/default.jpg");
  if (node.characterOnScreen) {
    speaker(node.characterOnScreen, 0);
  } else {
    speaker(null, 1);
  }
  if (node.event) {
    node.event();
  }
}

function inv(method, object) {
  if (method === "add") {
    if (object.quantity < object.max) {
      inventory.push(object);
      object.quantity++;
    }
  }
  for (let i = 0; i < inventory.length; i++) {
    const children = slots[i].children;
    if (children[0]) slots[i].removeChild(children[0]);
    const img = document.createElement("img");
    slots[i].appendChild(img);
    img.setAttribute("src", inventory[i].img);
    slots[i].addEventListener("click", () => {
      infobox.classList.remove("hidereal");
      ibText.innerHTML = `${inventory[i].description}<br><br>You have ${inventory[i].quantity}`;
    });
  }
  //   inventory.forEach((index) => {
  //     const img = document.createElement("img");
  //     slots[index].appendChild(img);
  //   });
}

function speaker(speaker, hide) {
  if (hide) {
    piss.setAttribute("src", "");
    portrait.classList.add("hidereal");
  } else {
    piss.setAttribute("src", speaker);
    portrait.classList.remove("hidereal");
  }
}

// QOL func
function bg(url) {
  container.style.backgroundImage = `url('${url}')`;
}
function inc() {
  state++;
  render();
}

// Real boring game stuff
init();

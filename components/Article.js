/* This is the data we will be using to create our articles */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  }
];

/* Step 1: Write a component called 'articleMaker' to create an article. You want your component to return markup like the template below: 

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'>+</span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as its one argument, or 5 separate strings mapping to each property of an article object.
*/
const articleMaker = (articles) => {
  let articleElements = []
  const articleStructure = { 
    title: { element: "h2", classList: "" },
    date: { element: "p", classList: "date" },
    firstParagraph: { element: "p", classList: "" },
    secondParagraph: { element: "p", classList: "" },
    thirdParagraph: { element: "p", classList: "" },
  }
  articles.forEach((article,index)=>{
    const articleDiv = document.createElement("div");
    articleDiv.classList.add("article");
    articleDiv.id = `articleDiv${index}`;
    Object.keys(articleStructure).forEach(key=>{
      const element = document.createElement(articleStructure[key].element)
      if (articleStructure[key].classList !== "") { element.classList.add(articleStructure[key].classList) }
      element.innerText = article[key]
      articleDiv.appendChild(element)
    })
    let expandButton = document.createElement("span");
    expandButton.classList.add("expandButton");
    expandButton.style.fontFamily = "monospace";
    expandButton.innerText = "[+]";
    expandButton.id = `expandButton${index}`; //use this to determine containing div when clicked
    expandButton.addEventListener("click",e=>{
      let _articleDiv = document.querySelector(`#articleDiv${index}`);
      document.querySelector(`#articleDiv${index}`).classList.toggle("article-open")
      expandButton.innerText = (Array.from(articleDiv.classList).includes("article-open")) ? "[-]" : "[+]";
    })
    articleDiv.appendChild(expandButton);
    articleElements.push(articleDiv);
  })
  return articleElements;
}
let articleElements = articleMaker(data);

const articlesRefresh = () => { 
  const articleDiv = document.querySelector('.articles');
  articleDiv.innerHTML = "";
  articleElements.forEach(e=>document.querySelector('.articles').appendChild(e))
}



/*
  Step 2: Add an event listener to the expandButton span. This listener should toggle the class 'article-open' on the 'article' div.

  Step 3: Don't forget to return something from your function!
*/

//I moved this to the articleMaker function so that when new articles are added, the event listener is added for each one
// document.querySelectorAll(".expandButton").forEach(clickedElement=>
//   clickedElement.addEventListener("click",e=>{
//     document.querySelector(`#${clickedElement.id.replace("expandButton","articleDiv")}`).classList.toggle("article-open")
//   })
// )

/*
  Step 4: Outside your function, loop over the data. At each iteration you'll use your component to create an article and append it to the DOM inside the 'articles' div.

  done above

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.
*/

data.push({
  title: "this is my article title",
  date: "July 8, 2020",
  firstParagraph: "lorem ipsum",
  secondParagraph: "lorem ipsum",
  thirdParagraph: "lorem ipsum",
})

articleElements = articleMaker(data);
articlesRefresh(); 

//create and insert new article button:
let newArticleButtonDiv = document.createElement("div");
newArticleButtonDiv.style = "text-align: center;"
let newArticleButton = document.createElement("button");
newArticleButton.innerText = "new article";
newArticleButton.style = "background-color: #222; color: #eee; padding: 1rem; font-size: 1.2rem;"
newArticleButton.addEventListener("click",()=>toggleFormDisplay())
newArticleButtonDiv.appendChild(newArticleButton);
document.body.appendChild(newArticleButtonDiv);

//create and insert new article form
const formDiv = document.createElement("div");
formDiv.style = "width: 90vw; height: 70vh; background-color: #444; color: #fff; position: absolute; top: 15vh; left: 5vw; z-index: 10; box-shadow: 1rem 1rem 1rem black; border-radius: 1rem; border: 0.1rem outset #666; flex-direction: column; justify-content: flex-start; align-items: center;"
formDiv.style.display = "none";
//form header and close button
const formHeader = document.createElement("div");
const formHeaderText = document.createElement("p");
formHeaderText.innerText = "create new article:"
const formHeaderClose = document.createElement("p");
formHeaderClose.innerText = "X";
formHeaderClose.style = "color: red; cursor: pointer;"
formHeaderClose.addEventListener('click',()=>toggleFormDisplay())
formHeader.appendChild(formHeaderText);
formHeader.appendChild(formHeaderClose);
formHeader.style = "display: flex; flex-direction: row; justify-content: space-between; width: 100%; padding: 0 1rem;"
formDiv.appendChild(formHeader);
document.body.appendChild(formDiv);
//form input
  //title
const titleLabel = document.createElement('label');
titleLabel.innerText = "title:"
titleLabel.style = "display: flex; flex-direction: column; width: 90%; margin: 0.5rem auto;"
const titleInput = document.createElement('input');
titleInput.id="titleInput";
titleLabel.appendChild(titleInput);
formDiv.appendChild(titleLabel);
["firstParagraph","secondParagraph","thirdParagraph"].forEach(e=>{
  const pLabel = document.createElement('label');
  pLabel.innerText = `${e}:`;
  pLabel.style = "display: flex; flex-direction: column; width: 90%; margin: 0.5rem auto;"
  const pInput = document.createElement('textarea');
  pInput.id=`${e}Input`;
  pInput.style="height: 10vh;"
  pLabel.appendChild(pInput);
  formDiv.appendChild(pLabel);
})
//form submit button
const submitArticleButton = document.createElement('button');
submitArticleButton.innerText = "submit";
submitArticleButton.style = "margin: 0.5rem auto; background-color: #555; color: #fff; font-size: 1.2rem; padding: 0.2rem;"
submitArticleButton.addEventListener('click',submitArticle)
formDiv.appendChild(submitArticleButton);
//form error message
const errorMessage = document.createElement('p');
errorMessage.id = "errorMessage";
errorMessage.innerText = "";
errorMessage.style = "margin: 0.5rem auto; color: #f00;"
formDiv.appendChild(errorMessage);

//event listener for escape key to hide new article form
window.addEventListener("keydown",e=>(e.key=="Escape" && formDiv.style.display=="flex") ? toggleFormDisplay() : null )

function toggleFormDisplay() {
  formDiv.style.display = (formDiv.style.display=="flex") ? "none" : "flex";
  if (formDiv.style.display == "flex") {
    document.querySelector("#titleInput").focus();
  }
}


function submitArticle() {
  //create form
  let title = document.querySelector("#titleInput").value;
  let date = new Date();
  let firstParagraph = document.querySelector("#firstParagraphInput").value;
  let secondParagraph = document.querySelector("#secondParagraphInput").value;
  let thirdParagraph = document.querySelector("#thirdParagraphInput").value;
  if (title != "" && firstParagraph != "" && secondParagraph != "" && thirdParagraph != "") { 
    data.push({
      title: title,
      date: date,
      firstParagraph: firstParagraph,
      secondParagraph: secondParagraph,
      thirdParagraph: thirdParagraph,
    })
    articleElements = articleMaker(data);
    articlesRefresh(); 
    document.querySelector("#errorMessage").innerText = "";
    document.querySelector("#titleInput").value = "";
    document.querySelector("#firstParagraphInput").value = "";
    document.querySelector("#secondParagraphInput").value = "";
    document.querySelector("#thirdParagraphInput").value = "";
    toggleFormDisplay();
  }
  else { 
    document.querySelector("#errorMessage").innerText = "error: your article is incomplete"
  }
}
const recentlyViewedItems = [
	{
    title: "Apple iPhone 7 Plus - 128GB - Black - (GSM) Unlocked",
    imageSource: "https://i.ebayimg.com/thumbs/images/g/peQAAOSwJK9bh~Tm/s-l225.png",
    price: "$194.99",
  },
  {
    title: "Apple iPhone XR Smartphone | 64GB 128GB 256GB | Unlocked Verizon AT&T T-Mobile",
    imageSource: "https://i.ebayimg.com/thumbs/images/g/2ZUAAOSw4pJd2XZh/s-l225.png",
    price: "$320.99",
  },
  {
    title: "Apple iPhone 6s 16GB 32GB 64GB 128GB Unlocked Verizon AT&T T-Mobile Smartphone",
    imageSource: "https://i.ebayimg.com/thumbs/images/g/ZcwAAOSw44peap3s/s-l225.png",
    price: "$86.55",
  },
  {
    title: "Apple iPhone 8 Plus 64GB Unlocked Smartphone",
    imageSource: "https://i.ebayimg.com/thumbs/images/g/RHIAAOSwCtJaGbNC/s-l225.png",
    price: "$236.55",
  }
];

document.getElementById("itemsContainer").innerHTML = recentlyViewedItems.map((item, index) =>
  `<div class="itemContainer">
    <div class="imageContainer">
    <img src=${item.imageSource} alt=${item.title}</img>
    </div>
    <div class="textContainer">
    <p class="itemTitle">${item.title}</p>
    <p class="price">${item.price}</p>
    <button id=${index+1}>Add to cart</button>
    </div>
    </div>`
).join('');

const titles = document.querySelectorAll(".itemTitle");
const titlesArray = [...titles];
titlesArray.forEach(title => {
  truncateString(title);
});

function truncateString(title) {
  let truncatedString = title.textContent;
  const truncatedStringParts = title.textContent.split(' ');
  const twoLineHeight = getLineHeight(title) * 2;

  while (twoLineHeight < title.clientHeight) {
    truncatedStringParts.pop();
    truncatedString = truncatedStringParts.join(' ') + ' ...';
    title.textContent = truncatedString;
  }
}

function getLineHeight(element) {
  const lineHeight = window.getComputedStyle(element)['line-height'];
  return parseFloat(lineHeight);
}

const buttons = document.querySelectorAll('button');
const buttonsArray = [...buttons];
buttonsArray.forEach(button => {
  button.onclick = function() {
    addItemToCart(button.id);
  }
})

function addItemToCart(id) {
  const message = document.getElementById("msg");
  const currentButton = document.getElementById(id);
  message.textContent = `Item ${id} added in cart.`;
  currentButton.disabled = true;
}

let scriptures = [];

function renderScriptures(scriptures) {
  const listElement = document.querySelector("#list");
  listElement.innerHTML = "";
  scriptures.forEach((scripture) => {
    listElement.innerHTML += `
    <li ${scripture.completed ? 'class="strike"' : ""}>
      <p>${scripture.detail}</p>
      <div>
        <span data-function="delete">❎</span>
        <span data-function="complete">✅</span>
      </div>
    </li>`;
  });
}

function newTask() {
  const scripture = document.querySelector("#favchap").value;
  document.querySelector("#favchap").value = "";
  if (scripture === "") {
    alert("Please, enter a scripture!")
  }
  else {
    scriptures.push({ detail: scripture,
        completed: false });
    renderScriptures(scriptures);
  }
    
}

function removeTask(scriptureElement) {
  scriptures = scriptures.filter(
    (scripture) => scripture.detail != scriptureElement.childNodes[1].innerText
  );
  scriptureElement.remove();
}

function completeTask(scriptureElement) {
  const taskIndex = scriptures.findIndex(
    (scripture) => scripture.detail === scriptureElement.childNodes[1].innerText
  );
  scriptures[taskIndex].completed = scriptures[taskIndex].completed ? false : true;
  scriptureElement.classList.toggle("strike");
  console.log(scriptures);
}

function manageTasks(e) {
  // did they click the delete or complete icon?
  console.log(e.target);
  const parent = e.target.closest("li");
  if (e.target.dataset.function === "delete") {
    removeTask(parent);
  }
  if (e.target.dataset.function === "complete") {
    completeTask(parent);
  }
}

document.querySelector("#button").addEventListener("click", newTask);
document.querySelector("#list").addEventListener("click", manageTasks);

renderScriptures(scriptures);

// const list = document.querySelector("#list");
// const input = document.querySelector("#favchap");
// const button = document.querySelector("#button");

// button.addEventListener('click', () => {
//     const scripture = input.value;
//     input.value = "";
//     if (scripture === "") {

//         alert("You need to enter a scripture");
//     }
//     else {
//         const listItem = document.createElement('li');
//         const listText = document.createElement('span');
//         const listBtn = document.createElement('button');
//         listItem.appendChild(listText);
//         listText.textContent = scripture;
//         listItem.appendChild(listBtn);
//         listBtn.textContent = "❌";
//         list.appendChild(listItem);

//         listBtn.addEventListener('click', () => {
//         list.removeChild(listItem);
//         });
//         input.focus();
//     }
// });
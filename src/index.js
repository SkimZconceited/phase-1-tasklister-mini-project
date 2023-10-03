document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');

  form.addEventListener('submit', (e) => e.preventDefault());

  let txtBox = document.querySelector('input[type = "text"]');
  let btnSub = document.querySelector('input[type = "submit"]');
  let list = document.getElementById('tasks');

  function listAppending() {
    let li = document.createElement('li');
    li.textContent = txtBox.value;
    list.appendChild(li);
  };

  btnSub.addEventListener('click', listAppending);
});

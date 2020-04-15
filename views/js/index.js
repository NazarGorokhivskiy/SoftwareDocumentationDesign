// Utils
const getById = (id) => document.getElementById(id);

let allAgents = [];
let isInEditMode = false;

// Main elements
let addButton = getById("add-button");

const agentsListContainer = getById("agents-list");

// Form input elements
const first_nameInput = getById("first_name");
const last_nameInput = getById("last_name");
const positionInput = getById("position");
const emailInput = getById("email");
const startDatePickerInput = new Pikaday({
  field: getById("start_date"),
  format: "YYYY-MM-DD",
});

const renderItem = (values) => {
  return `
  <li class="agent-item" id="${values.id}">
    <div class="field">${values.first_name}</div>
    <div class="field">${values.last_name}</div>
    <div class="field">${values.position}</div>
    <div class="field">${values.start_date}</div>
    <div class="field">${values.email}</div>
    <button class="filed-edit" onClick="onItemEditClick('${values.id}')">Edit</button>
    <button class="filed-delete" onClick="onItemDeleteClick('${values.id}')">Delete</button>
  </li>
  `;
};

const clearInputs = () => {
  first_nameInput.value = "";
  last_nameInput.value = "";
  positionInput.value = "";
  emailInput.value = "";
  startDatePickerInput.setDate(null);
};

const clearContainer = () => {
  agentsListContainer.innerHTML = "";
};

const renderAllItems = async () => {
  clearContainer();

  const agents = await Api.fetchAllAgents();

  agents.sort((prevAgent, agent) =>
    moment(prevAgent.start_date) > moment(agent.start_date) ? 1 : -1
  );

  agents.forEach((agent) => {
    agentsListContainer.insertAdjacentHTML("afterbegin", renderItem(agent));
  });
};

const switchEditAddMode = (isEdit, id) => {
  addButton.innerHTML = isEdit ? "Edit" : "Add";
  isInEditMode = isEdit;

  const updatedButton = addButton.cloneNode(true);
  addButton.parentNode.replaceChild(updatedButton, addButton);
  addButton = updatedButton;

  addButton.addEventListener(
    "click",
    isEdit ? () => onSubmitEditClicked(id) : onAddItemClick
  );
};

const onItemEditClick = (id) => {
  const foundAgent = allAgents.find((agent) => +id === +agent.id);

  first_nameInput.value = foundAgent.first_name;
  last_nameInput.value = foundAgent.last_name;
  positionInput.value = foundAgent.position;
  startDatePickerInput.value = foundAgent.start_date;
  emailInput.value = foundAgent.email;

  switchEditAddMode(true, id);
};

const onItemDeleteClick = (id) => {
  Api.deleteAgent(id);

  renderAllItems();
};

const onAddItemClick = () => {
  const item = {
    first_name: first_nameInput.value,
    last_name: last_nameInput.value,
    position: positionInput.value,
    start_date: startDatePickerInput.toString(),
    email: emailInput.value,
  };

  Api.uploadAgent(item);

  clearInputs();

  renderAllItems();
};

const onSubmitEditClicked = (id) => {
  const updatedItem = {
    first_name: first_nameInput.value,
    last_name: last_nameInput.value,
    position: positionInput.value,
    start_date: startDatePickerInput.toString(),
    email: emailInput.value,
  };

  Api.editAgent(id, updatedItem);

  clearInputs();

  renderAllItems();

  switchEditAddMode(false);
};

addButton.addEventListener("click", onAddItemClick);
renderAllItems();

document.addEventListener("DOMContentLoaded", () => {
  const submitForm = document.querySelector("#add-instructor");
  submitForm.addEventListener("submit", handleSubmitForm);

  const deleteAll = document.querySelector("#delete-all");
  deleteAll.addEventListener("click", handleDeleteAll);
});

const handleDeleteAll = function () {
  const instructorList = document.querySelector("#list");
  instructorList.innerHTML = "";
};

const handleSubmitForm = function (event) {
  event.preventDefault();
  const newInstructor = createNewInstructor(event.target);
  const instructorListElement = newInstructor.makeInstructorListElement(
    ["h2", "h2", "h3", "h3"],
    "list-item",
    "list-entry"
  );
  const instructorList = document.querySelector("#list");
  instructorList.appendChild(instructorListElement);
  event.target.reset();
};

const createNewInstructor = function (form_input) {
  const instructor = new Instructor(
    form_input.first_name.value,
    form_input.last_name.value,
    form_input.interesting_fact.value,
    form_input.likelihood.value
  );
  return instructor;
};

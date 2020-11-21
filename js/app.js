document.addEventListener("DOMContentLoaded", () => {
  const submitForm = document.querySelector("#add-instructor");
  submitForm.addEventListener("submit", handleSubmitForm);

  const deleteAll = document.querySelector("#delete-all");
  deleteAll.addEventListener("click", handleDeleteAll);

  const deleteInstructor = document.querySelector("#list");
  deleteInstructor.addEventListener("click", handleDeleteInstructor);
});

const handleDeleteAll = function () {
  const instructorList = document.querySelector("#list");
  instructorList.innerHTML = "";
};

const handleSubmitForm = function (event) {
  event.preventDefault();
  const instructorCount = document.querySelector("#list").childElementCount;
  const newInstructor = createNewInstructor(event.target);
  const instructorListElement = newInstructor.makeInstructorListElement(
    instructorCount,
    [
      "First Name:",
      "Last Name:",
      "Interesting Fact:",
      "Likelihood of making it to the end of the course: ",
    ],
    ["h2", "h2", "h3", "h3"],
    "list-item",
    "list-entry"
  );
  const instructorList = document.querySelector("#list");
  instructorList.appendChild(instructorListElement);
  event.target.reset();
};

const handleDeleteInstructor = function (event) {
  const instructorToRemove = document.querySelector(`#${event.target.value}`);
  instructorToRemove.remove();
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

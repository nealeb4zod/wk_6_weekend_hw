const Instructor = function (
  first_name,
  last_name,
  interesting_fact,
  likelihood
) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.interesting_fact = interesting_fact;
  this.likelihood = likelihood;
};

Instructor.prototype.makeInstructorListElement = function (
  elements,
  liClass = null,
  elementsClass = null
) {
  const instructorListItem = this.makeListElement(liClass);

  Object.entries(this).forEach((name, index) => {
    name[0] = document.createElement(elements[index]);
    name[0].textContent = name[1];
    if (elementsClass != null) {
      name[0].classList.add(elementsClass);
    }
    instructorListItem.appendChild(name[0]);
  });
  return instructorListItem;
};
Instructor.prototype.makeListElement = function (liClass) {
  const instructorListItem = document.createElement("li");
  if (liClass != null) {
    instructorListItem.classList.add(liClass);
  }
  return instructorListItem;
};
// Instructor.prototype.deleteInstructor = function () {};

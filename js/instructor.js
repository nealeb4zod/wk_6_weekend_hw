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
  instructorCount,
  elementLabelsArray,
  elementsArray,
  liClass = null,
  elementsClass = null
) {
  const instructorId = instructorCount + 1;
  const instructorListItem = this.makeListElement(liClass, instructorId);

  Object.entries(this).forEach((name, index) => {
    let elementName = name[0];
    const elementText = name[1];
    elementName = document.createElement(elementsArray[index]);
    elementName.textContent = elementLabelsArray[index] + " " + elementText;
    if (elementsClass != null) {
      elementName.classList.add(elementsClass);
    }
    instructorListItem.appendChild(elementName);
  });
  const instructorDeleteButton = this.makeInstructorDeleteButton(instructorId);
  instructorListItem.append(instructorDeleteButton);
  return instructorListItem;
};

Instructor.prototype.makeListElement = function (liClass, instructorId) {
  const instructorListItem = document.createElement("li");
  if (liClass != null) {
    instructorListItem.classList.add(liClass);
  }
  instructorListItem.setAttribute("id", `instructor-${instructorId}`);
  return instructorListItem;
};
Instructor.prototype.makeInstructorDeleteButton = function (instructorId) {
  const instructorDeleteButton = document.createElement("button");
  instructorDeleteButton.textContent = "Remove";
  const deleteButtonId = `delete-instructor-${instructorId}`;
  instructorDeleteButton.setAttribute("id", deleteButtonId);
  instructorDeleteButton.setAttribute("value", `instructor-${instructorId}`);
  instructorDeleteButton.classList.add("button");

  return instructorDeleteButton;
};

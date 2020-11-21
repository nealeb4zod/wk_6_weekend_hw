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
  //  Create an instrutorID based on the current child elements of #list
  const instructorId = instructorCount + 1;

  // Create the <li> that the other will append to.
  const instructorListItem = this.makeListElement(liClass, instructorId);

  // For each of the instructors properties, create an element with the
  // corresponding tag from elementsArray.  Then add an appropriate class.

  // I'd like to extract this out to another function, but I'm not sure how to.
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

  // Create the delete button for this particular instructor
  const instructorDeleteButton = this.makeInstructorDeleteButton(instructorId);
  instructorListItem.append(instructorDeleteButton);
  return instructorListItem;
};

// Ideally the following functions would be private and not callable outside of here

//  Create the initial <li> that the other element hang off.button
// Give it a unique id based so we can delete it later
Instructor.prototype.makeListElement = function (liClass, instructorId) {
  const instructorListItem = document.createElement("li");
  if (liClass != null) {
    instructorListItem.classList.add(liClass);
  }
  instructorListItem.setAttribute("id", `instructor-${instructorId}`);
  return instructorListItem;
};

//  Create the delete button for the individual instructor
Instructor.prototype.makeInstructorDeleteButton = function (instructorId) {
  const instructorDeleteButton = document.createElement("button");
  instructorDeleteButton.textContent = "Remove";
  const deleteButtonId = `delete-instructor-${instructorId}`;
  instructorDeleteButton.setAttribute("id", deleteButtonId);
  // We use this to delete the instructor
  instructorDeleteButton.setAttribute("value", `instructor-${instructorId}`);
  instructorDeleteButton.classList.add("button");

  return instructorDeleteButton;
};

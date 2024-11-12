document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById('resumeForm');
    if (form) {
        form.addEventListener('submit', function (event) {
            var _a;
            event.preventDefault();
            var profilePictureInput = document.getElementById('profilePicture');
            var nameElement = document.getElementById('name');
            var emailElement = document.getElementById('email');
            var phoneElement = document.getElementById('phone');
            var educationElement = document.getElementById('education');
            var experienceElement = document.getElementById('experience');
            var skillElement = document.getElementById('skills');
            // Log the elements to check if they are correctly selected
            console.log('nameElement:', nameElement);
            console.log('emailElement:', emailElement);
            console.log('phoneElement:', phoneElement);
            console.log('educationElement:', educationElement);
            console.log('experienceElement:', experienceElement);
            console.log('skillElement:', skillElement);
            if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement) {
                var name_1 = nameElement.value.trim();
                var email = emailElement.value.trim();
                var phone = phoneElement.value.trim();
                var education = educationElement.value.trim();
                var experience = experienceElement.value.trim();
                var skill = skillElement.value.trim();
                // picture Elements
                var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
                var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
                var resumeOutput = "\n                    <h2>Resume</h2>\n                    ".concat(profilePictureURL ? "<img src=".concat(profilePictureURL, " alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n                    <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\">").concat(name_1, "</span></p>\n                    <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\">").concat(email, "</span></p>\n                    <p><strong>Phone:</strong> <span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span></p>\n                    <h3>Education</h3>\n                    <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n                    <h3>Experience</h3>\n                    <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n                    <h3>Skills</h3>\n                    <p id=\"edit-skill\" class=\"editable\">").concat(skill, "</p>\n                ");
                var resumeOutputElement = document.getElementById('resumeOutput');
                if (resumeOutputElement) {
                    resumeOutputElement.innerHTML = resumeOutput;
                    makeEditable();
                }
            }
            else {
                console.error('One or more form elements are missing');
            }
        });
    }
});
// <-- Make sure this closing bracket is here
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // Replace content with input
            if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                var saveContent_1 = function () {
                    currentElement.textContent = input_1.value.trim();
                    currentElement.style.display = 'inline';
                    input_1.remove();
                };
                input_1.addEventListener('blur', saveContent_1);
                input_1.addEventListener('keydown', function (e) {
                    if (e.key === 'Enter')
                        saveContent_1();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}

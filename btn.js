document.querySelector('#inputForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const imageValue = document.querySelector('#imageInput').value;
    const titleValue = document.querySelector('#titleInput').value;
    const descriptionValue = document.querySelector('#descriptionInput').value;
    const briefdescriptionValue = document.querySelector('#briefdescriptionInput').value;

    if (imageInput.files.length > 0) {
        const imageFile = imageInput.files[0];
        const imageURL = URL.createObjectURL(imageFile);

    const insertedComponent = document.createElement('product-card');
    var myDiv = document.getElementById('main-div');

    insertedComponent.setAttribute('image', imageURL);
    insertedComponent.setAttribute('title', titleValue);
    insertedComponent.setAttribute('description', descriptionValue);
    insertedComponent.setAttribute('briefdescription', briefdescriptionValue);

    myDiv.appendChild(insertedComponent);
    }
});
// script linked to a button when on submit of a form takes all the attributes and creates element (web comp)
//assigns the attributes to the element created 
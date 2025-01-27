
document.getElementById('profileForm').addEventListener('submit', function (event) {
    event.preventDefault();


    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;
    const projectLinks = document.getElementById('projectLinks').value;
    const description = document.getElementById('description').value;
    const profileImage = document.getElementById('profileImage').files[0];

    document.getElementById('displayUsername').textContent = username;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayDepartment').textContent = department;
    document.getElementById('displayProjectLinks').textContent = projectLinks || 'Not provided';
    document.getElementById('displayDescription').textContent = description;

    if (profileImage) {const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profilePic').src = e.target.result;
        };
        reader.readAsDataURL(profileImage);
    } else {
        document.getElementById('profilePic').src = ''; 
    }

    document.getElementById('profileContainer').style.display = 'block';
});
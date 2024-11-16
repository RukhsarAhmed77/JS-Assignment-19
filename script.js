function addPost() {
    var postContent = document.getElementById("postContent").value;
    var imageUpload = document.getElementById("imageUpload").files[0];

    if (postContent === "" && !imageUpload) {
        alert("Please write something or upload an image!");
        return;
    }

    var postsContainer = document.getElementById("postsContainer");
    var newPost = "<div class='post'>";
    if (postContent !== "") {
        newPost += "<p class='post-content'>" + postContent + "</p>";
    }
    if (imageUpload) {
        var imageURL = URL.createObjectURL(imageUpload);
        newPost += "<img class='post-image' src='" + imageURL + "' alt='Post Image'>";
    }
    newPost += "</div>";
    postsContainer.innerHTML = newPost + postsContainer.innerHTML;

    document.getElementById("postContent").value = "";
    document.getElementById("imageUpload").value = "";
}

function clearAllPosts() {
    document.getElementById("postsContainer").innerHTML = "";
}

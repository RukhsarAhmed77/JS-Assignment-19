function addPost() {
    var postContent = document.getElementById("postContent").value;

    if (postContent === "") {
        alert("Please write something!");
        return;
    }

    var postsContainer = document.getElementById("postsContainer");

    postsContainer.innerHTML = 
        "<div class='post'>" + 
            "<p class='post-content'>" + postContent + "</p>" + 
        "</div>" + postsContainer.innerHTML;
    document.getElementById("postContent").value = "";
}

function clearAllPosts() {
    var postsContainer = document.getElementById("postsContainer");
    postsContainer.innerHTML = "";
}

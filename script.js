console.log("We are inside new Reddit");

const new_reddit = "https://www.reddit.com";
const old_reddit = "https://old.reddit.com";
const url = document.URL;
const path_to_resource = url.substring(new_reddit.length);
window.location.replace(old_reddit + path_to_resource);


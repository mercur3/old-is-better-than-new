console.log("We are inside new Reddit");

const config = {
	redirect_polls: false,
};
const storage = browser.storage.local;
const new_reddit = "https://www.reddit.com";
const old_reddit = "https://old.reddit.com";
const poll = "/poll";

async function main() {
	let stored_config = await storage.get();
	console.debug(stored_config);

	let url = document.URL;
	let resource_path = url.substring(new_reddit.length);
	if (resource_path.startsWith(poll)) {
		if (config.redirect_polls) {
			window.location.replace(old_reddit + resource_path);
		}
	}
	else {
		window.location.replace(old_reddit + resource_path);
	}
}

main();
storage.onChanged.addListener(val => {
	console.debug("state changed ", val);
	config.redirect_polls = val.redirect_polls.newValue;
	main();
});




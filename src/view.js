const config = {
	redirect_polls: false,
};
const storage = browser.storage.local;

document.addEventListener("DOMContentLoaded", async () => {
	let polls = document.getElementById("polls");

	// the view was initialized
	if (polls) {
		let stored_config = await storage.get();
		// the storage is not empty
		if (stored_config) {
			config.redirect_polls = stored_config.redirect_polls;
			polls.checked = config.redirect_polls;
		}

		polls.addEventListener("click", () => {
			config.redirect_polls = polls.checked;

			storage
				.set(config)
				.then(
					ok => {
                        console.debug("New configurations were stored");
					},
					err => console.error("Error when storing new config object ", err)
				);
		});
	}
});

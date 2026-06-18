const BASE_URL = "https://api.github.com";

export async function searchUsers(query) {
	if (!query || !query.trim()) {
		return [];
	}
	const response = await fetch(`${BASE_URL}/search/users?q=${encodeURIComponent(query)}&per_page=9`);
	if (!response.ok) {
		throw new Error("GitHub search failed");
	}
	const data = await response.json();
	return data.items || [];
}

export async function getUserDetails(login) {
	const response = await fetch(`${BASE_URL}/users/${encodeURIComponent(login)}`);
	if (!response.ok) {
		throw new Error("Could not load user details");
	}
	return response.json();
}

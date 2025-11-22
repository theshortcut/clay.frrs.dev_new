// Media catalog data - easy to update!
// Just edit the arrays below to update what you're listening to, reading, and playing

export interface MediaItem {
	title: string;
	artist?: string; // For music
	author?: string; // For books
	developer?: string; // For games
	cover?: string; // Image URL
	link?: string; // External link
	notes?: string; // Personal notes
	status?: string; // e.g., "listening", "finished", "reading", "playing"
}

export interface MediaCatalog {
	music: MediaItem[];
	books: MediaItem[];
	games: MediaItem[];
	lastUpdated: string;
}

// 🎵 Update this section with music you're currently listening to
const music: MediaItem[] = [
	{
		title: 'Album Name',
		artist: 'Artist Name',
		cover: '', // Optional: album art URL
		link: '', // Optional: Spotify/Apple Music link
		notes: 'Why you like it or what you think',
		status: 'on repeat'
	}
	// Add more music here
];

// 📚 Update this section with books you've recently read
const books: MediaItem[] = [
	{
		title: 'Book Title',
		author: 'Author Name',
		cover: '', // Optional: book cover URL
		link: '', // Optional: Goodreads link
		notes: 'Your thoughts on the book',
		status: 'reading' // or 'finished'
	}
	// Add more books here
];

// 🎮 Update this section with games you're playing
const games: MediaItem[] = [
	{
		title: 'Game Title',
		developer: 'Studio/Developer',
		cover: '', // Optional: game cover URL
		link: '', // Optional: Steam/store link
		notes: 'What you think so far',
		status: 'playing'
	}
	// Add more games here
];

export const mediaCatalog: MediaCatalog = {
	music,
	books,
	games,
	lastUpdated: '2025-01-22' // Update this when you make changes
};

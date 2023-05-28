export const load = async ({ fetch, params }) => {
	const user = params?.user;
	const theme = 'default';
	const links = [
		{
			name: 'Home',
			href: 'https://skeleton.labs.ai'
		},
		{
			name: 'About',
			href: 'https://skeleton.labs.ai/about'
		},
		{
			name: 'Contact',
			href: 'https://skeleton.labs.ai/contact'
		}
	];
	const layoutData = {
		title: 'Hello World',
		links: links,
		user: {
			name: 'Skeleton',
			avatar: 'https://avatars.githubusercontent.com/u/768070?s=200&v=4',
			href: 'https://skeleton.labs.ai'
		}
	};

	return {
		user,
		theme,
		layoutData
	};
};

export const projects = [
	{
		slug: 'utah-back-country-pilots-association',
		name: 'Utah Back Country Pilots Association',
		url: 'https://utahbackcountrypilots.org',
		displayUrl: 'utahbackcountrypilots.org',
		heroImage: '/images/home_page-2.jpg',
		heroAlt: 'UtahBackCountryPilots.org Home Page',
		summary:
			"The premier destination for pilots to find and share information on hundreds of remote Utah airstrips. Built in 2017 and maintained ever since — it's basically family at this point.",
		description: `UtahBackCountryPilots.org is the premier destination for pilots to obtain and share information on hundreds of remote Utah airstrips. As of September 2022, the site boasts more than 1,100 registered users, 400 user-submitted airstrip reports, and receives roughly 10,000 pageviews per month.

The most critical feature is the ability for pilots to submit reports about the condition of airstrips they visit. Users can rate the condition and safety level of different attributes of each airstrip, and can attach pictures from their visit.

The airstrip map geographically plots nearly 200 airstrips using the Bing Maps API. Each dot's color represents the ownership, open/closed status, and safety information about that strip. Users can hover (or tap on mobile) to get a quick overview of any airstrip.

Users can also access detailed information for each airstrip including runway dimensions and orientation, field elevation, appropriate radio frequencies, and a brief description of the airstrip and surrounding area. Each detail page also includes a VFR sectional chart and a Bing Maps satellite view.`,
		stats: [
			{ value: '1,100+', label: 'Registered Users' },
			{ value: '400+', label: 'Airstrip Reports' },
			{ value: '~10k', label: 'Pageviews / Month' },
			{ value: '~200', label: 'Airstrips Mapped' }
		],
		features: [
			'Custom Bing Maps integration with color-coded airstrip status',
			'User-submitted airstrip condition reports with photos',
			'Payment processing via PayPal and Stripe',
			'Publicly-available API endpoints',
			'Email notifications and social features',
			'VFR sectional charts and satellite views per airstrip'
		],
		tags: ['Laravel 9.x', 'MySQL', 'Bing Maps API', 'Stripe', 'PayPal', 'VPS-hosted'],
		images: [
			{ src: '/images/user_reports.jpg', alt: 'UBCP airstrip report' },
			{ src: '/images/airstrip_map.jpg', alt: 'UBCP airstrip map' },
			{ src: '/images/airstrip_details.jpg', alt: 'Mexican Mountain airstrip details page' }
		]
	},
	{
		slug: 'searchfor-us',
		name: 'SearchFor.us',
		url: null,
		displayUrl: 'searchfor.us',
		domainExpired: true,
		heroImage: '/images/home_page.jpg',
		heroAlt: 'Home Page of SearchFor.us',
		summary:
			'An emergency tool built in a single Saturday to help coordinate hundreds of volunteers searching for missing hiker Shelby Campbell. GPS tracks from Strava and other apps were overlaid onto one map so the group could see exactly which areas still needed coverage.',
		description: `On September 8th, 2020, 29-year-old Shelby Campbell went missing on a hike in the mountains near North Ogden, Utah. Several hundred volunteers quickly began searching for her and organized a Facebook group to coordinate. Unfortunately, Facebook groups aren't a great way to coordinate large groups of people geographically — individuals began posting Strava screenshots, but seeing one person's hike at a time makes it impossible to tell which areas the group as a whole has and hasn't covered.

The idea was simple: overlay everyone's searches onto one big map. Make it clear at a glance which parts of the mountain had been searched well, and which had not.

This was a joint project between my good friend Brian Allen and myself. Over the course of just a few hours on a single Saturday, we bought a domain, provisioned a VPS, got an SSL certificate, set up a git repository with CI/CD, and built the site. We deliberately skipped a database entirely — GPX and XML files are written straight to disk — shaving seconds wherever we could.

Bing Maps has native support for overlaying GPX and XML files directly onto a map, which made the output side exceptionally easy. Between September and November 2020, the site saw 10,000 page views and a single-day peak of 650 unique users.`,
		stats: [
			{ value: '1 day', label: 'Build Time' },
			{ value: '10k', label: 'Page Views' },
			{ value: '650', label: 'Peak Daily Users' },
			{ value: '2', label: 'Developers' }
		],
		features: [
			'GPX and XML file upload from Strava and other hike-tracking apps',
			'Native Bing Maps GPX/XML overlay — no preprocessing needed',
			"HTML5 Geolocation API to show the user's precise position on the map",
			'No database — files written straight to disk for maximum speed',
			'Domain, VPS, SSL, CI/CD, and full app shipped in a single day'
		],
		tags: ['Laravel 7.x', 'Bing Maps API', 'GPX/XML', 'HTML5 Geolocation', 'VPS'],
		images: []
	},
	{
		slug: 'crowdfund-congress',
		name: 'Crowdfund Congress',
		url: null,
		displayUrl: 'crowdfundcongress.com',
		domainExpired: true,
		heroImage: '/images/home_page-1.jpg',
		heroAlt: 'Home Page of CrowdfundCongress.com',
		summary:
			"A civic-tech crowdfunding platform that lets everyday people pool money to outbid special-interest groups and Super PACs on the issues that matter to them. Think Kickstarter, but instead of fidget spinners, you're buying politicians' attention.",
		description: `CrowdfundCongress.com was designed to help non-billionaires pool their money and "outbid" special-interest groups and Super PACs on critical legislative issues. The idea was inspired by the dumpster fire that was the failed GoFundMe campaign to build the border wall.

Users could suggest political causes they wanted to see funded. Once a cause was created, anyone could donate toward it via credit card. Each political cause had a list of active House and Senate bills that the raised money would be used to support or suppress.

The platform handled email notifications to keep donors updated when new campaigns launched or when there were spending updates on causes they'd contributed to. It's a pet project I hope to return to one day — the problem it's trying to solve hasn't gone away.`,
		stats: [],
		features: [
			'Users suggest political causes and donate toward them via credit card',
			'Each cause linked to active House and Senate bills',
			'Raised funds used to support or suppress specific legislation',
			'Payment processing via Stripe',
			'Email notifications for new campaigns and spending updates'
		],
		tags: ['Laravel 7.x', 'MySQL', 'Stripe', 'Civic Tech'],
		images: [
			{ src: '/images/issue_details-1.jpg', alt: 'Issue details page' }
		]
	},
	{
		slug: 'weber-fridge',
		name: 'Weber Fridge',
		url: 'https://weberfridge.org',
		displayUrl: 'weberfridge.org',
		heroImage: '/images/weber_fridge_homepage.png',
		heroAlt: 'Weber Fridge — Free Food, No Stigma',
		summary:
			'A community website for a mutual-aid refrigerator in Ogden, Utah — open 24/7, no questions asked. Built to help neighbors find the fridge, get involved, and stay connected to community events.',
		description: `Weber Fridge is a community-run, always-open refrigerator and pantry located at 301 E 28th Street in Ogden, Utah. The model is simple: take what you need, leave what you can. No applications, no eligibility requirements, no means testing. Access to food is a basic human right — not something anyone should have to earn or feel ashamed about.

The site serves as the public face of the fridge: telling visitors where to find it, how to donate or volunteer, and what events are coming up. Community events include free soup-and-sandwich days, pancake breakfasts, and really-really-free markets — all open to everyone, always.

The fridge is hosted by community partner Urban Prairie Agriculture, kept stocked with fresh locally grown produce year-round. Additional partners include Lost Texan BBQ and USARA Ogden (Utah Support Advocates for Recovery Awareness).

Volunteer coordination runs through a Signal group chat, keeping things lightweight and accessible for the people who make the fridge run.`,
		stats: [
			{ value: '24/7', label: 'Always Open' },
			{ value: '301', label: 'E 28th St, Ogden' },
			{ value: '3+', label: 'Community Partners' },
			{ value: '0', label: 'Questions Asked' }
		],
		features: [
			'Events calendar for community meals and free markets',
			'Get Involved page for volunteers and food donors',
			'Supporters directory showcasing community partners',
			'Embedded map and address for easy fridge access',
			'Donation flow for financial contributions'
		],
		tags: ['SvelteKit 5', 'Vercel', 'CloudFlare', 'MailGun API'],
		images: []
	}
];

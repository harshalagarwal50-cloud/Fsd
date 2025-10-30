// src/data/blogPosts.js
const blogPosts = [
  {
    id: '1',
    title: 'Journey to the Stars',
    excerpt: 'An astronaut\'s thrilling adventure beyond Earth\'s orbit.',
    imageUrl: 'https://picsum.photos/id/1084/800/500', // Larger image for detail page
    thumbnailUrl: 'https://picsum.photos/id/1084/400/250', // Smaller image for cards
    content: 'Detailed account of the first manned mission to Proxima Centauri b. Discover the challenges, breakthroughs, and breathtaking views of an alien world. The mission spanned over two decades, utilizing advanced warp drive technology. Astronaut Commander Eva Rostova chronicled her experiences in daily logs, documenting everything from cosmic storms to the discovery of microscopic life forms. The discovery of liquid water on an exoplanet and the challenges of interstellar communication were among the mission\'s most significant findings. The crew\'s resilience in the face of the unknown pushed the boundaries of human endurance and scientific exploration. This mission truly redefined humanity\'s place in the cosmos, paving the way for future interstellar endeavors.'
  },
  {
    id: '2',
    title: 'Culinary Delights of Asia',
    excerpt: 'Exploring the rich flavors and traditions of Eastern cuisine.',
    imageUrl: 'https://picsum.photos/id/1060/800/500',
    thumbnailUrl: 'https://picsum.photos/id/1060/400/250',
    content: 'From the bustling street food markets of Bangkok to the serene tea ceremonies of Kyoto, this post dives deep into the heart of Asian gastronomy. Learn about the history of sushi, the spice routes of India, and the art of dim sum. Includes a special recipe for authentic Pad Thai. The fusion of ancient techniques with modern culinary innovations creates an unparalleled gastronomic experience. We explore the role of local ingredients, seasonal produce, and the philosophy behind each dish. Experience the vibrant culture through its diverse and delectable food.'
  },
  {
    id: '3',
    title: 'The Future of AI in Art',
    excerpt: 'How artificial intelligence is revolutionizing creative expression.',
    imageUrl: 'https://picsum.photos/id/1041/800/500',
    thumbnailUrl: 'https://picsum.photos/id/1041/400/250',
    content: 'Artificial intelligence is no longer just for data analysis; it\'s becoming a formidable tool in the hands of artists. Explore how AI algorithms are generating new masterpieces, assisting designers, and pushing the boundaries of what\'s possible in digital and traditional art forms. Discusses ethical considerations and the evolving definition of creativity. From GANs (Generative Adversarial Networks) that paint surreal landscapes to AI composers creating symphonies, the intersection of technology and creativity is fertile ground for innovation. We delve into the debates surrounding authorship, originality, and the evolving role of the human artist in an AI-powered world.'
  },
  {
    id: '4',
    title: 'Deep Sea Exploration',
    excerpt: 'Unveiling the mysteries of the ocean\'s darkest trenches.',
    imageUrl: 'https://picsum.photos/id/1045/800/500',
    thumbnailUrl: 'https://picsum.photos/id/1045/400/250',
    content: 'Dive with us into the abyssal zone, where sunlight never reaches and creatures of unimaginable forms thrive. This post highlights recent discoveries of hydrothermal vents, unique ecosystems, and the technological marvels that allow humans to explore these extreme environments. Learn about bioluminescent organisms and the critical role the deep sea plays in Earth\'s climate. The pressure is immense, the cold is biting, yet life persists in astounding forms, challenging our understanding of biology. Submersibles equipped with advanced sonar and cameras uncover previously unknown species and geological formations, revealing the planet\'s hidden wonders.'
  },
  {
    id: '5',
    title: 'The Hidden Gems of Ancient Rome',
    excerpt: 'Beyond the Colosseum: Discovering lesser-known wonders of the Eternal City.',
    imageUrl: 'https://picsum.photos/id/21/800/500',
    thumbnailUrl: 'https://picsum.photos/id/21/400/250',
    content: 'While the Colosseum and Roman Forum draw millions, Rome holds countless secrets beneath its bustling streets. This article uncovers forgotten temples, intricate catacombs, and stunning villas that offer a unique glimpse into the lives of ancient Romans. We explore the archaeological sites of Ostia Antica, the hidden crypts of the Capuchin friars, and the impressive Baths of Caracalla, revealing a side of Rome rarely seen by tourists. Each location tells a story of an empire that shaped the world, from its engineering marvels to its artistic achievements and daily life.'
  },
  {
    id: '6',
    title: 'Mastering the Art of Digital Photography',
    excerpt: 'Tips and tricks for capturing breathtaking images with your digital camera.',
    imageUrl: 'https://picsum.photos/id/250/800/500',
    thumbnailUrl: 'https://picsum.photos/id/250/400/250',
    content: 'From understanding aperture and shutter speed to composing compelling shots, digital photography offers endless creative possibilities. This guide covers essential techniques for beginners and advanced insights for seasoned photographers. Learn about the exposure triangle, mastering natural light, and post-processing workflows that can transform your images. We also delve into specialized genres like landscape, portrait, and macro photography, providing practical advice and inspiring examples to elevate your craft. Unleash your inner artist and start capturing the world in stunning detail.'
  },
  {
    id: '7',
    title: 'The Science Behind Sleep: Why We Need It',
    excerpt: 'Unraveling the mysteries of sleep and its crucial role in health and well-being.',
    imageUrl: 'https://picsum.photos/id/177/800/500',
    thumbnailUrl: 'https://picsum.photos/id/177/400/250',
    content: 'More than just a period of rest, sleep is a complex biological process vital for physical and mental restoration. This post explores the different stages of sleep, the hormones involved, and the devastating consequences of sleep deprivation. Discover how sleep impacts memory consolidation, immune function, and emotional regulation. We also offer practical tips for improving your sleep hygiene, from creating a conducive environment to developing healthy bedtime routines. Understanding the science of sleep is the first step towards a healthier, more productive life.'
  },
  {
    id: '8',
    title: 'Sustainable Living: Small Changes, Big Impact',
    excerpt: 'Practical ways to reduce your ecological footprint and live more sustainably.',
    imageUrl: 'https://picsum.photos/id/1018/800/500',
    thumbnailUrl: 'https://picsum.photos/id/1018/400/250',
    content: 'Making sustainable choices doesn\'t require radical lifestyle changes. This article outlines simple, actionable steps you can take today to contribute to a healthier planet. From reducing plastic consumption and conserving water to supporting local businesses and embracing minimalism, every effort counts. We discuss the benefits of a plant-based diet, composting kitchen waste, and choosing energy-efficient appliances. Learn how these small changes collectively lead to a significant positive impact on our environment, fostering a more mindful and eco-conscious way of life for everyone.'
  },
  {
    id: '9',
    title: 'Exploring Quantum Computing: The Next Frontier',
    excerpt: 'A beginner\'s guide to the mind-bending world of quantum mechanics and computation.',
    imageUrl: 'https://picsum.photos/id/201/800/500',
    thumbnailUrl: 'https://picsum.photos/id/201/400/250',
    content: 'Quantum computing promises to revolutionize fields from medicine to finance, but what exactly is it? This post demystifies concepts like superposition, entanglement, and qubits, explaining how they enable computers to solve problems far beyond the reach of classical machines. We discuss the potential applications, the challenges in building quantum computers, and the current state of research. Gain an introductory understanding of this cutting-edge technology and glimpse into a future where computational power knows no bounds. The quantum realm offers a paradigm shift in how we process information.'
  }
];

export default blogPosts;
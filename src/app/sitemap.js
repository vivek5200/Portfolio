export default function sitemap() {
  const url = 'https://vivekbendre.me';

  return [
    {
      url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
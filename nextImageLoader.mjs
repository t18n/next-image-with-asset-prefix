// A custom loader is needed to handle the CDN URLs
export default function cdnLoader({ src, width, quality }) {
  return `${src}?w=${width}&q=${quality || 75}`
}

export function setSEO(title: string, description: string) {
  if (typeof document === "undefined") return;
  try {
    document.title = title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute('content', description);
    } else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = description;
      document.head.appendChild(m);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', title);
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', description);
  } catch (e) {
    // silence failures in non-browser environments
    // eslint-disable-next-line no-console
    console.warn('setSEO failed', e);
  }
}

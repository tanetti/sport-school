import { SITE_NAME, DEFAULT_PAGE_TAGS, PAGE_TAGS } from '@/constants';

const TITLE_TAGS = document.querySelectorAll(
  'meta[itemprop="name"], meta[name="twitter:title"], meta[property="og:title"]'
);
const DESCRIPTION_TAGS = document.querySelectorAll(
  'meta[name="description"], meta[itemprop="description"], meta[name="twitter:description"], meta[property="og:description"]'
);

export const setPageTags = addLabel => {
  const { origin, pathname, href } = location;
  const canonicalPath = `${origin}${pathname !== '/' ? pathname : ''}`;

  const currentPageTags =
    PAGE_TAGS.find(({ path }) => path === pathname) || DEFAULT_PAGE_TAGS;

  const { title, description } = currentPageTags;
  const fullTitle = `${SITE_NAME}${title ? ` - ${title}` : ''}${
    addLabel ? ` - ${addLabel}` : ''
  }`;

  document.title = fullTitle;

  TITLE_TAGS.forEach(tag => tag.setAttribute('content', fullTitle));
  DESCRIPTION_TAGS.forEach(tag => tag.setAttribute('content', description));

  const ogUrlTag = document.querySelector('meta[property="og:url"]');
  if (ogUrlTag) ogUrlTag.setAttribute('content', href);

  const LinkTag = document.querySelector('link[rel="canonical"]');
  if (LinkTag) LinkTag.setAttribute('href', canonicalPath);
};

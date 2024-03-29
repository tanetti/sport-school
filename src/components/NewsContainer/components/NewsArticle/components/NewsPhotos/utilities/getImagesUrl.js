export const getImagesUrl = (photoCount, date, filter, index) => {
  if (!photoCount || !date || !filter) return [];

  const dateFolder = date.replaceAll('.', '-');
  const imagesUrl = [];

  for (let i = 1; i <= photoCount; i += 1) {
    imagesUrl.push(
      `/news/${filter}/${dateFolder}${index ? `_${index}` : ''}/${i
        .toString()
        .padStart(2, '0')}.jpg`
    );
  }

  return imagesUrl;
};

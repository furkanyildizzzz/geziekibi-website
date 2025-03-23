const resizeImage = (
  originalUrl: string,
  width: number,
  height: number
): string => {
  const transformation = `c_fill,g_auto,w_${width},h_${height}`;
  const uploadIndex = originalUrl.indexOf("/upload/");

  if (!originalUrl.includes("res.cloudinary.com") || uploadIndex === -1) {
    return originalUrl;
  }

  // Insert the transformation after '/upload/'
  const beforeUpload = originalUrl.slice(0, uploadIndex + 8); // Includes '/upload/'
  const afterUpload = originalUrl.slice(uploadIndex + 8);

  return `${beforeUpload}${transformation}/${afterUpload}`;

  return "";
};

const GetCloudinaryPdfFileFirstPageAsImange = (originalUrl: string) => {
  const transformation = "f_jpg/pg_1";
  const uploadIndex = originalUrl.indexOf("/upload/");

  if (uploadIndex === -1) {
    return "";
  }

  // Insert the transformation after '/upload/'
  const beforeUpload = originalUrl.slice(0, uploadIndex + 8); // Includes '/upload/'
  const afterUpload = originalUrl.slice(uploadIndex + 8);

  return `${beforeUpload}${transformation}/${afterUpload}`;
};

const imageFunctions = { resizeImage, GetCloudinaryPdfFileFirstPageAsImange };
export default imageFunctions;

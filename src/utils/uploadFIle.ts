export const createUploadImageHandler =
  (onUploadImage: (base64: string) => void) => (file: any) => {
    // TODO image type
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener('load', () => {
        onUploadImage(String(reader.result));
      });
    } else {
      console.warn('upload file type not support');
    }
  };

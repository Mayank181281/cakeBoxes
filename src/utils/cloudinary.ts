import axios from 'axios';

export interface CloudinaryResponse {
  secure_url: string;
  public_id: string;
  [key: string]: any;
}

export const uploadImageToCloudinary = async (file: File): Promise<string> => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    throw new Error('Cloudinary configuration is missing. Please check your environment variables.');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', uploadPreset);
  formData.append('cloud_name', cloudName);

  try {
    const response = await axios.post<CloudinaryResponse>(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return response.data.secure_url;
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error);
    throw new Error('Failed to upload image');
  }
};

export const uploadMultipleImagesToCloudinary = async (files: File[]): Promise<string[]> => {
  const uploadPromises = files.map(file => uploadImageToCloudinary(file));
  return Promise.all(uploadPromises);
};

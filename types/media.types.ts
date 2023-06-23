export enum types {
    VIDEO = 'video/mp4',
    IMAGE_PNG = 'image/png',
    IMAGE_JPEG = 'image/jpeg'
}

export type Video = {
    type: types.VIDEO;
};

export type Image = {
    type: types.IMAGE_PNG | types.IMAGE_JPEG;
};

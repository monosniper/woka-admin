import simpleRestProvider from "ra-data-simple-rest";
import { withLifecycleCallbacks } from 'react-admin';

export const dataProvider = withLifecycleCallbacks(simpleRestProvider(
  import.meta.env.VITE_SIMPLE_REST_URL
), [
    {
    resource: 'products',
    beforeCreate: async (params) => {
        const data = params.data
        const base64 = await convertFileToBase64(data.image)

        return {
            data: {
                ...data,
                image: {
                    base64,
                    title: data.image.title
                }
            }
        }
    },
    beforeUpdate: async (params) => {
        const data = params.data
        const base64 = await convertFileToBase64(data.image)

        return {
            ...params,
            data: {
                ...params.data,
                image: {
                    base64,
                    title: data.image.title
                }
            }
        }
    }
}
]);

const convertFileToBase64 = file =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(file.rawFile);
    });


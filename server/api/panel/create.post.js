import { readFiles } from 'h3-formidable'
import FormData from 'form-data';
import fs from 'fs';

export default defineEventHandler(async (event) => {
    const { public: { apiBase } } = useRuntimeConfig();
    const token = getCookie(event, 'token')
    
    const { fields, files } = await readFiles(event, {
        includeFields: true,
    })

    try {
        let formData = new FormData();

        
        formData.append("documents", fs.createReadStream(files.documents[0].filepath));
        formData.append("name", fields.name[0]);
        formData.append("national", fields.national[0]);
        formData.append("email", fields.email[0]);
        formData.append("address", fields.address[0]);
        formData.append("cellphone", fields.cellphone[0]);
        formData.append("phone", fields.phone[0]);
        formData.append("shop_name", fields.shop_name[0]);
        formData.append("shop_type", fields.shop_type[0]);  
        formData.append("shop_phone", fields.shop_phone[0]);  
        formData.append("shop_address", fields.shop_address[0]);  
        formData.append("shop_city", fields.shop_city[0]);  
        formData.append("bank_sheba", fields.bank_sheba[0]);  
        formData.append("bank_name", fields.bank_name[0]);  
        

        const data = await $fetch(`${apiBase}/user/profile/create`, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        return data.data;
    } catch (error) {
        return error
    }
})
import api from '@/api/api';

class LangService {
    getLang() {
        return api.get('/lang', {}).then((response: any) => response.data.data);
    }
}

export default new LangService();
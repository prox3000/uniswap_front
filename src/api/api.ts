import http from "@/api/http-common";

class Api {
    constructor() {
        // this.axios = axios.create(configuration)

        // this.axios.interceptors.request.use(config => {
        //     store.commit("LOADING_STATUS", true);
        //     return config
        // })
        //
        // this.axios.interceptors.response.use(response => {
        //     store.commit("LOADING_STATUS", false);
        //     return response
        // })
    }

    get(url: string, params: any) {
        return http.get(url, params);
    }

    post(url: string, params: any): any {
        return http.post(url, params)
    }

    put(url: string, params: any): any {
        return http.put(url, params)
    }

    delete(url: string, params: any): any {
        return http.delete(url, params)
    }

    patch(url: string, params: any): any {
        return http.patch(url, params)
    }

    send (sender: any) {
        // const token = localStorage.getItem('token')
        // if (token) this.axios.defaults.headers.common['tab-adm-key'] = token
        try {
            const { data } = sender()

            return {
                data: data,
                error: null
            }
        } catch (err) {
            console.error('Ошибка', err)
            return err;
        }
    }
}

export default new Api()
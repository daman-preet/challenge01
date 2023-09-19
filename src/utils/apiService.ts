import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import Config from 'react-native-config';

const baseURL = Config.API_BASE_URL;

class ApiService {
  session: AxiosInstance;

  constructor() {
    this.session = axios.create({
      baseURL,
      withCredentials: false,
    });

    this.session.interceptors.request.use(async config => {
      return {
        ...config,
        headers: {
          ...config.headers,
          'X-Platform-Version': 'light',
          'Content-type': 'application/json',
        },
      };
    });
  }

  async options(url: string, params: Record<string, any> = {}) {
    return this.session.options(url, {params});
  }

  async get(url: string, params: Record<string, any> = {}) {
    return this.session.get(url, {params});
  }

  async post(
    url: string,
    payload: Record<string, any> = {},
    config?: AxiosRequestConfig<any>,
  ) {
    return this.session.post(url, payload, config);
  }

  async put(
    url: string,
    payload: Record<string, any> = {},
    config?: AxiosRequestConfig<any>,
  ) {
    return this.session.put(url, payload, config);
  }

  async patch(
    url: string,
    payload: Record<string, any> = {},
    config?: AxiosRequestConfig<any>,
  ) {
    return this.session.patch(url, payload, config);
  }

  async delete(url: string) {
    return this.session.delete(url);
  }
}

export default new ApiService();

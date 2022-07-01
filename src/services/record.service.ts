import {axiosService} from "./axios.service";

import {ITimezone} from "../interfaces";
import {urls} from "../constants";

export const recordService = {
    getAll: () => axiosService.get<ITimezone[]>(urls.timezones),
}

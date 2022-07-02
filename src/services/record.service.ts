import {axiosService} from "./axios.service";

import {IEvent, ITimezone} from "../interfaces";
import {urls} from "../constants";

export const recordService = {
    getAllTimezones: () => axiosService.get<ITimezone[]>(urls.timezones),
    getAll:()=>axiosService.get<IEvent[]>(urls.events)
}

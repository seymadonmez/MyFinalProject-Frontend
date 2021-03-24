import { ResponseModel } from "./responseModel";

export interface SingleResponseModel<T> extends ResponseModel{
    data:T //gelen tokenla beraber mesaj bilgisini de döndürmek istiyorum
}
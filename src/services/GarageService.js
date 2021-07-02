import HttpService from "./HttpService";


export default class GarageService{
    static baseURL() {
            return "http://localhost:4000/garagecreation";
    }

    static getGarages(){
        return new Promise(async (resolve, reject) => {
            HttpService.get(
                this.baseURL(),
                function (data){
                    resolve(data);
                },
                function (status){
                    reject(status);
                });
            });
    }

    static getGarage(id){
        return new Promise(async (resolve, reject) => {
            HttpService.get(`${GarageService.baseURL()}/${id}`,
                function (data) {
                    if (data !== undefined || Object.keys(data).length !== 0) {
                        resolve(data);
                    } else {
                        reject("Error while retrieving garage");
                    }
                },
                function (textStatus) {
                    reject(textStatus);
                });
        });
    }

    static deleteGarage(id) {
        return new Promise((resolve, reject) => {
            HttpService.remove(
                `${GarageService.baseURL()}/${id}`,
                function (data) {
                    if (data.message !== undefined) {
                        resolve(data.message);
                    } else {
                        reject("Error while deleting");
                    }
                },
                function (textStatus) {
                    reject(textStatus);
                }
            );
        });
    }

    static updateGarage(garage) {
        return new Promise((resolve, reject) => {
            HttpService.put(
                `${this.baseURL()}/${garage._id}`,
                garage,
                function (data) {
                    resolve(data);
                },
                function (textStatus) {
                    reject(textStatus);
                }
            );
        });
    }

    static createGarage(garage){
        garage.id = Math.floor(Math.random() * 100000000 + 1).toString();

        return new Promise((resolve, reject) => {
            HttpService.post(GarageService.baseURL(),
                garage,
                function (data){
                    resolve(data);
                },
                function (status){
                reject(status);
                });
        });
    }
}
import config from './../config';

export default class LocalStorageManager {

    get(field) {
        if(this._isExists()) {
            const data = JSON.parse(localStorage.getItem(config.localStorage.name));

            if(!field) return data;
            if(data[ field ]) return data[ field ];

            return undefined;
        }

        return undefined;
    }

    set() {

    }

    _isExists() {
        return localStorage.getItem(config.localStorage.name) ? true : false;
    }
}

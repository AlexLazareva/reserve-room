import config from './../config';

export default class LocalStorageManager {

    get() {

    }

    set() {

    }

    _isExists() {
        return localStorage.getItem(config.localStorage.name) ? true : false;
    }
}

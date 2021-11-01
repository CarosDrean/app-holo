import {Configuration} from "../app/models/configuration";

import configJSON from '../../configuration.json';

const config: Configuration = configJSON

export const environment = {
        production: false,
        api_master: config.apis.api_master,
        api_particular_results: config.apis.api_particular_result
};

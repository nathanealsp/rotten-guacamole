"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
require('dotenv').config();
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
const { BASE_URL, API_KEY } = process.env;
class API extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = BASE_URL;
    }
    getAllMovies(pageNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield this.get(`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}`);
            return [results];
        });
    }
    getMovieDetail(movieId) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = yield this.get(`/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
            return [results];
        });
    }
}
exports.API = API;

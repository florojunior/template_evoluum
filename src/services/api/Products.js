import Model from './model.js';

export default class Products extends Model {
    constructor() {
        super("/products");
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function paginateArray(collection, page, numItems) {
    if (page === void 0) { page = 1; }
    if (numItems === void 0) { numItems = 10; }
    if (!Array.isArray(collection)) {
        throw "Expect array and got " + typeof collection;
    }
    var currentPage = page;
    var perPage = numItems;
    var offset = (page - 1) * perPage;
    var paginatedItems = collection.slice(offset, offset + perPage);
    return {
        currentPage: currentPage,
        perPage: perPage,
        total: collection.length,
        totalPages: Math.ceil(collection.length / perPage),
        data: paginatedItems
    };
}
exports.paginateArray = paginateArray;

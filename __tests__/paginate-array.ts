import { paginateArray } from '../src/index';

describe('Paginate array', () => {
  type collectionType = { id: number };
  let collection;
  
    beforeEach(() => {
      collection = Array.apply(null, Array(20)).map((_, i) => ({id: i}));
    });

    // describe('By default', () => {
    //   it('should return 10 items', () => {
    //     const paginate = paginateArray<collectionType>(collection);
    //     expect(paginate.data.length).toEqual(10);
    //   });
  
    //   it('should return page 1', () => {
    //     const paginate = paginateArray<collectionType>(collection);
    //     expect(paginate.currentPage).toEqual(1);
    //   });
  
    //   it('should throw if the value is not an array', () => {
    //     expect(paginateArray.bind(null, 'string')).toThrow(/Expect array and got string/);
    //   });
  
    //   it('should retrun the correct values', () => {
    //     const paginate = paginateArray<collectionType>(collection);
    //     expect(paginate.currentPage).toEqual(1);
    //     expect(paginate.perPage).toEqual(10);
    //     expect(paginate.total).toEqual(20);
    //     expect(paginate.totalPages).toEqual(2);
    //     expect(paginate.data).toEqual(collection.slice(0, 10));
    //   });
    // });

    // it('should return 15 items', () => {
    //   const paginate = paginateArray<collectionType>(collection, 1, 15);
    //   expect(paginate.data.length).toEqual(15);
    // });

    it('should return the next 2 items', () => {
      const paginate = paginateArray<collectionType>(collection, 2, 2);
      expect(paginate.data[0].id).toEqual(2);
      expect(paginate.data[1].id).toEqual(3);
    });

});
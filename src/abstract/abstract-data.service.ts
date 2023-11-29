abstract class AbstractDataService<D> {
  #data: D;

  constructor(data: D) {
    this.#data = data;
  }

  getData(): D {
    return this.#data;
  }
}

export default AbstractDataService;

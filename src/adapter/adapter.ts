class Adapter {
  static adaptDataToStore<I extends { UNID: string }>(data: I[]): Record<string, I> {
    const adaptedData: Record<string, I> = {};

    data.forEach((item: I) => {
      adaptedData[item.UNID] = item;
    });

    return adaptedData;
  }
}

export default Adapter;

export default function createCompareFn<T extends object>(
  property: keyof T,
  sort_order: 'asc' | 'desc',
) {
  const compareFn = (a: T, b: T) => {
    const valProp1 = a[property];
    const valProp2 = b[property];
    const order = sort_order !== 'desc' ? 1 : -1;

    switch (typeof valProp1) {
      case 'number': {
        const valb = valProp1 as number;
        const result = valProp1 - valb;
        return result * order;
      }
      case 'string': {
        const valProp1String = valProp1 as string;
        const valProp2String = valProp2 as string;
        const result = valProp1String.localeCompare(valProp2String);
        return result * order;
      }
      default:
        return 0;
    }
  };
  return compareFn;
}

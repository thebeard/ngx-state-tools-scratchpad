import { BehaviorSubject } from 'rxjs';

export function StoredList<T>() {
  return (target: any, name: string): void => {
    const methodName = name.charAt(0).toUpperCase() + name.substring(1, name.length - 1),
      privatePropertyKey = `_${name.toString()}`,
      $ = new BehaviorSubject<T[]>([]),
      descriptor = {
        enumerable: false,
        configurable: false,
        writable: false
      },
      observableDescriptor = {
        get(this: any) {
          const bs: BehaviorSubject<T[]> = target[privatePropertyKey];
          return bs.asObservable();
        },
        enumerable: true,
        configurable: true
      },
      subjectDescriptor = { ...descriptor, value: $ },
      getterDescriptor = { ...descriptor, value: () => $.getValue() },
      setterDescriptor = {
        ...descriptor,
        value: (value: T[]) => {
          const list: T[] = $.getValue();
          list.push(...value);
          $.next(list);
        }
      };

    Object.defineProperties(target, {
      [name]: observableDescriptor,
      [privatePropertyKey]: subjectDescriptor,
      [`add${methodName}`]: setterDescriptor,
      [`get${methodName}`]: getterDescriptor
    });
  };
}

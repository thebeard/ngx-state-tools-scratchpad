import { BehaviorSubject, skip } from 'rxjs';

export function Store<T>() {
  return (target: any, name: string): void => {
    const methodName =
        name.charAt(0).toUpperCase() + name.substring(1, name.length - 1),
      privatePropertyKey = `_${name.toString()}`,
      $: BehaviorSubject<T> = new BehaviorSubject<any>(undefined),
      descriptor = {
        enumerable: false,
        configurable: false,
        writable: false,
      },
      observableDescriptor = {
        get(this: any) {
          const bs: BehaviorSubject<T> = target[privatePropertyKey];
          return bs.pipe(skip(1));
        },
        enumerable: true,
        configurable: true,
      },
      subjectDescriptor = { ...descriptor, value: $ },
      getterDescriptor = { ...descriptor, value: () => $.getValue() },
      setterDescriptor = { ...descriptor, value: (value: T) => $.next(value) };

    Object.defineProperties(target, {
      [name]: observableDescriptor,
      [privatePropertyKey]: subjectDescriptor,
      [`set${methodName}`]: setterDescriptor,
      [`get${methodName}`]: getterDescriptor,
    });
  };
}

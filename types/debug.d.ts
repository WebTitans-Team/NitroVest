declare module 'debug' {
  const debug: (namespace: string) => (...args: any[]) => void;
  export = debug;
}
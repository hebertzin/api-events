export interface Service<T> {
  invoke(data: T): Promise<T | void>;
}

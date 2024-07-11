export interface Service<T, R> {
  invoke(data: T): Promise<R>;
}

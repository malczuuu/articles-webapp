export interface Slice<T> {
  content: T[];
  _links: { self: string; next?: string };
}

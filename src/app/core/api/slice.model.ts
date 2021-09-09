export interface Slice<T> {
  content: T[];
  _links: { next: string };
}

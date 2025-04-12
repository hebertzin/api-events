export interface DeleteEvent {
  invoke(activity_id: string): Promise<void>;
}

export interface Todo {
  id: string;
  text: string;
  completed: boolean; // true = 已完成項目
  isEditing: boolean; // true = 編輯中
}

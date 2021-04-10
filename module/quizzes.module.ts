export interface QuizEntity {
  id: number;
  name: string;
  lang_a: string;
  lang_b: string;
  active: boolean;
  revision_number: number;
  created_at: string;
  updated_at: string;
  items_count: number;
  items?: (ItemsEntity)[] | null;
}
export interface ItemsEntity {
  id: number;
  item_a: string;
  item_b: string;
  group: number|string;
  position: number;
  quiz_id: number;
  revision_number: number;
}

export interface InstanceEntity {
  id: number;
  quiz_id: number;
  lang: string;
  num_questions: number;
  num_answers: number;
  group?: null;
  author_id?: null;
  position: number;
  data?: (DataEntity)[] | null;
  completed: boolean;
  revision_number: number;
  created_at: string;
  updated_at: string;
  answers_count: number;
}
export interface DataEntity {
  id: number;
  group: number;
  question: string;
  answers?: (AnswersEntity)[] | null;
}
export interface AnswersEntity {
  correct: boolean;
  value: string;
}

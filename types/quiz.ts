export interface IQuiz {
  id: string | number;
  title: string;
  description: string;
  categoryId: string | number;
  userId: string | number;
  createdAt: Date;
  updatedAt: Date;
}

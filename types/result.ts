export interface IResult {
  id: string | number;
  userId: string | number;
  quizzId: string | number;
  score: number;
  attemptedAt: Date;
}

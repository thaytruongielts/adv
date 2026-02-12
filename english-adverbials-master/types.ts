
export enum SessionType {
  ONLY_EVEN = 'Only & Even',
  TRUTH_VIEWPOINT = 'Truth & Viewpoint',
  COMMENT_ADVERBS = 'Comment Adverbs',
  LINKING_ADVERBS = 'Linking Adverbs'
}

export interface Question {
  id: number;
  session: SessionType;
  vietnamese: string;
  expectedEnglish: string[]; // Array of acceptable answers
  hint?: string;
  type: 'writing' | 'choice' | 'reorder';
}

export interface QuizState {
  currentSession: SessionType | null;
  answers: Record<number, string>;
  isSubmitted: boolean;
}

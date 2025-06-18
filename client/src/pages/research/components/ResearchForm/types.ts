export interface ResearchFormProps {
  onSubmit?: (prompt: string) => void;
  isLoading?: boolean;
}

export interface FormData {
  prompt: string;
} 
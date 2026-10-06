export interface TasksCardConfig {
  title: string;
  description: string;
  taskId: number;
  level: 'Easy' | 'Medium' | 'Hard';
  solved?: boolean;
}

export interface TasksCardProps {
  title: string;
  description: string;
  taskId: number;
  level: 'Easy' | 'Medium' | 'Hard';
  solved?: boolean;
  onToggleSolved?: () => void;
}

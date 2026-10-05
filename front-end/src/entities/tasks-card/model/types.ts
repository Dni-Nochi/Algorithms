export interface TasksCardConfig {
  title: string;
  description: string;
  taskId: number;
  solved?: boolean;
}

export interface TasksCardProps {
  title: string;
  description: string;
  taskId: number;
  solved?: boolean;
  propsFunction?: () => void;
}

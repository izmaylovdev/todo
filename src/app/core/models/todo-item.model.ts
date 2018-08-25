interface TodoItem {
    id: number;
    name: string;
    creation_date: string; // timestump
    due_date: string; // timestump
    start_date: string; // timestump
    is_completed: boolean;
    is_archived: boolean;
    estimated_effort: number;
    actual_effort: number;
    physical_progress: number;
    obj_status: string;
    description: string;
    project_id: number;
}

export default TodoItem;

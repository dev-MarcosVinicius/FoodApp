export type ListProps = {
    data: CategoryProps[];
    onCategorySelected: (category: CategoryProps) => void;
}

export type CategoryProps = {
    id: string;
    title: string;
    category: string;
}
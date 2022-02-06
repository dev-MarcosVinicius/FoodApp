export type ListCategoryProps = {
    data: CategoryProps[];
    onCategorySelected: (category: CategoryProps) => void;
}

export type CategoryProps = {
    id: string;
    title: string;
    category: string;
}

export type ListProductProps = {
    data: ProductProps[];
    onProductSelected: (product: ProductProps) => void;
}

export type ProductProps = {
    id: string;
    title: string;
    description: string;
    price: number;
}
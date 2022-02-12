export type ListCategoryProps = {
    data: CategoryProps[];
    onCategorySelected: (category: CategoryProps) => void;
}

export type CategoryProps = {
    _id: string;
    title: string;
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
    imageUrl?: string;
}
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

export type ListBagProps = {
    data: BagProps[];
    onProductSelected: (product: BagProps) => void;
}

export type ListProfileProps = {
    data: ProfileProps[];
    onItemSelected: (item: ProfileProps) => void;
}

export type ProductProps = {
    id: string;
    title: string;
    description: string;
    price: number;
    imageUrl?: string;
}

export type BagProps = {
    _id: string;
    title: string;
    price: number;
    imageUrl?: string;
    quantity: string;
}

export type ProfileProps = {
    _id: string;
    name: string;
}
import ItemDetails from "@/app/Components/ItemDetails";

export default function ItemsPage({ params }) {
    const { id } = params;
    return (
        <ItemDetails id={id} />
    );
}
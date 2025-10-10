import OrderDetails from "@/app/Components/OrderDetails";

export default function OrderDetailsPage({ params }) {
    const { id } = params;
    return (
        <OrderDetails id={id} />
    );
}
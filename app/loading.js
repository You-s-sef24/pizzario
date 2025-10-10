export default function Loading() {
    return (
        <div className="d-flex content justify-content-center align-items-center">
            <div className="spinner-border text-brown spinner-border-sm" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}
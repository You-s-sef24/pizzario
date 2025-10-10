import Link from "next/link";

export default function Footer() {
    return (
        <div className='bg-brown text-center text-white py-4'>
            <div className='mb-3'>
                <Link href="/about" className='text-white mx-2 text-decoration-none'>About Us</Link>
                <Link href="/contact" className='text-white mx-2 text-decoration-none'>Contact</Link>
                <Link href="/privacy" className='text-white mx-2 text-decoration-none'>Privacy Policy</Link>
            </div>
            <div className='mb-3'>
                <Link href="#" className='text-white mx-2 text-decoration-none'><i className="bi bi-facebook"></i></Link>
                <Link href="#" className='text-white mx-2 text-decoration-none'><i className="bi bi-twitter-x"></i></Link>
                <Link href="#" className='text-white mx-2 text-decoration-none'><i className="bi bi-instagram"></i></Link>
            </div>

            <p>
                &copy; 2024 Pizzario. All rights reserved.
            </p>
        </div>
    );
}
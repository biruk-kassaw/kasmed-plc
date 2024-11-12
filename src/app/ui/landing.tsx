/* eslint-disable @typescript-eslint/no-require-imports */
"use client";
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import '../public/static/css/vendor/bootstrap-icons/bootstrap-icons.css';
// import '../public/static/css/vendor/fontawesome-free/css/all.min.css';
// import '../public/static/css/vendor/glightbox/css/glightbox.min.css';
// import '../public/static/css/vendor/swiper/swiper-bundle.min.css';
// import '../public/static/css/main.css';

export default function Landing() {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
        require("bootstrap/dist/css/bootstrap.min.css");
        require("../public/static/css/main.css");
        require('../public/static/css/vendor/bootstrap-icons/bootstrap-icons.css');
        require('../public/static/css/vendor/fontawesome-free/css/all.min.css');
        require('../public/static/css/vendor/glightbox/css/glightbox.min.css');
        require('../public/static/css/vendor/swiper/swiper-bundle.min.css');
        // Redirect only if we are on the root path (e.g., '/')
        if (pathname === '/') {
            router.push('/home');
        }
    }, [pathname, router]);

    return (
        <>
        </>
    );
}

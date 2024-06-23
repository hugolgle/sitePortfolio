import { useEffect } from 'react';
import './footer.scss';

export default function Footer() {

    return <>
        <footer>

            <div className="networks">
                <a href="https://github.com/Hugolgle" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
            </div>
            <p>© 2024 Hugo L, Tous droits réservés.</p>

        </footer>
    </>;
}
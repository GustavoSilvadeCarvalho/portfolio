export function Header() {
    return (
        <header className="flex justify-between border">
            <div className="flex">
                <h3 className="p-3 pr-32 border">gustavo-silva</h3>
                <nav>
                    <ul className="flex">
                        <li className="border py-3 px-5">_hello</li>
                        <li className="border py-3 px-5">_about-me</li>
                        <li className="border py-3 px-5">_projects</li>
                    </ul>
                </nav>
            </div>
            <h3 className="border py-3 px-5">_contact-me</h3>
        </header>
    );
}
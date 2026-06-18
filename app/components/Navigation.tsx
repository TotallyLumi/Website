export default function Navigation() {
    return <>
        <nav className="flex justify-center gap-6 md:text-xl">
            <a className="hover:text-blue-300 transition" href="/">Home</a>
            <a className="hover:text-blue-300 transition" href="/projects">Projects</a>
            <a className="hover:text-blue-300 transition" href="/devices">Devices</a>
        </nav>
    </>
}
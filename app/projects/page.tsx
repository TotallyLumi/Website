export default function Projects() {
    return <>
        <h1 className="text-xl md:text-2xl">Projects</h1>
        <p>This is where all of my projects will live as a showcase of what I've done.</p>
        <br/>
        <section className="flex grid gap-4 justify-center">
            <div className="bg-gray-950 block max-w-sm p-6 border rounded-xl shadow-xs">
                <h5 className="mb-3 text-2xl tracking-tight text-heading leading-8">This website!</h5>
                <p className="text-body mb-6">
                    This very website you are viewing right now! <br/>
                    This website was built using a web framework called Next.js
                </p>
                <a href="https://totallylumi.top" target="_blank" className="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                    Vist project
                    <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
                </a>
            </div>
            <div className="bg-gray-950 block max-w-sm p-6 border rounded-xl shadow-xs">
                <h5 className="mb-3 text-2xl tracking-tight text-heading leading-8">Strokesync</h5>
                <p className="text-body mb-6">
                    Strokesync is a user friendly Golf tracker with selectable Course Pars and an easy to use tracker all built into one. <br/>
                    This project is currently being built with Android Studio using the Kotlin programming languauge.
                </p>
                <a href="#" className="text-xl md:text-2xl inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                    Not released!
                </a>
            </div>
        </section>
    </>
}
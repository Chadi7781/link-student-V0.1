
import Link from 'next/link'
export default function Home() {
    return(
        <>
        <section>
            <div className="min-h-screen px-4 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
              <div className="flex flex-col w-full mb-12 text-left lg:text-center">
              <img src="/assets/images/computer.png" alt="Ghost" height="90" width="90" className="text-center mx-auto transform scale-110 animate-pulse	"/>
              <h2 className="text-5xl font-bold max-w-[700px] mx-auto mt-8 text-left lg:text-center font-spooky animate-pulse sm:text-center">404 You've taken a wrong turn</h2>
                <p className="text-2xl max-w-xl mx-auto mt-4 text-left lg:text-center text-gray-500">Looks like you got lost in the party.</p>
                {/* <p className=" max-w-xl mx-auto mt-8 text-left lg:text-center">Did you try searching? Enter a keyword(s) in the search field above or try one of the links below.</p> */}
              </div>
              <div className="flex flex-row w-full">
                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                <Link href="/home">
                    <a class="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
    Go Home</a>
</Link>
                    {/* <h3>FAQs</h3>
                    <ul>
                        <li><p><a href="#">Provident cupiditate voluptatem</a></p></li>
                        <li><p><a href="#">Provident cupiditate voluptatem</a></p></li>
                        <li><p><a href="#">Provident cupiditate voluptatem</a></p></li>
                    </ul>
                </div> 
                <div className="divider divider-vertical"></div> 
                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                    <h3>Latest Blog Articles</h3>
                    <ul>
                        <li><p><a href="#">Provident cupiditate voluptatem</a></p></li>
                        <li><p><a href="#">Provident cupiditate voluptatem</a></p></li>
                        <li><p><a href="#">Provident cupiditate voluptatem</a></p></li>
                    </ul>
                </div>
              </div> */}
              </div>
              </div>
              </div>
              
            
          </section>
        </>
    )
}
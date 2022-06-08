import Head from "next/head";
import { Navbar } from "../ui";
interface Props{
    title?: string;
    children:any;
}

export const Layout: React.FC<Props> = ( {children, title}) =>{
    return(
        <>
        <Head>
            <title>{title || 'PokeApi'}</title>
            <meta name="author" content="Celi Víctor" />
            <meta name="description" content={`pokeapi ${title}`}/>
            <meta name="keywords" content={`pokeapi, pikapika, pikachu ${ title}`} />
        </Head>
      <Navbar/>
      {/* Navbar */}
        <main>
            {children}
        </main>
        </>
    );
}
import Image from "next/image";

const Footer = () => {
    return ( 
        <footer className="pt-5 text-center mt-5">
            <Image className="mt-5" width={300} height={200} src="/images/logomarca.svg" alt="Logomarca"/>
        </footer>
     );
}
 
export default Footer;
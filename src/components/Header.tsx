import Image from "next/image";

const Header = () => {
    return (
        <header className="text-center mt-1">
            <Image width={300} height={200} src="/images/logomarca.svg" alt="Logomarca"/>
        </header>
    );
}

export default Header;
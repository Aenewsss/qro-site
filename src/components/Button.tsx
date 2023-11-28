import { environments } from "@/environments";
import Link from "next/link";

const Button = () => {
    return ( 
        <Link target="_blank" href={environments.whatsAppLink} className="btn btn-main text-white fs-3 rounded-pill px-5 py-2 scale">
            <span className="px-4">Quero um Orçamento</span>
        </Link>
     );
}
 
export default Button;
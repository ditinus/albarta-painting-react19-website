import Image from "next/image";
import googleLogo from "@/public/googleLogo.svg";
import logo2 from "@/public/logo2.svg";
import logo3 from "@/public/logo3.svg";
import logo4 from "@/public/logo-4.png";
import logo5 from "@/public/logo-5.png";
import logo6 from "@/public/logo-6.png";

export default function TrustBadges() {
  return (
    <div className="bg-white py-4 px-9 rounded-2xl shadow-lg max-w-4xl mx-auto -mt-16 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-items-center">
        <div className="flex flex-col items-center">
          <Image
            src={googleLogo}
            alt="Google Reviews"
            width={120}
            height={50}
            className="h-auto"
          />
        </div>

        <div>
          <Image
            src={logo2}
            alt="BBB Accredited"
            width={120}
            height={50}
            className="h-auto"
          />
        </div>

        <div>
          <Image
            src={logo3}
            alt="Canadian Certified"
            width={120}
            height={50}
            className="h-auto"
          />
        </div>

        <div>
          <Image
            src={logo4}
            alt="Verified"
            width={80}
            height={50}
            className="h-auto"
          />
        </div>

        <div>
          <Image
            src={logo5}
            alt="Best of the Best"
            width={80}
            height={50}
            className="h-auto"
          />
        </div>
        <div>
          <Image
            src={logo6}
            alt="Best of the Best"
            width={80}
            height={40}
            className="h-auto"
          />
        </div>
      </div>
    </div>
  );
}

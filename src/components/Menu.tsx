'use client';
import { useRouter, usePathname } from "next/navigation";
import { IoBookOutline, IoDocumentTextOutline, IoPeopleOutline } from "react-icons/io5";
import { domainConfigs, navigationLinks } from '@/components/data/links';

const Menu = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleKomunitasClick = () => {
    if (typeof window !== 'undefined') {
      const config = domainConfigs.find(d => d.hostname === window.location.hostname);
      if (config?.openInNewTab) {
        window.open(config.url, '_blank');
      } else {
        router.push(navigationLinks.komunitas);
      }
    }
  };

  const isActive = (currentPath: string | null, path: string) =>
    currentPath?.startsWith(path);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 border-t border-gray-900 z-50">
      <nav className="flex justify-around max-w-md mx-auto">
        <button
          onClick={() => router.push(navigationLinks.home)}
          className={`flex flex-col items-center p-4 flex-1 ${
            isActive(pathname, navigationLinks.home)
              ? "text-purple-500"
              : "text-gray-500 hover:text-purple-500"
          }`}
        >
          <IoBookOutline className="text-xl mb-1" />
          <span className="text-xs">MODUL</span>
        </button>
        <button
          onClick={() => router.push(navigationLinks.research)}
          className={`flex flex-col items-center p-4 flex-1 ${
            isActive(pathname, navigationLinks.research)
              ? "text-blue-500"
              : "text-gray-500 hover:text-blue-500"
          }`}
        >
          <IoDocumentTextOutline className="text-xl mb-1" />
          <span className="text-xs">RESEARCH</span>
        </button>
        <button
          onClick={handleKomunitasClick}
          className={`flex flex-col items-center p-4 flex-1 ${
            isActive(pathname, navigationLinks.komunitas)
              ? "text-green-500"
              : "text-gray-500 hover:text-green-500"
          }`}
        >
          <IoBookOutline className="text-xl mb-1" />
          <span className="text-xs">KOMUNITAS</span>
        </button>
      </nav>
    </div>
  );
};

export default Menu;

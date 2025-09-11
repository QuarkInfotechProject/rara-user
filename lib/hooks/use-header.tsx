import { usePathname } from "next/navigation";

const TRANSPARENT_PATHS = new Set(["/"]);

function useHeader() {
  const pathname = usePathname();
  const isTransparent = TRANSPARENT_PATHS.has(pathname);

  return {
    isTransparent,
  };
}

export default useHeader;

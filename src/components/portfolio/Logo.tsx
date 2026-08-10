import logoAsset from "@/assets/aroman-logo.png.asset.json";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return <img src={logoAsset.url} alt="Aroman EMETSHU" className={className} loading="lazy" />;
}

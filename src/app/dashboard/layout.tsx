import { hover_tw_css } from "@/components/styleConstants";
import { Menu } from "lucide-react";
import Link from "next/link";

type DrawerHeaderProps = React.HTMLProps<HTMLUListElement> & {};
const DrawerHeaderTop: React.FC<DrawerHeaderProps> = ({ ...props }) => {
  return (
    <ul {...props}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/dashboard/persona">Persona</Link>
      </li>
      <li>
        <Link href="/dashboard/gather">Gather</Link>
      </li>
      <li>
        <Link href="/dashboard/playground">Playground</Link>
      </li>
      <li>
        <Link href="/dashboard/api-dashboard">API</Link>
      </li>
    </ul>
  );
};

type DrawerFooterProps = React.HTMLProps<HTMLDivElement> & {};
const DrawerFooter: React.FC<DrawerFooterProps> = ({ ...props }) => {
  return <div {...props}>User Profile</div>;
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="drawer">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="flex flex-col md:flex-row">
          <label
            htmlFor="dashboard-drawer"
            className="drawer-button cursor-pointer max-h-[50px] bg-zinc-100 dark:bg-zinc-900 rounded-md"
            aria-label="open sidebar"
          >
            <Menu size={50} className={hover_tw_css} />
          </label>
          <div className="pt-4 md:pt-0">{children}</div>
        </div>
      </div>
      <div className="drawer-side z-20">
        <label
          htmlFor="dashboard-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="justify-between menu w-80 min-h-full dark:bg-slate-900 bg-stone-100 text-xl">
          <li>
            <DrawerHeaderTop />
          </li>
          <li>
            <DrawerFooter />
          </li>
        </ul>
      </div>
    </div>
  );
}
